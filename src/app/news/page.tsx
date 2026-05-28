import type { Metadata } from 'next';
import { NewsList } from '@/components/NewsList';
import { news } from '@/data/news';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'News',
  description: 'Các bài viết, câu chuyện và góc nhìn thương hiệu từ IDMAX.',
  alternates: { canonical: `${site.url}/news` },
  openGraph: {
    title: 'IDMAX News',
    description: 'Các bài viết, câu chuyện và góc nhìn thương hiệu từ IDMAX.',
    url: `${site.url}/news`,
    images: [{ url: '/assets/images/news/ykk-zipper.webp', width: 600, height: 375, alt: 'IDMAX News' }]
  }
};

export default function NewsPage() {
  return (
    <main className="news-main">
      <div className="container">
        <h1 className="page-title">NEWS</h1>
        <NewsList posts={news} />
      </div>
    </main>
  );
}
