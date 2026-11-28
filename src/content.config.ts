/**
 * Content model for destination guides.
 * One guide = one file in src/content/guides/<slug>.md (published at /<slug>.html).
 * Frontmatter holds the structured parts (trip facts, day-by-day plan, places, tips, phrasebook);
 * the Markdown body is the personal "why go" story.
 * Rendered in the new guide design (StructuredGuide, approved 2026-11-28); the fields below carry
 * every text and colour those pages show. The build fails with a clear message when a guide breaks this shape.
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const text = z.string().trim().min(1);
const hex = z.string().regex(/^#[0-9a-fA-F]{6}$/);
const coords = z.object({ lat: z.number().min(-90).max(90), lng: z.number().min(-180).max(180) });

const stop = z.object({
  /** "12:55", "בוקר", "אחה\"צ"... as written in the guide. */
  time: text.optional(),
  title: text,
  text: text.optional(),
});

const photo = (image: () => z.ZodType) => z.object({
  image: image(),
  alt: text,
  /** Required for photos that are not our own (Wikimedia Commons etc.): shown under the route strip. */
  credit: z.object({ author: text, license: text, url: z.url() }).optional(),
});

const day = (image: () => z.ZodType) => z.object({
  /** One photo for the day: route strip tile + day card thumbnail. */
  photo: photo(image).optional(),
  title: text,
  icon: text.optional(),
  /** "29.04 שלישי": label beside the timeline. */
  date: text.optional(),
  where: text.optional(),
  /** Short label on the card, e.g. "יום הגעה", "❤️ הכי שווה". */
  badge: text.optional(),
  /** Colour band at the top of the card: [from, to]. Defaults to the guide colour. */
  band: z.tuple([z.string(), z.string()]).optional(),
  /** Badge colours (CSS values), e.g. { bg: "rgba(233,30,99,0.12)", color: "#c2185b" }. */
  badgeStyle: z.object({ bg: text, color: text }).optional(),
  /** Point on the route map. */
  map: coords.extend({
    /** Popup title. */
    label: text.optional(),
    /** Short name in the popup header. */
    short: text.optional(),
    /** Short date in the popup, e.g. "29.4". */
    date: text.optional(),
    color: hex.optional(),
  }).optional(),
  stops: z.array(stop).default([]),
  tips: z.array(text).default([]),
  stay: text.optional(),
});

const place = z.object({
  icon: text.optional(),
  name: text,
  text: text.optional(),
  /** Optional link: an official site, a page on this site, or a partner link. */
  url: z.url().or(z.string().startsWith("/")).optional(),
  /** True when url is an affiliate link: the page shows the partner disclosure next to it. */
  partner: z.boolean().default(false),
});

const phrase = z.object({ he: text, say: text, local: text });

/** A section heading: icon + title as on the page, and the shorter label used in the contents box. */
const heading = z.object({ icon: text.optional(), title: text, toc: text.optional() });

const guides = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/guides" }),
  schema: ({ image }) =>
    z.object({
      /** H1 on the page. */
      title: text,
      /** <title> and share title; falls back to `title`. */
      seoTitle: text.optional(),
      description: text.max(200),
      /** Short place name for the breadcrumb, e.g. "אתונה". */
      name: text,
      /** ISO country code; picks the flag and the "good to know" tips (src/data/good-to-know.json). */
      country: z.string().regex(/^[A-Z]{2}$/),
      /** Matching id in src/data/destinations.ts (hub card), when there is one. */
      hub: z.string().optional(),
      /** Destination colours: accents, first and default day bands. */
      color: hex.default("#1A6B72"),
      colorDark: hex.optional(),

      hero: z.object({
        image: image(),
        /** The hero image is decorative (a static map or photo behind the title). */
        alt: z.string().default(""),
        subtitle: text.optional(),
        /** Show "static map · © OpenStreetMap" under the hero (when the image is an OSM map). */
        osmCredit: z.boolean().default(false),
      }),

      /** The trip this guide is based on: badges in the hero. */
      trip: z.object({
        dates: text.optional(),
        days: z.number().int().positive(),
        base: text.optional(),
        flight: text.optional(),
      }),
      /** 1-12. Used for the hub and search data; not shown on the live guide. */
      bestMonths: z.array(z.number().int().min(1).max(12)).default([]),
      kidsAges: text.optional(),
      highlights: z.array(text).default([]),

      /** Section headings as shown on the page. */
      headings: z.object({
        intro: heading.default({ icon: "💡", title: "למה לטוס עם ילדים?" }),
        map: heading.default({ icon: "🗺️", title: "המסלול על המפה" }),
        itinerary: heading.default({ icon: "🗓️", title: "מסלול יום-יום" }),
        stays: heading.default({ icon: "🏨", title: "המלצות לינה" }),
        attractions: heading.default({ icon: "🏛️", title: "מה לעשות עם ילדים" }),
        tips: heading.default({ icon: "💡", title: "טיפים חשובים" }),
      }).prefault({}),

      /** Route map view; the points come from days[].map. */
      map: z.object({ center: coords, zoom: z.number().min(1).max(18) }).optional(),

      days: z.array(day(image)).default([]),
      staysIntro: text.optional(),
      stays: z.array(place).default([]),
      /** "What to do with kids". */
      attractions: z.array(place).default([]),
      /** Tips; `group` puts them under a heading (e.g. "לוגיסטיקה", "כסף"). */
      tips: z.array(z.object({ icon: text.optional(), text, group: text.optional() })).default([]),
      /** Theme parks map for this country (embeds /theme-parks.html?cc=XX&embed=map). */
      themeParks: z.object({ cc: z.string().regex(/^[A-Z]{2}$/), intro: text.optional() }).optional(),
      /** Hotels near the airport: short note + link (usually /airport-hotels.html#...). */
      airport: z.object({ text, url: z.url().or(z.string().startsWith("/")), label: text }).optional(),
      /** Extra useful links shown with the stays (events, local search...). */
      links: z.array(z.object({ icon: text.optional(), title: text, text: text.optional(), url: z.url().or(z.string().startsWith("/")), label: text.default("לפרטים ←"), partner: z.boolean().default(false) })).default([]),
      /** Our own trip photos (gallery with a full-screen view). */
      gallery: z.array(z.object({ image: image(), alt: text })).default([]),
      phrasebook: z
        .object({
          title: text,
          groups: z.array(z.object({ id: z.string().regex(/^[a-z]+$/), name: text, phrases: z.array(phrase).default([]), note: text.optional() })).min(1),
        })
        .optional(),
      faq: z.array(z.object({ q: text, a: text })).default([]),

      /** The teal card in the sidebar. */
      sidebar: z.object({ title: text, text }).optional(),

      partners: z
        .object({
          /** Stay22 hotel-map embed URL (https://stay22.com/embed/...). */
          staysMap: z.url().startsWith("https://stay22.com/embed/").optional(),
        })
        .prefault({}),

      datePublished: z.coerce.date().optional(),
      dateModified: z.coerce.date().optional(),
      draft: z.boolean().default(false),
    }),
});

/** Options shared by every page carried over as it is (W6-W8). */
const carriedFields = ({ image }: { image: () => z.ZodType }) => ({
  title: text,
  seoTitle: text.optional(),
  /** Some live pages have no description; add one when the page is next edited. */
  description: text.max(200).optional(),
  name: text.optional(),
  /** Share image (1200x630 crop); the site default when missing. */
  shareImage: image().optional(),
  /** Load Microsoft Clarity, as the live page does. */
  clarity: z.boolean().default(false),
  /** Load the Stay22 "Let me allez" script, as the live page does. */
  stay22: z.boolean().default(false),
  /** Bottom-right "all destinations" + "back to top" buttons, as the live page has. */
  floatNav: z.boolean().default(false),
  /** Reading-progress plane in the menu bar, as the live page has. */
  readProgress: z.boolean().default(false),
  /** The page has affiliate links: show the partner disclosure at the end of the page. */
  partnerNote: z.boolean().default(false),
  draft: z.boolean().default(false),
});

/**
 * Guides carried over as they are (W6): body, styles and scripts live in src/carried/<slug>/,
 * written by scripts/carry-over.mjs. Only the facts the shared layout needs are here.
 */
const htmlGuides = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/html-guides" }),
  schema: ({ image }) => z.object({ ...carriedFields({ image }), country: z.string().regex(/^[A-Z]{2}$/).optional(), hub: z.string().optional() }),
});

/** Other pages carried over as they are (W7 tools, W8 partner pages), same mechanism. */
const htmlPages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/html-pages" }),
  schema: ({ image }) => z.object(carriedFields({ image })),
});

export const collections = { guides, htmlGuides, htmlPages };
