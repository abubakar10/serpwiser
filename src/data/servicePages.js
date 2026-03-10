const themeGradients = {
  primary: "from-sky-500 to-cyan-600",
  secondary: "from-violet-500 to-purple-600",
  accent: "from-amber-500 to-orange-500",
};

export const servicePages = {
  seo: {
    theme: "primary",
    title: "Search Engine Optimization",
    description: "Improve your search rankings and organic traffic with our data-driven SEO strategies. We combine technical excellence with content and link building to help you rank higher and attract qualified visitors.",
    subServices: ["SEO Audit", "Keyword Research", "On-page SEO", "Off-page SEO", "Technical SEO"],
    benefits: ["Higher rankings", "More organic traffic", "Long-term growth", "Transparent reporting"],
  },
  "ecommerce-seo": {
    theme: "primary",
    title: "Ecommerce SEO",
    description: "Optimize your online store for search engines. We focus on product pages, category structure, and technical SEO to drive more qualified traffic and sales.",
    subServices: ["Product page optimization", "Category SEO", "Schema markup", "Site speed", "Crawlability"],
    benefits: ["More product visibility", "Higher conversion", "Better UX", "Scalable structure"],
  },
  geo: {
    theme: "secondary",
    title: "Generative Engine Optimization",
    description: "Optimize your content for AI-powered search and assistants. We help your brand appear in ChatGPT, Perplexity, and other generative search experiences.",
    subServices: ["Content optimization for AI", "Citation building", "Structured data", "Entity optimization"],
    benefits: ["AI visibility", "Future-ready", "Authority signals", "New traffic sources"],
  },
  "website-development": {
    theme: "secondary",
    title: "Website Development",
    description: "Modern, fast, and conversion-focused websites. We build responsive sites that rank well and convert visitors into customers.",
    subServices: ["Custom development", "CMS integration", "Performance optimization", "SEO-friendly structure"],
    benefits: ["Fast load times", "Mobile-first", "Scalable", "Maintainable"],
  },
  "wordpress-design": {
    theme: "secondary",
    title: "WordPress Web Design",
    description: "Professional WordPress sites that are easy to manage and built for growth. Themes and plugins optimized for speed and SEO.",
    subServices: ["Theme customization", "Plugin selection", "Security", "Updates & maintenance"],
    benefits: ["Easy to use", "SEO-ready", "Secure", "Support included"],
  },
  "shopify-design": {
    theme: "secondary",
    title: "Shopify Web Design",
    description: "Beautiful, high-converting Shopify stores. We design and develop stores that sell and scale with your business.",
    subServices: ["Theme development", "Checkout optimization", "App integration", "Conversion optimization"],
    benefits: ["Conversion-focused", "Scalable", "Fast", "Mobile-optimized"],
  },
  "social-media": {
    theme: "accent",
    title: "Social Media Marketing",
    description: "Grow your presence and engagement across all major social platforms. We create and manage campaigns that build community and drive results.",
    subServices: ["Strategy & planning", "Content creation", "Community management", "Paid social", "Analytics"],
    benefits: ["Brand awareness", "Engagement", "Leads", "Customer loyalty"],
  },
  ppc: {
    theme: "primary",
    title: "Google Ads / PPC",
    description: "Targeted paid campaigns that deliver measurable ROI. We manage Google Ads and other PPC channels to maximize your return on ad spend.",
    subServices: ["Campaign setup", "Keyword research", "Ad copy", "Landing pages", "Bid management"],
    benefits: ["Immediate traffic", "Measurable ROI", "Scalable", "Data-driven"],
  },
  "logo-design": {
    theme: "accent",
    title: "Logo Design",
    description: "Memorable logos and brand identity that stand out. We create designs that work across all touchpoints and build recognition.",
    subServices: ["Brand discovery", "Concept development", "Revisions", "File delivery", "Brand guidelines"],
    benefits: ["Professional identity", "Consistency", "Memorable", "Versatile"],
  },
  "content-marketing": {
    theme: "primary",
    title: "Content Marketing",
    description: "Strategic content that engages and converts. We create blogs, guides, and assets that rank, build authority, and nurture leads.",
    subServices: ["Content strategy", "Blog & articles", "E-books & guides", "Video scripts", "Editorial calendar"],
    benefits: ["Authority", "SEO value", "Lead nurturing", "Long-term assets"],
  },
  "email-marketing": {
    theme: "accent",
    title: "Email Marketing",
    description: "Nurture leads and drive sales with automated email campaigns. We design sequences and one-off campaigns that convert.",
    subServices: ["Strategy", "Automation", "Templates", "Segmentation", "Analytics"],
    benefits: ["Direct reach", "High ROI", "Automation", "Personalization"],
  },
};

export const getServiceGradient = (theme) => themeGradients[theme] || themeGradients.primary;
