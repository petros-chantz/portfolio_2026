import { Seo } from "../../seo/Seo";
import { SITE_URL, SITE_CONFIG } from "../../lib/config";
import { PROJECT_LIST } from "./projectContent";
import { ProjectCard } from "./components/ProjectCard";

export function ProjectsPage() {
  const canonical = `${SITE_URL}/`;

  return (
    <div className="space-y-8 pb-12 md:space-y-10 md:pb-16">
      <Seo
        title={SITE_CONFIG.name}
        description={SITE_CONFIG.description}
        canonical={canonical}
        ogImage={SITE_CONFIG.ogImage}
      />

      <div className="space-y-5">
        {PROJECT_LIST.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
