/**
 * W10 forms (owner decisions 28 Nov 2026):
 * - every form sends to Formspree (no email address in the page); the form code lives in one setting,
 *   src/config/site.ts -> forms.website, written into pages as __FORM_WEBSITE__ and filled in at build time
 * - each form keeps its own subject line so submissions can be told apart
 * - no Gmail address anywhere in the pages: links and fallbacks use info@mataytasim.co.il
 *   node scripts/forms-w10.mjs
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";

const TOKEN = "__FORM_WEBSITE__";
const log = [];
const GMAILS = /\b(?:mataytasim|ormanela)@gmail\.com\b/g;

for (const slug of readdirSync("src/carried")) {
  const dir = `src/carried/${slug}`;
  // ---- scripts ----
  const sf = `${dir}/scripts.json`;
  if (existsSync(sf)) {
    const list = JSON.parse(readFileSync(sf, "utf8"));
    let changed = 0;
    const out = list.map(x => {
      if (!x.code) return x;
      let c = x.code;
      const before = c;
      // FormSubmit AJAX -> Formspree JSON reply; a failed send is treated as a failure (falls back to an email draft).
      c = c.replace(/fetch\(\s*'https:\/\/formsubmit\.co\/ajax\/[^']+'\s*,\s*\{\s*method\s*:\s*'POST'\s*,\s*body\s*:\s*formData\s*\}\s*\)/g,
        `fetch('https://formspree.io/f/${TOKEN}', { method: 'POST', body: formData, headers: { Accept: 'application/json' } }).then(function (r) { if (!r.ok) throw new Error('form'); return r; })`);
      c = c.replace(/\s*formData\.append\('_template',\s*'table'\);/g, "");
      c = c.replace(GMAILS, "info@mataytasim.co.il");
      if (c !== before) changed++;
      return { code: c };
    });
    if (changed) { writeFileSync(sf, JSON.stringify(out, null, 1)); log.push(`${sf}: ${changed} script(s) updated`); }
    if (/formsubmit\.co/.test(JSON.stringify(out))) throw new Error(`${sf}: a FormSubmit address is still left`);
  }
  // ---- page body ----
  const bf = `${dir}/body.html`;
  let b = readFileSync(bf, "utf8");
  const before = b;
  // Plain HTML forms posting to FormSubmit -> Formspree, sent in the background by the layout's form helper.
  b = b.replace(/<form([^>]*?)action="https:\/\/formsubmit\.co\/[^"]+"([^>]*)>([\s\S]*?)<\/form>/g, (_m, a1, a2, inner) => {
    inner = inner
      .replace(/\s*<input type="hidden" name="_next"[^>]*>/g, "")
      .replace(/\s*<input type="hidden" name="_captcha"[^>]*>/g, "")
      .replace(/\s*<input type="hidden" name="_template"[^>]*>/g, "");
    // Honeypot: bots fill it, people never see it.
    inner = `\n      <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0">` + inner;
    return `<form${a1}action="https://formspree.io/f/${TOKEN}" data-ajax-form${a2}>${inner}</form>`;
  });
  b = b.replace(GMAILS, "info@mataytasim.co.il");
  if (b !== before) { writeFileSync(bf, b); log.push(`${bf}: forms/addresses updated`); }
  if (/formsubmit\.co|@gmail\.com/.test(b)) throw new Error(`${bf}: FormSubmit or Gmail still left`);
}
console.log(log.join("\n"));
