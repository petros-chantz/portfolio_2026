import { Suspense, lazy } from "react";
import { useParams, Link } from "react-router-dom";
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
        ogImageAlt={SITE_CONFIG.ogImageAlt}
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

      <dl className="grid gap-3 rounded-xl border border-black/8 p-4 sm:grid-cols-2 md:grid-cols-4">
        {project.role && (
          <div>
            <dt className={metaTextClass}>Role</dt>
            <dd className="text-[0.94rem] text-(--color-text-primary)">{project.role}</dd>
          </div>
        )}
        {project.teamSize && (
          <div>
            <dt className={metaTextClass}>Team size</dt>
            <dd className="text-[0.94rem] text-(--color-text-primary)">{project.teamSize}</dd>
          </div>
        )}
        {project.timeframe && (
          <div>
            <dt className={metaTextClass}>Timeframe</dt>
            <dd className="text-[0.94rem] text-(--color-text-primary)">{project.timeframe}</dd>
          </div>
        )}
        {project.scope && (
          <div>
            <dt className={metaTextClass}>Scope</dt>
            <dd className="text-[0.94rem] text-(--color-text-primary)">{project.scope}</dd>
          </div>
        )}
      </dl>

      <figure
        aria-hidden={!project.heroImage}
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
          className="group inline-flex items-center gap-1.5 text-sm text-(--color-text-secondary) hover:text-(--color-text-primary) transition"
        >
          <span
            aria-hidden="true"
            className="inline-block transform-gpu transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Back to all work
        </Link>

        <div className="flex items-center gap-4 text-sm">
          {siblings?.previous && (
            <Link
              to={`/projects/${siblings.previous.slug}`}
              aria-label={`Previous: ${siblings.previous.title}`}
              className="group inline-flex items-center gap-1.5 text-(--color-text-secondary) hover:text-(--color-text-primary) transition"
            >
              <span
                aria-hidden="true"
                className="inline-block transform-gpu transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
              >
                &larr;
              </span>
              Previous
            </Link>
          )}
          {siblings?.next && (
            <Link
              to={`/projects/${siblings.next.slug}`}
              aria-label={`Next: ${siblings.next.title}`}
              className="group inline-flex items-center gap-1.5 text-(--color-text-secondary) hover:text-(--color-text-primary) transition"
            >
              Next
              <span
                aria-hidden="true"
                className="inline-block transform-gpu transition-transform duration-200 ease-out group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
