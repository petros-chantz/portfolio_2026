import { Link } from "react-router-dom";
import type { ProjectMeta } from "../projectContent";
import { TopicTagList } from "./TopicTag";

type Props = {
  project: ProjectMeta;
};

export function ProjectCard({ project }: Props) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="ui-card-link"
      aria-label={`Read case study: ${project.title}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
        <div
          className="aspect-[4/3] w-full shrink-0 rounded-lg sm:w-[42%]"
          style={{ backgroundColor: project.coverBg }}
        />
        <div className="min-w-0 flex-1 space-y-3">
          <TopicTagList topics={project.topics} />
          <h3 className="text-[1.28rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-(--color-text-primary)">
            {project.title}
          </h3>
          <p className="text-[1.02rem] font-medium leading-[1.42] text-(--color-text-primary)">
            {project.subtitle}
          </p>
          <p className="mt-1 text-[0.88rem] leading-[1.62] text-(--color-text-secondary)">
            {project.summary}
          </p>
          <div className="ui-card-cta">
            Read case study{" "}
            <span
              aria-hidden="true"
              className="ui-card-cta-arrow"
            >
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
