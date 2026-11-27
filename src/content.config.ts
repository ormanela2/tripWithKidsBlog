/**
 * Content model for destination guides.
 * One guide = one file in src/content/guides/<slug>.md (published at /<slug>.html).
 * Frontmatter holds the structured parts (trip facts, day-by-day plan, places, tips, FAQ);
 * the Markdown body is the personal "why go" story.
 * The build fails with a clear message when a guide breaks this shape.
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const text = z.string().trim().min(1);
const coords = z.object({ lat: z.number().min(-90).max(90), lng: z.number().min(-180).max(180) });

const stop = z.object({
  /** "12:55", "בוקר", "אחה\"צ"... free text, as written in the guide. */
  time: text.optional(),
  title: text,
  text: text.optional(),
});

const day = z.object({
  title: text,
  icon: text.optional(),
  /** "29.04 שלישי": shown as written; optional for guides without dates. */
  date: text.optional(),
  where: text.optional(),
  /** Short label on the card, e.g. "יום הגעה", "הכי אהבנו". */
  badge: text.optional(),
  /** Point for the route map (W9). */
  map: coords.extend({ label: text.optional() }).optional(),
  stops: z.array(stop).default([]),
  tips: z.array(text).default([]),
  stay: text.optional(),
});

const place = z.object({
  icon: text.optional(),
  name: text,
  text: text.optional(),
  /** Optional link: an official site, or a page on this site. */
  url: z.url().or(z.string().startsWith("/")).optional(),
  /** True when url is an affiliate link: the page shows the partner disclosure next to it. */
  partner: z.boolean().default(false),
});

const phrase = z.object({ he: text, say: text, local: text });

const guides = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/guides" }),
  schema: ({ image }) =>
    z.object({
      /** H1 on the page. */
      title: text,
      /** <title> and share title; falls back to `title`. */
      seoTitle: text.optional(),
      description: text.max(200),
      /** ISO country code; picks the "good to know" tips (src/data/good-to-know.json). */
      country: z.string().regex(/^[A-Z]{2}$/),
      /** Matching id in src/data/destinations.ts (hub card), when there is one. */
      hub: z.string().optional(),
      /** Colour of the destination, used for accents. */
      color: z.string().regex(/^#[0-9a-fA-F]{6}$/).default("#1A6B72"),

      hero: z.object({ image: image(), alt: text }),

      /** The trip this guide is based on: shown in the hero. */
      trip: z.object({
        dates: text.optional(),
        days: z.number().int().positive(),
        base: text.optional(),
        flight: text.optional(),
      }),
      /** 1-12. */
      bestMonths: z.array(z.number().int().min(1).max(12)).default([]),
      /** e.g. "4-12". Leave out when the guide doesn't say. */
      kidsAges: text.optional(),
      highlights: z.array(text).default([]),

      days: z.array(day).default([]),
      stays: z.array(place).default([]),
      /** "What to do with kids": short cards. */
      attractions: z.array(place).default([]),
      tips: z.array(z.object({ icon: text.optional(), text })).default([]),
      phrasebook: z
        .object({ title: text, groups: z.array(z.object({ name: text, phrases: z.array(phrase).min(1) })).min(1) })
        .optional(),
      faq: z.array(z.object({ q: text, a: text })).default([]),

      /** Partner blocks; each renders only when its id is configured in src/config/site.ts. */
      partners: z
        .object({
          /** GetYourGuide search, e.g. "Athens". */
          activities: text.optional(),
          /** Stay22 hotel-map embed URL (https://stay22.com/embed/...). */
          staysMap: z.url().startsWith("https://stay22.com/embed/").optional(),
          esim: z.boolean().default(false),
        })
        .default({ esim: false }),

      datePublished: z.coerce.date().optional(),
      dateModified: z.coerce.date().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { guides };
