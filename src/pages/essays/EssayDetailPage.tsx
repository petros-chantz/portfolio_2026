import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Seo } from "../../seo/Seo";
import { SITE_URL } from "../../lib/config";
import { ESSAY_LIST } from "./Essays.data";
import { getEssayBlocks } from "./essayContent";
import { EssayBlocks } from "./components/EssayBlocks";
import type { ContentBlock } from "./blocks";

export function EssayDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const essay = slug ? ESSAY_LIST.find((item) => item.slug === slug) : null;

  const [blocks, setBlocks] = useState<ContentBlock[] | null | "loading">(
    "loading",
  );

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    getEssayBlocks(slug).then((nextBlocks) => {
      if (!cancelled) setBlocks(nextBlocks);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!essay) {
    return (
      <div className="space-y-3 pt-8">
        <p className="text-(--color-text-secondary)">Essay not found.</p>
        <Link
          to="/essays"
          className="inline-flex items-center gap-1.5 text-sm underline underline-offset-4 text-(--color-text-secondary) hover:text-(--color-text-primary)"
        >
          <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Back to essays
        </Link>
      </div>
    );
  }

  const canonical = `${SITE_URL}/essays/${essay.slug}`;
  const seoTitle = `${essay.title} — Petros Chantzopoulos`;

  return (
    <div className="space-y-10 pb-16">
      <Seo title={seoTitle} description={essay.summary} canonical={canonical} />

      <Link
        to="/essays"
        className="inline-flex items-center gap-1.5 text-sm text-(--color-text-secondary) hover:text-(--color-text-primary) transition"
      >
        <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
        Essays
      </Link>

      <header className="space-y-3">
        <div className="text-sm text-(--color-text-secondary)">
          {essay.category}&ensp;·&ensp;{essay.year}&ensp;·&ensp;{essay.readTime}
        </div>
        <h1 className="text-3xl font-semibold leading-tight text-(--color-text-primary)">
          {essay.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-(--color-text-secondary)">
          {essay.summary}
        </p>
      </header>

      <div
        className="aspect-video w-full rounded-2xl"
        style={{ backgroundColor: essay.coverBg }}
      />

      {blocks === "loading" && (
        <div className="h-24 animate-pulse rounded-xl bg-black/5" />
      )}

      {blocks !== "loading" && blocks && <EssayBlocks blocks={blocks} />}
    </div>
  );
}
