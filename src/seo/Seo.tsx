import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "../lib/config";

type SeoProps = {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
};

export function Seo({ title, description, canonical, ogImage, ogImageAlt }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>

      {description ? <meta name="description" content={description} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {description ? <meta property="og:description" content={description} /> : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      {ogImage && ogImageAlt ? <meta property="og:image:alt" content={ogImageAlt} /> : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {canonical ? <meta name="twitter:url" content={canonical} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
      {ogImage && ogImageAlt ? <meta name="twitter:image:alt" content={ogImageAlt} /> : null}
    </Helmet>
  );
}
