import Image from 'next/image';
import Link from 'next/link';
import type { NewsPost } from '@/data/news';

type Props = {
  post: NewsPost;
  priority?: boolean;
  compact?: boolean;
};

export function NewsCard({ post, priority = false, compact = false }: Props) {
  return (
    <article className={compact ? 'news-card news-card-compact' : 'news-card'} data-reveal>
      <Link href={`/news/${post.slug}`} className="news-image-link" aria-label={post.title}>
        <Image
          src={post.thumbnail}
          alt={`${post.title} thumbnail`}
          fill
          sizes={compact ? '470px' : '(max-width: 720px) 100vw, 594px'}
          priority={priority}
        />
      </Link>
      <div className="news-card-copy">
        <div className="tag-row" aria-label="Categories">
          {post.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <Link className="news-title-link" href={`/news/${post.slug}`}>
          <h2>{post.title}</h2>
        </Link>
        <time dateTime={post.date}>{post.date}</time>
      </div>
    </article>
  );
}