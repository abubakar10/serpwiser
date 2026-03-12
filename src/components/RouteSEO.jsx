import { useLocation } from "react-router-dom";
import SEO from "./SEO";
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, ROUTE_META } from "../config/seo";
import { servicePages } from "../data/servicePages";

function getJsonLdOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    sameAs: [
      "https://www.facebook.com/serpwiser",
      "https://twitter.com/serpwiser",
      "https://www.linkedin.com/company/serpwiser",
      "https://www.instagram.com/serpwiser",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${SITE_URL}/contact`,
      availableLanguage: "English",
    },
  };
}

function getJsonLdWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", url: `${SITE_URL}/contact` },
      "query-input": "required name=query",
    },
  };
}

function getJsonLdBreadcrumb(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
  ];
  let url = SITE_URL;
  segments.forEach((segment, i) => {
    url += `/${segment}`;
    const name = segment.replace(/-/g, " ");
    items.push({
      "@type": "ListItem",
      position: i + 2,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      item: url,
    });
  });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export default function RouteSEO() {
  const { pathname } = useLocation();

  // Exact route meta
  const routeMeta = ROUTE_META[pathname];

  // Service page: /services/:slug
  const serviceMatch = pathname.match(/^\/services\/([^/]+)$/);
  const serviceSlug = serviceMatch?.[1];
  const service = serviceSlug ? servicePages[serviceSlug] : null;

  if (routeMeta) {
    const org = getJsonLdOrganization();
    const website = getJsonLdWebSite();
    const breadcrumb = pathname === "/" ? null : getJsonLdBreadcrumb(pathname);
    const jsonLd = pathname === "/" ? [org, website] : breadcrumb ? [breadcrumb] : null;

    return (
      <SEO
        fullTitle={routeMeta.title}
        description={routeMeta.description}
        canonicalPath={pathname}
        keywords={routeMeta.keywords}
        jsonLd={jsonLd}
      />
    );
  }

  if (service) {
    const breadcrumb = getJsonLdBreadcrumb(pathname);
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: { "@type": "Organization", name: SITE_NAME },
      areaServed: "Worldwide",
    };
    return (
      <SEO
        title={service.title}
        description={service.description}
        canonicalPath={pathname}
        jsonLd={[breadcrumb, serviceSchema]}
      />
    );
  }

  // Fallback for unknown routes
  return (
    <SEO
      title="SERP Wiser"
      description={DEFAULT_DESCRIPTION}
      canonicalPath={pathname}
      jsonLd={pathname === "/" ? [getJsonLdOrganization(), getJsonLdWebSite()] : getJsonLdBreadcrumb(pathname)}
    />
  );
}
