/**
 * Terms page: remove the smart-planning service (not in use; owner decision 28 Nov 2026), including its Google sign-in text.
 *   node scripts/remove-smart-planner-terms.mjs
 * Removes the #smart-planner section and the sentences elsewhere that refer to it. All other wording is unchanged.
 */
import { readFileSync, writeFileSync } from "node:fs";
const f = "src/carried/terms/body.html";
let s = readFileSync(f, "utf8");
const done = [];
const cut = (from, to, why) => { if (!s.includes(from)) throw new Error(`not found: ${why}`); s = s.split(from).join(to); done.push(why); };

// 1. The whole section (from its opening div to the privacy section).
{
  const start = s.indexOf('<div class="section" id="smart-planner">');
  const end = s.indexOf('<div class="section" id="privacy">');
  if (start < 0 || end < 0 || end < start) throw new Error("section bounds not found");
  s = s.slice(0, start) + s.slice(end);
  done.push("smart-planner section removed");
}
// 2. Sentences that refer to it (exact text as on the live page).
cut("השימוש באתר ובשירות <strong>Budapest Smart Planner</strong> (להלן: «<strong>התכנון החכם</strong>») מהווה הסכמה", "השימוש באתר מהווה הסכמה", "opening sentence: site only");
cut("מדיניות זו חלה על האתר השיווקי ועל התכנון החכם, כמפורט להלן.", "מדיניות זו חלה על האתר, כמפורט להלן.", "privacy scope: site only");
cut("\r\n      <li>בתכנון החכם: בנייה ושמירה של תוכנית הטיול, סנכרון בענן, יכולות AI ושיפור השירות</li>", "", "planner data-use bullet removed");
cut(" בתכנון החכם המידע מועבר לספקים המפורטים בסעיף התכנון החכם (אירוח, Google, AI ועוד).", "", "third parties: planner sentence removed");
cut(" התכנון החכם משתמש בעיקר ב-localStorage ו-sessionStorage; בעת התחברות Google עשויות להיקבע עוגיות בדומיין Google.", "", "storage: planner sentence removed");
// 3. Contents links to the removed section, if any.
s = s.replace(/\s*<a[^>]*href="#smart-planner"[^>]*>[\s\S]*?<\/a>/g, () => { done.push("contents link removed"); return ""; });

const visible = s.replace(/<[^>]+>/g, " ");
if (/google|התכנון החכם|Smart Planner/i.test(visible)) throw new Error("a mention is still left on the terms page: " + visible.match(/.{0,60}(google|התכנון החכם|Smart Planner).{0,60}/i)[0]);
writeFileSync(f, s);
console.log(done.join("\n"));
