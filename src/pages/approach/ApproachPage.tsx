import { useCallback, useMemo, useState } from "react";
import { Seo } from "../../seo/Seo";
import { APPROACH, FAQS, PRINCIPLES } from "./approach.data";
import { FaqItem } from "./components/FaqItem";
import { PrincipleCard } from "./components/PrincipleCard";
import { PinnedPhotoCluster } from "./components/PinnedPhotoCluster";
import { PINNED_PHOTOS } from "./pinnedPhotos.data";

const SITE_URL = "https://petros.work";

export function ApproachPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const canonical = `${SITE_URL}/approach`;
  const ogImage = `${SITE_URL}/og.png`;

  const seoTitle = useMemo(() => {
    const base = "Petros Chantzopoulos";
    return `${APPROACH.title} — ${base}`;
  }, []);

  const seoDescription =
    "Approach to strategic digital product design: principles, decision-making, and collaboration.";

  const onToggleFaq = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="space-y-10 pb-16">
      <Seo
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        ogImage={ogImage}
      />

      {/* Hero / intro with pinned photos */}
      <div className="relative overflow-visible">
        <PinnedPhotoCluster photos={PINNED_PHOTOS} />

        <header className="relative z-10 space-y-4 pt-[250px] md:pt-[290px]">
          <h1 className="text-3xl font-semibold">{APPROACH.title}</h1>

          <div className="space-y-4 text-lg leading-relaxed text-[var(--color-text-primary)]">
            {APPROACH.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </header>
      </div>

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
