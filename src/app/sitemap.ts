import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://leesferryonthefly.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/booking", changeFrequency: "weekly", priority: 0.95 },
    { path: "/backhaul", changeFrequency: "monthly", priority: 0.9 },
    { path: "/guides", changeFrequency: "monthly", priority: 0.8 },
    { path: "/boat-gear", changeFrequency: "monthly", priority: 0.7 },
    { path: "/lodging", changeFrequency: "monthly", priority: 0.7 },
    { path: "/entries", changeFrequency: "weekly", priority: 0.6 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
