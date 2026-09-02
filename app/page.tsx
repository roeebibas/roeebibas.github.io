/* eslint-disable @next/next/no-img-element -- direct static assets avoid the host's broken image proxy */
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
  Layers3,
  Mail,
  MonitorSmartphone,
  Palette,
  Phone,
  Search,
  Sparkles,
  WandSparkles,
  Workflow,
} from "lucide-react";

import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { PortfolioNav } from "@/components/portfolio-nav";
import { BrandMark } from "@/components/brand-mark";
import { projects } from "@/lib/portfolio-projects";

const expertise = [
  { label: "Art direction", Icon: Palette },
  { label: "Brand systems", Icon: Layers3 },
  { label: "Web & UX/UI", Icon: MonitorSmartphone },
  { label: "AI-assisted workflows", Icon: WandSparkles },
  { label: "SEO content strategy", Icon: Search },
  { label: "Creative operations", Icon: Workflow },
];

const experience = [
  {
    years: "2015 - Now",
    role: "Art Director",
    company: "Triplelogic",
    detail: "Promoted from Web Designer in 2019. Leading hands-on creative and content delivery across hundreds of websites.",
  },
  {
    years: "2015",
    role: "UX/UI Designer",
    company: "Teleline",
    detail: "Responsive websites, mobile applications, interface systems, campaigns and developer handoff.",
  },
  {
    years: "2014 - 2015",
    role: "Graphic Designer",
    company: "Tenengroup / MyNameNecklace",
    detail: "Multilingual e-commerce creative, product imagery, email, social and marketplace assets.",
  },
  {
    years: "2013 - 2014",
    role: "Graphic Designer & Webmaster",
    company: "Amudey Shlomo",
    detail: "Catalogs, exhibitions, print production, CMS updates and digital marketing content.",
  },
];

export default function Home() {
  return (
    <main>
      <RevealOnScroll />
      <header className="site-header">
        <BrandMark href="#top" />
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a className="nav-contact" href="mailto:roeebibas@gmail.com">Let&apos;s talk</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Art Director · Senior Brand & Web Designer</p>
          <h1>
            Designing brands that work
            <span> - and the systems behind them.</span>
          </h1>
          <p className="hero-intro">
            I am Roee Bibas, a multidisciplinary creative with 14+ years across brand,
            web, UX/UI, content and digital production. I turn ideas into clear visual
            systems - then help them scale with AI, SEO thinking and hands-on delivery.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work <ArrowDown aria-hidden="true" />
            </a>
            <a className="button button-quiet" href="/Roee_Bibas_CV_English.docx" download>
              Download CV <Download aria-hidden="true" />
            </a>
          </div>
          <p className="availability">
            <span aria-hidden="true" /> Open to relocation - Baltics, Czechia, Slovakia & wider EU
          </p>
        </div>

        <div className="hero-art" aria-label="Selected web and product design work">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <figure className="hero-frame hero-frame-main">
            <img
              src="/assets/web-cleaning-system.webp"
              alt="Responsive cleaning service website design shown across devices"
            />
          </figure>
          <figure className="hero-frame hero-frame-float">
            <img src="/assets/ui-dashboard.webp" alt="Interface dashboard displayed on a laptop" />
          </figure>
          <figure className="hero-frame hero-frame-portrait">
            <img src="/assets/roee-illustration.webp" alt="Illustrated portrait of Roee Bibas" />
          </figure>
          <div className="hero-note"><span>14+</span><small>years making ideas usable</small></div>
          <div className="hero-icon-stack" aria-hidden="true">
            <span><Palette /></span>
            <span><Code2 /></span>
            <span><WandSparkles /></span>
            <span><Search /></span>
          </div>
          <div className="hero-system-label" aria-hidden="true">
            <Sparkles /> Design × systems × AI
          </div>
        </div>
      </section>

      <section className="expertise-strip" aria-label="Areas of expertise">
        <div className="ticker">
          {[...expertise, ...expertise].map((item, index) => (
            <span key={`${item.label}-${index}`}>
              <item.Icon aria-hidden="true" /> {item.label} <i aria-hidden="true">✦</i>
            </span>
          ))}
        </div>
      </section>

      <PortfolioNav active="overview" />

      <section className="work-showcase" id="work" aria-labelledby="work-title">
        <div className="work-heading" data-reveal>
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Five clear paths through the work.</h2>
          </div>
          <p>
            Start with the field that matters to you. Each section opens a focused
            gallery, while the navigation stays within reach as you explore.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <a
              className={`portfolio-card portfolio-${project.theme}`}
              href={`/work/${project.slug}`}
              key={project.slug}
              data-reveal
            >
              <div className="portfolio-card-visual">
                {project.theme === "network" ? (
                  <div className="network-card-art">
                    <div className="network-card-brand">
                      <img src="/assets/tln-avatar.svg" alt="" />
                      <span>The Locksmith Network</span>
                    </div>
                    <div className="network-card-grid" aria-hidden="true">
                      <span>100+<small>profiles</small></span>
                      <i />
                      <span>850+<small>pages</small></span>
                      <i />
                      <span>AI + SEO<small>workflow</small></span>
                    </div>
                  </div>
                ) : (
                  <img src={project.cover} alt="" loading="lazy" />
                )}
              </div>
              <div className="portfolio-card-copy">
                <p>{project.index} / {project.eyebrow}</p>
                <h3>{project.cardTitle}</h3>
                <span>{project.summary}</span>
                <strong>View project <ArrowUpRight aria-hidden="true" /></strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="approach" id="about">
        <div className="approach-title" data-reveal>
          <p className="eyebrow">How I work</p>
          <h2>Design is only finished when people can use it.</h2>
        </div>
        <div className="approach-copy" data-reveal>
          <p className="approach-lead">
            I am comfortable moving between a blank page and the messy middle: shaping
            the concept, writing the brief, designing the system, reviewing implementation
            and fixing the details before launch.
          </p>
          <div className="principles">
            <article>
              <span>01</span>
              <h3><Search aria-hidden="true" /> Start with the real problem</h3>
              <p>
                A good-looking answer to the wrong question is still the wrong answer.
                I look for audience intent, business limits and the job the design needs to do.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3><Layers3 aria-hidden="true" /> Build for repetition</h3>
              <p>
                A one-off idea can be beautiful. A strong system keeps working across
                brands, locations, formats and teams without becoming generic.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3><WandSparkles aria-hidden="true" /> Use AI with judgment</h3>
              <p>
                I use generative tools to research, explore, prototype and produce faster.
                Direction, editing and accountability stay human.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-intro" data-reveal>
          <p className="eyebrow">Experience</p>
          <h2>14+ years across design, content and digital production.</h2>
          <p>
            B.A. in Business Administration - Marketing & Advertising, plus a
            professional certificate in Visual Communication & Graphic Design.
          </p>
        </div>
        <div className="timeline" data-reveal>
          {experience.map((item) => (
            <article key={`${item.company}-${item.years}`}>
              <span>{item.years}</span>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" data-reveal>
        <p className="eyebrow">Based in Israel · Open to Europe</p>
        <h2>Have a role, a project or an interesting problem?</h2>
        <div className="contact-row">
          <a href="mailto:roeebibas@gmail.com"><Mail aria-hidden="true" /> roeebibas@gmail.com <ArrowUpRight aria-hidden="true" /></a>
          <a href="tel:+972544520502"><Phone aria-hidden="true" /> +972 54-452-0502</a>
        </div>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/roee-bibas-4617508a/" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="/Roee_Bibas_CV_English.docx" download>
            Download CV <Download aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer>
        <p>Roee Bibas · Art Director & Multidisciplinary Designer</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
