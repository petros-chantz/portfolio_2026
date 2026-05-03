import { Seo } from "../../seo/Seo";
import { SITE_URL } from "../../lib/config";
import {
  bodyTextClass,
  introTextClass,
  pageTitleClass,
} from "../../ui/typography";
import { VISION } from "./Vision.data";
import { VisionCollage } from "./components/VisionCollage";

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

      <div className="relative overflow-visible">
        <VisionCollage />

        <header className="relative z-10 space-y-4 pt-12 md:pt-[540px]">
          <h1 className={pageTitleClass}>{VISION.title}</h1>

          <p className={introTextClass}>{VISION.intro}</p>
        </header>
      </div>

      <section className="space-y-5">
        {VISION.body.map((p) => (
          <p key={p} className={bodyTextClass}>
            {p}
          </p>
        ))}
      </section>
    </div>
  );
}
