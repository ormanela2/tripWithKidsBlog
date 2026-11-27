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
| W1 | **Keys and config** | `src/config/site.ts` (site URL, WhatsApp, emails, Plausible domain, GetYourGuide partner, Stay22 id, eSIM links, Maps key); `.env.example`; **restrict the Google Maps key**; **find the Stay22 partner id**; pick one form provider | 0.5 d | Claude + **you** |
| W2 | **Design system + layout** | Extract colours, fonts and spacing from the current CSS into one stylesheet; `BaseLayout` (RTL, head, fonts); shared `Nav` (incl. the iOS mobile-menu fix), `Footer`, email popup, WhatsApp button, scroll-to-top | 2 d | Claude |
| W3 | **SEO kit** | `Seo` component (title, description, canonical, Open Graph, Twitter); JSON-LD helpers (Organization, Article, Breadcrumb, FAQ); sitemap generated automatically; robots.txt | 1 d | Claude |
| W4 | **Image pipeline** | Move photos into `src/assets`; automatic WebP/AVIF in the right sizes with width/height; lazy loading; alt text required; compress PDFs | 1 d | Claude |
| W5 | **Content model** | Content collection for destination guides (frontmatter: title, country, hero, best months, kids' ages, highlights, FAQ, partner blocks); guide page template | 1 d | Claude |
| W6 | **Migrate destination guides (11)** | austria, czechia, poland-south, poland-three-experiences, warsaw, slovakia, slovakia-advanced, budapest, romania, slovenia, athens; plus `destinations` hub | 3 d | Claude |
| W7 | **Migrate tool pages** | weather, calendar, budget, packing, quiz, planning, transport-europe, questionnaire_form, family_questionnaire, austria_trivia_game: keep their behaviour as small scripts on the page | 2 d | Claude |
| W8 | **Partner pages + disclosure** | esim, airport-hotels, car-rental-partners, car-rental-klasswagen, packages, theme-parks, family-top-attractions, tips, services, about, terms; one `PartnerLink` component that always shows the disclosure | 1.5 d | Claude |
| W9 | **Maps** | One Leaflet map component (pinned versions, loads only when visible); one Google Maps loader using the key from config | 0.5 d | Claude |
| W10 | **Forms** | One form component (one provider, no email address in the page), honeypot against spam, short privacy line | 0.5 d | Claude |
| W11 | **Analytics** | One Plausible snippet; keep the existing event names (e.g. article card clicks) | 0.25 d | Claude |
| W12 | **URL parity + clean-up** | Every old URL still works; test pages (`test2_fixed`, `test3`) removed; decide on `smart_plan_budapest/`; fix the broken links found in the review | 0.5 d | Claude |
| W13 | **QA** | Link check; Lighthouse speed/accessibility budget; iPhone Safari + Android; RTL; compare every page old vs new | 1 d | Claude + **you** |
| W14 | **Switch over** | Merge to `main`; GitHub Pages source = GitHub Actions; check domain + HTTPS; Search Console: resubmit sitemap; keep the old version ready to roll back | 0.5 d | **you** + Claude |
| W15 | **After launch** | "Plan this trip" button to the trip planner; how-to for adding a new destination in minutes | 0.5 d | Claude |

**Total:** about 15-17 working days of build work, in the order above. W1 (keys) and W13/W14 need you.

## Done means
Every old URL works; Lighthouse performance and accessibility at least 90 on mobile for the guides; no key or email address in any page; images total a fraction of today's 21 MB; adding a destination = one new content file.
