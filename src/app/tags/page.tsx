import { getAllPosts } from "@/lib/blogs";           // NEW
import { getAllTagsFromPosts, sortTagsByCount } from "@/lib/utils";
import { Tag } from "@/components/Tag";              // path uses capital “T”
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tags",
  description: "Topics I've written about",
};

export default async function TagsPage() {
  const posts = await getAllPosts();
  const tagsRecord = getAllTagsFromPosts(posts);      // posts ⇒ record {"react": 3, …}
  const sorted = sortTagsByCount(tagsRecord);        // ["react","css",…]

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <h1 className="font-black text-4xl lg:text-5xl mb-4">Tags</h1>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {sorted.map((tag) => (
          <Tag key={tag} tag={tag} count={tagsRecord[tag]} />
        ))}
      </div>
    </div>
  );
}
