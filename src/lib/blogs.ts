// src/lib/blogs.ts
import { fetchBlogPosts, fetchBlogPost } from './github';

/** A post coming from GitHub (or later from Velite if you mix both) */
export interface BlogPost {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date?: string;
  published: boolean;
  tags?: string[];
  /** when you list posts you don’t need the body or Component */
  body?: string;                     // ← for old Velite fallback (optional)
  Component?: React.ReactElement;    // ← compiled MDX from GitHub
  image?: string;
  readTime?: number;
  key?: string;
}

/* ------------ thin wrappers around github.ts ------------ */
export async function getAllPosts(): Promise<BlogPost[]> {
  return fetchBlogPosts();
}
export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  return fetchBlogPost(slug);
}
export async function getLatestPosts(n = 4) {
  return (await getAllPosts()).slice(0, n);
}
export async function getAllTags() {
  const set = new Set<string>();
  (await getAllPosts()).forEach((p) => p.tags?.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}
