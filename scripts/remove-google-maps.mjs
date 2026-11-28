/**
 * Removes Google Maps from the carried-over pages (owner decision, 28 Nov 2026: no mention of Google Maps on the site).
 *   node scripts/remove-google-maps.mjs
 * Visible texts are reworded without changing their meaning; Google-only scripts are dropped;
 * links to Google Maps become empty and hidden (their scripts keep working).
 */
import { readFileSync, writeFileSync } from "node:fs";

const changes = [];
const editText = (file, pairs) => {
  let s = readFileSync(file, "utf8");
  for (const [from, to, why] of pairs) {
    if (!s.includes(from)) throw new Error(`${file}: text not found (${why})`);
    s = s.split(from).join(to);
    changes.push(`${file}: ${why}`);
  }
  writeFileSync(file, s);
};
const editScripts = (file, fn) => {
  const list = JSON.parse(readFileSync(file, "utf8"));
  const out = fn(list);
  writeFileSync(file, JSON.stringify(out, null, 1));
};

// --- Zakopane (poland-south) ---
editText("src/carried/poland-south/body.html", [
  [`<p style="font-size:14px;color:#666;line-height:1.6;margin:-8px 0 18px;">לחצו על תמונת המקום לפרטים מ-Google Maps (שעות פתיחה, דירוג, קישור לניווט).</p>`, "", "instruction line about Google Maps removed"],
  ["פתיחה ב-Google Maps</a>", "</a>", "\"open in Google Maps\" button label removed"],
]);
// --- Austria ---
editText("src/carried/austria/body.html", [["פתיחה ב-Google Maps</a>", "</a>", "\"open in Google Maps\" button label removed"]]);
// The emptied link stays in the page (scripts set its address) but is hidden and points nowhere.
for (const f of ["src/carried/poland-south/body.html", "src/carried/austria/body.html"]) {
  let s = readFileSync(f, "utf8");
  const before = s;
  s = s.replace(/<a([^>]*\bid="placeSheetMapsLink"[^>]*)>([\s\S]*?)<\/a>/, (_m, attrs) => `<a${attrs.replace(/\shref="[^"]*"/, "")} hidden aria-hidden="true" tabindex="-1"></a>`);
  if (s === before) throw new Error(`${f}: placeSheetMapsLink not found`);
  writeFileSync(f, s);
  changes.push(`${f}: Google Maps link element emptied and hidden`);
}
for (const f of ["src/carried/poland-south/scripts.json", "src/carried/austria/scripts.json"]) {
  editScripts(f, list => list.map(x => (x.code ? { code: x.code.replace(/'https:\/\/www\.google\.com\/maps\?q=' \+ [^;]+;/g, "'#';").replace(/https:\/\/www\.google\.com\/maps[^'"`\s]*/g, "#") } : x)));
  changes.push(`${f}: Google Maps addresses in scripts replaced with '#'`);
}

// --- Budapest ---
editText("src/carried/budapest/body.html", [
  ["למרות ש-Google Maps עובד מצוין בבודפשט", "למרות שאפליקציות הניווט עובדות מצוין בבודפשט", "transport sentence reworded"],
]);
{
  const f = "src/carried/budapest/body.html";
  let s = readFileSync(f, "utf8");
  const before = s;
  s = s.replace(/(<p class="attractions-grid__attrib">)[\s\S]*?(<\/p>)/, "$1תמונות ממוזערות: Wikimedia Commons.$2");
  if (s === before) throw new Error("budapest attrib not found");
  writeFileSync(f, s);
  changes.push(`${f}: photo note now names Wikimedia Commons only`);
}

// --- Planning page (text inside a script) ---
editScripts("src/carried/planning/scripts.json", list => list.map(x => {
  if (!x.code || !x.code.includes("ב-Google Maps")) return x;
  changes.push("src/carried/planning/scripts.json: \"places you marked in Google Maps\" reworded");
  return { code: x.code.replace("רשימת המקומות שסימנתם ב-Google Maps", "רשימת המקומות ששמרתם") };
}));

// --- South Czechia: a script whose only job was loading Google photos ---
editScripts("src/carried/czechia/scripts.json", list => list.filter(x => {
  const googleOnly = x.code && /MatayGmapsFrugal/.test(x.code) && x.code.length < 4000 && /hydrateGooglePlaceThumbs/.test(x.code);
  if (googleOnly) changes.push("src/carried/czechia/scripts.json: Google-photo script dropped");
  return !googleOnly;
}));

// --- Site settings: the Google Maps link helper is no longer used ---
editText("src/config/site.ts", [
  ["  /** Google Maps is not used for now (owner decision, 27 Nov 2026). Maps use Leaflet; places link out to Google Maps without a key. */\n  googleMaps: null,\n", "", "googleMaps setting removed"],
  ["/** \"Open in Google Maps\" without any API key. */\nexport const googleMapsLink = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;\n", "", "googleMapsLink helper removed"],
]);

console.log(changes.join("\n"));
