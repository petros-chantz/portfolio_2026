import { useMemo } from "react";
import { getPage } from "../../content.pages";
import { Markdown } from "../../markdown/Markdown";
import { Seo } from "../../seo/Seo";

const SITE_URL = "https://petros.work";

export function VisionPage() {
  const page = getPage("vision");

  const canonical = `${SITE_URL}/vision`;
  const ogImage = `${SITE_URL}/og.png`;

  const seoTitle = useMemo(() => {
    const base = "Petros Chantzopoulos";
    const pageTitle = page?.title?.trim();
    return pageTitle ? `${pageTitle} — ${base}` : `Vision — ${base}`;
  }, [page?.title]);

  const seoDescription =
    "A perspective on what products are becoming: systems, services, and interaction quality in organisational contexts.";

  if (!page) {
    return (
      <div className="space-y-2">
        <Seo
          title="Vision — Petros Chantzopoulos"
          description={seoDescription}
          canonical={canonical}
          ogImage={ogImage}
        />
        <p className="text-base text-[var(--color-text-primary)]">
          Missing page: <code>vision.md</code>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-16">
      <Seo
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        ogImage={ogImage}
      />

      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">{page.title}</h1>
      </header>

      <Markdown value={page.content} />
    </div>
  );
}
