import { useState } from "react";
import {
  Squares2X2Icon as Squares2X2OutlineIcon,
  Bars3Icon as Bars3OutlineIcon,
} from "@heroicons/react/24/outline";
import {
  Squares2X2Icon as Squares2X2SolidIcon,
  Bars3Icon as Bars3SolidIcon,
} from "@heroicons/react/24/solid";
import { Seo } from "../../seo/Seo";
import { SITE_URL } from "../../lib/config";
import { controlPillBaseClass, pageTitleClass } from "../../ui/typography";
import { PROJECTS, PROJECT_LIST } from "./Projects.data";
import { ProjectCard } from "./components/ProjectCard";

type View = "grid" | "list";

export function ProjectsPage() {
  const [view, setView] = useState<View>("grid");

  const canonical = `${SITE_URL}/projects`;
  const ogImage = `${SITE_URL}/og.png`;
  const seoTitle = `${PROJECTS.title} — Petros Chantzopoulos`;

  return (
    <div className="space-y-8 pb-16">
      <Seo
        title={seoTitle}
        description={PROJECTS.description}
        canonical={canonical}
        ogImage={ogImage}
      />

      <h1 className={pageTitleClass}>{PROJECTS.title}</h1>

      {/* Controls: tabs + view toggle */}
      <div className="flex items-center justify-between">
        {/* Tabs */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            className={`${controlPillBaseClass} bg-black/6 text-(--color-text-primary)`}
          >
            All
          </button>
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={() => setView("grid")}
            aria-label="Grid view"
            aria-pressed={view === "grid"}
            className={`rounded-md p-1.5 transition ${
              view === "grid"
                ? "text-(--color-text-primary)"
                : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
            }`}
          >
            {view === "grid" ? (
              <Squares2X2SolidIcon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Squares2X2OutlineIcon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setView("list")}
            aria-label="List view"
            aria-pressed={view === "list"}
            className={`rounded-md p-1.5 transition ${
              view === "list"
                ? "text-(--color-text-primary)"
                : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
            }`}
          >
            {view === "list" ? (
              <Bars3SolidIcon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Bars3OutlineIcon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Projects */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PROJECT_LIST.map((project) => (
            <ProjectCard key={project.slug} project={project} view="grid" />
          ))}
        </div>
      ) : (
        <div className="space-y-1">
          {PROJECT_LIST.map((project) => (
            <ProjectCard key={project.slug} project={project} view="list" />
          ))}
        </div>
      )}
    </div>
  );
}
