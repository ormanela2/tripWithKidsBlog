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

  analytics: {
    plausibleDomain: "mataytasim.co.il",
  },

  partners: {
    getYourGuide: { partnerId: "GL1NS3P" },
    /** TODO(owner): Stay22 partner id is missing on the live site (empty lmaID). Add it here. */
    stay22: { partnerId: null as string | null },
    esim: {
      airalo: "https://airalo.tpk.mx/jjDTppVR",
      saily: "https://saily.tpk.mx/O4VLYoZD",
      yesim: "https://yesim.tpk.mx/YQNYuYeq",
    },
  },

  forms: {
    /** TODO(owner): decide which forms stay; one Formspree id per form, no email addresses in pages. */
    provider: "formspree" as const,
    ids: {} as Record<string, string>,
  },

  /** Google Maps is not used for now (owner decision, 27 Nov 2026). Maps use Leaflet; places link out to Google Maps without a key. */
  googleMaps: null,
} as const;

/** "Open in Google Maps" without any API key. */
export const googleMapsLink = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
export const whatsappLink = (text?: string) => `https://wa.me/${site.contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
