// src/lib/blogs.ts
import { posts } from "../../.velite";
import { sortByDate, collectTags } from "./utils";

export interface BlogPost {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date?: string;
  published: boolean;
  tags?: string[];
  body: string;      // Compiled MDX
  image?: string;
  readTime?: number;
  key?: string;
}


/**
 * Fetch the latest 4 posts from Velite.
 */
export async function getLatestsPosts(): Promise<BlogPost[]> {
/*   const allPosts = posts
    .filter((post: BlogPost) => post.published !== false)
    .sort((a: BlogPost, b: BlogPost) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    }); */
  
  return posts.slice(0, 4);

}

export function getAllPosts() {
  return sortByDate(posts).filter((p) => p.published);
}
export function getLatestPosts(n = 4) {
  return getAllPosts().slice(0, n);
}
export function getAllTags() {
  return collectTags(getAllPosts());
}