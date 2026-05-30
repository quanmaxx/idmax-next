import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import type { Project } from "@/data/projects";
import { getAllWorks } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work | IDMAX",
  description: "Selected branding and logo design projects by IDMAX.",
};

export default function WorkPage() {
  const cmsWorks = getAllWorks();

  const projects = cmsWorks
    .filter((item) => item.thumbnail || item.cover)
    .map((item) => ({
      slug: item.slug,
      title: item.title,
      description: item.description || "",
      thumbnail: item.thumbnail || item.cover,
      heroImage: item.cover || item.thumbnail,
      client: item.client || "",
      publishedYear: item.year || "",
      sector: item.category || item.industry || item.service || "",
      relatedProjects: [],
      galleryImages: item.gallery.map((image) => ({
        src: image,
        alt: item.title,
      })),
    })) as Project[];

  return (
    <main className="work-main">
      <section className="container work-page">
        <div className="work-page-head" data-reveal>
          <h1>WORK</h1>
        </div>

        <ProjectGrid projects={projects} />
      </section>
    </main>
  );
}