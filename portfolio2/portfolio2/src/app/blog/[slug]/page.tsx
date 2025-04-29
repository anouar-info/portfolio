import { notFound } from "next/navigation";
import { posts } from "../../../../.velite";
import { formatDate } from "@/lib/utils";
import { MDXContent } from "@/components/MDXComponents";
import "@/styles/mdx.css";

export default async function BlogPostPage({
  params,
}: {
  // Next.js 15 App-Router always passes params as a Promise<{ slug: string }>
  params: Promise<{ slug: string }>;
}) {
  // await the promise to get your slug string
  const { slug } = await params;  // ← now `slug` is strongly typed :contentReference[oaicite:0]{index=0}

  const post =
    posts.find((p) => p.slug === `blog/${slug}`) ??
    posts.find((p) => p.slugAsParams === slug);

  if (!post) notFound();

  return (
    <article className="container prose dark:prose-invert mx-auto px-4 py-12">
      <h1>{post.title}</h1>
      {post.date && <p className="text-sm">{formatDate(post.date)}</p>}
      {/* …image / tags … */}
      <hr className="my-6" />
      <MDXContent code={post.body} />
    </article>
  );
}
