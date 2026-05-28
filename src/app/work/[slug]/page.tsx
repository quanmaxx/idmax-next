import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectGrid } from '@/components/ProjectGrid';
import { getProject, getRelatedProjects, projects } from '@/data/projects';
import { site } from '@/data/site';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `${site.url}/work/${project.slug}`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — IDMAX`,
      description: project.description,
      url,
      images: [{ url: project.thumbnail, width: 1448, height: 1354, alt: project.title }]
    }
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = getRelatedProjects(project.relatedProjects).slice(0, 3);
  const firstTwo = project.galleryImages.slice(0, 2);
  const rest = project.galleryImages.slice(2);

  return (
    <main className="project-detail-main">
      <article className="container project-detail">
        <div className="project-head" data-reveal>
          <div className="project-copy-block">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <dl className="project-facts">
            <div>
              <dt>Client</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt>Published</dt>
              <dd>{project.publishedYear}</dd>
            </div>
            <div>
              <dt>Sector</dt>
              <dd>{project.sector}</dd>
            </div>
          </dl>
        </div>

        <div className="project-hero-image" data-reveal>
          <Image src={project.heroImage} alt={`${project.title} hero image`} fill priority sizes="1717px" />
        </div>

        {firstTwo.length > 0 && (
          <div className="project-two-up" data-reveal>
            {firstTwo.map((image) => (
              <div className="project-two-up-image" key={image.src}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 100vw, 848px" />
              </div>
            ))}
          </div>
        )}

        {rest.map((image) => (
          <div className="project-wide-image" key={image.src} data-reveal>
            <Image src={image.src} alt={image.alt} fill sizes="1717px" />
          </div>
        ))}

       {related.length > 0 && (
  <section className="related-work">
    <h2>RELATED WORK</h2>

    <div className="related-work-list">
      {related.map((item) => (
        <Link className="related-work-card" href={`/work/${item.slug}`} key={item.slug}>
          <div className="related-work-image">
            <Image
              src={item.thumbnail}
              alt={`${item.title} thumbnail`}
              fill
              sizes="33vw"
            />
          </div>

          <div className="related-work-copy">
            <h3>{item.title}</h3>
            <p className="related-work-sector">{item.sector}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
)}
      </article>
    </main>
  );
}
