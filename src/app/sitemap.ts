export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { news } from '@/data/news';
import { site } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/news', '/contact'].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  const newsRoutes = news.map((post) => ({
    url: `${site.url}/news/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...projectRoutes, ...newsRoutes];
}
