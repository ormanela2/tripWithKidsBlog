/**
 * mataytasim.co.il — reduce Google Maps JS + Places calls on static HTML pages.
 * - Loads maps.googleapis.com only when needed (thumbs / place sheet / tooltips miss cache).
 * - Shared localStorage cache across destination pages (45d).
 * - Thumbnail Place fetches: IntersectionObserver (viewport-near only).
 * - Separate thumb-size cache entries vs full place-sheet payloads.
 */
(function (global) {
  "use strict";

  var CACHE_VER = 1;
  var CACHE_PREFIX = "matayStaticPlace:v1:";
  var THUMB_PREFIX = "matayStaticPlaceT:v1:";
  var CACHE_MAX_MS = 45 * 24 * 60 * 60 * 1000;
  var LEGACY_PREFIXES = ["austriaPlaceSheet:v1:", "polandSouthPlaceSheet:v1:", "budapestPlaceSheet:v1:"];

  var mapsLoading = false;
  var mapsReadyCbs = [];

  function fullKey(placeId) {
    return CACHE_PREFIX + String(placeId || "");
  }

  function thumbStorageKey(placeId, w, h) {
    return THUMB_PREFIX + String(w || 0) + "x" + String(h || 0) + ":" + String(placeId || "");
  }

  function readWrap(raw) {
    try {
      if (!raw) return null;
      var wrap = JSON.parse(raw);
      if (!wrap || wrap.v !== CACHE_VER || !wrap.savedAt || !wrap.payload) return null;
      if (Date.now() - wrap.savedAt > CACHE_MAX_MS) return null;
      return wrap.payload;
    } catch (e) {
      return null;
    }
  }

  function readPlacePayload(placeId) {
    var p = readWrap(global.localStorage.getItem(fullKey(placeId)));
    if (p) return p;
    for (var i = 0; i < LEGACY_PREFIXES.length; i++) {
      var lp = readWrap(global.localStorage.getItem(LEGACY_PREFIXES[i] + placeId));
      if (lp) {
        writeFull(placeId, lp);
        try {
          global.localStorage.removeItem(LEGACY_PREFIXES[i] + placeId);
        } catch (e) {}
        return lp;
      }
    }
    return null;
  }

  function readThumbPayload(placeId, w, h) {
    return readWrap(global.localStorage.getItem(thumbStorageKey(placeId, w, h)));
  }

  function writeFull(placeId, payload) {
    try {
      global.localStorage.setItem(
        fullKey(placeId),
        JSON.stringify({ v: CACHE_VER, savedAt: Date.now(), payload: payload })
      );
    } catch (e) {}
  }

  function writeThumbOnly(placeId, w, h, uri) {
    if (!uri) return;
    try {
      global.localStorage.setItem(
        thumbStorageKey(placeId, w, h),
        JSON.stringify({ v: CACHE_VER, savedAt: Date.now(), payload: { photoURI: uri } })
      );
    } catch (e) {}
  }

  function bestThumbUri(placeId, w, h) {
    var t = readThumbPayload(placeId, w, h);
    if (t && t.photoURI) return t.photoURI;
    var full = readPlacePayload(placeId);
    if (full && full.photoURI) return full.photoURI;
    return null;
  }

  function ensureGoogleMaps(callback) {
    if (!callback) return;
    if (global.google && global.google.maps) {
      callback();
      return;
    }
    mapsReadyCbs.push(callback);
    if (mapsLoading) return;
    var k = String(global.GOOGLE_MAPS_API_KEY || "").trim();
    if (!k) {
      mapsReadyCbs.length = 0;
      return;
    }
    mapsLoading = true;
    var s = global.document.createElement("script");
    s.async = true;
    s.src =
      "https://maps.googleapis.com/maps/api/js?key=" +
      encodeURIComponent(k) +
      "&libraries=places&v=quarterly&language=iw";
    s.onload = function () {
      mapsLoading = false;
      var cbs = mapsReadyCbs.slice();
      mapsReadyCbs.length = 0;
      cbs.forEach(function (fn) {
        try {
          fn();
        } catch (e) {}
      });
    };
    s.onerror = function () {
      mapsLoading = false;
      mapsReadyCbs.length = 0;
    };
    global.document.head.appendChild(s);
  }

  /**
   * @param {{ root?: Element|Document, selector?: string, maxWidth?: number, maxHeight?: number, rootMargin?: string }} options
   */
  function hydrateGooglePlaceThumbs(options) {
    options = options || {};
    var root = options.root || global.document;
    var selector = options.selector || "img[data-google-place-id]";
    var maxW = options.maxWidth || 480;
    var maxH = options.maxHeight || 360;
    var rootMargin = options.rootMargin || "220px";

    var nodes = root.querySelectorAll(selector);
    var jobs = [];
    for (var i = 0; i < nodes.length; i++) {
      var img = nodes[i];
      var pid = (img.getAttribute("data-google-place-id") || "").trim();
      if (!pid) continue;
      var cached = bestThumbUri(pid, maxW, maxH);
      if (cached) {
        img.src = cached;
        continue;
      }
      jobs.push({ img: img, placeId: pid });
    }
    if (!jobs.length) return;

    ensureGoogleMaps(function () {
      global.google.maps.importLibrary("places").then(function (placesLib) {
        var Place = placesLib.Place;

        function runJob(job) {
          if (job._done) return;
          job._done = true;
          var c = bestThumbUri(job.placeId, maxW, maxH);
          if (c) {
            job.img.src = c;
            return;
          }
          var place = new Place({ id: job.placeId });
          place
            .fetchFields({ fields: ["photos"] })
            .then(function () {
              if (!place.photos || !place.photos.length || typeof place.photos[0].getURI !== "function") return;
              try {
                var uri = place.photos[0].getURI({ maxWidth: maxW, maxHeight: maxH });
                if (uri) {
                  job.img.src = uri;
                  writeThumbOnly(job.placeId, maxW, maxH, uri);
                }
              } catch (e) {}
            })
            .catch(function () {});
        }

        if ("IntersectionObserver" in global) {
          var io = new IntersectionObserver(
            function (entries) {
              for (var j = 0; j < entries.length; j++) {
                if (!entries[j].isIntersecting) continue;
                var el = entries[j].target;
                io.unobserve(el);
                var job = null;
                for (var k = 0; k < jobs.length; k++) {
                  if (jobs[k].img === el) {
                    job = jobs[k];
                    break;
                  }
                }
                if (job) runJob(job);
              }
            },
            { root: null, rootMargin: rootMargin, threshold: 0.01 }
          );
          for (var j = 0; j < jobs.length; j++) {
            io.observe(jobs[j].img);
          }
        } else {
          for (var j = 0; j < jobs.length; j++) {
            runJob(jobs[j]);
          }
        }
      });
    });
  }

  /**
   * @param {{ root?: Element|Document, selector?: string, fields?: string[], maxWidth?: number, maxHeight?: number, rootMargin?: string, language?: string, onApplied?: function(Element, Object): void }} options
   */
  function hydratePlaceIdImages(options) {
    options = options || {};
    var root = options.root || global.document;
    var selector = options.selector || "[data-place-id]";
    var fields = options.fields || ["photos"];
    var maxW = options.maxWidth || 720;
    var maxH = options.maxHeight || 480;
    var rootMargin = options.rootMargin || "240px";

    var nodes = root.querySelectorAll(selector);
    var jobs = [];
    for (var i = 0; i < nodes.length; i++) {
      var img = nodes[i];
      var pid = (img.getAttribute("data-place-id") || "").trim();
      if (!pid) continue;
      var t = readThumbPayload(pid, maxW, maxH);
      if (t && t.photoURI) {
        img.src = t.photoURI;
        if (options.onApplied) options.onApplied(img, t);
        continue;
      }
      var full = readPlacePayload(pid);
      if (full && full.photoURI) {
        img.src = full.photoURI;
        if (options.onApplied) options.onApplied(img, full);
        continue;
      }
      jobs.push({ img: img, placeId: pid });
    }
    if (!jobs.length) return;

    ensureGoogleMaps(function () {
      global.google.maps.importLibrary("places").then(function (placesLib) {
        var Place = placesLib.Place;

        function runJob(job) {
          if (job._done) return;
          job._done = true;
          var t2 = readThumbPayload(job.placeId, maxW, maxH);
          if (t2 && t2.photoURI) {
            job.img.src = t2.photoURI;
            if (options.onApplied) options.onApplied(job.img, t2);
            return;
          }
          var place = new Place({ id: job.placeId, requestedLanguage: options.language || "he" });
          place
            .fetchFields({ fields: fields })
            .then(function () {
              var uri = null;
              if (place.photos && place.photos.length && typeof place.photos[0].getURI === "function") {
                try {
                  uri = place.photos[0].getURI({ maxWidth: maxW, maxHeight: maxH }) || null;
                } catch (e) {}
              }
              var payload = { photoURI: uri };
              if (place.displayName != null) {
                var dn = place.displayName;
                payload.displayName = typeof dn === "string" ? dn : dn && dn.text ? dn.text : "";
              }
              if (uri) {
                job.img.src = uri;
                writeThumbOnly(job.placeId, maxW, maxH, uri);
              }
              if (options.onApplied) options.onApplied(job.img, payload);
            })
            .catch(function () {});
        }

        if ("IntersectionObserver" in global) {
          var io = new IntersectionObserver(
            function (entries) {
              for (var j = 0; j < entries.length; j++) {
                if (!entries[j].isIntersecting) continue;
                var el = entries[j].target;
                io.unobserve(el);
                var job = null;
                for (var k = 0; k < jobs.length; k++) {
                  if (jobs[k].img === el) {
                    job = jobs[k];
                    break;
                  }
                }
                if (job) runJob(job);
              }
            },
            { root: null, rootMargin: rootMargin, threshold: 0.01 }
          );
          for (var j = 0; j < jobs.length; j++) {
            io.observe(jobs[j].img);
          }
        } else {
          for (var j = 0; j < jobs.length; j++) {
            runJob(jobs[j]);
          }
        }
      });
    });
  }

  var TP_PREFIX = "matayThemeParkGoogle:v1:";
  function tpKey(id) {
    return TP_PREFIX + String(id || "");
  }

  function readThemeParkGoogle(id) {
    return readWrap(global.localStorage.getItem(tpKey(id)));
  }

  function writeThemeParkGoogle(id, payload) {
    try {
      global.localStorage.setItem(
        tpKey(id),
        JSON.stringify({ v: CACHE_VER, savedAt: Date.now(), payload: payload })
      );
    } catch (e) {}
  }

  global.MatayGmapsFrugal = {
    CACHE_MAX_MS: CACHE_MAX_MS,
    readPlacePayload: readPlacePayload,
    writeFull: writeFull,
    readThumbPayload: readThumbPayload,
    writeThumbOnly: writeThumbOnly,
    bestThumbUri: bestThumbUri,
    ensureGoogleMaps: ensureGoogleMaps,
    hydrateGooglePlaceThumbs: hydrateGooglePlaceThumbs,
    hydratePlaceIdImages: hydratePlaceIdImages,
    readThemeParkGoogle: readThemeParkGoogle,
    writeThemeParkGoogle: writeThemeParkGoogle
  };
})(typeof window !== "undefined" ? window : this);
