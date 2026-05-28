import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NewsCard } from '@/components/NewsCard';
import { getPost, getRelatedPosts, news } from '@/data/news';
import { site } from '@/data/site';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return news.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${site.url}/news/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} — IDMAX`,
      description: post.excerpt,
      url,
      images: [{ url: post.thumbnail, width: 600, height: 375, alt: post.title }]
    }
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(post.relatedPosts);

  return (
    <main className="news-detail-main">
      <div className="container">
        <h1 className="page-title">NEWS</h1>
        <article className="article-wrap">
          <header className="article-header" data-reveal>
            <h2>{post.title}</h2>
            <div className="article-meta">
              <time dateTime={post.date}>{post.date}</time>
              <div className="tag-row">
                {post.categories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
            </div>
            <p className="article-excerpt">{post.excerpt}</p>
          </header>

          <div className="article-hero-image" data-reveal>
            <Image src={post.thumbnail} alt={`${post.title} hero image`} fill priority sizes="1360px" />
          </div>

          <div className="article-body" data-reveal>
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 50)}>{paragraph}</p>
            ))}
          </div>

         {related.length > 0 && (
  <section className="related-posts">
    <h2>BÀI VIẾT LIÊN QUAN</h2>

    <div className="related-posts-list">
      {related.map((relatedPost) => (
        <NewsCard key={relatedPost.slug} post={relatedPost} compact />
      ))}
    </div>
  </section>
)}
        </article>
      </div>
    </main>
  );
}
