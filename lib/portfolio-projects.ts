export type PortfolioImage = {
  slug: string;
  src: string;
  alt: string;
  label: string;
  summary: string;
  details: [string, string];
  services?: string[];
  url?: string;
};

export type PortfolioProject = {
  slug: string;
  index: string;
  eyebrow: string;
  title: string;
  cardTitle: string;
  summary: string;
  description: string[];
  services: string[];
  cover?: string;
  images: PortfolioImage[];
  theme: "web" | "network" | "brand" | "product" | "print";
  liveUrl?: string;
};

const legacyWebsites: PortfolioImage[] = [
  {
    slug: "st-charles-locksmith",
    src: "/assets/archive/website-01.webp",
    alt: "Full-page St. Charles Locksmith website design",
    label: "St. Charles Locksmith",
    summary: "An editorial service website using a restrained purple system, custom illustration and a clear long-form content rhythm.",
    details: [
      "The concept makes a local service brand feel considered and recognizable without making the information harder to scan.",
      "Service explanations, reassurance points and contact prompts repeat at useful intervals across the complete page.",
    ],
    url: "https://www.stcharleslocksmiths.com/",
  },
  {
    slug: "albuquerque-locksmith",
    src: "/assets/archive/website-02.webp",
    alt: "Full-page Albuquerque Locksmith website design",
    label: "Albuquerque Locksmith",
    summary: "A dark, geometric website direction that combines hands-on service photography with a strong local-business identity.",
    details: [
      "Angled shapes and deep blues create momentum while the typography keeps urgent information direct and readable.",
      "The full page moves from the opening promise into services, proof, process and a prominent contact action.",
    ],
  },
  {
    slug: "garage-door-service",
    src: "/assets/archive/website-03.webp",
    alt: "Full-page garage door service website design",
    label: "Garage Door Service",
    summary: "A bright service page that turns technical information into friendly, illustrated sections with obvious next actions.",
    details: [
      "Orange and blue accents separate the content into quick visual chapters and keep a long page approachable.",
      "Custom illustration supports explanations of the service instead of acting as decoration alone.",
    ],
  },
  {
    slug: "security-installation-portfolio",
    src: "/assets/archive/website-04.webp",
    alt: "Full-page security and installation company website design",
    label: "Security & Installation",
    summary: "A dark portfolio-led website balancing technical credibility, project imagery and a structured service overview.",
    details: [
      "The visual language uses high-contrast blue details and wide photography to create a precise, professional tone.",
      "Services and completed projects are given equal weight so visitors can understand both capability and experience.",
    ],
  },
  {
    slug: "01-locksmith",
    src: "/assets/archive/website-05.webp",
    alt: "Full-page 01 Locksmith website design",
    label: "01 Locksmith",
    summary: "A premium black-and-gold website direction built around material detail, trust and an established-service feel.",
    details: [
      "The restrained palette gives everyday service content a more distinctive position without reducing clarity.",
      "Large imagery, service categories and credibility sections form a deliberate path toward the contact action.",
    ],
  },
  {
    slug: "locksmith-atlanta",
    src: "/assets/archive/website-06.webp",
    alt: "Full-page Locksmith Atlanta website design",
    label: "Locksmith Atlanta",
    summary: "A clean local-service website using an energetic blue palette and custom lock imagery to make the offer immediately legible.",
    details: [
      "The content hierarchy answers the essential questions first: what the company does, where it works and how to get help.",
      "Illustrated brand cues repeat through service, reassurance and contact sections to keep the page coherent.",
    ],
  },
  {
    slug: "locksmith-campaign-site",
    src: "/assets/archive/website-07.webp",
    alt: "Full-page locksmith campaign website design",
    label: "Locksmith Campaign Site",
    summary: "A playful high-contrast direction that uses oversized type and a campaign-like visual language for a local service brand.",
    details: [
      "Bold red, violet and black create recognition while a conventional information structure keeps the experience usable.",
      "The page demonstrates how an expressive art direction can carry through service, gallery and contact content.",
    ],
  },
  {
    slug: "chicago-locksmith",
    src: "/assets/archive/website-08.webp",
    alt: "Full-page Chicago Locksmith website design",
    label: "Chicago Locksmith",
    summary: "A cool, atmospheric website concept combining local imagery with a spacious editorial layout.",
    details: [
      "Watercolor texture softens the service category while the typography and grid keep information grounded.",
      "The page balances local character, service explanations and project proof without becoming visually crowded.",
    ],
  },
  {
    slug: "detroit-locksmith-24hr",
    src: "/assets/archive/website-09.webp",
    alt: "Full-page Detroit Locksmith 24hr website design",
    label: "Detroit Locksmith 24hr",
    summary: "A light, reassuring service website focused on fast orientation, round-the-clock availability and visible proof of work.",
    details: [
      "Soft blue details and human photography reduce friction in a category often associated with urgency.",
      "The long-form page moves from the main promise into services, availability, team credibility and recent work.",
    ],
  },
  {
    slug: "security-service-website",
    src: "/assets/archive/website-10.webp",
    alt: "Full-page security service website design",
    label: "Security Service Website",
    summary: "A graphic blue website system that turns security hardware and service information into a clear visual story.",
    details: [
      "Large type and product-scale imagery give the design confidence while modular content blocks maintain usability.",
      "The structure supports both quick scanning and a deeper read through services, benefits and customer reassurance.",
    ],
  },
  {
    slug: "carpet-cleaning-brand",
    src: "/assets/archive/website-11.webp",
    alt: "Full-page carpet cleaning company website design",
    label: "Carpet Cleaning Brand",
    summary: "A warm, family-focused service website built around clear benefits, illustrated explanations and strong visual reassurance.",
    details: [
      "Friendly illustration and lifestyle photography make the technical cleaning process feel more accessible.",
      "The page connects services, process, offers, guarantees and customer proof in one consistent conversion path.",
    ],
  },
  {
    slug: "eco-friendly-cleaning",
    src: "/assets/archive/website-12.webp",
    alt: "Full-page eco-friendly cleaning website design",
    label: "Eco-Friendly Cleaning",
    summary: "An airy blue-and-white site using environmental cues and information design to explain a cleaner service proposition.",
    details: [
      "The visual system combines nature imagery, soft texture and icon-led benefits without losing a professional service tone.",
      "Detailed content is broken into manageable sections that end with a direct contact form and clear call to action.",
    ],
  },
];

const websiteArchive: PortfolioImage[] = [
  ...legacyWebsites,
  {
    slug: "usa-total-security",
    src: "/assets/archive/website-13-usa-total-security.webp",
    alt: "Full-page design for the USA Total Security website",
    label: "USA Total Security",
    summary: "A complete security-services website bringing residential and commercial offers into one confident, conversion-led system.",
    details: [
      "The page establishes the brand quickly, then separates services, product categories and trust signals into distinct visual chapters.",
      "Repeated calls to action and clear service grouping help visitors move from a broad need to a specific contact decision.",
    ],
    url: "https://www.usatotalsecurity.com/",
  },
  {
    slug: "speedy-local-locksmith",
    src: "/assets/archive/website-14-speedy-locksmith.webp",
    alt: "Full-page design for the Speedy Locksmith website",
    label: "Speedy Locksmith",
    summary: "A modern emergency-service website using bold typography, motion cues and a flexible card system to make urgent choices simple.",
    details: [
      "The design foregrounds speed and availability while giving residential, commercial and automotive services enough space to remain understandable.",
      "A consistent visual language continues through service cards, local proof, reviews and the final contact invitation.",
    ],
    url: "https://www.speedylocallocksmith.com/",
  },
];

export const projects: PortfolioProject[] = [
  {
    slug: "web-design",
    index: "01",
    eyebrow: "Web design archive",
    title: "Websites designed to feel clear before they feel clever.",
    cardTitle: "Web Design Archive",
    summary: "14 selected websites spanning service brands, campaigns and responsive experiences.",
    description: [
      "A selection from a much wider body of website work. The briefs, audiences and visual languages changed, but the goal stayed practical: help people understand the offer, trust the brand and know what to do next.",
      "These are full-page design presentations, not isolated hero sections. Open any piece to see how the visual system carries through navigation, content, service sections and conversion points.",
    ],
    services: ["Art direction", "Responsive web design", "UX/UI", "Content hierarchy"],
    cover: "/assets/archive/website-14-speedy-locksmith.webp",
    images: websiteArchive,
    theme: "web",
  },
  {
    slug: "brand-systems",
    index: "02",
    eyebrow: "Identity & digital systems",
    title: "Local character, built into a repeatable brand system.",
    cardTitle: "Brand Systems",
    summary: "Nine identity and digital-system presentations, from visual language to responsive application.",
    description: [
      "A local brand should belong to its place without falling back on visual clichés. These systems use typography, color and familiar cues to create distinct identities that still work efficiently across a larger production process.",
      "The work moves from identity decisions into responsive web applications, helping each visual idea stay consistent when it reaches real screens and content.",
    ],
    services: ["Brand identity", "Art direction", "Web design", "Visual systems"],
    cover: "/assets/brand-bronx.webp",
    images: [
      {
        slug: "bronx-digital-identity",
        src: "/assets/brand-bronx.webp",
        alt: "Bronx Locksmith brand and website presentation",
        label: "Bronx Digital Identity",
        summary: "A strong New York-influenced identity designed to make a local locksmith brand feel stable, direct and recognizably urban.",
        details: [
          "The original Wix case study describes a New York-style color direction and a logo combining a lively condensed typeface with a modern finish.",
          "The identity extends into a responsive website, allowing the same typographic confidence and black-and-gold palette to work across real content.",
        ],
      },
      {
        slug: "bronx-brand-system",
        src: "/assets/expanded/brand-bronx-system.webp",
        alt: "Bronx Locksmith brand colors, iconography and local map treatment",
        label: "Bronx Brand System",
        summary: "The supporting system behind the Bronx identity: palette, service icons, map language and repeatable local cues.",
        details: [
          "A compact icon family gives automotive, residential, commercial and emergency services a consistent visual shorthand.",
          "The map treatment and yellow accent make the identity location-aware while remaining practical for ongoing production.",
        ],
      },
      {
        slug: "san-francisco-identity",
        src: "/assets/brand-san-francisco.webp",
        alt: "San Francisco Locksmith brand and website presentation",
        label: "San Francisco Identity",
        summary: "A light, golden identity built to reflect the Bay Area through warmth, space and familiar local landmarks.",
        details: [
          "The Wix case study frames the concept around sunshine and the Golden State, using a thin, relaxed visual direction rather than a heavy service aesthetic.",
          "Golden Gate, tram and neighborhood-house references appear in the logo and iconography, then carry into the responsive site.",
        ],
      },
      {
        slug: "san-francisco-system",
        src: "/assets/expanded/brand-san-francisco-system.webp",
        alt: "San Francisco Locksmith visual identity system",
        label: "San Francisco System",
        summary: "A localized service-brand toolkit uniting logo, skyline illustration, icons, vehicle imagery and a distinctive gold accent.",
        details: [
          "The system uses recognizable location cues selectively, giving the brand a sense of place without turning every element into a landmark.",
          "Reusable service icons and a focused palette make the identity efficient across web pages, vehicles and marketing material.",
        ],
      },
      {
        slug: "new-york-identity",
        src: "/assets/brand-new-york.webp",
        alt: "New York service brand and website presentation",
        label: "New York Identity",
        summary: "A bold metropolitan website identity built for locations across New York City and the surrounding area.",
        details: [
          "The original case study describes a simple structure based on a proven brand framework, strengthened with two navigation levels and attention-grabbing animation.",
          "Condensed display type, monochrome imagery and warm accents create a graphic city tone that remains usable across desktop and mobile.",
        ],
      },
      {
        slug: "new-york-system",
        src: "/assets/expanded/brand-new-york-system.webp",
        alt: "New York Locksmith visual identity and service icon system",
        label: "New York System",
        summary: "A compact city-inspired identity system combining a strong wordmark, service symbols and a warm neutral palette.",
        details: [
          "The visual toolkit translates automotive, residential and commercial services into one recognizable family of symbols.",
          "Illustrated New York cues add character while the limited palette keeps production consistent across locations and formats.",
        ],
      },
      {
        slug: "orlando-identity",
        src: "/assets/brand-orlando.webp",
        alt: "Orlando service brand and website presentation",
        label: "Orlando Identity",
        summary: "A playful Orlando concept built around magic, royal color and a medieval-inspired visual world.",
        details: [
          "The Wix case study connects the city with a magic theme: castle and knight imagery, royal colors and spark details shape the icon family.",
          "The challenge was to let the brand feel fun and distinctive while preserving a clear service structure across responsive screens.",
        ],
      },
      {
        slug: "charlotte-brand-system",
        src: "/assets/expanded/brand-charlotte-system.webp",
        alt: "Charlotte Locksmith visual identity system",
        label: "Charlotte Brand System",
        summary: "A castle-led identity that translates protection and local character into a flexible service icon system.",
        details: [
          "The wordmark, crest and textured watercolor edges share one visual language without requiring every application to use the full composition.",
          "Service-specific illustrations let the identity scale across residential, automotive, commercial and emergency communication.",
        ],
      },
      {
        slug: "rocket-speed-service-system",
        src: "/assets/expanded/brand-rocket-speed-system.webp",
        alt: "Rocket Speed Services visual identity and service icon system",
        label: "Rocket Speed Service System",
        summary: "A shared service identity using a space motif to create cohesion across multiple local brands and categories.",
        details: [
          "A deep violet palette, orbital mark and line icons make the family easy to recognize while individual service labels remain distinct.",
          "The system is designed for repeat use, helping new locations or offers inherit a clear visual foundation quickly.",
        ],
      },
    ],
    theme: "brand",
  },
  {
    slug: "product-uxui",
    index: "03",
    eyebrow: "Product & UX/UI",
    title: "Interfaces that explain themselves.",
    cardTitle: "Product & UX/UI",
    summary: "Dashboards, responsive product concepts and mobile flows organized around quick understanding.",
    description: [
      "Good interface design lowers the amount of explanation a product needs. These concepts use clear hierarchy, repeated patterns and focused visual feedback to guide the task.",
      "The visual layer supports the interaction instead of competing with it, from desktop dashboards to smaller mobile states.",
    ],
    services: ["UX/UI", "Prototyping", "Responsive design", "Design systems"],
    cover: "/assets/product-blue.webp",
    images: [
      {
        slug: "technician-workflow-system",
        src: "/assets/product-blue.webp",
        alt: "Blue product interface across desktop and mobile devices",
        label: "Technician Workflow System",
        summary: "A responsive operations system redesigned to help technicians and team leaders assign, update and manage jobs in the field.",
        details: [
          "The Wix case study defines the audience as practical users who need a friendly, colorful and immediately understandable interface.",
          "A persistent side menu organizes a large action set while preserving a generous content area and readable type on desktop and mobile.",
        ],
        services: ["UX/UI redesign", "Information architecture", "Responsive system", "Workflow design"],
      },
      {
        slug: "hasid2-mobile-experience",
        src: "/assets/product-dark.webp",
        alt: "Dark mobile product interface with gold accents",
        label: "Hasid2 Mobile Experience",
        summary: "A mobile experience that organizes lessons, preferences, favorites and audio content into a focused, icon-led interface.",
        details: [
          "The original Wix archive shows a complete screen family, including onboarding, content browsing, preferences, favorites and playback states.",
          "Repeated patterns and large visual cues make a broad content structure easier to understand for users with different levels of technical confidence.",
        ],
        services: ["Mobile UX/UI", "Navigation design", "Interface system", "Prototyping"],
      },
      {
        slug: "marketing-management-dashboard",
        src: "/assets/ui-dashboard.webp",
        alt: "Marketing management dashboard displayed on a laptop",
        label: "Marketing Management Dashboard",
        summary: "An information-dense office system for tracking technician activity and coordinating work across several marketing platforms.",
        details: [
          "The Wix case study describes a redesign for the main office and marketing team, with more data visible in a comfortable and professional layout.",
          "Clear tables, status colors and repeated controls support frequent operational use without forcing the user through unnecessary screens.",
        ],
        services: ["Dashboard UX/UI", "Data hierarchy", "Workflow mapping", "Design system"],
      },
      {
        slug: "technician-mobile-flow",
        src: "/assets/ui-mobile-suite.webp",
        alt: "Mobile technician workflow screen collection",
        label: "Technician Mobile Flow",
        summary: "A mobile task flow covering sign-in, waiting jobs, assignments, client details, route information and work status.",
        details: [
          "The screen family translates a complex field-service process into a sequence of focused decisions for technicians on the move.",
          "Color-coded states and consistent action placement reduce the amount of interpretation required between accepting a task and completing it.",
        ],
        services: ["Mobile UX/UI", "Task-flow design", "Interface states", "Field workflow"],
      },
    ],
    theme: "product",
  },
  {
    slug: "campaign-print",
    index: "04",
    eyebrow: "Campaign & print",
    title: "Useful information can still have personality.",
    cardTitle: "Campaign & Print",
    summary: "17 selected pieces across e-commerce campaigns, information design and printed editorial work.",
    description: [
      "Information design is often a quiet part of art direction. The work needs enough personality to hold attention, but the message still has to arrive first.",
      "This expanded selection combines e-commerce creative, visual storytelling, editorial layouts and product-focused print work from different stages of my career.",
    ],
    services: ["Information design", "E-commerce creative", "Campaign design", "Print production"],
    cover: "/assets/expanded/campaign-mothers-collage.webp",
    images: [
      {
        slug: "carpet-cleaning-process",
        src: "/assets/print-process.webp",
        alt: "Illustrated professional carpet-cleaning process",
        label: "Carpet Cleaning Process",
        summary: "A horizontal process illustration turning a multi-stage professional service into one friendly, scannable story.",
        details: [
          "Each step combines a short instruction with a consistent character illustration, helping customers understand what will happen before the appointment.",
          "The sequence can work as web content, sales support or a printed explainer without changing the underlying visual logic.",
        ],
      },
      {
        slug: "professional-cleaning-infographic",
        src: "/assets/print-infographic.webp",
        alt: "Vertical professional cleaning infographic",
        label: "Professional Cleaning Infographic",
        summary: "A long-form information graphic combining process, equipment and service benefits in a compact editorial format.",
        details: [
          "Illustration, numbered stages and concise copy create a visual entry point into information that could otherwise feel technical or repetitive.",
          "The composition was designed to remain readable as a complete story while still allowing individual sections to be reused separately.",
        ],
      },
      {
        slug: "mothers-love-campaign",
        src: "/assets/expanded/campaign-mothers-love.webp",
        alt: "Mother's Day personalized jewelry campaign banner",
        label: "A Mother's Love Campaign",
        summary: "A Mother's Day e-commerce banner pairing an emotional message with a clear personalized-jewelry product focus.",
        details: [
          "The creative uses a soft lifestyle image and generous white space to support the sentiment without competing with the product.",
          "Headline, product detail and promotion are organized for quick comprehension across campaign placements.",
        ],
      },
      {
        slug: "love-is-gold-campaign",
        src: "/assets/expanded/campaign-love-is-gold.webp",
        alt: "Gold jewelry collection campaign banner",
        label: "Love Is Gold",
        summary: "A premium campaign direction using close product detail and warm tonal imagery to introduce a gold collection.",
        details: [
          "The type remains deliberately restrained so the finish, scale and emotional value of the jewelry lead the composition.",
          "The layout supports both brand storytelling and a direct collection-level call to action.",
        ],
      },
      {
        slug: "silver-ring-campaign",
        src: "/assets/expanded/campaign-silver-ring.webp",
        alt: "Silver ring product campaign",
        label: "Silver Ring Campaign",
        summary: "A product-led e-commerce banner built around material contrast, personalization and a concise promotional message.",
        details: [
          "A large product crop communicates detail immediately while the neutral background keeps the layout flexible for multilingual use.",
          "The campaign balances emotional positioning with the practical need to show the product clearly at a small screen size.",
        ],
      },
      {
        slug: "personalized-necklace-social",
        src: "/assets/expanded/campaign-want-me.webp",
        alt: "Personalized heart necklace social campaign",
        label: "Personalized Necklace Social",
        summary: "A social-first personalized-jewelry concept using a direct question, a bold product crop and an immediate visual answer.",
        details: [
          "The creative is structured to stop a fast scroll: short copy first, recognizable product second, supporting context last.",
          "The square composition keeps the message and necklace readable across social and marketplace placements.",
        ],
      },
      {
        slug: "mothers-day-product-banner",
        src: "/assets/expanded/campaign-mothers-day.webp",
        alt: "Mother's Day personalized necklace banner",
        label: "Mother's Day Product Banner",
        summary: "A clean seasonal banner connecting a personalized necklace with a warm Mother's Day gifting moment.",
        details: [
          "The product is isolated clearly while soft color and lifestyle photography carry the emotional context.",
          "The modular structure leaves room for localized copy, offer changes and different product variations.",
        ],
      },
      {
        slug: "mothers-day-campaign-system",
        src: "/assets/expanded/campaign-mothers-collage.webp",
        alt: "Mother's Day e-commerce campaign collage",
        label: "Mother's Day Campaign System",
        summary: "A coordinated seasonal campaign showing how one visual direction adapts across multiple products and message lengths.",
        details: [
          "Consistent typography, lighting and emotional tone keep the family recognizable even as layout and product emphasis change.",
          "The system demonstrates hands-on art direction and production across a high-volume e-commerce campaign.",
        ],
      },
      {
        slug: "personalized-mothers-necklace",
        src: "/assets/expanded/campaign-personalized-necklace.webp",
        alt: "Personalized Mother's Day necklace banner",
        label: "Personalized Mother's Necklace",
        summary: "A product banner focused on the relationship between personalization, gifting and an identifiable Mother's Day occasion.",
        details: [
          "The creative keeps the product legible while allowing the lifestyle image to supply warmth and scale.",
          "Copy and layout can be adapted for email, landing pages and paid-media formats without losing the central idea.",
        ],
      },
      {
        slug: "personalized-jewelry-gift",
        src: "/assets/expanded/campaign-jewelry-gift.webp",
        alt: "Personalized jewelry gift campaign",
        label: "Personalized Jewelry Gift",
        summary: "A gifting campaign that combines product choice, emotional positioning and e-commerce clarity in one compact composition.",
        details: [
          "Multiple product options are organized as a coherent family rather than competing individual cutouts.",
          "The visual hierarchy supports quick evaluation of the offer while retaining a polished campaign feel.",
        ],
      },
      {
        slug: "classic-interior-editorial",
        src: "/assets/expanded/print-classic-style.webp",
        alt: "Classic interior style editorial spread",
        label: "Classic Interior Editorial",
        summary: "An editorial print spread translating a classic interior style into a coordinated mix of imagery, typography and product detail.",
        details: [
          "The grid allows mood imagery and explanatory copy to support each other while preserving a calm reading order.",
          "Color, spacing and image selection create a clear category identity within a broader publication system.",
        ],
      },
      {
        slug: "retro-interior-editorial",
        src: "/assets/expanded/print-retro-style.webp",
        alt: "Retro and vintage interior style editorial spread",
        label: "Retro Interior Editorial",
        summary: "A retro and vintage editorial spread using warmer color, expressive detail and a flexible magazine grid.",
        details: [
          "The design distinguishes the style category through image treatment and typography without breaking consistency with the wider series.",
          "Product examples and contextual imagery are balanced so the page remains both inspirational and useful.",
        ],
      },
      {
        slug: "country-interior-editorial",
        src: "/assets/expanded/print-country-style.webp",
        alt: "Country interior style editorial spread",
        label: "Country Interior Editorial",
        summary: "A country-style editorial layout built around natural texture, comfortable pacing and accessible product context.",
        details: [
          "The composition uses a familiar grid but changes scale and imagery to create a distinct, warmer personality.",
          "Editorial hierarchy keeps the longer explanatory content easy to enter from several points on the spread.",
        ],
      },
      {
        slug: "urban-interior-editorial",
        src: "/assets/expanded/print-urban-style.webp",
        alt: "Urban interior style editorial spread",
        label: "Urban Interior Editorial",
        summary: "An urban interior spread using strong architectural imagery and a sharper typographic rhythm within the same editorial family.",
        details: [
          "Contrast, scale and image cropping create an urban tone while shared grid rules maintain consistency across the series.",
          "The layout moves naturally between inspiration, explanation and practical product reference.",
        ],
      },
      {
        slug: "faucet-collection-print",
        src: "/assets/expanded/print-faucets.webp",
        alt: "Print advertisement featuring a faucet collection",
        label: "Faucet Collection Print",
        summary: "A product-focused print composition presenting a faucet collection with clean hierarchy and enough space for technical detail.",
        details: [
          "Large product imagery establishes the collection first, while supporting models and specifications remain easy to compare.",
          "The restrained visual system keeps attention on finish, form and product variety across the page.",
        ],
      },
      {
        slug: "sink-collection-print",
        src: "/assets/expanded/print-sinks.webp",
        alt: "Print advertisement featuring a colorful sink collection",
        label: "Sink Collection Print",
        summary: "A catalog-style print page organizing a varied sink collection through color, repetition and product comparison.",
        details: [
          "Consistent cropping and labeling make several finishes easier to scan without flattening the collection's personality.",
          "The composition balances a lead product moment with the practical demands of a broader range presentation.",
        ],
      },
      {
        slug: "shower-collection-print",
        src: "/assets/expanded/print-showers.webp",
        alt: "Print advertisement featuring a shower collection",
        label: "Shower Collection Print",
        summary: "A product-family print layout combining a strong lead image with structured supporting options and specifications.",
        details: [
          "The design gives the collection a premium tone while keeping model differences and product information visible.",
          "Shared type, spacing and image rules connect the page with the faucet and sink series.",
        ],
      },
    ],
    theme: "print",
  },
  {
    slug: "the-locksmith-network",
    index: "05",
    eyebrow: "AI & scalable systems",
    title: "One creative and content system for hundreds of local markets.",
    cardTitle: "The Locksmith Network",
    summary: "Brand, UX, AI-assisted production and search architecture brought into one working platform.",
    description: [
      "The challenge was bigger than designing another site. The platform needed to keep hundreds of local pages useful, recognizable and manageable as the network expanded.",
      "I shaped the concept, visual standards, information architecture and publishing workflow. AI supports research, prototyping, content production and quality checks, while direction, editing and final decisions remain human.",
    ],
    services: ["Creative direction", "Product & web design", "Content systems", "SEO architecture", "AI workflows"],
    images: [],
    theme: "network",
    liveUrl: "https://thelocksmithnetwork.com/",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPortfolioPiece(categorySlug: string, pieceSlug: string) {
  const project = getProject(categorySlug);
  if (!project) return undefined;

  const image = project.images.find((item) => item.slug === pieceSlug);
  if (!image) return undefined;

  return { project, image };
}
