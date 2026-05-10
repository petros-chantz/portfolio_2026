import { Seo } from "../../seo/Seo";
import { SITE_URL } from "../../lib/config";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <link rel="preload" as="image" href="/vision/group.png" />
      </Helmet>

      <div className="hidden md:block w-full min-[1500px]:-mx-[25%] min-[1500px]:w-[150%]">
        <img
          src="/vision/group.png"
          alt="A collage of digital and physical product touchpoints"
          width={2600}
          height={1456}
          loading="eager"
          fetchPriority="high"
          decoding="async"
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
