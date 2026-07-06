/**
 * Regenerates family-top-attractions.embed.js after editing data/family-top-attractions.json.
 * Run: npm run build:family-attractions
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const jsonPath = join(__dirname, 'data', 'family-top-attractions.json');
const outPath = join(__dirname, 'family-top-attractions.embed.js');

const json = readFileSync(jsonPath, 'utf8');
JSON.parse(json);
writeFileSync(outPath, 'window.__FAMILY_TOP_ATTRACTIONS__ = ' + json + ';\n');
console.log('Wrote', outPath);
