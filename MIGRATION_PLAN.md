# Stage 2: move mataytasim.co.il to Astro

**Goal:** same site, same URLs, same look, but built from shared parts: one layout, one stylesheet, content files for guides, optimised images. Output stays plain static HTML on GitHub Pages (free).

**Rules for the whole migration**
- The live site stays untouched on `main` until the switch (task W14). All work happens on branch `astro-migration`.
- **Same URLs** (`/austria.html`, …): nothing changes for Google, shared links or affiliate partners.
- Keys and IDs live only in `src/config/site.ts` (public IDs) and `.env` (anything secret). Never in a page. See [`KEYS.md`](KEYS.md).
- Hebrew, right-to-left, mobile-first. Every image has alt text and a size.

## Tasks

| # | Task | Sub-tasks | Est. | Who |
|---|---|---|---|---|
| W0 | **Project setup** | Astro + TypeScript on branch `astro-migration`; folders `src/layouts`, `src/components`, `src/content`, `src/assets`, `public/`; GitHub Actions build-and-deploy workflow (not switched on yet); keep `CNAME`, `.nojekyll`, Search Console file | 0.5 d | Claude |
| W1 | **Keys and config** | `src/config/site.ts` (site URL, WhatsApp, emails, Plausible domain, GetYourGuide partner, Stay22 id, eSIM links, Maps key); `.env.example`; **~~restrict the Google Maps key~~ (Google Maps removed)**; **find the Stay22 partner id**; pick one form provider | 0.5 d | Claude + **you** |
| W2 | **Design system + layout** | Extract colours, fonts and spacing from the current CSS into one stylesheet; `BaseLayout` (RTL, head, fonts); shared `Nav` (incl. the iOS mobile-menu fix), `Footer`, email popup, WhatsApp button, scroll-to-top | 2 d | Claude |
| W3 ✅ | **SEO kit** | `Seo` component (title, description, canonical, Open Graph, Twitter); JSON-LD helpers (Organization, Article, Breadcrumb, FAQ); sitemap generated automatically; robots.txt | 1 d | Claude |
| W4 ✅ | **Image pipeline** | Move photos into `src/assets` (replace the Google Places photo thumbnails with our own or Wikimedia Commons images, credited); automatic WebP/AVIF in the right sizes with width/height; lazy loading; alt text required; compress PDFs | 1 d | Claude |
| W5 ✅ | **Content model** | Content collection for destination guides (frontmatter: title, country, hero, best months, kids' ages, highlights, FAQ, partner blocks); guide page template | 1 d | Claude |
| W6 ✅ | **Migrate destination guides (11)** | austria, czechia, poland-south, poland-three-experiences, warsaw, slovakia, slovakia-advanced, budapest, romania, slovenia, athens; plus `destinations` hub | 3 d | Claude |
| W7 ✅ | **Migrate tool pages** | weather, calendar, budget, packing, quiz, planning, transport-europe, questionnaire_form, family_questionnaire, austria_trivia_game: keep their behaviour as small scripts on the page | 2 d | Claude |
| W8 ✅ | **Partner pages + disclosure** | esim, airport-hotels, car-rental-partners, car-rental-klasswagen, packages, theme-parks, family-top-attractions, tips, services, about, terms; one `PartnerLink` component that always shows the disclosure | 1.5 d | Claude |
| W9 ✅ | **Maps** | No Google Maps anywhere on the site (owner decision, 28 Nov 2026): no key, no links, no texts. Maps are Leaflet (new guide design: loads when near the screen). Left for W12: check the map tile provider's terms for a commercial site | 0.5 d | Claude |
| W10 ✅ | **Forms** | One form component (one provider, no email address in the page), honeypot against spam, short privacy line | 0.5 d | Claude |
| W11 ✅ | **Analytics** | One Plausible snippet; keep the existing event names (e.g. article card clicks) | 0.25 d | Claude |
| W12 | **URL parity + clean-up** | Every old URL still works; test pages (`test2_fixed`, `test3`) removed; decide on `smart_plan_budapest/`; fix the broken links found in the review | 0.5 d | Claude |
| W13 | **QA** | Link check; Lighthouse speed/accessibility budget; iPhone Safari + Android; RTL; compare every page old vs new | 1 d | Claude + **you** |
| W14 | **Switch over** | Merge to `main`; GitHub Pages source = GitHub Actions; check domain + HTTPS; Search Console: resubmit sitemap; keep the old version ready to roll back | 0.5 d | **you** + Claude |
| W15 | **After launch** | "Plan this trip" button to the trip planner; how-to for adding a new destination in minutes | 0.5 d | Claude |
| W16 | **Guides on shared templates** | After launch: merge the styles the guides share into one file, then move each carried-over guide onto the shared guide template (extended for climate, theme parks, gallery, discount cards...), one guide at a time, checking each against the live look. Result: a design change happens once for all guides; a new destination = one content file | 1-2 d per layout generation | Claude |

**Total:** about 15-17 working days of build work, in the order above. W1 (keys) and W13/W14 need you.

## Done means
Every old URL works; Lighthouse performance and accessibility at least 90 on mobile for the guides; no key or email address in any page; images total a fraction of today's 21 MB; adding a destination = one new content file.

## W6 notes (how the guides were migrated)
- **Athens** is a structured guide (src/content/guides/athens.md) rendered by `StructuredGuide` with the live look.
- **The other 10** (austria, czechia, poland-south, warsaw, slovakia, budapest, romania, slovenia, poland-three-experiences, slovakia-advanced) use newer and differing layouts, so they are **carried over as they are** (owner: "exactly like today"): `src/guide-html/<slug>/` holds the page body, its own CSS and scripts; `HtmlGuide` puts them in the shared layout. Written by `scripts/migrate-guide-html.mjs`.
- Removed from those pages: the Google Maps key and matay-gmaps-frugal.js (owner decision). The Google "place card" now shows the place name and a keyless Google Maps link (no photo, hours or rating). Twemoji pinned to 17.0.3 (was @latest). Photos are compressed WebP with real sizes.
- Kept as live: Microsoft Clarity, Stay22, Leaflet maps, GetYourGuide widget (Budapest), the feedback widget, galleries.
- Follow-ups: **W8** must build `theme-parks.html` (embedded as an iframe in 6 guides) and the other linked pages; **W9** can give the attraction cards their own or Commons photos in place of the Google ones; any guide can later be moved onto the structured template one at a time.

## W7 notes
- The 10 tool pages are carried over as they are (`scripts/carry-over.mjs <slug> --kind page`), same mechanism as the guides.
- Many pages keep their tool in the same script as the old menu code; such scripts are kept, with the old menu lookups pointed at stand-in elements. Only scripts that touch nothing but the shared parts are dropped.
- Still calling outside services, as today: budget (live exchange rates, `currency-api@latest` = today's rates), weather (OpenWeatherMap with a key in the page, plus Open-Meteo), calendar and questionnaire forms (FormSubmit / Formspree, W10).

## W8 notes
- 11 partner/info pages carried over as they are (esim, airport-hotels, car-rental-partners, car-rental-klasswagen, packages, theme-parks, family-top-attractions, tips, services, about, terms).
- Their own script and data files are served at the same addresses (public/: european-theme-parks.embed.js + .json, park-xperience.embed.js, family-top-attractions.embed.js, theme-parks-nearby-lodging.json). theme-parks.html now exists, so the 6 guide iframes work.
- Partner disclosure (PartnerNote) is added at the end of every page with affiliate links: the 8 guides with Stay22 links, esim, airport-hotels. car-rental-partners has no affiliate links (no note needed).
- Fixed live bugs: dead Cloudflare email-decode script dropped (404 live); tips page logo pointed at the existing file (was broken live).
- Open for W10: a script on packages and theme-parks posts to FormSubmit with the personal Gmail address.

## W9 notes (28 Nov 2026)
- Owner: remove any mention of Google Maps. Done with scripts/remove-google-maps.mjs plus two Austria popup texts ("נבדק ב-Google Maps" -> "זמן נסיעה ברכב", "פרטי מקום ב-Google Maps" -> "פרטי מקום").
- Nothing a visitor can see mentions Google Maps. Dead code from the old Google setup remains inside the scripts of austria, poland-south (removed when they move to the new design, W16), airport-hotels, budapest and theme-parks (W12 clean-up).
- Open question for the owner: theme-parks shows nearby hotels with a Google rating and review count (stored data from Google). Keep, replace or remove.

## No Google text (28 Nov 2026)
- Owner: no Google text anywhere on the site. scripts/remove-google-text.mjs (texts reworded, Google Play badges -> Android buttons, Google rating badge removed) and scripts/remove-smart-planner-terms.mjs (terms: the unused smart-planning service section removed, with its Google sign-in text).
- Theme parks: nearby hotels via the Stay22 map only; stored Google ratings deleted.
- Behind the scenes only: the Search Console verification file (needed for Search Console) and Google Fonts (could be self-hosted, W12 option).

## W10 notes (28 Nov 2026)
- All forms send through Formspree; no email address in any page. Website forms (newsletter pop-up, services contact, packages, theme-park plan, water-parks waiting list) use the trip questionnaire form (owner decision), each with its own subject line; one setting: src/config/site.ts -> forms.website.
- Newsletter pop-up rebuilt as a shared component (same text, look and behaviour; opens from "#newsletter" links; Plausible Newsletter-Open-Nav / Newsletter-Submit), on 32 pages as on the live site.
- Background sending with honeypot spam protection; a failed send says so and offers WhatsApp/email (the old scripts showed "sent" even on failure).
- Gmail addresses replaced by info@mataytasim.co.il everywhere (links and email-draft fallbacks).
- Feedback widget rebuilt for the new guide design (Warsaw: its own form, as live).

## W11 notes (28 Nov 2026)
- One Plausible setup on every page: the site script from the dashboard (pa-…, was on 25 live pages) + the queue/init line. The old script.js (5 live pages) is gone; theme-parks loaded it a second time on the live domain (double counting) and that loader is removed.
- Event names kept: compared with every live page. Restored: Budapest-PDF-Download, services and quiz pop-up events (settings: analytics.newsletterEvents), ThemeParks-CTA-Click and GoodToKnow-CardClick / GoodToKnow-CTA in the new guide design.
- Not sent anymore on Athens/Warsaw: GoodToKnow-Open, GoodToKnow-ToggleMore (the drawer they belonged to is gone in the new design).
- Clarity removed (owner decision).
