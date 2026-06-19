// ─────────────────────────────────────────────────────────────────────────────
// PROJECT CONTENT FILE
// To add a new project: add an object to PROJECTS array.
// It will automatically appear in the Projects page and generate a detail page.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | "Performance Marketing"
  | "SEO"
  | "Brand Strategy"
  | "Web Design"
  | "Social Media"
  | "E-commerce";

export type ProjectStatus = "completed" | "ongoing";

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: ProjectCategory[];
  tags: string[];
  description: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: string[];
  keyMetric: { value: string; label: string };
  gradient: string;
  image?: string; // place in /public/projects/
  featured: boolean;
  featuredCaseStudy: boolean;
  status: ProjectStatus;
  duration: string;
  year: number;
  testimonial?: { quote: string; author: string; role: string };
}

export const PROJECTS: Project[] = [
  {
    slug: "bharat-grc-revenue-growth",
    title: "₹6 Lakhs Revenue From ₹30K Ad Spend",
    client: "Bharat GRC",
    industry: "Construction & Compliance",
    category: ["Performance Marketing", "SEO", "Brand Strategy"],
    tags: ["Meta Ads", "SEO", "Brand Identity", "Lead Gen", "20X ROAS"],
    description:
      "Transformed a compliance consulting brand with zero online presence into a high-converting digital business generating ₹6L in trackable revenue from ₹30K in ad spend.",
    challenge:
      "Bharat GRC had zero digital footprint in a highly competitive compliance and construction consulting space. They were relying entirely on word-of-mouth referrals and losing potential clients to competitors who dominated Google. Their brand looked generic—no differentiation, no authority.",
    strategy:
      "Conducted a deep competitor audit to identify positioning gaps. Built a 3-pillar strategy: (1) Brand authority through SEO-optimised content targeting high-intent keywords, (2) Meta Ads targeting decision-makers in construction firms, (3) Conversion-focused landing pages with clear value propositions.",
    execution:
      "Launched brand identity overhaul with new visual language. Built and deployed an SEO-optimised website with service-specific landing pages. Ran Meta Ads using interest + lookalike audiences, A/B testing 12 ad creatives over 60 days. Set up conversion tracking via Meta Pixel + Google Analytics for full attribution.",
    results: [
      "₹6,00,000+ revenue directly attributed to digital campaigns",
      "20X ROAS on Meta Ads at peak campaign performance",
      "Top-3 Google ranking for 8 target keywords",
      "300% increase in qualified inbound leads",
      "Cost-per-lead reduced from ₹4,200 to ₹480",
    ],
    keyMetric: { value: "20X", label: "ROAS Achieved" },
    gradient: "from-orange-500/20 to-amber-600/10",
    featured: true,
    featuredCaseStudy: true,
    status: "completed",
    duration: "3 months",
    year: 2024,
    testimonial: {
      quote:
        "Sridhar completely transformed our online presence. Within 3 months we had more leads than the previous year combined. The ROI was extraordinary.",
      author: "Rajesh Kumar",
      role: "Founder, Bharat GRC",
    },
  },
  {
    slug: "uk-brand-technical-seo-recovery",
    title: "Technical SEO Recovery for UK Brand",
    client: "Confidential — UK Wellness Brand",
    industry: "Health & Wellness (UK Market)",
    category: ["SEO"],
    tags: ["Technical SEO", "Core Web Vitals", "International SEO", "Recovery"],
    description:
      "Full technical SEO audit and recovery for a UK-based wellness brand that had lost 60% of organic traffic following a Google core algorithm update.",
    challenge:
      "A UK wellness brand approached me after a Google core update wiped out 60% of their organic traffic in 3 weeks. Revenue dropped significantly. Their agency had no answers. Initial investigation revealed thin content, crawl errors, duplicate pages, and Core Web Vitals failures.",
    strategy:
      "Ran a complete technical SEO audit covering: crawlability, indexing, structured data, Core Web Vitals, duplicate content, internal linking architecture, and E-E-A-T signals. Prioritised fixes by traffic impact and implementation difficulty.",
    execution:
      "Fixed 340+ crawl errors. Implemented canonical tags across product category pages. Added structured data (Schema markup) for products and reviews. Rewrote meta titles/descriptions for 200+ pages. Optimised Core Web Vitals — improved LCP from 4.8s to 1.9s. Rebuilt internal linking with topical authority in mind.",
    results: [
      "Organic traffic recovered 85% within 8 weeks",
      "Core Web Vitals score improved from Poor to Good across all metrics",
      "340+ crawl errors resolved",
      "22 new first-page rankings for commercial keywords",
      "Revenue from organic channel restored to pre-penalty levels",
    ],
    keyMetric: { value: "85%", label: "Traffic Recovered" },
    gradient: "from-blue-500/20 to-indigo-600/10",
    featured: true,
    featuredCaseStudy: true,
    status: "completed",
    duration: "2 months",
    year: 2025,
    testimonial: {
      quote:
        "I was panicking when my traffic dropped. Sridhar identified problems our previous agency had missed for months and fixed them systematically. Brilliant work.",
      author: "Sarah M.",
      role: "Director, UK Wellness Brand",
    },
  },
  {
    slug: "gowri-laksh-organic-launch",
    title: "Zero to Consistent Sales in 90 Days",
    client: "Gowri Laksh Organic",
    industry: "Organic & Natural Products",
    category: ["Brand Strategy", "Social Media", "Web Design"],
    tags: ["Brand Launch", "E-commerce", "Social Media", "Content Strategy"],
    description:
      "Built and launched an organic products brand from scratch — brand identity, e-commerce website, and content strategy — achieving consistent monthly sales within 90 days.",
    challenge:
      "A zero-digital-footprint organic products business wanting to compete with established natural brands on a limited budget. No brand identity, no website, no social presence.",
    strategy:
      "Authentic-first brand positioning focused on founder story and sourcing transparency. E-commerce website built on conversion principles. Content strategy centred on educational posts about organic living.",
    execution:
      "Developed complete brand identity system. Built Shopify e-commerce store with product photography direction. Launched Instagram and Facebook with content calendar. Ran targeted social campaigns to health-conscious audiences.",
    results: [
      "500+ organic followers within 3 months",
      "Consistent monthly sales from digital channels",
      "15% email list conversion rate on first campaign",
      "Featured in 2 regional health publications",
    ],
    keyMetric: { value: "500+", label: "Organic Followers in 90 Days" },
    gradient: "from-green-500/20 to-emerald-600/10",
    featured: false,
    featuredCaseStudy: false,
    status: "completed",
    duration: "3 months",
    year: 2024,
  },
  {
    slug: "bogatchi-chocolates-luxury-roas",
    title: "2X ROAS — Premium Chocolate Brand",
    client: "BOGATCHI Chocolates",
    industry: "Luxury Food & Gifts",
    category: ["Performance Marketing", "Brand Strategy"],
    tags: ["Meta Ads", "Luxury Positioning", "E-commerce", "ROAS"],
    description:
      "Premium positioning and performance marketing for an artisan chocolate brand targeting gift buyers — doubled ROAS and significantly increased average order value.",
    challenge:
      "Artisan chocolate brand with premium products but generic positioning competing on price rather than perceived luxury value. High cart abandonment, low average order value, and inconsistent Meta Ads performance.",
    strategy:
      "Luxury rebranding to justify premium pricing. Shifted targeting from broad food interest audiences to gift-buyer segments (birthdays, anniversaries, corporate gifting). Created video ad creatives showcasing craftsmanship.",
    execution:
      "Directed product photography and video creation. Rebuilt Meta Ads campaigns with gift-occasion targeting. Implemented dynamic product ads with upsell sequences. Added post-purchase email sequences for repeat buyers.",
    results: [
      "2X ROAS on ad spend within 60 days",
      "40% increase in average order value",
      "Corporate gifting enquiries increased 3X",
      "Return customer rate improved by 28%",
    ],
    keyMetric: { value: "2X", label: "ROAS in 60 Days" },
    gradient: "from-amber-500/20 to-orange-600/10",
    featured: false,
    featuredCaseStudy: false,
    status: "completed",
    duration: "2 months",
    year: 2024,
  },
  {
    slug: "om-shakthi-organic-rice-seo",
    title: "150% Traffic Growth — Traditional Rice Brand",
    client: "Om Shakthi Organic Rice",
    industry: "Agriculture & Food",
    category: ["SEO", "Brand Strategy"],
    tags: ["SEO", "Content Marketing", "Local SEO", "Retail Distribution"],
    description:
      "Health-focused content SEO and brand messaging for a traditional organic rice brand — driving urban consumer awareness and retail distribution partnerships.",
    challenge:
      "Traditional rice brand with no digital presence struggling to reach health-conscious urban consumers. No SEO, no content, no brand positioning for modern markets.",
    strategy:
      "Health-first brand messaging translating traditional rice varieties into modern wellness language. SEO content strategy targeting 'organic rice' search clusters. Geo-targeted campaigns in urban markets.",
    execution:
      "Brand messaging overhaul. Built SEO blog with 20 health-focused articles. Local SEO for regional search visibility. Geo-targeted Google and Meta campaigns in urban centres.",
    results: [
      "150% growth in website organic traffic",
      "5+ new retail distribution partnerships",
      "Top-5 ranking for 15 organic/health food keywords",
      "Urban consumer segment grew from 0 to 30% of revenue",
    ],
    keyMetric: { value: "150%", label: "Organic Traffic Growth" },
    gradient: "from-yellow-500/20 to-orange-500/10",
    featured: false,
    featuredCaseStudy: false,
    status: "completed",
    duration: "4 months",
    year: 2024,
  },
];

// Helper: get featured case studies (max 2)
export function getFeaturedCaseStudies(): Project[] {
  return PROJECTS.filter((p) => p.featuredCaseStudy).slice(0, 2);
}

// Helper: get featured projects for homepage grid
export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

// Helper: get all unique categories
export function getAllCategories(): ProjectCategory[] {
  const cats = new Set<ProjectCategory>();
  PROJECTS.forEach((p) => p.category.forEach((c) => cats.add(c)));
  return Array.from(cats);
}

// Helper: get all unique tags
export function getAllTags(): string[] {
  const tags = new Set<string>();
  PROJECTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags);
}

// Helper: search + filter
export function filterProjects(
  category?: string,
  searchQuery?: string
): Project[] {
  let results = [...PROJECTS];
  if (category && category !== "All") {
    results = results.filter((p) =>
      p.category.includes(category as ProjectCategory)
    );
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.industry.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  return results;
}

// Helper: get single project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
