import type { Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

type Props = {
  projects: Project[];
  compact?: boolean;
};

export function ProjectGrid({ projects, compact = false }: Props) {
  return (
    <div
      className={
        compact
          ? 'project-grid project-grid-compact related-work-grid'
          : 'project-grid'
      }
    >
      {projects.map((project, index) => (
        <ProjectCard key={`${project.slug}-${index}`} project={project} priority={index < 3} />
      ))}
    </div>
  );
}
