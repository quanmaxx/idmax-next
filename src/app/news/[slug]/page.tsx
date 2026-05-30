import Image from "next/image";
import { notFound } from "next/navigation";
import { NewsCard } from "@/components/NewsCard";
import type { NewsPost } from "@/data/news";
import { getAllNews, getAllNewsSlugs, getNewsBySlug } from "@/lib/news";

export async function generateStaticParams() {
  return getAllNewsSlugs();
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getNewsBySlug(slug);

  if (!post) {
    notFound();
  }

  const categories =
    post.categories.length > 0
      ? post.categories
      : post.category
      ? [post.category]
      : ["BRANDING"];

  const relatedPosts = getAllNews()
    .filter((item) => item.slug !== post.slug && item.thumbnail)
    .slice(0, 3)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      date: item.date,
      thumbnail: item.thumbnail,
      categories:
        item.categories.length > 0
          ? item.categories
          : item.category
          ? [item.category]
          : ["BRANDING"],
      excerpt: item.excerpt || "",
    })) as NewsPost[];

  return (
    <main className="news-detail-main">
      <div className="container">
        <h1 className="page-title">NEWS</h1>

        <article className="article-wrap">
          <header className="article-header" data-reveal>
            <h2>{post.title}</h2>

            <div className="article-meta">
              <time dateTime={post.date}>{post.date}</time>

              <div className="tag-row" aria-label="Categories">
                {categories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
            </div>

            {post.excerpt && (
              <p className="article-excerpt">{post.excerpt}</p>
            )}
          </header>

          {post.thumbnail && (
            <div className="article-hero-image" data-reveal>
              <Image
                src={post.thumbnail}
                alt={`${post.title} thumbnail`}
                fill
                priority
                sizes="1360px"
              />
            </div>
          )}

          {post.contentHtml && (
            <section
              className="article-body"
              dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
            />
          )}

          {relatedPosts.length > 0 && (
            <section className="related-posts">
              <div className="related-posts-list">
                {relatedPosts.map((item) => (
                  <NewsCard key={item.slug} post={item} compact />
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </main>
  );
}