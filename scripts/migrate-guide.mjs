/**
 * Migration helper (W5/W6): turns a legacy guide page into src/content/guides/<slug>.md.
 *   node scripts/migrate-guide.mjs <slug> [--country GR] [--hub athens] [--image athens.webp]
 * Reads legacy/<slug>.html. Copies text as written; never invents content.
 * Everything it cannot find is left out and listed under "REVIEW" for a person to check.
 * Deleted at clean-up (W12) once every guide is migrated.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";

const [slug, ...rest] = process.argv.slice(2);
if (!slug) { console.error("usage: node scripts/migrate-guide.mjs <slug> [--country XX] [--hub id] [--image file]"); process.exit(2); }
const opt = k => { const i = rest.indexOf(`--${k}`); return i >= 0 ? rest[i + 1] : undefined; };
const html = readFileSync(`legacy/${slug}.html`, "utf8");
const review = [];

// ---------- tiny HTML helpers (the legacy pages are hand-written, regular markup) ----------
const decode = s => s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const text = s => decode(String(s ?? "").replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
/** Inner HTML of the first element with this class inside `s`, balancing nested divs/spans. */
function inner(s, cls, from = 0) {
  // Exact class token: "pb-item-he" must not match "pb-item-he-col".
  const m = new RegExp(`<(\\w+)[^>]*class="(?:[^"]*\\s)?${cls}(?:\\s[^"]*)?"[^>]*>`, "g");
  m.lastIndex = from;
  const hit = m.exec(s);
  if (!hit) return null;
  const tag = hit[1], start = hit.index + hit[0].length;
  const re = new RegExp(`<${tag}\\b[^>]*>|</${tag}>`, "g");
  re.lastIndex = start;
  let depth = 1, t;
  while ((t = re.exec(s))) { depth += t[0][1] === "/" ? -1 : 1; if (depth === 0) return { html: s.slice(start, t.index), end: re.lastIndex }; }
  return null;
}
function all(s, cls) { const out = []; let pos = 0, r; while ((r = inner(s, cls, pos))) { out.push(r.html); pos = r.end; } return out; }
const section = id => { const i = html.indexOf(`id="${id}"`); if (i < 0) return null; const j = html.indexOf('class="article-section"', i + 10); return html.slice(i, j > 0 ? j : i + 60000); };
const stripIcon = s => s.replace(/^[\p{Extended_Pictographic}️‍\s]+/u, "").trim();
const leadIcon = s => (s.match(/^[\p{Extended_Pictographic}️‍]+/u) || [])[0];

// ---------- head ----------
const title = text(inner(html, "article-hero__inner")?.html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]);
const seoTitle = text(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]);
const description = text(html.match(/<meta name="description" content="([^"]*)"/)?.[1]);

// ---------- hero badges ----------
const badges = all(inner(html, "article-hero__meta")?.html ?? "", "article-hero__badge").map(text);
const badge = icon => badges.find(b => b.startsWith(icon));
const trip = {};
if (badge("📅")) trip.dates = stripIcon(badge("📅"));
const daysBadge = badges.find(b => /\d+\s*ימים/.test(b));
trip.days = daysBadge ? Number(daysBadge.match(/(\d+)\s*ימים/)[1]) : undefined;
if (badge("🏨")) trip.base = stripIcon(badge("🏨"));
if (badge("✈️")) trip.flight = stripIcon(badge("✈️"));

// ---------- intro (Markdown body) ----------
const introSec = section("intro") ?? "";
const intro = [...introSec.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(m => text(m[1])).filter(Boolean);
if (!intro.length) review.push("intro text not found");

// ---------- map points (from the page script) ----------
const mapPts = new Map();
for (const m of html.matchAll(/\{\s*id:\s*'card(\d+)'[^}]*?lat:\s*([\d.]+),\s*lng:\s*([\d.]+)[^}]*?title:\s*'([^']*)'/g)) mapPts.set(Number(m[1]), { lat: Number(m[2]), lng: Number(m[3]), label: m[4] });

// ---------- days ----------
const days = [];
const itin = section("itinerary") ?? "";
const items = itin.split(/<div class="tl-item /).slice(1);
items.forEach((chunk, i) => {
  const n = i + 1;
  const card = inner(chunk, "tl-card")?.html ?? chunk;
  const d = { title: text(inner(card, "tl-card__title")?.html) };
  const icon = text(inner(chunk, "tl-item__icon")?.html); if (icon) d.icon = icon;
  const date = text(chunk.match(/tl-item__label[^>]*>[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>/)?.[1]); if (date) d.date = date;
  const where = stripIcon(text(inner(card, "tl-card__where")?.html)); if (where) d.where = where;
  const star = text(inner(card, "tl-card__star")?.html); if (star) d.badge = star;
  if (mapPts.has(n)) d.map = mapPts.get(n);
  d.stops = all(card, "tl-activity").map(a => {
    const s = { title: text(inner(a, "tl-activity__name")?.html) };
    const t = text(inner(a, "tl-activity__time")?.html); if (t) s.time = t;
    const x = text(inner(a, "tl-activity__desc")?.html); if (x) s.text = x;
    return s;
  }).filter(s => s.title);
  for (const tip of all(card, "tl-tip").map(text)) {
    if (/^לינה\s*:/.test(tip)) d.stay = tip.replace(/^לינה\s*:\s*/, "");
    else (d.tips ??= []).push(tip.replace(/^💡\s*טיפ\s*:\s*/, ""));
  }
  if (d.title) days.push(d); else review.push(`day ${n}: no title`);
});
if (!days.length) review.push("no itinerary days found");
for (const [n] of mapPts) if (n > days.length) review.push(`map point for card${n} has no matching day (left out)`);

// ---------- stays ----------
const accSec = section("accommodation") ?? "";
const staysMap = accSec.match(/<iframe[^>]*src="(https:\/\/stay22\.com\/embed\/[^"]+)"/)?.[1];
const stays = [];
for (const m of accSec.matchAll(/<div[^>]*>\s*🏨\s*([^<]+)<\/div>\s*<div[^>]*>\s*📍\s*([^<]+)<\/div>(?:\s*<a href="([^"]+)")?/g)) {
  const s = { icon: "🏨", name: decode(m[1]).trim(), text: decode(m[2]).trim() };
  if (m[3]) { s.url = decode(m[3]); s.partner = /stay22|booking|tpk\.mx|getyourguide/i.test(s.url); }
  stays.push(s);
}

// ---------- attractions + tips ----------
const tipItems = id => all(section(id) ?? "", "tip-item");
const attractions = tipItems("attractions").map(t => {
  const icon = text(inner(t, "tip-item__icon")?.html);
  const body = inner(t, "tip-item__text")?.html ?? t;
  const name = text(body.match(/<strong>([\s\S]*?)<\/strong>/)?.[1]);
  const rest = text(body.replace(/<strong>[\s\S]*?<\/strong>/, ""));
  return { ...(icon && { icon }), name, ...(rest && { text: rest }) };
}).filter(a => a.name);
const tips = tipItems("tips").map(t => {
  const icon = text(inner(t, "tip-item__icon")?.html);
  const body = text(t.replace(/<span class="tip-item__icon">[\s\S]*?<\/span>/, ""));
  return { ...(icon && { icon }), text: body };
}).filter(t => t.text);

// ---------- phrasebook ----------
let phrasebook;
const pb = inner(html, "pb-drawer-body")?.html;
if (pb) {
  const pbTitle = stripIcon(text(html.match(/<h3[^>]*>([^<]*מילון[^<]*)<\/h3>/)?.[1] ?? "מילון"));
  const groups = [];
  for (const part of pb.split(/<div class="pb-section-label"[^>]*>/).slice(1)) {
    const name = text(part.slice(0, part.indexOf("</div>")));
    const phrases = all(part, "pb-item").map(p => ({ he: text(inner(p, "pb-item-he")?.html), say: text(inner(p, "pb-item-pron")?.html), local: text(inner(p, "pb-item-sk")?.html) })).filter(p => p.he && p.say && p.local);
    if (phrases.length) groups.push({ name, phrases });
  }
  if (groups.length) phrasebook = { title: pbTitle, groups };
}

// ---------- hero image ----------
const heroSrc = opt("image") ?? html.match(/class="article-hero__bg"[\s\S]{0,300}?<img src="([^"]+)"/)?.[1];
if (!heroSrc) review.push("hero image not found");
else if (!existsSync(`src/assets/photos/${heroSrc}`)) review.push(`hero image ${heroSrc} is not in src/assets/photos`);

// ---------- write ----------
const data = {
  title, ...(seoTitle && seoTitle !== title && { seoTitle }), description,
  country: opt("country") ?? "XX", ...(opt("hub") && { hub: opt("hub") }),
  hero: { image: `../../assets/photos/${heroSrc ?? "MISSING"}`, alt: title },
  trip, days, stays, attractions, tips, ...(phrasebook && { phrasebook }),
  partners: { ...(staysMap && { staysMap: decode(staysMap) }), esim: /esim.html|airalo|saily|yesim/i.test(html) },
};
if (!opt("country")) review.push("pass --country (ISO code) for the good-to-know tips");
review.push("hero alt is the page title: describe the photo instead", "check bestMonths, kidsAges, highlights, color (not on the legacy page)");

// YAML writer: block style, every string JSON-quoted (valid YAML, safe for Hebrew, quotes and colons).
function yaml(v, ind = "") {
  if (Array.isArray(v)) return v.map(x => (x && typeof x === "object" ? `${ind}- ${yaml(x, ind + "  ").trimStart()}` : `${ind}- ${scalar(x)}`)).join("\n");
  return Object.entries(v).filter(([, x]) => x !== undefined && !(Array.isArray(x) && !x.length)).map(([k, x]) =>
    x && typeof x === "object" ? `${ind}${k}:\n${yaml(x, ind + "  ")}` : `${ind}${k}: ${scalar(x)}`).join("\n");
}
function scalar(x) { return typeof x === "string" ? JSON.stringify(x) : String(x); }

mkdirSync("src/content/guides", { recursive: true });
const out = `src/content/guides/${slug}.md`;
writeFileSync(out, `---\n${yaml(data)}\n---\n\n${intro.join("\n\n")}\n`);
console.log(`wrote ${out}: ${days.length} days, ${days.reduce((n, d) => n + d.stops.length, 0)} stops, ${stays.length} stays, ${attractions.length} attractions, ${tips.length} tips, phrasebook ${phrasebook ? phrasebook.groups.length + " groups" : "none"}, intro ${intro.length} paragraphs`);
console.log("REVIEW:\n  - " + review.join("\n  - "));
