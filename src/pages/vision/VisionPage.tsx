import { Seo } from "../../seo/Seo";
import { getPage } from "../../content.pages";
import { VISION } from "./Vision.data";

export function VisionPage() {
  // Optional: if you already have frontmatter title in vision.md later,
  // this will automatically pick it up. For now, it falls back to VISION.title.
  const page = getPage("vision");
  const titleText = page?.title?.trim() || VISION.title;

  return (
    <main className="space-y-12">
      <Seo
        title={`${titleText} — Petros Chantzopoulos`}
        description={VISION.description}
        canonical={VISION.canonical}
        ogImage={VISION.ogImage}
      />

      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">{titleText}</h1>

        <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-text-primary)]">
          {VISION.comingSoonBody}
        </p>
      </header>
    </main>
  );
}
