import { Seo } from "../../seo/Seo";
import { SITE_URL } from "../../lib/config";
import { PROJECT_LIST } from "./projectContent";
import { ProjectCard } from "./components/ProjectCard";

export function ProjectsPage() {
  const canonical = `${SITE_URL}/`;
  const ogImage = `${SITE_URL}/og.png`;
  const seoTitle = `Petros Chantzopoulos`;

  return (
    <div className="space-y-8 pb-12 md:space-y-10 md:pb-16">
      <Seo
        title={seoTitle}
        description="Strategic digital product designer balancing systems thinking and craft. Selected work by Petros Chantzopoulos."
        canonical={canonical}
        ogImage={ogImage}
      />

      <div className="space-y-5">
        {PROJECT_LIST.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
