// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blogs';
import { formatDate } from '@/lib/utils';
import '@/styles/mdx.css';

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="container prose dark:prose-invert mx-auto px-4 py-12">
      <h1>{post.title}</h1>
      {post.date && <p className="text-sm">{formatDate(post.date)}</p>}
      <hr className="my-6" />

      {/* ─── render content ─── */}
      {post.Component ?? <p className="text-red-600">No content</p>}
    </article>
  );
}
