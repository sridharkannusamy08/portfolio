const WHATSAPP_MESSAGE =
  "Hi Sridhar, I'd like to connect regarding marketing support and growth strategies for my business.";

export const SITE = {
  name: "Sridhar Kannusamy",
  brand: "BRANDZ",
  tagline: "Building Brands That Grow.",
  whatsapp: `https://wa.me/919047793619?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  email: "mailto:sridharkannusamy8@gmail.com",
  linkedin: "https://www.linkedin.com/in/sridhar-kannusamy-88b333244/",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const TRUST_BADGES = [
  "Founder of BRANDZ",
  "MBA Digital Marketing",
  "Brand Strategist",
  "SEO Specialist",
  "Meta Ads Expert",
] as const;

export const TIMELINE = [
  { year: "2022", title: "Started Digital Journey", desc: "Began exploring brand building and digital marketing fundamentals." },
  { year: "2023", title: "Founded BRANDZ", desc: "Launched BRANDZ to help businesses build memorable, growth-focused brands." },
  { year: "2024", title: "Expanded Client Portfolio", desc: "Delivered brand strategy and lead generation for diverse industries." },
  { year: "2025", title: "MBA in Digital Marketing", desc: "Pursuing advanced marketing education while scaling client results." },
  { year: "2026", title: "Scaling Impact", desc: "Building high-ticket consulting partnerships and enterprise brand systems." },
] as const;

export const WHY_CARDS = [
  { title: "Strategic Thinking", desc: "Every decision is rooted in business goals, audience insights, and long-term brand equity." },
  { title: "Data-Driven", desc: "Campaigns backed by analytics, A/B testing, and measurable KPIs—not guesswork." },
  { title: "Brand-First Approach", desc: "Marketing that strengthens identity while driving qualified leads and revenue." },
  { title: "Full-Funnel Expertise", desc: "From awareness to conversion—SEO, ads, content, and web work in harmony." },
  { title: "Client Partnership", desc: "Transparent communication, proactive strategy, and results you can track weekly." },
  { title: "Growth Mindset", desc: "Continuously optimizing campaigns to scale profitably as your business evolves." },
] as const;

export const SERVICES = [
  { title: "Brand Strategy", desc: "Positioning, messaging, and identity systems that differentiate you in crowded markets.", icon: "Target" },
  { title: "Web Design", desc: "Conversion-focused websites that reflect your brand and capture qualified leads.", icon: "Layout" },
  { title: "SEO", desc: "Technical and content SEO to rank higher, drive organic traffic, and build authority.", icon: "Search" },
  { title: "Meta Ads", desc: "High-ROI Facebook & Instagram campaigns with precise targeting and creative testing.", icon: "Megaphone" },
  { title: "Content Marketing", desc: "Strategic content that educates, engages, and converts your ideal customers.", icon: "PenLine" },
  { title: "Consulting", desc: "1-on-1 strategy sessions to audit, plan, and accelerate your marketing growth.", icon: "Briefcase" },
] as const;

export const CASE_STUDIES = [
  {
    name: "Bharat GRC",
    challenge: "Establish brand credibility in a competitive compliance industry with limited online presence.",
    solution: "Developed a comprehensive brand identity, SEO-optimized website, and targeted Meta ad campaigns.",
    results: "300% increase in qualified leads and top-3 Google rankings for key industry terms.",
    gradient: "from-orange-500/20 to-amber-600/10",
  },
  {
    name: "Gowri Laksh Organic",
    challenge: "Launch an organic products brand in a saturated wellness market with zero digital footprint.",
    solution: "Crafted authentic brand storytelling, e-commerce web design, and content-driven social strategy.",
    results: "500+ organic followers in 3 months and consistent monthly sales from digital channels.",
    gradient: "from-green-500/20 to-emerald-600/10",
  },
  {
    name: "BOGATCHI Chocolates",
    challenge: "Premium artisan chocolate brand needed luxury positioning and e-commerce conversion optimization.",
    solution: "Premium visual identity, product photography direction, and Meta ads targeting gift buyers.",
    results: "2x ROAS on ad spend and 40% increase in average order value within 60 days.",
    gradient: "from-amber-500/20 to-orange-600/10",
  },
  {
    name: "Om Shakthi Organic Rice",
    challenge: "Traditional rice brand struggling to reach health-conscious urban consumers online.",
    solution: "Health-focused brand messaging, SEO content strategy, and geo-targeted digital campaigns.",
    results: "150% growth in website traffic and partnerships with 5+ retail distributors.",
    gradient: "from-yellow-500/20 to-orange-500/10",
  },
] as const;

export const SKILLS = [
  { name: "Digital Marketing", value: 95 },
  { name: "Brand Strategy", value: 92 },
  { name: "SEO", value: 90 },
  { name: "Meta Ads", value: 88 },
  { name: "Content Marketing", value: 85 },
  { name: "Web Design", value: 82 },
] as const;

export const TOOLS = [
  "Meta Ads Manager",
  "Google Analytics",
  "Canva",
  "WordPress",
  "Premiere Pro",
  "SEMrush",
  "Mailchimp",
  "Figma",
] as const;

export const ACHIEVEMENTS = [
  { title: "10+ Brand Projects", desc: "Delivered end-to-end brand systems for diverse industries.", icon: "Award" },
  { title: "5+ Websites Launched", desc: "Conversion-optimized sites that drive leads and sales.", icon: "Globe" },
  { title: "Multiple Brands Consulted", desc: "Strategic advisory for startups and established businesses.", icon: "Users" },
  { title: "MBA Digital Marketing", desc: "Advanced education in modern marketing strategy.", icon: "GraduationCap" },
] as const;

export const STATS = [
  { label: "Brand Projects", value: 10, suffix: "+" },
  { label: "Websites Built", value: 5, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Avg. Lead Growth", value: 200, suffix: "%" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Founder, Bharat GRC",
    text: "Sridhar transformed our online presence completely. Our lead generation increased 3x within months. Highly recommended!",
    initials: "RK",
  },
  {
    name: "Priya Menon",
    role: "CEO, Gowri Laksh Organic",
    text: "The brand strategy Sridhar developed perfectly captured our organic ethos. Sales have been consistently growing ever since.",
    initials: "PM",
  },
  {
    name: "Arun Bose",
    role: "Owner, BOGATCHI Chocolates",
    text: "Premium positioning and Meta ads that actually convert. Our ROAS doubled and customers love the new brand identity.",
    initials: "AB",
  },
  {
    name: "Lakshmi Devi",
    role: "Director, Om Shakthi Rice",
    text: "From zero digital presence to partnerships with major retailers. Sridhar's SEO and content strategy delivered real results.",
    initials: "LD",
  },
] as const;

export const PROCESS_STEPS = [
  { step: "01", title: "Discovery", desc: "Deep dive into your business, audience, competitors, and goals." },
  { step: "02", title: "Strategy", desc: "Custom roadmap with brand positioning, channels, and KPIs." },
  { step: "03", title: "Execution", desc: "Launch campaigns, build assets, and optimize in real-time." },
  { step: "04", title: "Scaling", desc: "Analyze results, refine tactics, and scale what works profitably." },
] as const;
