/**
 * sitemap.xml, generated at build time from the pages that exist, so it never goes stale.
 * Leaves out dynamic routes, excluded pages (site.seo.sitemapExclude) and itself.
 * No lastmod/changefreq/priority: Google ignores the last two, and a guessed lastmod hurts more than none.
 */
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "../config/site";

const pageFiles = Object.keys(import.meta.glob("./**/*.{astro,md,mdx}"));

function toPath(file: string): string | null {
  const rel = file.replace(/^\.\//, "").replace(/\.(astro|mdx?)$/, "");
  if (rel.includes("[") || rel.split("/").some(seg => seg.startsWith("_"))) return null;
  if (rel === "index") return "/";
  if (rel.endsWith("/index")) return `/${rel.slice(0, -"index".length)}`;
  return `/${rel}.html`; // build.format "file": every page is served as /name.html
}

export const sitemapPaths = async (): Promise<string[]> => {
  const exclude = new Set(site.seo.sitemapExclude);
  const paths = pageFiles.map(toPath).filter((p): p is string => p !== null && !exclude.has(p));
  // Pages generated from content (dynamic routes are skipped above).
  const guides = [...(await getCollection("guides", g => !g.data.draft)), ...(await getCollection("htmlGuides", g => !g.data.draft))].map(g => `/${g.id}.html`);
  return [...new Set([...paths, ...guides, ...site.seo.sitemapExtra])].sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));
};

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

export const GET: APIRoute = async () => {
  const urls = (await sitemapPaths()).map(p => `  <url><loc>${esc(new URL(p, site.url).href)}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
