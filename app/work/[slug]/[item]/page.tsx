/* eslint-disable @next/next/no-img-element -- portfolio artwork must render at its original proportions */
/* eslint-disable @next/next/no-html-link-for-pages -- full document navigation avoids a vinext client-navigation failure */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

import { PortfolioNav } from "@/components/portfolio-nav";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { BrandMark } from "@/components/brand-mark";
import { getPortfolioPiece, projects } from "@/lib/portfolio-projects";

type PageProps = { params: Promise<{ slug: string; item: string }> };

const storyHeadings = {
  web: "A complete page, not just a polished opening screen.",
  brand: "A visual idea designed to remain useful as it expands.",
  product: "Interface decisions shaped around the task at hand.",
  print: "Clear information, carried by a distinct visual voice.",
  network: "A creative system built for practical scale.",
} as const;

export function generateStaticParams() {
  return projects.flatMap((project) =>
    project.images.map((image) => ({ slug: project.slug, item: image.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, item } = await params;
  const piece = getPortfolioPiece(slug, item);

  if (!piece) return {};

  return {
    title: `${piece.image.label} | Roee Bibas`,
    description: piece.image.summary,
  };
}

export default async function PortfolioPiecePage({ params }: PageProps) {
  const { slug, item } = await params;
  const piece = getPortfolioPiece(slug, item);

  if (!piece) notFound();

  const { project, image } = piece;
  const currentIndex = project.images.findIndex((candidate) => candidate.slug === image.slug);
  const previous = project.images[(currentIndex - 1 + project.images.length) % project.images.length];
  const next = project.images[(currentIndex + 1) % project.images.length];
  const services = image.services ?? project.services;

  return (
    <main className={`piece-detail detail-${project.theme}`}>
      <RevealOnScroll />
      <PortfolioNav active={project.slug} />

      <header className="piece-header">
        <BrandMark />
        <a className="detail-back" href={`/work/${project.slug}`}>
          <ArrowLeft aria-hidden="true" /> Back to {project.cardTitle}
        </a>
      </header>

      <section className="piece-hero">
        <div className="piece-hero-copy" data-reveal>
          <p className="eyebrow">
            {project.cardTitle} · {String(currentIndex + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
          </p>
          <h1>{image.label}</h1>
          <p>{image.summary}</p>
          {image.url ? (
            <a className="button button-primary" href={image.url} target="_blank" rel="noreferrer">
              Visit live site <ExternalLink aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <aside className="piece-contribution" data-reveal>
          <span>Contribution</span>
          <ul>
            {services.map((service) => (
              <li key={service}><CheckCircle2 aria-hidden="true" /> {service}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="piece-story">
        <div className="piece-story-copy" data-reveal>
          <p className="eyebrow">Project notes</p>
          <h2>{storyHeadings[project.theme]}</h2>
          {image.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <figure className={`piece-artwork piece-artwork-${project.theme}`} data-reveal>
          <img src={image.src} alt={image.alt} />
          <figcaption>{image.label} · Selected work by Roee Bibas</figcaption>
        </figure>
      </section>

      <nav className="piece-pagination" aria-label="More work in this category">
        <a href={`/work/${project.slug}/${previous.slug}`}>
          <ChevronLeft aria-hidden="true" />
          <span><small>Previous</small>{previous.label}</span>
        </a>
        <a href={`/work/${project.slug}`} className="piece-pagination-all">
          All {project.cardTitle}
        </a>
        <a href={`/work/${project.slug}/${next.slug}`}>
          <span><small>Next</small>{next.label}</span>
          <ChevronRight aria-hidden="true" />
        </a>
      </nav>

      <section className="piece-contact" data-reveal>
        <p className="eyebrow">Need the wider picture?</p>
        <h2>Let&apos;s talk about the decisions behind the work.</h2>
        <a href="mailto:roeebibas@gmail.com">
          Start a conversation <ArrowUpRight aria-hidden="true" />
        </a>
      </section>

      <footer>
        <p>Roee Bibas · Art Director & Multidisciplinary Designer</p>
        <a href="/">Back home ↑</a>
      </footer>
    </main>
  );
}
