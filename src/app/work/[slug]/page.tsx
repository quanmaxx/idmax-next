import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllWorkSlugs, getAllWorks, getWorkBySlug } from "@/lib/work";
import { site } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllWorkSlugs().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getWorkBySlug(slug);

  if (!project) return {};

  const url = `${site.url}/work/${project.slug}`;
  const title = project.seo_title || project.title;
  const description =
    project.seo_description || project.description || project.title;
  const ogImage = project.thumbnail || project.cover || "";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — IDMAX`,
      description,
      url,
      images: ogImage
        ? [{ url: ogImage, width: 1448, height: 1354, alt: project.title }]
        : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getWorkBySlug(slug);

  if (!project) notFound();

  const allProjects = getAllWorks();
  const related = allProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  const heroImage = project.cover || project.thumbnail;
  const firstTwo = project.gallery.slice(0, 2);
  const rest = project.gallery.slice(2);

  return (
    <main className="project-detail-main">
      <article className="container project-detail">
        <div className="project-head" data-reveal>
          <div className="project-copy-block">
            <h1>{project.title}</h1>
            {project.description && <p>{project.description}</p>}
          </div>

          <dl className="project-facts">
            {project.client && (
              <div>
                <dt>Client</dt>
                <dd>{project.client}</dd>
              </div>
            )}

            {project.year && (
              <div>
                <dt>Published</dt>
                <dd>{project.year}</dd>
              </div>
            )}

            {(project.category || project.industry || project.service) && (
              <div>
                <dt>Sector</dt>
                <dd>
                  {project.category || project.industry || project.service}
                </dd>
              </div>
            )}
          </dl>
        </div>

        {heroImage && (
          <div className="project-hero-image" data-reveal>
            <Image
              src={heroImage}
              alt={`${project.title} hero image`}
              fill
              priority
              sizes="1717px"
            />
          </div>
        )}

        {firstTwo.length > 0 && (
          <div className="project-two-up" data-reveal>
            {firstTwo.map((image) => (
              <div className="project-two-up-image" key={image}>
                <Image
                  src={image}
                  alt={`${project.title} image`}
                  fill
                  sizes="(max-width: 720px) 100vw, 848px"
                />
              </div>
            ))}
          </div>
        )}

        {rest.map((image) => (
          <div className="project-wide-image" key={image} data-reveal>
            <Image
              src={image}
              alt={`${project.title} image`}
              fill
              sizes="1717px"
            />
          </div>
        ))}

        {project.contentHtml && (
          <section
            className="project-content"
            dangerouslySetInnerHTML={{ __html: project.contentHtml || "" }}
          />
        )}

        {related.length > 0 && (
          <section className="related-work">
            <h2>RELATED WORK</h2>

            <div className="related-work-list">
              {related.map((item) => (
                <Link
                  className="related-work-card"
                  href={`/work/${item.slug}`}
                  key={item.slug}
                >
                  {(item.thumbnail || item.cover) && (
                    <div className="related-work-image">
                      <Image
                        src={item.thumbnail || item.cover}
                        alt={`${item.title} thumbnail`}
                        fill
                        sizes="33vw"
                      />
                    </div>
                  )}

                  <div className="related-work-copy">
                    <h3>{item.title}</h3>
                    {(item.category || item.industry || item.service) && (
                      <p className="related-work-sector">
                        {item.category || item.industry || item.service}
                      </p>
                    )}
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