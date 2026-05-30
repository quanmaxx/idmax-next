import type { Metadata } from 'next';
import { ProjectGrid } from '@/components/ProjectGrid';
import { projects } from '@/data/projects';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'IDMAX — Logo Expert',
  description:
    'IDMAX là studio thiết kế logo chuyên sâu dành cho doanh nghiệp muốn xây dựng hình ảnh thương hiệu rõ ràng, khác biệt và dễ ghi nhớ.',
  alternates: { canonical: site.url },
  openGraph: {
    title: 'IDMAX — Logo Expert',
    description:
      'IDMAX là studio thiết kế logo chuyên sâu dành cho doanh nghiệp muốn xây dựng hình ảnh thương hiệu rõ ràng, khác biệt và dễ ghi nhớ.',
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
