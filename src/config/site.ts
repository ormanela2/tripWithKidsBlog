/**
 * Every public ID, link and contact detail used by the site lives here, once.
 * Pages and components import from this file; nothing is copied into a page.
 * These values are public by nature (browsers see them). Anything secret goes in .env, never here.
 * Inventory and open items: KEYS.md.
 */
export const site = {
  name: "מתי טסים",
  url: "https://mataytasim.co.il",
  locale: "he-IL",
  dir: "rtl",

  contact: {
    email: "info@mataytasim.co.il",
    /** WhatsApp number in international format, digits only. */
    whatsapp: "972546758145",
  },

  social: {
    facebook: "https://www.facebook.com/profile.php?id=61582155200249",
  },

  /** Main navigation, used by the desktop menu, the mobile menu and the footer. */
  nav: [
    { href: "/tips.html", label: "טיפים וכלים", sub: "מרכז תכנון הטיול", icon: "tips" },
    { href: "/destinations.html", label: "יעדים", sub: "לאן הכי מתאים לטוס", icon: "pin" },
    { href: "/packages.html", label: "חבילות תכנון", sub: "תכנון מותאם משפחות", icon: "packages", badge: "חבילה אחת" },
    { href: "/about.html", label: "אודות", icon: "info" },
  ],
  community: { href: "/tips.html#newsletter", label: "מצטרפים לקהילה", sub: "עדכונים וטיפים מהשטח" },

  footer: {
    tagline: "טיולים שמתחילים בשיחה אחת, ומסתיימים בזכרון שהילדים שלך יספרו לנכדים שלך.",
    columns: [
      { title: "ניווט", links: [["/services.html", "דף הבית"], ["/tips.html", "טיפים"], ["/destinations.html", "יעדים"], ["/about.html", "אודות"]] },
      { title: "יעדים פופולריים", links: [["/slovakia.html", "סלובקיה עם ילדים"], ["/warsaw.html", "פולין - וורשה עם ילדים"], ["/romania.html", "רומניה עם ילדים"], ["/austria.html", "אוסטריה עם ילדים"]], more: ["/destinations.html", "לכל היעדים ←"] },
      { title: "שירותים", links: [["/packages.html", "חבילות תכנון"], ["/weather.html", "מזג אוויר"], ["/tips.html#newsletter", "צור קשר"]] },
    ],
  },

  analytics: {
    /** Plausible site script (the newer setup configured in the Plausible dashboard; was on 25 live pages). */
    plausibleScript: "pa-nFr2Tp1qjwr_0EXB175vP",
    /** Page-specific newsletter pop-up events the live pages sent, in addition to Newsletter-Open-Nav / Newsletter-Submit. */
    newsletterEvents: {
      services: { open: "Services-Newsletter-Popup-Open", close: "Services-Newsletter-Popup-Close-X", submit: "Services-Newsletter-Popup-CTA-Click", facebook: "Services-Newsletter-Popup-Facebook-Click" },
      quiz: { open: "Quiz-Newsletter-Popup-Shown", submit: "Quiz-Newsletter-Submit" },
    } as Record<string, { open?: string; close?: string; submit?: string; facebook?: string }>,
  },

  seo: {
    ogLocale: "he_IL",
    /** 1200x630 share image used when a page has none of its own. */
    defaultImage: "/og-image.png",
    logo: "/logo.png",
    /** Pages left out of the sitemap (redirects, test pages). Paths as served, ".html" form. */
    sitemapExclude: ["/404.html"],
    /** Public files that are not pages but should be in the sitemap (added as they move into public/). */
    sitemapExtra: ["/MatayTasim-Budapest-Countdown.pdf", "/MatayTasim-Slovakia-Countdown.pdf"] as string[],
  },

  partners: {
    getYourGuide: { partnerId: "GL1NS3P" },
    /** Stay22 "Let me allez" partner id, as set on the live guide pages. */
    stay22: { partnerId: "69c0491c51844e7588a7882e" as string | null },
    esim: {
      airalo: "https://airalo.tpk.mx/jjDTppVR",
      saily: "https://saily.tpk.mx/O4VLYoZD",
      yesim: "https://yesim.tpk.mx/YQNYuYeq",
    },
  },

  maps: {
    /**
     * Free CARTO basemaps key (request at carto.com/basemaps/apikey; no account needed). Since 25 Sep 2026 CARTO tiles
     * without a key show "API KEY REQUIRED". With a key: CARTO Voyager (the look the live site was built with).
     * Without: OpenStreetMap's own tiles (free, credit required). Free commercial use: up to 1M tile requests a month.
     */
    cartoKey: null as string | null,
  },

  forms: {
    /**
     * Formspree form codes (the part after formspree.io/f/). Never an email address in a page.
     * Owner decision 28 Nov 2026: the website forms (newsletter, contact, packages, theme-park plan, waiting list)
     * send to the trip questionnaire form; each keeps its own subject line. To split later, create a form in
     * Formspree and change "website" here.
     */
    website: "mwvrkdon",
    questionnaire: "mwvrkdon",
  },

} as const;

/** Map tile address and credit for Leaflet ("voyager" = the colourful CARTO style, "light" = the pale one). */
export const mapTiles = (style: "voyager" | "light" = "voyager") => {
  const key = site.maps.cartoKey;
  if (key) {
    const path = style === "light" ? "light_all" : "rastertiles/voyager";
    return { url: `https://{s}.basemaps.cartocdn.com/${path}/{z}/{x}/{y}{r}.png?key=${key}`, attribution: "© OpenStreetMap © CARTO" };
  }
  return { url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png", attribution: "© OpenStreetMap contributors" };
};

/** Formspree address of a form by name (see forms above). */
export const formAction = (name: keyof typeof site.forms) => `https://formspree.io/f/${site.forms[name]}`;

export const whatsappLink = (text?: string) => `https://wa.me/${site.contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
