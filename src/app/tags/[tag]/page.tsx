import { getAllPosts } from '@/lib/blogs';
import {
  getAllTagsFromPosts,
  getPostsByTagSlug,
  sortTagsByCount,
} from '@/lib/utils';
import { Tag } from '@/components/Tag';
import { slug as slugify } from 'github-slugger';
import type { Metadata } from 'next';

type Params = { tag: string };

/* ── dynamic <head> data ───────────────────────── */
export async function generateMetadata(
  { params }: { params: Params },
): Promise<Metadata> {
  const plain = params.tag.replaceAll('-', ' ');
  return {
    title: `Posts tagged “${plain}”`,
    description: `All posts on ${plain}`,
  };
}

/* ── paths for SSG ──────────────────────────────── */
export const generateStaticParams = async () => {
  const allPosts = await getAllPosts();
  const tagsRec  = getAllTagsFromPosts(allPosts);
  return Object.keys(tagsRec).map((t) => ({ tag: slugify(t) }));
};

/* ── page itself ────────────────────────────────── */
export default async function TagPage({ params }: { params: Params }) {
  const { tag }   = params;
  const allPosts  = await getAllPosts();

  const posts     = getPostsByTagSlug(allPosts, tag).filter((p) => p.published);
  const tagRecord = getAllTagsFromPosts(allPosts);
  const sorted    = sortTagsByCount(tagRecord);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <h1 className="font-black text-3xl mb-6">
        Posts tagged “{tag.replaceAll('-', ' ')}”
      </h1>

      <ul className="space-y-4 mb-12">
        {posts.map((p) => (
          <li key={p.slug}>
            <a href={`/blog/${p.slugAsParams}`} className="underline">
              {p.title}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="font-semibold mb-2">All tags</h2>
      <div className="flex flex-wrap gap-2">
        {sorted.map((t) => (
          <Tag key={t} tag={t} count={tagRecord[t]} />
        ))}
      </div>
    </div>
  );
}
