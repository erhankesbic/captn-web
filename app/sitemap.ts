import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const pages = ["", "/impressum", "/datenschutz", "/app-datenschutz", "/app-nutzungsbedingungen"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({ url: `${SITE_URL}${page}` }));
}
