import type { Metadata } from "next";
import { NewsList } from "@/components/NewsList";
import type { NewsPost } from "@/data/news";
import { site } from "@/data/site";
import { getAllNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "Các bài viết, câu chuyện và góc nhìn thương hiệu từ IDMAX.",
  alternates: { canonical: `${site.url}/news` },
  openGraph: {
    title: "IDMAX News",
    description: "Các bài viết, câu chuyện và góc nhìn thương hiệu từ IDMAX.",
    url: `${site.url}/news`,
    images: [
      {
        url: "/assets/images/news/ykk-zipper.webp",
        width: 600,
        height: 375,
        alt: "IDMAX News",
      },
    ],
  },
};

export default function NewsPage() {
  const cmsNews = getAllNews();

  const posts = cmsNews
    .filter((item) => item.thumbnail)
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
    <main className="news-main">
      <div className="container">
        <h1 className="page-title">NEWS</h1>
        <NewsList posts={posts} />
      </div>
    </main>
  );
}