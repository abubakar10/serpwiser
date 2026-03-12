import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "../config/seo";

export default function SEO({
  title,
  fullTitle: fullTitleProp,
  description,
  canonicalPath,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  keywords = null,
  jsonLd = null,
}) {
  const canonical = canonicalPath ? `${SITE_URL}${canonicalPath}` : SITE_URL;
  const fullTitle = fullTitleProp || (title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Digital Marketing That Drives`);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <>
          {(Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((item, i) => (
            <script key={i} type="application/ld+json">{JSON.stringify(item)}</script>
          ))}
        </>
      )}
    </Helmet>
  );
}
