import { useMemo } from "react";
import { Seo } from "../../seo/Seo";
import { VISION } from "./Vision.data";

const SITE_URL = "https://petros.work";

export function VisionPage() {
  const canonical = `${SITE_URL}/vision`;
  const ogImage = `${SITE_URL}/og.png`;

  const seoTitle = useMemo(() => {
    const base = "Petros Chantzopoulos";
    return `${VISION.title} — ${base}`;
  }, []);

  return (
    <div className="space-y-10 pb-16">
      <Seo
        title={seoTitle}
        description={VISION.description}
        canonical={canonical}
        ogImage={ogImage}
      />

      <header className="space-y-4">
        <h1 className="text-3xl font-semibold">{VISION.title}</h1>

        <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-text-primary)]">
          {VISION.intro}
        </p>
      </header>

      <section className="space-y-5 text-lg leading-relaxed text-[var(--color-text-primary)]">
        {VISION.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>
    </div>
  );
}
