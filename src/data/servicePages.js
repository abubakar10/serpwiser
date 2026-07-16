const themeGradients = {
  primary: "from-cyan-500 to-sky-600",
  secondary: "from-violet-500 to-purple-600",
};

export const servicePages = {
  "gbp-optimization": {
    theme: "primary",
    title: "Google Business Profile Optimization",
    description: "We take over your Google Business Profile completely — optimize every signal, build your reviews, and maintain your listing every week. The result: top 3 ranking on Google Maps and more calls from local customers.",
    subServices: [
      "Full GBP audit — every gap identified before we touch anything",
      "Category optimization — primary and secondary categories set correctly",
      "Keyword-rich business description (750 characters, fully optimized)",
      "Services section — every service listed with keyword-rich descriptions",
      "Photo optimization — interior, exterior, team, and work photos",
      "Weekly GBP posts — updates, offers, and photos every week",
      "Review generation strategy — simple system your team can use daily",
      "Responding to every review within 24 hours",
      "Q&A section setup and management",
      "Citation building — consistent NAP across top local directories",
      "Monthly ranking report — before vs. now with screenshots",
    ],
    benefits: [
      "Top 3 Google Maps ranking",
      "More inbound calls",
      "Month to month — no contracts",
      "100% done for you",
      "Results in 30 days",
      "Transparent monthly reporting",
    ],
  },
  "local-seo": {
    theme: "secondary",
    title: "Full Local SEO Services",
    description: "Our complete local SEO package ranks your business in the Google Maps top 3 AND in Google's organic search results. We cover your GBP listing, your website, your content, and your local authority — everything needed to dominate local search.",
    subServices: [
      "SEO audit — full technical and on-page audit of your website",
      "Keyword research — find the exact terms your local customers search for",
      "On-page SEO — titles, meta descriptions, headings, and content optimization",
      "Technical SEO — site speed, mobile, crawlability, schema markup",
      "Local service pages — dedicated pages for each service and city combination",
      "Content writing — SEO-optimized content for service pages and blog",
      "Off-page SEO — local backlinks and citations from reputable directories",
      "GBP optimization — included, managed alongside your website SEO",
      "Monthly reporting — rankings, organic traffic, GBP performance",
    ],
    benefits: [
      "Rank in Maps AND organic results",
      "Service pages for every city you target",
      "Month to month — no contracts",
      "GBP optimization included",
      "100% done for you",
      "Transparent monthly reporting",
    ],
  },
};

export function getServiceGradient(theme) {
  return themeGradients[theme] || themeGradients.primary;
}
