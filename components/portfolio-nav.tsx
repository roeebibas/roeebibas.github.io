import { Blocks, GalleryHorizontalEnd, Layers3, MonitorSmartphone, Palette, Sparkles } from "lucide-react";

const navItems = [
  { slug: "overview", label: "Overview", count: "5", href: "/#work", Icon: Blocks },
  { slug: "web-design", label: "Web Design", count: "14", href: "/work/web-design", Icon: GalleryHorizontalEnd },
  { slug: "brand-systems", label: "Branding", count: "9", href: "/work/brand-systems", Icon: Palette },
  { slug: "product-uxui", label: "UX/UI", count: "4", href: "/work/product-uxui", Icon: MonitorSmartphone },
  { slug: "campaign-print", label: "Campaigns", count: "17", href: "/work/campaign-print", Icon: Layers3 },
  { slug: "the-locksmith-network", label: "AI & Systems", count: "1", href: "/work/the-locksmith-network", Icon: Sparkles },
];

export function PortfolioNav({ active }: { active: string }) {
  return (
    <nav className="portfolio-nav" aria-label="Portfolio categories">
      <div className="portfolio-nav-inner">
        <span className="portfolio-nav-label">Explore work</span>
        <div className="portfolio-nav-links">
          {navItems.map(({ slug, label, count, href, Icon }) => {
            const content = (
              <>
                <Icon aria-hidden="true" />
                <span>{label}</span>
                <small>{count}</small>
              </>
            );

            return active === slug ? (
              <span className="portfolio-nav-current" aria-current="page" key={slug}>
                {content}
              </span>
            ) : (
              <a href={href} key={slug}>
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
