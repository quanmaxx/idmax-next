import type { NewsPost } from '@/data/news';
import { NewsCard } from './NewsCard';

type Props = {
  posts: NewsPost[];
};

export function NewsList({ posts }: Props) {
  return (
    <div className="news-list">
      {posts.map((post, index) => (
        <NewsCard key={post.slug} post={post} priority={index === 0} />
      ))}
    </div>
  );
}
