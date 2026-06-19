const WHATSAPP_MESSAGE =
  "Hi Sridhar, I'd like to discuss how you can help scale my business through performance marketing and growth strategy.";

export const SITE = {
  name: "Sridhar Kannusamy",
  brand: "BRANDZ",
  tagline: "Revenue-Focused Growth Marketing.",
  whatsapp: `https://wa.me/919047793619?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  email: "mailto:sridharkannusamy8@gmail.com",
  linkedin: "https://www.linkedin.com/in/sridhar-kannusamy-88b333244/",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
] as const;

export const TRUST_BADGES = [
  "4+ Years Experience",
  "15+ Businesses Served",
  "₹7L+ Ad Spend Managed",
  "Up To 20X ROAS",
  "International Client Experience",
] as const;

export const TIMELINE = [
  {
    year: "2022",
    title: "Entered the Growth Marketing Space",
    desc: "Started building expertise in performance marketing, brand strategy, and SEO — generating real results from day one.",
  },
  {
    year: "2023",
    title: "Founded BRANDZ",
    desc: "Launched BRANDZ as a growth consulting platform — helping businesses build revenue systems, not just social media presence.",
  },
  {
    year: "2024",
    title: "15+ Businesses Scaled",
    desc: "Delivered measurable growth across industries: ₹7L+ in managed ad spend, 20X peak ROAS, international client projects.",
  },
  {
    year: "2025",
    title: "MBA in Digital Marketing",
    desc: "Advanced academic study in marketing science while continuing to execute high-impact campaigns for clients globally.",
  },
  {
    year: "2026",
    title: "Scaling the Consulting Practice",
    desc: "Building high-ticket consulting partnerships for businesses serious about revenue growth and market leadership.",
  },
] as const;

export const WHY_CARDS = [
  {
    title: "Revenue-First Thinking",
    desc: "Every strategy I build is evaluated against one question: will this generate more revenue? Vanity metrics don't pay your bills.",
  },
  {
    title: "Full-Funnel Execution",
    desc: "From brand awareness to conversion — I architect the entire customer journey, not just one disconnected piece of it.",
  },
  {
    title: "Data-Driven Decisions",
    desc: "Campaigns backed by real analytics, A/B testing, and attribution tracking. Every rupee is accountable.",
  },
  {
    title: "Industry-Specific Knowledge",
    desc: "15+ businesses across construction, e-commerce, organics, and international markets. I know what works in your industry.",
  },
  {
    title: "Transparent Reporting",
    desc: "Weekly performance updates with plain-English insights — no jargon, no hiding behind metrics that don't matter.",
  },
  {
    title: "Long-Term Partnership",
    desc: "I work with clients as a growth partner, not a vendor. Your success and mine are the same conversation.",
  },
] as const;

export const SERVICES = [
  {
    title: "Performance Marketing",
    desc: "Meta Ads and Google Ads campaigns built for ROI — audience architecture, creative testing, conversion tracking, and systematic scaling.",
    icon: "Target",
  },
  {
    title: "Technical SEO",
    desc: "Deep technical audits, Core Web Vitals, structured data, and content SEO that drives compounding organic revenue over time.",
    icon: "Search",
  },
  {
    title: "Brand Strategy",
    desc: "Positioning, messaging, and identity systems that make you the obvious choice — and allow you to command premium pricing.",
    icon: "Layout",
  },
  {
    title: "Growth Consulting",
    desc: "1-on-1 strategy engagements to audit your entire growth system and build a roadmap from your current state to your revenue target.",
    icon: "Briefcase",
  },
  {
    title: "Content & Social",
    desc: "Strategic content that builds authority, educates your audience, and consistently converts followers into qualified leads.",
    icon: "PenLine",
  },
  {
    title: "Marketing Automation",
    desc: "Lead capture, nurture sequences, follow-up systems, and onboarding automation that generates revenue while you sleep.",
    icon: "Megaphone",
  },
] as const;

export const WHO_I_HELP = [
  {
    industry: "Construction Companies",
    icon: "Building2",
    challenge:
      "Losing contracts to competitors with stronger online presence despite offering superior quality work.",
    solution:
      "SEO-optimised presence, targeted lead generation campaigns, and a brand that communicates trust before the first call.",
    tags: ["SEO", "Lead Gen", "Brand Authority"],
  },
  {
    industry: "E-commerce Brands",
    icon: "ShoppingBag",
    challenge:
      "High ad spend with low ROAS, rising CAC, and no systematic approach to retention or repeat purchases.",
    solution:
      "Full-funnel Meta/Google Ads strategy, conversion rate optimisation, and retention automation that drives LTV.",
    tags: ["Meta Ads", "CRO", "Retention"],
  },
  {
    industry: "Startups",
    icon: "Rocket",
    challenge:
      "Limited budget, unclear positioning, and pressure to prove traction fast without wasting runway on the wrong channels.",
    solution:
      "Channel validation framework, lean performance marketing, and brand positioning that attracts investors and customers simultaneously.",
    tags: ["Growth Hacking", "Brand", "Ads"],
  },
  {
    industry: "Interior Designers",
    icon: "Palette",
    challenge:
      "Inconsistent project pipeline relying entirely on referrals, with no digital system to attract high-value clients.",
    solution:
      "Portfolio-driven content strategy, Instagram presence that showcases design quality, and targeted local lead generation.",
    tags: ["Social Media", "Lead Gen", "Content"],
  },
  {
    industry: "Wedding Photographers",
    icon: "Camera",
    challenge:
      "Competing in a saturated market on price rather than positioning, resulting in low-budget enquiries and feast-or-famine bookings.",
    solution:
      "Premium brand positioning, SEO for 'wedding photographer [city]' searches, and a booking system that attracts premium clients.",
    tags: ["Brand Positioning", "SEO", "Premium Pricing"],
  },
  {
    industry: "Organic Product Brands",
    icon: "Leaf",
    challenge:
      "Competing against large FMCG brands with a fraction of the budget, struggling to reach health-conscious urban consumers.",
    solution:
      "Authentic brand storytelling, targeted social campaigns to health-conscious audiences, and e-commerce conversion optimisation.",
    tags: ["Brand Story", "Social Ads", "E-commerce"],
  },
] as const;

export const WHY_FAILS = [
  "Running ads without a documented strategy or conversion tracking",
  "Weak brand positioning that competes on price instead of value",
  "No customer journey planning — leads fall through the cracks",
  "Ignoring retention and lifetime value — chasing new customers only",
  "No marketing automation — manual follow-up fails at scale",
] as const;

export const STATS = [
  { label: "Highest ROAS Achieved", value: 20, suffix: "X", prefix: "" },
  { label: "Revenue Generated", value: 6, suffix: "L+", prefix: "₹" },
  { label: "Businesses Served", value: 15, suffix: "+", prefix: "" },
  { label: "Ad Spend Managed", value: 7, suffix: "L+", prefix: "₹" },
] as const;

export const ACHIEVEMENTS = [
  {
    title: "15+ Businesses Scaled",
    desc: "From startups to established businesses across 8+ industries in India and internationally.",
    icon: "Users",
  },
  {
    title: "20X Peak ROAS",
    desc: "Highest return on ad spend achieved — ₹6L revenue from ₹30K spend for a B2B client.",
    icon: "TrendingUp",
  },
  {
    title: "International Projects",
    desc: "Delivered technical SEO recovery and growth consulting for UK-based brands.",
    icon: "Globe",
  },
  {
    title: "MBA Digital Marketing",
    desc: "Advanced academic study combining theory with real-world performance marketing execution.",
    icon: "GraduationCap",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Founder",
    company: "Bharat GRC",
    businessType: "Construction Compliance",
    text: "Sridhar transformed our online presence completely. Within 3 months we had more qualified leads than the previous year combined. The 20X ROAS was beyond anything we expected.",
    result: "20X ROAS",
    initials: "RK",
  },
  {
    name: "Sarah M.",
    role: "Director",
    company: "UK Wellness Brand",
    businessType: "Health & Wellness (UK)",
    text: "I was panicking when our traffic dropped 60% after a Google update. Sridhar identified problems our previous agency had missed for months and fixed them systematically. Traffic recovered in 8 weeks.",
    result: "85% Traffic Recovered",
    initials: "SM",
  },
  {
    name: "Priya Menon",
    role: "CEO",
    company: "Gowri Laksh Organic",
    businessType: "Organic Products",
    text: "The brand strategy Sridhar developed perfectly captured our organic ethos. We went from zero digital presence to consistent monthly sales. The content strategy he built still drives results 6 months later.",
    result: "500+ Followers in 90 Days",
    initials: "PM",
  },
  {
    name: "Arun Bose",
    role: "Owner",
    company: "BOGATCHI Chocolates",
    businessType: "Artisan Food & Gifts",
    text: "Premium positioning and Meta ads that actually convert. Our ROAS doubled and the average order value increased 40%. Clients now ask for us by name — not just 'that chocolate brand'.",
    result: "2X ROAS, 40% AOV Increase",
    initials: "AB",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    icon: "Search",
    desc: "Deep audit of your business, audience, competitors, and current marketing. No assumptions — only data.",
  },
  {
    step: "02",
    title: "Strategize",
    icon: "Target",
    desc: "Custom growth roadmap with channel selection, budget allocation, positioning, and 90-day KPI targets.",
  },
  {
    step: "03",
    title: "Execute",
    icon: "Zap",
    desc: "Launch campaigns, build assets, set up tracking, and run creative tests — with weekly reporting.",
  },
  {
    step: "04",
    title: "Optimize",
    icon: "TrendingUp",
    desc: "Data-driven refinements. Cut what doesn't work. Scale what does. Improve conversion at every touchpoint.",
  },
  {
    step: "05",
    title: "Scale",
    icon: "Rocket",
    desc: "Systematic growth — increasing budget, expanding markets, and adding automation to grow without growing costs linearly.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How much should I spend on ads to start?",
    answer:
      "For Meta Ads, I recommend a minimum of ₹15,000–₹20,000/month to give the algorithm enough data to learn and optimise. Below this threshold, results are inconsistent and the learning phase takes too long. For Google Ads, ₹20,000–₹30,000/month is a realistic starting point for most niches. The right budget depends on your industry, target CPA, and competition — I'll give you a specific recommendation after understanding your business.",
  },
  {
    question: "Which platform is best for my business?",
    answer:
      "It depends on where your customers are and what stage of buying journey you're targeting. Meta Ads (Facebook + Instagram) excels at creating demand for visual products and B2C services. Google Ads captures existing demand from people actively searching. SEO builds compounding organic visibility. For most businesses, I recommend starting with one paid channel and SEO simultaneously. I assess your business before recommending a channel mix.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Meta Ads: Initial data within 2 weeks, meaningful results within 30–45 days as the algorithm learns. SEO: Early technical improvements show within 4–8 weeks; significant organic traffic growth typically takes 3–6 months. The honest answer is that sustainable growth takes time. I don't promise overnight results — I promise a system that compounds over time. Quick wins in the first 30 days are common, but the real returns build over 90+ days.",
  },
  {
    question: "Can you manage everything for me end-to-end?",
    answer:
      "Yes. My full growth management service covers strategy, campaign creation, creative direction, landing page review, tracking setup, ongoing optimisation, and weekly reporting. You focus on your business — I handle the marketing engine. I take on a limited number of full-management clients to ensure quality, so availability depends on my current capacity. Reach out via WhatsApp to discuss.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes — I have active experience with UK-based clients, including a technical SEO project that recovered 85% of lost organic traffic for a UK wellness brand. I work across time zones and am comfortable with international payment arrangements. If you're an international business looking for a performance-focused growth consultant with cost-effective rates, let's talk.",
  },
] as const;

export const SKILLS = [
  { name: "Performance Marketing (Meta/Google)", value: 95 },
  { name: "SEO & Technical Audit", value: 90 },
  { name: "Brand Strategy & Positioning", value: 92 },
  { name: "Growth Consulting", value: 88 },
  { name: "Content Strategy", value: 85 },
  { name: "Marketing Automation", value: 82 },
] as const;

export const TOOLS = [
  "Meta Ads Manager",
  "Google Analytics 4",
  "Google Search Console",
  "SEMrush",
  "Screaming Frog",
  "Mailchimp",
  "Interakt (WhatsApp)",
  "Figma",
  "Canva Pro",
  "WordPress",
  "Shopify",
  "Notion",
] as const;
