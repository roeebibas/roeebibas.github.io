/* eslint-disable @next/next/no-img-element -- full-page portfolio images must render without optimization */

import { ArrowUpRight } from "lucide-react";

import type { PortfolioImage } from "@/lib/portfolio-projects";

export function WorkGallery({
  categorySlug,
  images,
}: {
  categorySlug: string;
  images: PortfolioImage[];
}) {
  return (
    <div className="work-image-grid">
      {images.map((image) => (
        <a
          className="work-image-card"
          href={`/work/${categorySlug}/${image.slug}`}
          key={image.src}
          aria-label={`View ${image.label} case study`}
        >
          <span className="work-image-window">
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span className="work-image-action">View case study</span>
          </span>
          <span className="work-image-meta">
            <span>{image.label}</span>
            <ArrowUpRight aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  );
}
