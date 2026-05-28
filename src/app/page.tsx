import type { Metadata } from 'next';
import { ProjectGrid } from '@/components/ProjectGrid';
import { projects } from '@/data/projects';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Work Listing',
  description: 'Danh sách dự án thiết kế logo và hình ảnh thương hiệu được thực hiện bởi IDMAX.',
  alternates: { canonical: site.url },
  openGraph: {
    title: 'IDMAX Work',
    description: 'Danh sách dự án thiết kế logo và hình ảnh thương hiệu được thực hiện bởi IDMAX.',
    url: site.url,
    images: [{ url: '/assets/images/projects/tuart-wedding-thumb.webp', width: 1448, height: 1354, alt: 'IDMAX work listing' }]
  }
};

export default function HomePage() {
  return (
    <main className="home-main">
      <div className="container">
        <h1 className="home-title">LOGO EXPERT</h1>
        <ProjectGrid projects={projects.slice(0, 9)} />
      </div>
    </main>
  );
}
