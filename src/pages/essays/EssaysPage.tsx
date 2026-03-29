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
import { ESSAYS, ESSAY_LIST } from "./Essays.data";
import { EssayCard } from "./components/EssayCard";

type View = "grid" | "list";

export function EssaysPage() {
  const [view, setView] = useState<View>("grid");
  const [activeFilter, setActiveFilter] = useState("All");

  const canonical = `${SITE_URL}/essays`;
  const ogImage = `${SITE_URL}/og.png`;
  const seoTitle = `${ESSAYS.title} — Petros Chantzopoulos`;

  const filters = [
    "All",
    ...Array.from(new Set(ESSAY_LIST.map((essay) => essay.category))),
  ];

  const essays =
    activeFilter === "All"
      ? ESSAY_LIST
      : ESSAY_LIST.filter((essay) => essay.category === activeFilter);

  return (
    <div className="space-y-8 pb-16">
      <Seo
        title={seoTitle}
        description={ESSAYS.description}
        canonical={canonical}
        ogImage={ogImage}
      />

      <header>
        <h1 className={pageTitleClass}>{ESSAYS.title}</h1>
      </header>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`${controlPillBaseClass} ${
                  isActive
                    ? "bg-black/6 text-(--color-text-primary)"
                    : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                }`}
                aria-pressed={isActive}
              >
                {filter}
              </button>
            );
          })}
        </div>

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

      {view === "grid" ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {essays.map((essay) => (
            <EssayCard key={essay.slug} essay={essay} view="grid" />
          ))}
        </div>
      ) : (
        <div className="space-y-1">
          {essays.map((essay) => (
            <EssayCard key={essay.slug} essay={essay} view="list" />
          ))}
        </div>
      )}
    </div>
  );
}
