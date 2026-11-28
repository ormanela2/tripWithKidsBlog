/**
 * Self-hosted fonts (no request to Google Fonts from visitors' browsers).
 *   node scripts/fetch-fonts.mjs
 * Downloads the font files the site uses (every family/weight the live pages loaded) into public/fonts/
 * and writes src/styles/fonts.css. Only the Hebrew and Latin character sets are kept.
 * All families are under the SIL Open Font License 1.1 (public/fonts/LICENSE.txt).
 */
import { writeFileSync, mkdirSync, rmSync } from "node:fs";

// Every family and weight requested by the live pages (merged).
const FAMILIES = [
  "Rubik:wght@300..900",
  "Secular+One",
  "Assistant:wght@200..800",
  "Heebo:wght@100..900",
  "Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500",
  "Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700",
  "Noto+Serif+Hebrew:wght@500..700",
];
const KEEP = new Set(["hebrew", "latin", "latin-ext"]);
// A current browser user agent so the service returns woff2 files (no personal data).
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";

rmSync("public/fonts", { recursive: true, force: true });
mkdirSync("public/fonts", { recursive: true });
const url = `https://fonts.googleapis.com/css2?${FAMILIES.map(f => `family=${f}`).join("&")}&display=swap`;
const css = await (await fetch(url, { headers: { "User-Agent": UA } })).text();
if (!css.includes("@font-face")) throw new Error("no @font-face in response");

let out = "/* Self-hosted fonts (scripts/fetch-fonts.mjs). SIL Open Font License 1.1: public/fonts/LICENSE.txt */\n";
let files = 0, bytes = 0;
const blocks = [...css.matchAll(/\/\*\s*([\w-]+)\s*\*\/\s*(@font-face\s*\{[^}]+\})/g)];
const seen = new Map();
for (const [, subset, face] of blocks) {
  if (!KEEP.has(subset)) continue;
  const family = face.match(/font-family:\s*'([^']+)'/)[1];
  const style = face.match(/font-style:\s*(\w+)/)[1];
  const weight = face.match(/font-weight:\s*([\d ]+)/)[1].trim().replace(/\s+/g, "-");
  const src = face.match(/url\((https:[^)]+\.woff2)\)/)[1];
  const name = `${family.toLowerCase().replace(/\s+/g, "-")}-${style}-${weight}-${subset}.woff2`;
  if (!seen.has(src)) {
    const buf = Buffer.from(await (await fetch(src, { headers: { "User-Agent": UA } })).arrayBuffer());
    writeFileSync(`public/fonts/${name}`, buf);
    seen.set(src, name); files++; bytes += buf.length;
  }
  out += `/* ${subset} */\n${face.replace(/url\([^)]+\)/, `url(/fonts/${seen.get(src)})`)}\n`;
}
writeFileSync("src/styles/fonts.css", out);
writeFileSync("public/fonts/LICENSE.txt", `Fonts in this folder: Rubik, Secular One, Assistant, Heebo, Cormorant Garamond, Fraunces, Noto Serif Hebrew.
Each is licensed under the SIL Open Font License, Version 1.1 (https://openfontlicense.org), by its respective authors.
Downloaded from the Google Fonts service for self-hosting.
`);
console.log(`${files} font files, ${Math.round(bytes / 1024)} KB, ${blocks.filter(b => KEEP.has(b[1])).length} @font-face rules`);
