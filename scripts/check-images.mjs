/**
 * Runs after every build (npm "postbuild"). Fails the build when:
 *  - an <img> has no alt attribute (alt="" is allowed for decorative images)
 *  - an <img> has no width/height (causes layout jumps)
 *  - an image file in the output is over the size budget
 * Prints the total image weight so the "fraction of 21 MB" goal stays visible.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname, relative } from "node:path";

const DIST = "dist";
const MAX_KB = 300; // per image file; the share image (og-image.png, 193 KB) fits
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"]);

function walk(dir) {
  return readdirSync(dir).flatMap(name => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = walk(DIST);
const problems = [];

for (const file of files.filter(f => f.endsWith(".html"))) {
  const html = readFileSync(file, "utf8");
  for (const [tag] of html.matchAll(/<img\b[^>]*>/gi)) {
    const where = `${relative(DIST, file)}: ${tag.slice(0, 90)}…`;
    // A bare `alt` (decorative image) equals alt="".
    if (!/\salt(=|\s|\/?>)/.test(tag)) problems.push(`missing alt    ${where}`);
    if (!/\swidth=/.test(tag) || !/\sheight=/.test(tag)) problems.push(`missing size   ${where}`);
  }
}

let totalKb = 0;
let count = 0;
for (const file of files.filter(f => IMAGE_EXT.has(extname(f).toLowerCase()))) {
  const kb = statSync(file).size / 1024;
  totalKb += kb;
  count++;
  if (kb > MAX_KB) problems.push(`too large      ${relative(DIST, file)} (${Math.round(kb)} KB > ${MAX_KB} KB)`);
}

console.log(`images: ${count} files, ${(totalKb / 1024).toFixed(1)} MB in ${DIST}/`);
if (problems.length) {
  console.error(`\nImage check failed (${problems.length}):\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
console.log("image check passed");
