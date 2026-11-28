/**
 * Migration helper (W6, W7, W8): carries a legacy page over AS IS, so it looks and works exactly like today.
 *   node scripts/carry-over.mjs <slug> --kind guide|page [--hub id]
 * Writes:
 *   src/content/html-guides/<slug>.md (guides) or src/content/html-pages/<slug>.md (other pages): SEO + page facts
 *   src/carried/<slug>/body.html          the page body without the shared menu, footer and newsletter pop-up
 *   src/carried/<slug>/page.css        the page's own styles, without rules for the shared parts
 *   src/carried/<slug>/scripts.json    the page's own scripts, in order (inline code or pinned external src)
 * Dropped on purpose (and listed): Google Maps key + matay-gmaps-frugal.js (owner decision), analytics
 * snippets (the layout adds them from src/config/site.ts), JSON-LD (the Seo component makes it).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";

const [slug, ...rest] = process.argv.slice(2);
if (!slug) { console.error("usage: node scripts/carry-over.mjs <slug> --kind guide|page [--hub id]"); process.exit(2); }
const opt = k => { const i = rest.indexOf(`--${k}`); return i >= 0 ? rest[i + 1] : undefined; };
const kind = opt("kind");
if (kind !== "guide" && kind !== "page") { console.error("--kind guide|page is required"); process.exit(2); }
const html = readFileSync(`legacy/${slug}.html`, "utf8");
const notes = [];

const decode = s => s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const text = s => decode(String(s ?? "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

// ---------- head facts ----------
const title = text(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]);
const description = text(html.match(/<meta name="description" content="([^"]*)"/)?.[1]);
const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
const bodyTag = html.match(/<body([^>]*)>/)?.[1] ?? "";
const country = bodyTag.match(/data-good-to-know-country="([A-Z]{2})"/)?.[1];
const h1 = text(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]);
const clarity = /"clarity",\s*"script",\s*"([a-z0-9]+)"/.exec(html)?.[1];
const floatNav = /id="floatNav"/.test(html);
// Affiliate links (eSIM short links, Stay22, GetYourGuide, Booking) need the partner disclosure.
const hasAffiliate = b => /tpk\.mx|stay22\.com|getyourguide\.com\/[^"]*partner|booking\.com\/[^"]*aid=|[?&](aid|partner_id|ref)=/.test(b);
const readProgress = /id="readProgressFill"/.test(html);
const stay22 = /Stay22\.params\s*=\s*\{\s*lmaID:\s*'([a-z0-9]+)'/.exec(html)?.[1];

// ---------- split out scripts and styles (document order) ----------
let body = html.slice(html.indexOf(">", html.indexOf("<body")) + 1, html.lastIndexOf("</body>"));
const headHtml = html.slice(0, html.indexOf("<body"));
const styles = [...(headHtml + body).matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map(m => m[1]);
const scriptTags = [...(headHtml + body).matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m => ({ attrs: m[1] ?? "", code: m[2] }));
body = body.replace(/<script(\s[^>]*)?>[\s\S]*?<\/script>/g, "").replace(/<style[^>]*>[\s\S]*?<\/style>/g, "").replace(/<!--[\s\S]*?-->/g, "");

// ---------- remove the shared parts (balanced element removal) ----------
function removeElement(src, openRe, label) {
  const m = openRe.exec(src);
  if (!m) return src;
  const tag = m[1], start = m.index;
  const re = new RegExp(`<${tag}\\b[^>]*>|</${tag}>`, "g");
  re.lastIndex = start + m[0].length;
  let depth = 1, t;
  while ((t = re.exec(src))) { depth += t[0][1] === "/" ? -1 : 1; if (depth === 0) { notes.push(`removed shared part: ${label}`); return src.slice(0, start) + src.slice(re.lastIndex); } }
  return src;
}
body = removeElement(body, /<(nav)\b[^>]*\bid="nav"[^>]*>/, "menu");
body = removeElement(body, /<(div)\b[^>]*\bid="mobileMenu"[^>]*>/, "mobile menu");
body = removeElement(body, /<(footer)\b[^>]*class="footer"[^>]*>/, "footer");
body = removeElement(body, /<(div)\b[^>]*\bid="emailPopupOverlay"[^>]*>/, "newsletter pop-up (site-wide, W10)");
body = removeElement(body, /<(div)\b[^>]*\bid="floatNav"[^>]*>/, "back-to-top button (shared)");
body = body.replace(/<a[^>]*class="skip-link"[^>]*>[\s\S]*?<\/a>/, "").trim();

// ---------- CSS: keep the page's own rules, drop rules that only style the shared parts ----------
const SHARED_SEL = /^(\.nav\b|\.nav__|\.mob-nav|\.footer\b|\.footer__|\.email-popup|\.float-nav|\.skip-link|#nav\b|#mobileMenu|\.icon-fb)/;
function filterCss(css) {
  let out = "", i = 0;
  while (i < css.length) {
    const open = css.indexOf("{", i);
    if (open < 0) { out += css.slice(i); break; }
    const prelude = css.slice(i, open);
    // find matching close brace
    let depth = 1, j = open + 1;
    for (; j < css.length && depth; j++) { if (css[j] === "{") depth++; else if (css[j] === "}") depth--; }
    const block = css.slice(open + 1, j - 1);
    const sel = prelude.trim();
    if (sel.startsWith("@media") || sel.startsWith("@supports")) {
      const inner = filterCss(block);
      if (inner.trim()) out += `${prelude}{${inner}}`;
    } else if (sel.startsWith("@")) {
      out += `${prelude}{${block}}`;
    } else {
      const selectors = sel.replace(/\/\*[\s\S]*?\*\//g, "").split(",").map(s => s.trim()).filter(Boolean);
      const shared = selectors.length && selectors.every(s => SHARED_SEL.test(s.replace(/^(html\[dir="[a-z]+"\]|body)\s+/, "")));
      if (!shared) out += `${prelude}{${block}}`;
    }
    i = j;
  }
  return out;
}
const css = filterCss(styles.join("\n")).replace(/\n\s*\n+/g, "\n");

// ---------- scripts ----------
const DROP = [
  [/^\s*window\.GOOGLE_MAPS_API_KEY\s*=\s*'[^']*';?\s*$/, "Google Maps key (owner decision: no Google Maps API)"],
  [/^\s*window\.plausible\s*=\s*window\.plausible\s*\|\|/, "Plausible loader (layout adds analytics)"],
  [/"clarity",\s*"script"/, "Microsoft Clarity snippet (layout adds it from config)"],
  [/Stay22\.params/, "Stay22 snippet (layout adds it from config)"],
];
// Scripts for the shared parts (menu, reading-progress plane, back-to-top, newsletter pop-up).
// On many pages the page's own tool lives in the SAME script, so these are dropped only when
// every element they look up is a shared part or no longer on the page.
const DROP_SHARED = [
  [/emailPopupOverlay/, "newsletter pop-up script (site-wide, W10)"],
  [/floatNav/, "back-to-top script (shared)"],
  [/hamburgerBtn|readProgressFill/, "menu + reading-progress script (shared Nav component)"],
];
const SHARED_IDS = /^(nav|hamburgerBtn|mobileMenu|readProgressFill|readProgressPlane|menuWeatherSnippet|floatNav|emailPopup\w*)$/;
const bodyIds = new Set([...body.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
const idsIn = code => [...new Set([...code.matchAll(/getElementById\(\s*['"]([\w-]+)['"]\s*\)|querySelector(?:All)?\(\s*['"]#([\w-]+)/g)].map(m => m[1] || m[2]))];
const pageIds = code => idsIn(code).filter(id => !SHARED_IDS.test(id) && bodyIds.has(id));
// In kept scripts, old menu / progress / newsletter lookups get a detached stand-in element,
// so they neither clash with the shared menu nor crash on a missing element.
const STANDIN = { hamburgerBtn: "button", mobileMenu: "div", readProgressFill: "div", readProgressPlane: "div", menuWeatherSnippet: "span", emailPopupOverlay: "div", emailPopupClose: "button", emailPopupForm: "form" };
const STANDIN_RE = new RegExp(`document\\.getElementById\\(\\s*(['"])(${Object.keys(STANDIN).join("|")})\\1\\s*\\)`, "g");
const neutralize = code => code.replace(STANDIN_RE, (_m, _q, id) => `(document.getElementById("__legacy_${id}") || document.createElement("${STANDIN[id]}"))`);
const scripts = [];
for (const s of scriptTags) {
  if (/ld\+json/.test(s.attrs)) { notes.push("dropped JSON-LD (Seo component makes it)"); continue; }
  const src = s.attrs.match(/src="([^"]+)"/)?.[1];
  if (src) {
    if (/plausible\.io/.test(src)) continue;
    if (src.includes("/cdn-cgi/")) { notes.push("dropped Cloudflare email-decode script (404 on the live site too)"); continue; }
    if (/matay-gmaps-frugal/.test(src)) { notes.push("dropped matay-gmaps-frugal.js (Google Places; owner decision)"); continue; }
    scripts.push({ src: src.replace("@twemoji/api@latest", "@twemoji/api@17.0.3") });
    continue;
  }
  const hit = DROP.find(([re]) => re.test(s.code));
  if (hit) { notes.push(`dropped ${hit[1]} [${s.code.length}B: ${s.code.trim().slice(0, 60).replace(/\s+/g, " ")}]`); continue; }
  const shared = DROP_SHARED.find(([re]) => re.test(s.code));
  if (shared) {
    const own = pageIds(s.code);
    if (!own.length) { notes.push(`dropped ${shared[1]} [${s.code.length}B]`); continue; }
    notes.push(`KEPT ${s.code.length}B script with page features (${own.slice(0, 4).join(", ")}${own.length > 4 ? ", ..." : ""}); its old menu lookups neutralized`);
  }
  let code = neutralize(s.code.trim());
  const devMsg = /'כדי לטעון שעות, תמונה ודירוג: הגדירו את GOOGLE_MAPS_API_KEY[^']*'/g;
  if (devMsg.test(code)) { code = code.replace(devMsg, "''"); notes.push("place card: developer message about the Google key replaced with nothing"); }
  if (/AIza[0-9A-Za-z_-]{20,}/.test(code)) throw new Error("a Google API key is still inside a kept script");
  if (code) scripts.push({ code });
}

// ---------- references to check ----------
const imgRefs = [...new Set([...body.matchAll(/(?:src|srcset)="([^"]+?\.(?:jpe?g|png|webp|gif))(?:\s[^"]*)?"/g), ...css.matchAll(/url\(['"]?([^'")]+\.(?:jpe?g|png|webp|gif))/g)].map(m => m[1]))].filter(u => !/^data:/.test(u));
const internalLinks = [...new Set([...body.matchAll(/href="(?!https?:|#|mailto:|tel:|javascript:)([^"#?]+)/g)].map(m => m[1]))];
const iframes = [...new Set([...body.matchAll(/<iframe[^>]*src="([^"]+)"/g)].map(m => m[1].replace(/\?.*/, "")))];

// ---------- write ----------
const shareFile = ogImage?.split("/").pop();
const fm = {
  title: h1 || title, seoTitle: title, description, name: text(body.match(/class="article-hero__breadcrumb"[\s\S]*?<span>([^<]+)<\/span>\s*<\/nav>/)?.[1]) || undefined,
  country, ...(opt("hub") && { hub: opt("hub") }),
  ...(shareFile && existsSync(`src/assets/photos/${shareFile}`) && { shareImage: `../../assets/photos/${shareFile}` }),
  ...(clarity && { clarity: true }),
  ...(stay22 && { stay22: true }),
  ...(floatNav && { floatNav: true }),
  ...(hasAffiliate(body) && { partnerNote: true }),
  ...(!/id="emailPopupOverlay"/.test(html) && { newsletter: false }),
  ...(readProgress && { readProgress: true }),
};
const yaml = Object.entries(fm).filter(([, v]) => v !== undefined && v !== "").map(([k, v]) => `${k}: ${typeof v === "string" ? JSON.stringify(v) : v}`).join("\n");
const contentDir = kind === "guide" ? "src/content/html-guides" : "src/content/html-pages";
mkdirSync(contentDir, { recursive: true });
mkdirSync(`src/carried/${slug}`, { recursive: true });
writeFileSync(`${contentDir}/${slug}.md`, `---\n${yaml}\n---\n`);
writeFileSync(`src/carried/${slug}/body.html`, body + "\n");
writeFileSync(`src/carried/${slug}/page.css`, css);
writeFileSync(`src/carried/${slug}/scripts.json`, JSON.stringify(scripts, null, 1));
// Photos the page names (markup, styles or scripts) that exist in src/assets/photos.
const everything = body + css + scripts.map(x => x.code ?? "").join("");
const used = readdirSync("src/assets/photos").filter(n => /\.(jpe?g|png|webp)$/i.test(n) && (everything.includes(n) || everything.includes(n.replace(/ /g, "%20"))));
writeFileSync(`src/carried/${slug}/photos.ts`, `// Photos this guide uses (written by scripts/carry-over.mjs).\n${used.map((n, i) => `import p${i} from "../../assets/photos/${n}";`).join("\n")}\nexport default { ${used.map((n, i) => `${JSON.stringify(n)}: p${i}`).join(", ")} };\n`);
const missingPhotos = imgRefs.map(r => decodeURIComponent(r.split("/").pop())).filter(n => !/^https?:/.test(n) && !used.includes(n));

console.log(`${slug}: body ${Math.round(body.length / 1024)}KB, css ${Math.round(css.length / 1024)}KB (from ${Math.round(styles.join("").length / 1024)}KB), scripts ${scripts.length} (${scripts.filter(s => s.src).map(s => s.src.split("/").pop()).join(", ") || "no external"}), country ${country ?? "?"}, clarity ${clarity ? "yes" : "no"}`);
console.log(`  images: ${imgRefs.length} | iframes: ${iframes.join(" ") || "-"}`);
console.log(`  internal links: ${internalLinks.join(" ")}`);
console.log(`  notes: ${[...new Set(notes)].join("; ")}`);
if (!fm.shareImage) console.log(`  REVIEW: share image ${ogImage ?? "(none)"} not in src/assets/photos (default image used)`);
if (missingPhotos.length) console.log(`  REVIEW: photos named but not in src/assets/photos: ${[...new Set(missingPhotos)].join(", ")}`);
if (kind === "guide" && !country) console.log("  REVIEW: no data-good-to-know-country on <body>");
