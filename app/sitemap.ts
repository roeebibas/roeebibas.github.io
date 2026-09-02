import type { MetadataRoute } from "next";

import { projects } from "@/lib/portfolio-projects";

export const dynamic = "force-static";

const siteUrl = "https://roeebibas.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const piecePages: MetadataRoute.Sitemap = projects.flatMap((project) =>
    project.images.map((image) => ({
      url: `${siteUrl}/work/${project.slug}/${image.slug}/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  );

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
    ...piecePages,
  ];
}
