import type { PageMeta } from "vite-plugin-react-meta-map";
import { siteSettings, siteConfig } from "./data/siteConfig";

interface PageTemplateProps {
  meta: PageMeta;
  params?: Record<string, string>;
}

const BASE_URL = "https://londondec.co.uk";

const PageTemplate = ({ meta }: PageTemplateProps) => {
  const { title, description, ogImage, noindex } = meta;

  const fullTitle =
    title || siteConfig.seo.titleSuffix
      ? `${siteConfig.business.name} ${siteConfig.seo.titleSuffix}`
      : siteConfig.business.name;
  const metaDescription = description || siteConfig.seo.defaultDescription;
  const metaImage = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${BASE_URL}${ogImage}`
    : `${BASE_URL}${siteConfig.seo.ogImage}`;
  const canonicalUrl = `${BASE_URL}${meta.path === "/" ? "" : meta.path}`;

  const robots = noindex
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.business.name,
    alternateName: siteConfig.business.shortName,
    url: BASE_URL,
    image: metaImage,
    description: siteConfig.seo.defaultDescription,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.line2,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
    areaServed: siteConfig.serviceArea.regions.map((region) => ({
      "@type": "AdministrativeArea",
      name: region,
    })),
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.checkatrade,
    ].filter(Boolean),
  };

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="theme-color" content="#0f172a" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={siteConfig.business.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      <div id="root"></div>
    </>
  );
};

export default PageTemplate;
