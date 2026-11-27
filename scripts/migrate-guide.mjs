/**
 * Migration helper (W5/W6): turns a legacy guide page into src/content/guides/<slug>.md.
 *   node scripts/migrate-guide.mjs <slug> --country GR [--hub athens]
 * Reads legacy/<slug>.html. Copies text, colours and coordinates as written; never invents content.
 * Anything it cannot find is left out and listed under "REVIEW" for a person to check.
 * Deleted at clean-up (W12) once every guide is migrated.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";

const [slug, ...rest] = process.argv.slice(2);
if (!slug) { console.error("usage: node scripts/migrate-guide.mjs <slug> --country XX [--hub id]"); process.exit(2); }
const opt = k => { const i = rest.indexOf(`--${k}`); return i >= 0 ? rest[i + 1] : undefined; };
const html = readFileSync(`legacy/${slug}.html`, "utf8");
const body = html.slice(html.indexOf("<body"));
const review = [];

// ---------- HTML helpers (the legacy pages are hand-written, regular markup) ----------
const decode = s => s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const text = s => decode(String(s ?? "").replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
/** Inner HTML of the first element whose class list contains exactly `cls`, balancing nested tags. */
function inner(s, cls, from = 0) {
  const m = new RegExp(`<(\\w+)[^>]*class="(?:[^"]*\\s)?${cls}(?:\\s[^"]*)?"[^>]*>`, "g");
  m.lastIndex = from;
  const hit = m.exec(s);
  if (!hit) return null;
  const tag = hit[1], start = hit.index + hit[0].length;
  const re = new RegExp(`<${tag}\\b[^>]*>|</${tag}>`, "g");
  re.lastIndex = start;
  let depth = 1, t;
  while ((t = re.exec(s))) { depth += t[0][1] === "/" ? -1 : 1; if (depth === 0) return { html: s.slice(start, t.index), open: hit[0], end: re.lastIndex }; }
  return null;
}
function all(s, cls) { const out = []; let pos = 0, r; while ((r = inner(s, cls, pos))) { out.push(r); pos = r.end; } return out; }
const section = id => { const i = body.indexOf(`id="${id}"`); if (i < 0) return null; const j = body.indexOf('class="article-section"', i + 10); return body.slice(i, j > 0 ? j : i + 80000); };
const stripIcon = s => s.replace(/^[\p{Extended_Pictographic}️‍\s]+/u, "").trim();
const styleOf = (open, prop) => open.match(new RegExp(`${prop}\\s*:\\s*([^;"]+)`))?.[1]?.trim();
// The page's own destination variable (--athens, --budapest...) becomes --dest; shared ones (--amber...) stay.
const SHARED = "amber|teal|sand|cream|charcoal|green|white|dest";
const cssVar = v => v?.replace(new RegExp(`var\\(--(?!${SHARED})[a-z]+-dark\\)`, "g"), "var(--dest-dark)").replace(new RegExp(`var\\(--(?!${SHARED})[a-z]+\\)`, "g"), "var(--dest)");

// ---------- head + hero ----------
const title = text(body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]);
const seoTitle = text(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]);
const description = text(html.match(/<meta name="description" content="([^"]*)"/)?.[1]);
const crumbs = inner(body, "article-hero__breadcrumb")?.html ?? "";
const name = text([...crumbs.matchAll(/<span>([^<]+)<\/span>/g)].map(m => m[1]).filter(t => t.trim() !== "›").pop());
const subtitle = text(inner(body, "article-hero__subtitle")?.html);
const osmCredit = /article-hero__attr[\s\S]{0,200}OpenStreetMap/.test(body);
const rootVars = html.match(/:root\s*\{([\s\S]*?)\}/)?.[1] ?? "";
const destVar = [...rootVars.matchAll(/--([a-z]+)-dark:\s*(#[0-9a-fA-F]{6})/g)].find(m => !["amber", "teal", "sand"].includes(m[1]));
const color = destVar ? rootVars.match(new RegExp(`--${destVar[1]}:\\s*(#[0-9a-fA-F]{6})`))?.[1] : undefined;
const colorDark = destVar?.[2];
if (!color) review.push("destination colour (--<dest> in :root) not found");

const badges = all(inner(body, "article-hero__meta")?.html ?? "", "article-hero__badge").map(r => text(r.html));
const badge = icon => badges.find(b => b.startsWith(icon));
const trip = {};
if (badge("📅")) trip.dates = stripIcon(badge("📅"));
const daysBadge = badges.find(b => /\d+\s*ימים/.test(b));
trip.days = daysBadge ? Number(daysBadge.match(/(\d+)\s*ימים/)[1]) : undefined;
if (!trip.days) review.push("trip length (N ימים badge) not found");
if (badge("🏨")) trip.base = stripIcon(badge("🏨"));
if (badge("✈️")) trip.flight = stripIcon(badge("✈️"));

// ---------- section headings + contents labels ----------
const tocLabels = Object.fromEntries([...body.matchAll(/<a href="#([\w-]+)" class="toc__link"><span class="toc__num">\d+<\/span>\s*([^<]+)<\/a>/g)].map(m => [m[1], decode(m[2]).trim()]));
const headingOf = id => {
  const sec = section(id); if (!sec) return undefined;
  const h2 = sec.match(/<h2 class="article-section__title">([\s\S]*?)<\/h2>/)?.[1]; if (!h2) return undefined;
  const icon = text(h2.match(/<span>([\s\S]*?)<\/span>/)?.[1]);
  const t = text(h2.replace(/<span>[\s\S]*?<\/span>/, ""));
  return { ...(icon && { icon }), title: t, ...(tocLabels[id] && tocLabels[id] !== t && { toc: tocLabels[id] }) };
};
const headings = Object.fromEntries(Object.entries({ intro: "intro", map: "route-map", itinerary: "itinerary", stays: "accommodation", attractions: "attractions", tips: "tips" })
  .map(([k, id]) => [k, headingOf(id)]).filter(([, v]) => v));
const knownIds = new Set(["intro", "route-map", "itinerary", "accommodation", "attractions", "tips"]);
for (const id of Object.keys(tocLabels)) if (!knownIds.has(id)) review.push(`section #${id} ("${tocLabels[id]}") has no place in the template yet`);

// ---------- intro (Markdown body) ----------
const intro = [...(section("intro") ?? "").matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(m => text(m[1])).filter(Boolean);
if (!intro.length) review.push("intro text not found");

// ---------- map (page script) ----------
const mapPts = new Map();
for (const m of html.matchAll(/\{\s*id:\s*'card(\d+)'([^}]*)\}/g)) {
  const f = k => m[2].match(new RegExp(`${k}:\\s*'([^']*)'`))?.[1];
  const lat = Number(m[2].match(/lat:\s*([\d.-]+)/)?.[1]), lng = Number(m[2].match(/lng:\s*([\d.-]+)/)?.[1]);
  if (Number.isFinite(lat) && Number.isFinite(lng)) mapPts.set(Number(m[1]), { lat, lng, ...(f("title") && { label: f("title") }), ...(f("label") && { short: f("label") }), ...(f("date") && { date: f("date") }), ...(f("color") && { color: f("color") }) });
}
const mapView = html.match(/L\.map\('trip-map',\s*\{\s*center:\s*\[([\d.-]+),\s*([\d.-]+)\],\s*zoom:\s*(\d+)/);
const map = mapView ? { center: { lat: Number(mapView[1]), lng: Number(mapView[2]) }, zoom: Number(mapView[3]) } : undefined;

// ---------- days ----------
const days = [];
const items = (section("itinerary") ?? "").split(/<div class="tl-item /).slice(1);
items.forEach((chunk, i) => {
  const n = i + 1;
  const card = inner(chunk, "tl-card")?.html ?? chunk;
  const d = { title: text(inner(card, "tl-card__title")?.html) };
  const icon = text(inner(chunk, "tl-item__icon")?.html); if (icon) d.icon = icon;
  const date = text(chunk.match(/tl-item__label[^>]*>[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>/)?.[1]); if (date) d.date = date;
  const where = stripIcon(text(inner(card, "tl-card__where")?.html)); if (where) d.where = where;
  const star = inner(card, "tl-card__star"); if (star) { d.badge = text(star.html); const bg = styleOf(star.open, "background"), c = styleOf(star.open, "color"); if (bg && c) d.badgeStyle = { bg: cssVar(bg), color: cssVar(c) }; }
  const band = inner(card, "tl-card__band"); const grad = band && styleOf(band.open, "background")?.match(/linear-gradient\(90deg,\s*([^,]+),\s*([^)]+\)?)\)/);
  if (grad) d.band = [cssVar(grad[1].trim()), cssVar(grad[2].trim().replace(/\)$/, "").concat(grad[2].includes("var(") ? ")" : ""))];
  if (mapPts.has(n)) d.map = mapPts.get(n);
  d.stops = all(card, "tl-activity").map(({ html: a }) => {
    const s = { title: text(inner(a, "tl-activity__name")?.html) };
    const t = text(inner(a, "tl-activity__time")?.html); if (t) s.time = t;
    const x = text(inner(a, "tl-activity__desc")?.html); if (x) s.text = x;
    return s;
  }).filter(s => s.title);
  for (const { html: tipHtml } of all(card, "tl-tip")) {
    const tip = text(tipHtml);
    if (/^לינה\s*:/.test(tip)) d.stay = tip.replace(/^לינה\s*:\s*/, "");
    else (d.tips ??= []).push(tip.replace(/^💡\s*טיפ\s*:\s*/, ""));
  }
  if (d.title) days.push(d); else review.push(`day ${n}: no title`);
});
if (!days.length) review.push("no itinerary days found");
for (const [n] of mapPts) if (n > days.length) review.push(`map point card${n} has no matching day (left out)`);

// ---------- stays ----------
const accSec = section("accommodation") ?? "";
const staysIntro = text(accSec.match(/<\/h2>\s*<p[^>]*>([\s\S]*?)<\/p>/)?.[1]) || undefined;
const staysMap = accSec.match(/<iframe[^>]*src="(https:\/\/stay22\.com\/embed\/[^"]+)"/)?.[1];
const stays = [];
for (const m of accSec.matchAll(/<div[^>]*>\s*🏨\s*([^<]+)<\/div>\s*<div[^>]*>\s*📍\s*([^<]+)<\/div>(?:\s*<a href="([^"]+)")?/g)) {
  const s = { icon: "🏨", name: decode(m[1]).trim(), text: decode(m[2]).trim() };
  if (m[3]) { s.url = decode(m[3]); s.partner = /stay22|booking|tpk\.mx|getyourguide/i.test(s.url); }
  stays.push(s);
}

// ---------- attractions + tips ----------
const tipItems = id => all(section(id) ?? "", "tip-item").map(r => r.html);
const attractions = tipItems("attractions").map(t => {
  const icon = text(inner(t, "tip-item__icon")?.html);
  const b = inner(t, "tip-item__text")?.html ?? t;
  const nm = text(b.match(/<strong>([\s\S]*?)<\/strong>/)?.[1]);
  const r = text(b.replace(/<strong>[\s\S]*?<\/strong>/, ""));
  return { ...(icon && { icon }), name: nm, ...(r && { text: r }) };
}).filter(a => a.name);
const tips = tipItems("tips").map(t => {
  const icon = text(inner(t, "tip-item__icon")?.html);
  return { ...(icon && { icon }), text: text(t.replace(/<span class="tip-item__icon">[\s\S]*?<\/span>/, "")) };
}).filter(t => t.text);

// ---------- phrasebook ----------
let phrasebook;
const pb = inner(body, "pb-drawer-body")?.html;
if (pb) {
  const pbTitle = stripIcon(text(body.match(/<div class="pb-drawer-head">\s*<h3>([\s\S]*?)<\/h3>/)?.[1] ?? "מילון"));
  const groups = [];
  for (const part of pb.split(/<div class="pb-section-label"/).slice(1)) {
    const id = part.match(/^\s*data-cat="(\w+)"/)?.[1];
    const nm = text(part.slice(part.indexOf(">") + 1, part.indexOf("</div>")));
    const phrases = all(part, "pb-item").map(({ html: p }) => ({ he: text(inner(p, "pb-item-he")?.html), say: text(inner(p, "pb-item-pron")?.html), local: text(inner(p, "pb-item-sk")?.html) })).filter(p => p.he && p.say && p.local);
    const noteHtml = inner(part, "pb-emergency-note")?.html;
    const note = noteHtml ? text(noteHtml.replace(/<strong>[\s\S]*?<\/strong>/, "")) : undefined;
    if (id && (phrases.length || note)) groups.push({ id, name: nm, phrases, ...(note && { note }) });
  }
  if (groups.length) phrasebook = { title: pbTitle, groups };
}

// ---------- sidebar ----------
const sbTitle = text(inner(body, "cta-card__title")?.html), sbText = text(inner(body, "cta-card__text")?.html);
const sidebar = sbTitle && sbText ? { title: sbTitle, text: sbText } : undefined;

// ---------- hero image ----------
const heroSrc = body.match(/class="article-hero__bg"[\s\S]{0,300}?<img src="([^"]+)"/)?.[1];
if (!heroSrc) review.push("hero image not found");
else if (!existsSync(`src/assets/photos/${heroSrc}`)) review.push(`hero image ${heroSrc} is not in src/assets/photos`);

// ---------- write ----------
const data = {
  title, ...(seoTitle && seoTitle !== title && { seoTitle }), description, name,
  country: opt("country") ?? "XX", ...(opt("hub") && { hub: opt("hub") }), ...(color && { color }), ...(colorDark && { colorDark }),
  hero: { image: `../../assets/photos/${heroSrc ?? "MISSING"}`, ...(subtitle && { subtitle }), ...(osmCredit && { osmCredit }) },
  trip, headings, ...(map && { map }), days, ...(staysIntro && { staysIntro }), stays, attractions, tips, ...(phrasebook && { phrasebook }),
  ...(sidebar && { sidebar }), partners: { ...(staysMap && { staysMap: decode(staysMap) }) },
};
if (!opt("country")) review.push("pass --country (ISO code): flag and good-to-know tips");
review.push("bestMonths, kidsAges, highlights are not on the legacy page: fill from src/data/destinations.ts or leave empty");

// YAML writer: block style, every string JSON-quoted (valid YAML, safe for Hebrew, quotes and colons).
function yaml(v, ind = "") {
  if (Array.isArray(v)) {
    if (v.every(x => x === null || typeof x !== "object")) return `${ind}[${v.map(scalar).join(", ")}]`;
    return v.map(x => (x && typeof x === "object" ? `${ind}- ${yaml(x, ind + "  ").trimStart()}` : `${ind}- ${scalar(x)}`)).join("\n");
  }
  return Object.entries(v).filter(([, x]) => x !== undefined && !(Array.isArray(x) && !x.length) && !(x && typeof x === "object" && !Array.isArray(x) && !Object.keys(x).length)).map(([k, x]) =>
    Array.isArray(x) && x.every(y => y === null || typeof y !== "object") ? `${ind}${k}: ${yaml(x).trim()}`
    : x && typeof x === "object" ? `${ind}${k}:\n${yaml(x, ind + "  ")}` : `${ind}${k}: ${scalar(x)}`).join("\n");
}
function scalar(x) { return typeof x === "string" ? JSON.stringify(x) : String(x); }

mkdirSync("src/content/guides", { recursive: true });
const out = `src/content/guides/${slug}.md`;
writeFileSync(out, `---\n${yaml(data)}\n---\n\n${intro.join("\n\n")}\n`);
console.log(`wrote ${out}: ${days.length} days, ${days.reduce((n, d) => n + d.stops.length, 0)} stops, ${stays.length} stays, ${attractions.length} attractions, ${tips.length} tips, phrasebook ${phrasebook ? phrasebook.groups.length + " groups" : "none"}, intro ${intro.length} paragraphs, map points ${mapPts.size}`);
console.log("REVIEW:\n  - " + review.join("\n  - "));
