import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';

type Props = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: Props) {
  return (
    <article className="project-card" data-reveal>
      <Link href={`/work/${project.slug}`} className="project-card-link" aria-label={`View ${project.title}`}>
        <span className="project-thumb">
          <Image
            src={project.thumbnail}
            alt={`${project.title} project thumbnail`}
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 1200px) 48vw, 564px"
            priority={priority}
          />
        </span>
        <span className="project-meta-caption">
          <strong>{project.title}</strong>
          <span className="project-sector">{project.sector}</span>
        </span>
      </Link>
    </article>
  );
}
