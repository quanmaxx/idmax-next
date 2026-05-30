import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const newsDirectory = path.join(process.cwd(), "content/news");

export type CmsNewsPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  categories: string[];
  thumbnail: string;
  excerpt: string;
  seo_title: string;
  seo_description: string;
  contentHtml?: string;
};

function normalizeCategories(category: unknown): string[] {
  if (!category) return [];

  if (Array.isArray(category)) {
    return category.map(String).filter(Boolean);
  }

  if (typeof category === "string") {
    return category
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function formatDate(date: unknown): string {
  if (!date) return "";

  const value = String(date);
  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toISOString().split("T")[0];
}

export function getAllNewsSlugs() {
  if (!fs.existsSync(newsDirectory)) return [];

  return fs
    .readdirSync(newsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ""),
    }));
}

export function getAllNews(): CmsNewsPost[] {
  if (!fs.existsSync(newsDirectory)) return [];

  return fs
    .readdirSync(newsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      const categories = normalizeCategories(data.category || data.categories);

      return {
        slug,
        title: data.title || slug,
        date: formatDate(data.date),
        category: data.category || "",
        categories,
        thumbnail: data.thumbnail || "",
        excerpt: data.excerpt || "",
        seo_title: data.seo_title || "",
        seo_description: data.seo_description || "",
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime() || 0;
      const dateB = new Date(b.date).getTime() || 0;
      return dateB - dateA;
    });
}

export async function getNewsBySlug(
  slug: string
): Promise<CmsNewsPost | null> {
  const fullPath = path.join(newsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const categories = normalizeCategories(data.category || data.categories);

  return {
    slug,
    title: data.title || slug,
    date: formatDate(data.date),
    category: data.category || "",
    categories,
    thumbnail: data.thumbnail || "",
    excerpt: data.excerpt || "",
    seo_title: data.seo_title || "",
    seo_description: data.seo_description || "",
    contentHtml,
  };
}