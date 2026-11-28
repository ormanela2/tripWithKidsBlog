/**
 * Removes every visible mention of Google from the site (owner decision, 28 Nov 2026).
 *   node scripts/remove-google-text.mjs
 * Texts are reworded without changing their meaning. On theme-parks, nearby hotels are shown only with the
 * Stay22 map (the Google-rated hotel card, its explanation and the stored Google ratings file are removed).
 * Not touched: the terms page (owner decision pending) and the Search Console verification file (not a page).
 */
import { readFileSync, writeFileSync, existsSync, unlinkSync } from "node:fs";

const log = [];
const text = (file, pairs) => {
  let s = readFileSync(file, "utf8");
  for (const [from, to, why] of pairs) {
    const hit = typeof from === "string" ? s.includes(from) : from.test(s);
    if (!hit) throw new Error(`${file}: not found (${why})`);
    s = typeof from === "string" ? s.split(from).join(to) : s.replace(from, to);
    log.push(`${file}: ${why}`);
  }
  writeFileSync(file, s);
};
const scripts = (file, fn) => {
  const list = JSON.parse(readFileSync(file, "utf8"));
  writeFileSync(file, JSON.stringify(list.map(x => (x.code ? { code: fn(x.code) } : x)), null, 1));
};
/** Replace a whole JS function (found by its header) using brace matching. */
const replaceFunction = (code, header, replacement) => {
  const i = code.indexOf(header);
  if (i < 0) throw new Error(`function not found: ${header}`);
  let depth = 0, j = code.indexOf("{", i);
  for (let k = j; k < code.length; k++) {
    if (code[k] === "{") depth++;
    else if (code[k] === "}") { depth--; if (depth === 0) return code.slice(0, i) + replacement + code.slice(k + 1); }
  }
  throw new Error(`unbalanced function: ${header}`);
};

// 1. Photo notes and place-card attribution (the photos are Wikimedia; Google never loads now).
for (const slug of ["austria", "czechia", "poland-south"]) {
  text(`src/carried/${slug}/body.html`, [[/(<p class="[^"]*attrib[^"]*"[^>]*>)[^<]*Google Places[\s\S]*?(<\/p>)/, "$1תמונות ממוזערות: Wikimedia Commons.$2", "photo note: Wikimedia only"]]);
}
for (const slug of ["austria", "poland-south"]) {
  text(`src/carried/${slug}/body.html`, [[/<p class="place-sheet__attr">נתוני מקום מסופקים על ידי Google[\s\S]*?<\/p>/, "", "place-card Google attribution removed"]]);
}

// 2. Translation tips.
for (const slug of ["romania", "slovakia", "slovenia"]) {
  text(`src/carried/${slug}/body.html`, [["Google Translate עם מצלמה", "אפליקציית תרגום עם מצלמה", "translation tip reworded"]]);
}
text("src/content/guides/warsaw.md", [["Google Translate מועיל בשווקים", "אפליקציית תרגום מועילה בשווקים", "translation tip reworded"]]);

// 3. App-store badges: plain Android button (the link still opens the app's store page).
for (const [slug, colour] of [["budapest", "#1A6B72"], ["slovakia", "#1a4fa0"]]) {
  text(`src/carried/${slug}/body.html`, [[/<img src="https:\/\/play\.google\.com\/intl\/en_us\/badges\/[^"]*"[^>]*>/, `<span style="display:inline-flex;align-items:center;gap:8px;background:${colour};color:#fff;border-radius:10px;padding:10px 18px;font-size:13px;font-weight:600;">להורדה לאנדרואיד</span>`, "Google Play badge -> Android button"]]);
}

// 4. Other wording.
text("src/carried/budapest/body.html", [["Apple Pay / Google Pay", "Apple Pay או ארנק דיגיטלי בטלפון", "payment wording"]]);
text("src/carried/esim/body.html", [["גוגל פיקסל", "פיקסל", "phone brands wording"]]);
text("src/carried/packages/body.html", [["לא מגוגל", "לא מהאינטרנט", "slogan wording"]]);
scripts("src/carried/calendar/scripts.json", c => c.split("הוסף ליומן Google").join("הוסף ליומן"));
log.push("src/carried/calendar/scripts.json: calendar button wording");

// 5. Theme parks: hotels near the park = the Stay22 map only.
scripts("src/carried/theme-parks/scripts.json", c => {
  if (!c.includes("function sectionStay22NearbyHotels")) return c;
  c = c.replace(/'<p class="tp-modal__hint">[^']*<\/p>' \+/, "'<p class=\"tp-modal__hint\">מפת Stay22 עם מלונות סביב הפארק. לחצו על מלון כדי לראות מחירים וזמינות.</p>' +");
  c = c.replace(/\s*'<div id="tpNearLodgingMount"[^\n]*\n\s*renderStaticLodgingCardsHtml\(item\) \+\n\s*'<\/div>' \+/, "");
  c = replaceFunction(c, "function renderStaticLodgingCardsHtml(item) {", "function renderStaticLodgingCardsHtml() { return ''; }");
  c = replaceFunction(c, "function ensureLodgingData() {", "function ensureLodgingData() { return Promise.resolve(); }");
  return c;
});
log.push("src/carried/theme-parks/scripts.json: nearby hotels = Stay22 map only (Google-rated card removed)");
if (existsSync("public/theme-parks-nearby-lodging.json")) { unlinkSync("public/theme-parks-nearby-lodging.json"); log.push("public/theme-parks-nearby-lodging.json: stored Google ratings deleted"); }

console.log(log.join("\n"));
