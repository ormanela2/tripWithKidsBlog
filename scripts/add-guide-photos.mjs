/**
 * Adds per-day photos and hub facts to a structured guide content file (W16).
 *   node scripts/add-guide-photos.mjs <slug> <photos.json>
 * photos.json: { "hub": { color, colorDark?, bestMonths, highlights }, "days": { "1": { file, alt, credit? }, ... } }
 * - file is relative to src/assets/photos (own photos) or src/assets/photos/commons (licensed, credit required).
 * - Only fills what the JSON gives; never invents. Re-running replaces earlier photos for the same days.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import YAML from "yaml";

const [slug, photosFile] = process.argv.slice(2);
const f = `src/content/guides/${slug}.md`;
const raw = readFileSync(f, "utf8").replace(/\r\n/g, "\n");
const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
if (!m) throw new Error(`${f}: no frontmatter`);
const data = YAML.parse(m[1]);
const spec = JSON.parse(readFileSync(photosFile, "utf8"));

for (const [k, v] of Object.entries(spec.hub ?? {})) data[k] = v;
for (const [n, p] of Object.entries(spec.days ?? {})) {
  const day = data.days[Number(n) - 1];
  if (!day) throw new Error(`day ${n} does not exist in ${slug}`);
  if (!existsSync(`src/assets/photos/${p.file}`)) throw new Error(`missing photo src/assets/photos/${p.file}`);
  if (p.file.startsWith("commons/") && !p.credit) throw new Error(`day ${n}: licensed photo needs a credit`);
  day.photo = { image: `../../assets/photos/${p.file}`, alt: p.alt, ...(p.credit && { credit: p.credit }) };
}
// Keep "photo" as the first key of each day (reads naturally in the file).
data.days = data.days.map(d => (d.photo ? { photo: d.photo, ...Object.fromEntries(Object.entries(d).filter(([k]) => k !== "photo")) } : d));
writeFileSync(f, `---\n${YAML.stringify(data, { lineWidth: 0 })}---\n${m[2].startsWith("\n") ? "" : "\n"}${m[2]}`);
console.log(`${slug}: ${Object.keys(spec.days ?? {}).length} day photos, hub fields: ${Object.keys(spec.hub ?? {}).join(", ") || "none"}`);
