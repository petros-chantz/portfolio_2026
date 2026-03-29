import { Seo } from "../../seo/Seo";
import { SITE_URL } from "../../lib/config";
import { VISION } from "./Vision.data";

export function VisionPage() {
  const canonical = `${SITE_URL}/vision`;
  const ogImage = `${SITE_URL}/og.png`;

  const seoTitle = `${VISION.title} — Petros Chantzopoulos`;

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

        <p className="max-w-2xl text-lg leading-relaxed text-(--color-text-primary)">
          {VISION.intro}
        </p>
      </header>

      <section className="space-y-5 text-lg leading-relaxed text-(--color-text-primary)">
        {VISION.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>
    </div>
  );
}
