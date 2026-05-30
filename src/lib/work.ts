import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const workDirectory = path.join(process.cwd(), "content/work");

export type WorkItem = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  industry: string;
  service: string;
  thumbnail: string;
  cover: string;
  description: string;
  gallery: string[];
  seo_title: string;
  seo_description: string;
  contentHtml?: string;
};

function normalizeGallery(gallery: unknown): string[] {
  if (!gallery) return [];

  if (Array.isArray(gallery)) {
    return gallery
      .map((item) => {
        if (typeof item === "string") return item;
        if (
          typeof item === "object" &&
          item !== null &&
          "image" in item &&
          typeof (item as { image?: unknown }).image === "string"
        ) {
          return (item as { image: string }).image;
        }
        return "";
      })
      .filter(Boolean);
  }

  return [];
}

export function getAllWorkSlugs() {
  if (!fs.existsSync(workDirectory)) return [];

  return fs
    .readdirSync(workDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ""),
    }));
}

export function getAllWorks(): WorkItem[] {
  if (!fs.existsSync(workDirectory)) return [];

  return fs
    .readdirSync(workDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(workDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        client: data.client || "",
        year: data.year || "",
        category: data.category || "",
        industry: data.industry || "",
        service: data.service || "",
        thumbnail: data.thumbnail || "",
        cover: data.cover || "",
        description: data.description || "",
        gallery: normalizeGallery(data.gallery),
        seo_title: data.seo_title || "",
        seo_description: data.seo_description || "",
      };
    })
    .sort((a, b) => {
      const yearA = Number(a.year) || 0;
      const yearB = Number(b.year) || 0;
      return yearB - yearA;
    });
}

export async function getWorkBySlug(slug: string): Promise<WorkItem | null> {
  const fullPath = path.join(workDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug,
    client: data.client || "",
    year: data.year || "",
    category: data.category || "",
    industry: data.industry || "",
    service: data.service || "",
    thumbnail: data.thumbnail || "",
    cover: data.cover || "",
    description: data.description || "",
    gallery: normalizeGallery(data.gallery),
    seo_title: data.seo_title || "",
    seo_description: data.seo_description || "",
    contentHtml,
  };
}