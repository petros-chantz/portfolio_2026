import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

export function Seo({ title, description, canonical, ogImage }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>

      {description ? <meta name="description" content={description} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:type" content="website" />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
    </Helmet>
  );
}
