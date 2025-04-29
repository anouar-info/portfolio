// src/app/tags/[tag]/page.tsx
import { getAllPosts } from "@/lib/blogs";
import {
  getAllTagsFromPosts,
  getPostsByTagSlug,
  sortTagsByCount,
} from "@/lib/utils";
import { Tag } from "@/components/Tag";
import { slug as slugify } from "github-slugger";
import type { Metadata } from "next";

type TagParamsPromise = Promise<{ tag: string }>;

export async function generateMetadata(
  { params }: { params: TagParamsPromise }
): Promise<Metadata> {
  const { tag } = await params;
  const plain = tag.replaceAll("-", " ");
  return {
    title: `Posts tagged “${plain}”`,
    description: `All posts on ${plain}`,
  };
}

export const generateStaticParams = () => {
  const tags = getAllTagsFromPosts(getAllPosts());
  return Object.keys(tags).map((t) => ({ tag: slugify(t) }));
};

export default async function TagPage(
  { params }: { params: TagParamsPromise }
) {
  const { tag } = await params;

  const posts     = getPostsByTagSlug(getAllPosts(), tag).filter(p => p.published);
  const tagRecord = getAllTagsFromPosts(getAllPosts());
  const sorted    = sortTagsByCount(tagRecord);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <h1 className="font-black text-3xl mb-6">
        Posts tagged “{tag.replaceAll("-", " ")}”
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
