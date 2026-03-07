import { useCallback, useMemo, useState } from "react";
import { getPage } from "../../content.pages";
import { Markdown } from "../../markdown/Markdown";
import { Seo } from "../../seo/Seo";
import { FAQS, PRINCIPLES } from "./approach.data";
import { FaqItem } from "./components/FaqItem";
import { PrincipleCard } from "./components/PrincipleCard";

const SITE_URL = "https://petros.work";

export function ApproachPage() {
  const page = getPage("approach");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const canonical = `${SITE_URL}/approach`;
  const ogImage = `${SITE_URL}/og.png`;

  const seoTitle = useMemo(() => {
    const base = "Petros Chantzopoulos";
    const pageTitle = page?.title?.trim();
    // Use the markdown title if it exists; otherwise fall back.
    return pageTitle ? `${pageTitle} — ${base}` : `Approach — ${base}`;
  }, [page?.title]);

  const seoDescription =
    "Approach to strategic digital product design: principles, decision-making, and collaboration.";

  const onToggleFaq = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  if (!page) {
    return (
      <div className="space-y-2">
        <Seo
          title="Approach — Petros Chantzopoulos"
          description={seoDescription}
          canonical={canonical}
          ogImage={ogImage}
        />
        <p className="text-base text-[var(--color-text-primary)]">
          Missing page: <code>approach.md</code>
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

      <section className="space-y-6 pt-4" aria-label="Principles">
        <div className="grid gap-12 md:grid-cols-2">
          {PRINCIPLES.map((item, i) => (
            <PrincipleCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </section>

      <section className="space-y-6 pt-12" aria-label="FAQ">
        <header className="space-y-1">
          <h2 className="text-3xl font-semibold text-[var(--color-text-primary)]">
            FAQ
          </h2>
        </header>

        <div>
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.question}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={onToggleFaq}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
