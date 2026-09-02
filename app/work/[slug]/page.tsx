/* eslint-disable @next/next/no-img-element -- direct static assets avoid the host's broken image proxy */
/* eslint-disable @next/next/no-html-link-for-pages -- full document navigation avoids a vinext client-navigation failure */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  FileSearch,
  Globe2,
  Layers3,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";

import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { PortfolioNav } from "@/components/portfolio-nav";
import { WorkGallery } from "@/components/work-lightbox";
import { BrandMark } from "@/components/brand-mark";
import { getProject, projects } from "@/lib/portfolio-projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.cardTitle} | Roee Bibas`,
    description: project.summary,
  };
}

function NetworkCaseStudy() {
  return (
    <>
      <section className="network-case" data-reveal>
        <div className="network-case-brand">
          <img src="/assets/tln-avatar.svg" alt="The Locksmith Network logo" />
          <div>
            <span>Live digital platform</span>
            <strong>The Locksmith Network</strong>
          </div>
        </div>
        <div className="network-metrics" aria-label="Project scale">
          <div><strong>850+</strong><span>live pages</span></div>
          <div><strong>100+</strong><span>business profiles</span></div>
          <div><strong>Hundreds</strong><span>of locations</span></div>
        </div>
      </section>

      <section className="system-story" data-reveal aria-labelledby="system-story-title">
        <div className="detail-section-heading">
          <p className="eyebrow">How the system works</p>
          <h2 id="system-story-title">A clear route from local data to useful discovery.</h2>
        </div>
        <div className="system-flow">
          <article>
            <span>01</span>
            <Globe2 aria-hidden="true" />
            <h3>Business profiles</h3>
            <p>100+ businesses organized within one recognizable platform.</p>
          </article>
          <article>
            <span>02</span>
            <Layers3 aria-hidden="true" />
            <h3>Structured content</h3>
            <p>Reusable page logic, editorial rules and consistent brand patterns.</p>
          </article>
          <article>
            <span>03</span>
            <MapPin aria-hidden="true" />
            <h3>Local coverage</h3>
            <p>Hundreds of locations connected through more than 850 live pages.</p>
          </article>
          <article>
            <span>04</span>
            <Search aria-hidden="true" />
            <h3>Search & AI discovery</h3>
            <p>Clear entities and useful information built for modern search behavior.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className={`project-detail detail-${project.theme}`}>
      <RevealOnScroll />
      <header className="detail-header">
        <BrandMark />
        <a className="detail-back" href="/#work">
          <ArrowLeft aria-hidden="true" /> All work
        </a>
      </header>

      <section className="detail-hero">
        <div className="detail-hero-copy" data-reveal>
          <p className="eyebrow">{project.index} / {project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          {project.liveUrl ? (
            <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
              Visit live site <ArrowUpRight aria-hidden="true" />
            </a>
          ) : null}
        </div>
        <aside className="detail-services" data-reveal>
          <span>Contribution</span>
          <ul>
            {project.services.map((service) => (
              <li key={service}><CheckCircle2 aria-hidden="true" /> {service}</li>
            ))}
          </ul>
        </aside>
      </section>

      <PortfolioNav active={project.slug} />

      <section className="detail-intro" data-reveal>
        <div className="detail-intro-icon" aria-hidden="true">
          {project.theme === "web" ? <FileSearch /> : <Sparkles />}
        </div>
        <div>
          {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      {project.theme === "network" ? <NetworkCaseStudy /> : (
        <section className="project-gallery-section" aria-labelledby="gallery-title">
          <div className="detail-section-heading" data-reveal>
            <p className="eyebrow">Selected pieces</p>
            <h2 id="gallery-title">
              {project.theme === "web" ? "Open a website to see the full case study." : "Open any piece to see the thinking behind it."}
            </h2>
          </div>
          <WorkGallery categorySlug={project.slug} images={project.images} />
        </section>
      )}

      <nav className="next-project" aria-label="More selected work" data-reveal>
        <span>Keep exploring</span>
        {projects.filter((item) => item.slug !== project.slug).slice(0, 3).map((item) => (
          <a key={item.slug} href={`/work/${item.slug}`}>
            {item.cardTitle} <ArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </nav>

      <footer>
        <p>Roee Bibas · Art Director & Multidisciplinary Designer</p>
        <a href="/">Back home ↑</a>
      </footer>
    </main>
  );
}
