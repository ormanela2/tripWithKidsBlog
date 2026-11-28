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
    plausibleDomain: "mataytasim.co.il",
  },

  seo: {
    ogLocale: "he_IL",
    /** 1200x630 share image used when a page has none of its own. */
    defaultImage: "/og-image.png",
    logo: "/logo.png",
    /** Pages left out of the sitemap (redirects, test pages). Paths as served, ".html" form. */
    sitemapExclude: ["/layout-check.html", "/404.html"],
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

/** Formspree address of a form by name (see forms above). */
export const formAction = (name: keyof typeof site.forms) => `https://formspree.io/f/${site.forms[name]}`;

export const whatsappLink = (text?: string) => `https://wa.me/${site.contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
