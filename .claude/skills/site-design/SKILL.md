---
name: site-design
description: Design, UI and UX rules for mataytasim.co.il pages (Hebrew, RTL, family travel). Use before designing, redesigning or reviewing any page, especially destination guides, and before changing how an existing page looks.
---

# Site design: mataytasim.co.il

The site helps Israeli parents decide on and plan a family trip in Europe. Every page answers three questions in order:
**Is this destination right for us? What exactly do we do there, day by day? How do we book/plan it?**

## 0. Process rules (owner decisions)
- **Never change the look of an existing page unless the owner asked for it.** Migrations keep the live look exactly.
- For a redesign: show a mockup with real content first (one page, desktop + phone), get approval, then build the template, then move pages one at a time, checking each.
- Use real content only. No invented facts, prices, opening hours or ratings. Ratings shown are our own or none.

## 1. Brand tokens (src/styles/global.css)
- Colours: teal `#1A6B72` (primary, links, actions), teal-dark `#124d52` (headings), amber `#E8A045` (highlights, primary CTA on dark), cream `#FDF8F2` (page), sand `#F5EDD8` / `#e8ddc4` (panels, borders), charcoal `#2C2C2C` (text). Each destination has its own accent colour (`--dest`), used sparingly (one band or chip per block).
- Type: **Secular One** for headings, **Rubik** for body (17px, line-height 1.75-1.8). Hebrew needs slightly larger sizes than Latin; never go under 14px for reading text.
- Radius 8/12/20; soft shadows. Card styling only where an element is a separate object.

## 2. RTL (Hebrew) rules
- `dir="rtl"` on `<html>`. Use logical CSS (`margin-inline-start`, `inset-inline-end`, `text-align: start`), never left/right for layout.
- Mirror directional icons (arrows, back/next, progress direction). Do not mirror clocks, play buttons, logos, checkmarks.
- Latin fragments (place names, URLs, prices with €) inside Hebrew: wrap in `<span dir="ltr">` or use `unicode-bidi: isolate` when punctuation jumps.
- Timelines and progress read right to left (start on the right).

## 3. Destination guide: page structure ("prime view")
Order matters: decision first, details second.
1. **Hero**: full-width photo, H1 "טיול ל<X> עם ילדים", one-line promise, and a **"הטיול בקצרה" card**: days, best months (12-month strip), flight time from TLV, base town, kids' ages. Primary action (plan this trip / packages) + secondary (WhatsApp). LCP image: preloaded, sized, WebP/AVIF, never lazy.
2. **Key takeaways** box ("למה כדאי") with 3-4 short bullets, bold lead phrase each. Summary first (NNG: put a summary at the beginning, distinct treatment).
3. **Contents**: labelled "בעמוד הזה"; in the main body on mobile (not sticky); sticky in the side rail on desktop with **current section highlighted**. Link labels = section headings.
4. **Route map + day-by-day**: single-column vertical spine (no zig-zag on mobile), one card per day: day number, date, title, area, 1-line summary, stop count, badge (e.g. "הכי שווה"). Cards collapsed after day 1; "פתיחת כל הימים" toggle. Tapping a day syncs the map. Times as the guide wrote them.
5. **What to do with kids**: cards with icon/photo, name, one-sentence why, practical chips (age range, duration, indoor/rain-friendly, booking needed). Only chips we know; empty is fine.
6. **Where to stay**: cards; the affiliate button carries the disclosure **right next to it** ("קישור שותפים").
7. **Tips**, grouped (logistics / money / on site), each with a bold lead phrase.
8. **Good to know** and **phrasebook** as bottom sheets/drawers, opened from clear buttons.
9. **Closing CTA**: one primary action, one fallback.

## 4. Interaction and motion
- Progressive disclosure (accordions) for long lists; never hide the first item or the summary.
- Mobile: one sticky bottom bar at most (e.g. WhatsApp + plan). Floating buttons must not overlap (check phrasebook, contents, back-to-top corners).
- Motion: purposeful, < 300 ms, respects `prefers-reduced-motion`; nothing animates on scroll that hides content at rest.
- Every tap target ≥ 44px. Visible focus. Escape closes drawers; focus returns to the opener.

## 5. Trust, partners, analytics
- Affiliate disclosure **beside** the link or widget, plain words ("קישור שותפים: אם תזמינו דרכו נקבל עמלה קטנה, המחיר לא משתנה"). Not only at the page bottom (FTC: "as close as possible to the triggering claim").
- `rel="sponsored noopener"` on affiliate links.
- Keep existing Plausible event names when rebuilding a page.

## 6. Performance budget (Core Web Vitals, 75th percentile, mobile)
LCP ≤ 2.5 s, INP ≤ 200 ms, CLS < 0.1. Images through the `Photo` component (width/height always). Maps and widgets load when near the screen. No library `@latest`. Photo ≤ 350 KB.

## 7. Checklist before showing a design
- [ ] Real content from the content file; nothing invented
- [ ] Phone (≈390px) and desktop; RTL correct; Latin fragments isolated
- [ ] Hero answers "is it for us?" within the first screen
- [ ] Contents labelled, current section highlighted on desktop
- [ ] Day cards scannable when collapsed
- [ ] Disclosure beside every partner link
- [ ] No overlapping floating buttons; tap targets ≥ 44px
- [ ] Reduced-motion parity; keyboard and focus work
- [ ] Image sizes set; map lazy; no layout jump

## Sources (research, 2026-11-28)
- NN/g, Tables of Contents (placement, sticky, highlight current section, "On This Page"): https://www.nngroup.com/articles/table-of-contents/
- NN/g, Formatting long-form content (summary first, chunks, accordions, bold lead phrases, ≤30% highlight): https://www.nngroup.com/articles/formatting-long-form-content/
- FTC .com Disclosures (proximity to the claim): https://www.ftc.gov/os/2013/03/130312dotcomdisclosures.pdf
- RTL bidirectionality: Wikimedia Codex https://doc.wikimedia.org/codex/latest/style-guide/bidirectionality.html , Material https://m2.material.io/go/design-bidirectionality , Adobe Spectrum https://spectrum.adobe.com/page/bi-directionality
- Core Web Vitals thresholds: https://corewebvitals.io/core-web-vitals
- Travel UX (one goal per page, scannable itineraries): https://baymard.com/blog/travel-site-ux-best-practices
