import { useEffect } from "react";

const SITE_URL = "https://kayointernational.in";
const DEFAULT_OG_IMAGE = `${SITE_URL}/campus-photo.jpg`;

function upsertMeta(attr, key, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

export default function useSeo({ title, description, schema, image }) {
  useEffect(() => {
    if (title) document.title = title;
    upsertMeta("name", "description", description);

    const canonicalUrl = `${SITE_URL}${window.location.pathname}`;
    upsertLink("canonical", canonicalUrl);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", image || DEFAULT_OG_IMAGE);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image || DEFAULT_OG_IMAGE);
  }, [title, description, image]);

  useEffect(() => {
    if (!schema) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);
}
