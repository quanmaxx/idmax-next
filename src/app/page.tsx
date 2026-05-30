import type { Metadata } from 'next';
import { ProjectGrid } from '@/components/ProjectGrid';
import type { Project } from '@/data/projects';
import { projects as fallbackProjects } from '@/data/projects';
import { site } from '@/data/site';
import { getAllWorks } from '@/lib/work';

export const metadata: Metadata = {
  title: 'IDMAX — Logo Expert',
  description:
    'IDMAX là studio thiết kế logo chuyên sâu dành cho doanh nghiệp muốn xây dựng hình ảnh thương hiệu rõ ràng, khác biệt và mang tính biểu tượng.',
  alternates: { canonical: site.url },
  openGraph: {
    title: 'IDMAX — Logo Expert',
    description:
      'IDMAX là studio thiết kế logo chuyên sâu dành cho doanh nghiệp muốn xây dựng hình ảnh thương hiệu rõ ràng, khác biệt và mang tính biểu tượng.',
    url: site.url,
    images: [
      {
        url: '/assets/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IDMAX Logo Expert',
      },
    ],
  },
};

function getHomeProjects(): Project[] {
  try {
    const cmsWorks = getAllWorks();

    const cmsProjects = cmsWorks
      .filter((item) => item.thumbnail || item.cover)
      .slice(0, 9)
      .map((item) => ({
        slug: item.slug,
        title: item.title,
        description: item.description || '',
        thumbnail: item.thumbnail || item.cover,
        heroImage: item.cover || item.thumbnail,
        client: item.client || '',
        publishedYear: item.year || '',
        sector: item.category || item.industry || item.service || '',
        relatedProjects: [],
        galleryImages: item.gallery.map((image) => ({
          src: image,
          alt: item.title,
        })),
      })) as Project[];

    return cmsProjects.length > 0 ? cmsProjects : fallbackProjects.slice(0, 9);
  } catch {
    return fallbackProjects.slice(0, 9);
  }
}

export default function HomePage() {
  const homeProjects = getHomeProjects();

  return (
    <main className="home-main">
      <div className="container">
        <h1 className="home-title">LOGO EXPERT</h1>
        <ProjectGrid projects={homeProjects} />
      </div>
    </main>
  );
}