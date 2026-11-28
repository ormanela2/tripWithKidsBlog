# Keys, IDs and accounts used by mataytasim.co.il

Inventory from the live site (27 Nov 2026). **Values are not copied here.** In the Astro build they live in `src/config/site.ts` (public IDs that browsers must see anyway) or `.env` (anything secret, never committed).

| Service | What | Found on the site | Status | Action |
|---|---|---|---|---|
| Google Maps JavaScript API | API key | 1 key on 7 pages (place photos + info pop-ups, theme-parks map) | **Removed (owner decision, 27 Nov 2026)** | Not used in the new build: maps use Leaflet (no key), places link out to Google Maps without a key, photos are our own or Wikimedia Commons. The old script also cached Places data for 45 days, which Google terms do not allow. Delete or restrict the old key in Google Cloud. |
| Stay22 (hotel maps) | Partner id (`lmaID` / `aid`) | Embeds present, one link with **empty `lmaID`** | ❌ **Missing** | Find your Stay22 partner id (Stay22 dashboard) so bookings are credited. |
| GetYourGuide | Partner id | Present (`data-gyg-partner-id`) | ✅ | Move to config. One widget has an empty tour list: choose tours or remove it. |
| Travelpayouts (Airalo, Saily, Yesim) | Short affiliate links (`*.tpk.mx`) | 3 links | ✅ | Move to config. |
| Plausible | Site domain | 33 pages, **two script versions** | ⚠️ | Use one snippet; keep existing event names. |
| Formspree | Form ids | **9 different forms** | ⚠️ Scattered | Decide which forms remain; one component. |
| FormSubmit | Email addresses in form actions | business Gmail in 37 forms, **personal Gmail in 2** | ❌ Exposes emails (spam) | Replace with Formspree (hidden id) and remove all FormSubmit actions. |
| Google Search Console | Verification file | `google101e12e27f44da03.html` | ✅ | Keep in `public/`. |
| WhatsApp | Phone number | 65 links | ✅ (intentional) | One value in config. |
| Contact emails | `info@` and Gmail in mailto links | Several pages | ⚠️ | Use `info@mataytasim.co.il` only, from config. |
| Twemoji | CDN library | `@latest` (unpinned) | ⚠️ | Pin a version or self-host. |
| Leaflet / markercluster | CDN libraries | Pinned versions | ✅ | Load only on pages with maps. |
| Cloudflare email-decode | Leftover script | about, terms | ❌ Broken off Cloudflare | Remove; show the email plainly or via the form. |

## Needed from the owner
1. **Stay22 partner id.**
2. ~~Google Maps key~~: not needed (removed). Optionally delete the old key in Google Cloud.
3. Which forms should stay (newsletter, trip questionnaire, contact, partner leads).

## Update (W5): Stay22 is in use on the guides
The guides embed a Stay22 hotel map (`stay22.com/embed/<id>`) and use affiliate booking links (`booking.stay22.com/mataytasim/...`). These are kept per guide in the content files (`partners.staysMap`, `stays[].url` with `partner: true`) and always shown with the partner disclosure. The Stay22 partner id (`lmaID` `69c0491c51844e7588a7882e`) **is set** on all 8 live guide pages (the earlier "missing" note came from a page with an empty copy). It is now in `src/config/site.ts` and loaded on every guide. **Stay22: nothing needed from the owner.**

## Update (W6): Microsoft Clarity
Project id `wrt3m0l4ow` (public; on 17 live pages, the guides among them). Now in `src/config/site.ts` (`analytics.clarityId`), added per page with the `clarity` option. Decide in W11 whether to keep it site-wide, per page, or drop it (it records visitor sessions; mention it in the privacy text if kept).

## Update (W7): OpenWeatherMap key (missed in W1)
weather.html calls OpenWeatherMap with an API key written in the page (visible to every visitor, also on the live site). Kept so the page works as today. Owner options: restrict/rotate the key in the OpenWeatherMap account, or switch the page to Open-Meteo (free, no key; the page already uses it for part of the data).
