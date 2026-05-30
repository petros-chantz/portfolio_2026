import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { Seo } from "../../seo/Seo";
import { SITE_URL, SITE_CONFIG } from "../../lib/config";
import {
  introTextClass,
  metaTextClass,
  pageTitleClass,
} from "../../ui/typography";
import {
  getProjectBySlug,
  getProjectSiblings,
  getProjectBlocks,
} from "./projectContent";
import { TopicTagList } from "./components/TopicTag";
import { BackLink } from "./components/BackLink";
import { Link } from "react-router-dom";

const ProjectBlocks = lazy(() => import("./components/ProjectBlocks").then((m) => ({ default: m.ProjectBlocks })));

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;
  const blocks = slug ? getProjectBlocks(slug) : null;
  const siblings = slug ? getProjectSiblings(slug) : null;

  if (!project) {
    return (
      <div className="space-y-3 pt-8">
        <p className="text-(--color-text-secondary)">Project not found.</p>
        <BackLink />
      </div>
    );
  }

  const canonical = `${SITE_URL}/projects/${project.slug}`;
  const seoTitle = `${project.title} — ${SITE_CONFIG.name}`;

  return (
    <div className="space-y-8 md:space-y-10 pb-16">
      <Seo
        title={seoTitle}
        description={project.summary}
        canonical={canonical}
        ogImage={SITE_CONFIG.ogImage}
      />

      <BackLink />

      <header className="space-y-2.5 md:space-y-3">
        <TopicTagList topics={project.topics} />
        <h1 className={pageTitleClass}>{project.title}</h1>
        <p className="text-[1rem] leading-[1.35] text-(--color-text-primary)">
          {project.subtitle}
        </p>
        <p className={introTextClass}>{project.summary}</p>
      </header>

      <div className="grid gap-3 rounded-xl border border-black/8 p-4 sm:grid-cols-2 md:grid-cols-4">
        {project.role && (
          <div>
            <p className={metaTextClass}>Role</p>
            <p className="text-[0.94rem] text-(--color-text-primary)">{project.role}</p>
          </div>
        )}
        {project.teamSize && (
          <div>
            <p className={metaTextClass}>Team size</p>
            <p className="text-[0.94rem] text-(--color-text-primary)">{project.teamSize}</p>
          </div>
        )}
        {project.timeframe && (
          <div>
            <p className={metaTextClass}>Timeframe</p>
            <p className="text-[0.94rem] text-(--color-text-primary)">{project.timeframe}</p>
          </div>
        )}
        {project.scope && (
          <div>
            <p className={metaTextClass}>Scope</p>
            <p className="text-[0.94rem] text-(--color-text-primary)">{project.scope}</p>
          </div>
        )}
      </div>

      <figure
        className="w-full aspect-video overflow-hidden rounded-xl md:rounded-2xl"
        style={{ backgroundColor: project.coverBg }}
      >
        {project.heroImage && (
          <img
            src={project.heroImage}
            alt={project.heroAlt || `${project.title} main project image`}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />
        )}
      </figure>

      {blocks && (
        <Suspense fallback={null}>
          <ProjectBlocks blocks={blocks} />
        </Suspense>
      )}

      <nav
        aria-label="Case study navigation"
        className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5"
      >
        <Link
          to="/"
          className="text-sm text-(--color-text-secondary) underline underline-offset-4 decoration-black/20 transition hover:text-(--color-text-primary)"
        >
          Back to all work
        </Link>

        <div className="flex items-center gap-4 text-sm">
          {siblings?.previous && (
            <Link
              to={`/projects/${siblings.previous.slug}`}
              className="text-(--color-text-secondary) hover:text-(--color-text-primary) transition"
            >
              ← Previous
            </Link>
          )}
          {siblings?.next && (
            <Link
              to={`/projects/${siblings.next.slug}`}
              className="text-(--color-text-secondary) hover:text-(--color-text-primary) transition"
            >
              Next →
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
