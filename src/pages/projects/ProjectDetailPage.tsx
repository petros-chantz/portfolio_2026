import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Seo } from "../../seo/Seo";
import { SITE_URL } from "../../lib/config";
import { PROJECT_LIST } from "./Projects.data";
import { getProjectBlocks } from "./projectContent";
import { ProjectBlocks } from "./components/ProjectBlocks";
import type { ContentBlock } from "./blocks";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? PROJECT_LIST.find((p) => p.slug === slug) : null;

  const [blocks, setBlocks] = useState<ContentBlock[] | null | "loading">(
    "loading",
  );

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    getProjectBlocks(slug).then((b) => {
      if (!cancelled) setBlocks(b);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!project) {
    return (
      <div className="space-y-3 pt-8">
        <p className="text-(--color-text-secondary)">Project not found.</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm underline underline-offset-4 text-(--color-text-secondary) hover:text-(--color-text-primary)"
        >
          <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Back to projects
        </Link>
      </div>
    );
  }

  const canonical = `${SITE_URL}/projects/${project.slug}`;
  const seoTitle = `${project.title} — Petros Chantzopoulos`;

  return (
    <div className="space-y-10 pb-16">
      <Seo
        title={seoTitle}
        description={project.summary}
        canonical={canonical}
      />

      {/* Back link */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-(--color-text-secondary) hover:text-(--color-text-primary) transition"
      >
        <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
        Projects
      </Link>

      {/* Hero */}
      <header className="space-y-3">
        <div className="text-sm text-(--color-text-secondary)">
          {project.category}&ensp;·&ensp;{project.year}
        </div>
        <h1 className="text-3xl font-semibold leading-tight text-(--color-text-primary)">
          {project.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-(--color-text-secondary)">
          {project.summary}
        </p>
      </header>

      {/* Hero cover */}
      <div
        className="w-full aspect-video rounded-2xl"
        style={{ backgroundColor: project.coverBg }}
      />

      {/* Content blocks */}
      {blocks === "loading" && (
        <div className="h-24 animate-pulse rounded-xl bg-black/5" />
      )}

      {blocks !== "loading" && blocks && <ProjectBlocks blocks={blocks} />}
    </div>
  );
}
