/**
 * schema.org (JSON-LD) helpers. Pages pass the nodes they need to <BaseLayout schema={[...]}>;
 * Organization and WebSite are always added by the Seo component.
 * Only state facts that are visible on the page (Google's rule for structured data).
 */
import { site } from "../config/site";

type Node = Record<string, unknown>;
export const absoluteUrl = (path: string) => new URL(path, site.url).href;

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

export function organization(): Node {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    url: site.url,
    logo: { "@type": "ImageObject", url: absoluteUrl(site.seo.logo) },
    sameAs: [site.social.facebook].filter(Boolean),
  };
}

export function website(): Node {
  return { "@type": "WebSite", "@id": SITE_ID, name: site.name, url: site.url, inLanguage: site.locale, publisher: { "@id": ORG_ID } };
}

/** Breadcrumb trail, home first. Items: [{ name, path }]. */
export function breadcrumb(items: { name: string; path: string }[]): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}

export function itemList(name: string, items: { name: string; path: string }[]): Node {
  return {
    "@type": "ItemList",
    name,
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: absoluteUrl(it.path) })),
  };
}

/** A guide or article. Dates are ISO strings (YYYY-MM-DD); leave out what you don't know. */
export function article(a: { headline: string; path: string; description?: string; image?: string; datePublished?: string; dateModified?: string }): Node {
  return {
    "@type": "Article",
    headline: a.headline,
    ...(a.description && { description: a.description }),
    mainEntityOfPage: absoluteUrl(a.path),
    image: absoluteUrl(a.image ?? site.seo.defaultImage),
    ...(a.datePublished && { datePublished: a.datePublished }),
    ...(a.dateModified && { dateModified: a.dateModified }),
    inLanguage: site.locale,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

/** FAQ: the questions and answers must also appear as text on the page. */
export function faq(items: { q: string; a: string }[]): Node {
  return {
    "@type": "FAQPage",
    mainEntity: items.map(it => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })),
  };
}

/** Serialize a @graph safely for a <script type="application/ld+json">. */
export function graph(nodes: Node[]): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }).replace(/</g, "\\u003c");
}
