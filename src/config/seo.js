/**
 * SEO config. Set VITE_SITE_URL in .env for production (e.g. https://serpwiser.com).
 */
export const SITE_URL = import.meta.env.VITE_SITE_URL || "https://serpwiser.com";
export const SITE_NAME = "SERP Wiser";
export const DEFAULT_DESCRIPTION =
  "SERP Wiser delivers data-driven digital marketing: SEO, content marketing, social media, PPC, and web design. Grow traffic, leads, and revenue.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`;

export const ROUTE_META = {
  "/": {
    title: "SERP Wiser | Digital Marketing That Drives",
    description: DEFAULT_DESCRIPTION,
    keywords: "digital marketing, SEO agency, content marketing, PPC, social media marketing, web design, SERP Wiser",
  },
  "/contact": {
    title: "Contact Us | SERP Wiser",
    description: "Get in touch with SERP Wiser for a free consultation. Discuss your digital marketing, SEO, and growth goals.",
    keywords: "contact SERP Wiser, marketing consultation, SEO quote",
  },
  "/case-study": {
    title: "Case Studies | SERP Wiser",
    description: "Explore how SERP Wiser has helped businesses grow with SEO, content, and digital marketing. Real results and success stories.",
    keywords: "marketing case studies, SEO results, digital marketing success",
  },
  "/privacy": {
    title: "Privacy Policy | SERP Wiser",
    description: "SERP Wiser privacy policy. How we collect, use, and protect your information.",
  },
  "/terms": {
    title: "Terms & Conditions | SERP Wiser",
    description: "Terms and conditions for using SERP Wiser services and website.",
  },
};
