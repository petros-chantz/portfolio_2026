import { Seo } from "../../seo/Seo";
import { SITE_URL } from "../../lib/config";
import {
  bodyTextClass,
  introTextClass,
  pageTitleClass,
} from "../../ui/typography";
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

      <div className="hidden md:block -mx-[25%] w-[150%]">
        <img
          src="/vision/group.png"
          alt="A collage of digital and physical product touchpoints"
          draggable={false}
          className="w-full"
        />
      </div>

      <header className="space-y-4">
        <h1 className={pageTitleClass}>{VISION.title}</h1>
        <p className={introTextClass}>{VISION.intro}</p>
      </header>

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
