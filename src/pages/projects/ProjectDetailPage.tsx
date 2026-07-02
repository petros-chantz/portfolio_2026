import { Suspense, lazy } from "react";
import { useParams, Link } from "react-router-dom";
import { Seo } from "../../seo/Seo";
import { SITE_URL, SITE_CONFIG } from "../../lib/config";
import { metaTextClass, pageTitleClass } from "../../ui/typography";
import {
  getProjectBySlug,
  getProjectSiblings,
  getProjectBlocks,
} from "./projectContent";
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
  const useApsSplitLayout = project.slug === "APS-allocations";
  const timelineValue = project.timeline || project.timeframe;
  const teamValue = project.team || project.teamSize;
  const apsIntroSource =
    useApsSplitLayout && blocks?.[0]?.type === "text" && !blocks[0].heading
      ? blocks[0].body
      : "";
  const apsIntroParagraphs = apsIntroSource
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .slice(0, 3);
  const renderedBlocks =
    useApsSplitLayout && apsIntroParagraphs.length > 0 && blocks
      ? blocks.slice(1)
      : blocks;
  const heroFigure = (
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
  );
  const renderMetadataValue = (value: string, asColumn = false) => {
    if (!asColumn) {
      return <dd className="text-[0.94rem] leading-snug text-(--color-text-primary)">{value}</dd>;
    }

    return (
      <dd className="flex flex-col gap-1 text-[0.94rem] leading-snug text-(--color-text-primary)">
        {value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
          .map((item) => (
            <span key={item}>{item}</span>
          ))}
      </dd>
    );
  };
  const metadataItems = (
    <>
      {project.client && (
        <div className="grid content-start gap-1 min-w-0">
          <dt className={metaTextClass}>Client</dt>
          {renderMetadataValue(project.client)}
        </div>
      )}
      {project.product && (
        <div className="grid content-start gap-1 min-w-0">
          <dt className={metaTextClass}>Product</dt>
          {renderMetadataValue(project.product)}
        </div>
      )}
      {project.users && (
        <div className="grid content-start gap-1 min-w-0">
          <dt className={metaTextClass}>Users</dt>
          {renderMetadataValue(project.users, true)}
        </div>
      )}
      {project.role && (
        <div className="grid content-start gap-1 min-w-0">
          <dt className={metaTextClass}>Role</dt>
          {renderMetadataValue(project.role)}
        </div>
      )}
      {timelineValue && (
        <div className="grid content-start gap-1 min-w-0">
          <dt className={metaTextClass}>Timeline</dt>
          {renderMetadataValue(timelineValue)}
        </div>
      )}
      {teamValue && (
        <div className="grid content-start gap-1 min-w-0">
          <dt className={metaTextClass}>Team</dt>
          {renderMetadataValue(teamValue, true)}
        </div>
      )}
      {project.scope && (
        <div className="grid content-start gap-1 min-w-0">
          <dt className={metaTextClass}>Scope</dt>
          {renderMetadataValue(project.scope, true)}
        </div>
      )}
    </>
  );

  return (
    <div className="pb-16">
      <Seo
        title={seoTitle}
        description={project.summary}
        canonical={canonical}
        ogImage={SITE_CONFIG.ogImage}
        ogImageAlt={SITE_CONFIG.ogImageAlt}
      />

      <div className="mb-8 md:mb-10">
        <BackLink />
      </div>

      {useApsSplitLayout ? (
        <>
          <div className="space-y-8 mb-14">
            <header className="space-y-2.5 md:space-y-3">
              <h1 className={`${pageTitleClass} font-bold`}>{project.title}</h1>
              <p className="text-[24px] leading-[1.35] text-(--color-text-primary)">
                {project.subtitle}
              </p>
            </header>

            {heroFigure}
          </div>

          <section className="grid gap-7 md:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] md:items-start md:gap-10 mb-16 md:mb-20">
            <div className="space-y-[32px]">
              {apsIntroParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "text-[1.625rem] leading-[1.2] font-bold tracking-[-0.02em] text-(--color-text-primary) [font-family:Georgia,_\"Times_New_Roman\",_serif] md:text-[1.875rem]"
                      : "text-[1.125rem] leading-[1.55] font-normal tracking-[-0.01em] text-(--color-text-primary)"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <dl className="grid gap-3 rounded-xl py-1">{metadataItems}</dl>
          </section>
        </>
      ) : (
        <>
          <header className="space-y-2.5 md:space-y-3 mb-16 md:mb-20">
            <h1 className={`${pageTitleClass} font-bold`}>{project.title}</h1>
            <p className="text-[24px] leading-[1.35] text-(--color-text-primary)">
              {project.subtitle}
            </p>
          </header>

          <dl className="grid gap-3 rounded-xl py-4 sm:grid-cols-2 md:grid-cols-4 md:gap-4 mb-16 md:mb-20">{metadataItems}</dl>

          {heroFigure}
        </>
      )}

      {renderedBlocks && (
        <Suspense fallback={null}>
          <div className="space-y-16 md:space-y-20">
            <ProjectBlocks blocks={renderedBlocks} />
          </div>
        </Suspense>
      )}

      <nav
        aria-label="Case study navigation"
        className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5 mt-16 md:mt-20"
      >
        <Link
          to="/"
          className="ui-link-inline"
        >
          <span
            aria-hidden="true"
            className="ui-link-inline-arrow-left"
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
              className="ui-link-inline"
            >
              <span
                aria-hidden="true"
                className="ui-link-inline-arrow-left"
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
              className="ui-link-inline"
            >
              Next
              <span
                aria-hidden="true"
                className="ui-link-inline-arrow-right"
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
