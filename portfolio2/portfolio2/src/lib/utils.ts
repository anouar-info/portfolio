// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { slug } from "github-slugger";
import { BlogPost } from "./blogs";
import { twMerge } from 'tailwind-merge'; 
import { format } from "date-fns";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
export const formatDate = (d: string | number) =>
  format(new Date(d), "MMMM d, yyyy");

export function sortPosts(posts: BlogPost[]) {
  return posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });
}

export function getAllTagsFromPosts(posts: BlogPost[]) {
  const tags: Record<string, number> = {};
  posts.forEach(post => {
    if (post.published) {
      post.tags?.forEach(tag => {
        tags[tag] = (tags[tag] ?? 0) + 1;
      });
    }
  });
  return tags;
}

export function sortTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

export function getPostsByTagSlug(posts: BlogPost[], tagSlug: string) {
  return posts.filter(post => {
    if (!post.tags) return false;
    const slugifiedTags = post.tags.map(tag => slug(tag));
    return slugifiedTags.includes(tagSlug);
  });
}
export function sortByDate<T extends { date?: string }>(arr: T[]) {
  return [...arr].sort(
    (a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
  );
}

export function collectTags<T extends { tags?: string[] }>(arr: T[]) {
  const set = new Set<string>();
  arr.forEach((i) => i.tags?.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}