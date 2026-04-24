import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/data/siteConfig";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article" | "product" | "service";
  schema?: Record<string, any> | Array<Record<string, any>>;
  keywords?: string[];
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  canonical,
  image,
  type = "website",
  schema,
  keywords,
  noindex = false,
}: SEOProps) => {
  const siteTitle = siteConfig.business.name;
  const siteUrl = siteConfig.seo.siteUrl;
  const fullTitle = title 
    ? title.includes("|") ? title : `${title} ${siteConfig.seo.titleSuffix}`
    : siteConfig.seo.defaultTitle;
  
  const metaDescription = description || siteConfig.seo.defaultDescription;
  const metaImage = image || siteConfig.seo.ogImage;
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const canonicalUrl =
    canonical || (pathname ? `${siteUrl}${pathname === "/" ? "" : pathname}` : siteUrl);
  const metaImageUrl = metaImage?.startsWith("http") ? metaImage : `${siteUrl}${metaImage}`;
  const sameAsLinks = [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.twitter,
    siteConfig.social.linkedin,
    siteConfig.social.youtube,
    siteConfig.social.tiktok,
    siteConfig.social.checkatrade,
  ].filter(Boolean);
  const organizationId = `${siteUrl}#organization`;
  const websiteId = `${siteUrl}#website`;
  const webpageId = `${canonicalUrl}#webpage`;

  // Base Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    "name": siteConfig.business.name,
    "url": siteUrl,
    "logo": `${siteUrl}/kirkhall-logo-dark.svg`,
    "image": metaImageUrl,
    "description": siteConfig.business.tagline,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "foundingDate": String(siteConfig.business.foundedYear),
    "slogan": siteConfig.business.tagline,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.line1,
      "addressLocality": siteConfig.address.city,
      "postalCode": siteConfig.address.postcode,
      "addressCountry": siteConfig.address.country,
    },
    "sameAs": sameAsLinks,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}#localbusiness`,
    "name": siteConfig.business.name,
    "url": siteUrl,
    "image": metaImageUrl,
    "priceRange": "££-£££",
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "areaServed": siteConfig.serviceArea.regions.map((region) => ({
      "@type": "Place",
      "name": region,
    })),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.line1,
      "addressLocality": siteConfig.address.city,
      "postalCode": siteConfig.address.postcode,
      "addressCountry": siteConfig.address.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "55.8169",
      "longitude": "-3.9728"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "parentOrganization": { "@id": organizationId },
    "sameAs": sameAsLinks,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    "url": siteUrl,
    "name": siteConfig.business.name,
    "inLanguage": siteConfig.seo.language,
    "publisher": { "@id": organizationId },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": webpageId,
    "url": canonicalUrl,
    "name": fullTitle,
    "description": metaDescription,
    "inLanguage": siteConfig.seo.language,
    "isPartOf": { "@id": websiteId },
    "about": { "@id": organizationId },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": metaImageUrl,
    },
  };

  const additionalSchemas = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  const structuredData = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    webPageSchema,
    ...additionalSchemas,
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="author" content={siteTitle} />
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow, noarchive" />}
      {!noindex && (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}
      <link rel="alternate" hrefLang={siteConfig.seo.language} href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={metaImageUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content={siteConfig.seo.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImageUrl} />
      {siteConfig.seo.twitterHandle && (
        <meta name="twitter:site" content={siteConfig.seo.twitterHandle} />
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
