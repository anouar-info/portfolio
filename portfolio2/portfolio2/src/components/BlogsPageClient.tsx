"use client";

import { useState } from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import Sidebar from "@/components/Sidebar";

export interface BlogPost {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  image?: string;
  readTime?: number;
}

interface BlogsPageClientProps {
  posts: BlogPost[];
  tags: string[];
}

/**
 * Client component – keeps only the interactive
 * tag-filtering logic. No data fetching.
 */
export function BlogsPageClient({ posts, tags }: BlogsPageClientProps) {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = activeTag === "All"
    ? posts
    : posts.filter((p) => p.tags?.includes(activeTag));

  return (
    <div className="container mx-auto px-4">
      <header className="my-4">
        <h2 className="text-2xl md:text-5xl font-bold text-oceanLight dark:text-blue-100">
          <Link href="/blog">Blogs</Link>
        </h2>
      </header>

      <div className="flex flex-col md:flex-row">
        <aside className="md:w-1/4 mb-8 mr-10">
          <Sidebar
            categories={["All", ...tags]}
            activeCategory={activeTag}
            onCategoryChange={setActiveTag}
          />
        </aside>

        <main className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
}
