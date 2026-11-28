/**
 * W13 automated QA over the built site (run after `npm run build`):
 *   node scripts/qa-audit.mjs
 * Per page: language/direction, title, description, one h1, canonical, share image, unnamed links/buttons,
 * unlabeled form fields, duplicate ids, first-load weight (HTML + CSS + JS + eager images).
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";

const pages = readdirSync("dist").filter(f => f.endsWith(".html") && !f.startsWith("google"));
const size = p => { try { return statSync("dist" + decodeURIComponent(p.split("?")[0])).size; } catch { return 0; } };
const strip = h => h.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");
const text = s => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const rows = [];
let issues = 0;
for (const f of pages) {
  const raw = readFileSync(`dist/${f}`, "utf8");
  const h = strip(raw);
  const p = [];
  if (!/<html[^>]*lang="he"[^>]*dir="rtl"/.test(raw)) p.push("html lang/dir");
  const title = raw.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  if (!title) p.push("no title"); else if (title.length > 70) p.push(`title ${title.length} chars`);
  const desc = raw.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc && f !== "404.html") p.push("no description"); else if (desc && desc.length > 170) p.push(`description ${desc.length} chars`);
  const h1 = (h.match(/<h1\b/g) || []).length;
  if (h1 !== 1 && f !== "index.html") p.push(`h1 x${h1}`);
  if (!/<link rel="canonical"/.test(raw)) p.push("no canonical");
  const og = raw.match(/<meta property="og:image" content="https:\/\/mataytasim\.co\.il([^"]+)"/)?.[1];
  if (og && !existsSync("dist" + og)) p.push("share image missing");
  // Links/buttons without an accessible name.
  let unnamed = 0;
  for (const m of h.matchAll(/<(a|button)\b([^>]*)>([\s\S]*?)<\/\1>/g)) {
    const attrs = m[2], inner = m[3];
    if (/aria-label="[^"]+"|aria-labelledby="[^"]+"|title="[^"]+"/.test(attrs) || /aria-hidden="true"|\shidden\b|class="[^"]*hidden/.test(attrs)) continue;
    if (text(inner) || /<img[^>]*alt="[^"]+"/.test(inner)) continue;
    unnamed++;
  }
  if (unnamed) p.push(`${unnamed} unnamed link/button`);
  // Form fields without label / aria-label / placeholder / title.
  const ids = new Set([...h.matchAll(/<label[^>]*for="([^"]+)"/g)].map(m => m[1]));
  let unlabeled = 0;
  for (const m of h.matchAll(/<(input|select|textarea)\b([^>]*)>/g)) {
    const a = m[2];
    if (/type="(hidden|submit|button)"/.test(a) || /name="_gotcha"/.test(a)) continue;
    const id = a.match(/\sid="([^"]+)"/)?.[1];
    const before = h.slice(Math.max(0, m.index - 600), m.index);
    const insideLabel = before.lastIndexOf("<label") > before.lastIndexOf("</label>");
    if (/aria-label|aria-labelledby|placeholder=|title=/.test(a) || (id && ids.has(id)) || insideLabel) continue;
    unlabeled++;
  }
  if (unlabeled) p.push(`${unlabeled} unlabeled field`);
  const idCounts = new Map();
  for (const m of h.matchAll(/\sid="([^"]+)"/g)) idCounts.set(m[1], (idCounts.get(m[1]) || 0) + 1);
  const dups = [...idCounts].filter(([, n]) => n > 1).map(([k]) => k);
  if (dups.length) p.push(`duplicate ids: ${dups.slice(0, 4).join(",")}`);
  // First-load weight: HTML + linked CSS/JS + eager images (first candidate).
  let kb = raw.length;
  for (const m of raw.matchAll(/<link rel="stylesheet" href="(\/[^"]+)"/g)) kb += size(m[1]);
  for (const m of raw.matchAll(/<script[^>]*src="(\/[^"]+)"/g)) kb += size(m[1]);
  for (const m of h.matchAll(/<img\b([^>]*)>/g)) if (!/loading="lazy"/.test(m[1])) { const s = m[1].match(/\ssrc="(\/[^"]+)"/)?.[1]; if (s) kb += size(s); }
  kb = Math.round(kb / 1024);
  if (kb > 900) p.push(`heavy first load ${kb}KB`);
  issues += p.length;
  rows.push({ page: f.replace(".html", ""), kb, problems: p });
}
rows.sort((a, b) => b.problems.length - a.problems.length || b.kb - a.kb);
for (const r of rows) console.log(`${r.problems.length ? "!!" : "ok"} ${r.page.padEnd(26)} ${String(r.kb).padStart(5)} KB  ${r.problems.join("; ")}`);
console.log(`\n${pages.length} pages, ${issues} findings`);
