import { Link } from "react-router-dom";
import {
  cardSummaryClass,
  cardTitleClass,
  metaTextClass,
} from "../../../ui/typography";
import type { Project } from "../Projects.data";

type Props = {
  project: Project;
  view: "grid" | "list";
};

export function ProjectCard({ project, view }: Props) {
  if (view === "list") {
    return (
      <Link
        to={`/projects/${project.slug}`}
        className="group -mx-3 flex gap-4 rounded-xl p-3 transition hover:bg-black/3"
      >
        <div
          className="h-20 w-28 shrink-0 rounded-lg"
          style={{ backgroundColor: project.coverBg }}
        />
        <div className="space-y-1 py-0.5">
          <div className={metaTextClass}>
            {project.category}&ensp;·&ensp;{project.year}
          </div>
          <h3 className={cardTitleClass}>{project.title}</h3>
          <p className={`line-clamp-2 ${cardSummaryClass}`}>
            {project.summary}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/projects/${project.slug}`} className="group block space-y-3">
      <div
        className="w-full aspect-video rounded-xl transition-transform duration-300 ease-out group-hover:scale-[1.015]"
        style={{ backgroundColor: project.coverBg }}
      />
      <div className="space-y-1">
        <div className={metaTextClass}>
          {project.category}&ensp;·&ensp;{project.year}
        </div>
        <h3 className={cardTitleClass}>{project.title}</h3>
        <p className={`line-clamp-2 ${cardSummaryClass}`}>{project.summary}</p>
      </div>
    </Link>
  );
}
