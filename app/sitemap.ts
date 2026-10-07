import type { MetadataRoute } from "next";

const pages = ["", "/beta", "/impressum", "/datenschutz", "/app-datenschutz", "/app-nutzungsbedingungen"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({ url: `https://getcaptn.de${page}` }));
}
