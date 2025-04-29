// src/lib/blogs.ts
import { projects } from "../../.velite";
import { sortByDate, collectTags } from "./utils";
export interface Project {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date?: string;
  published: boolean;
  tags?: string[];
  body: string;      // Compiled MDX
  image?: string;
  key?: string;
}


/**
 * Fetch the latest 4 projects from Velite.
 */
export async function getLatestsProjects(): Promise<Project[]> {
/*   const allProjects = projects
    .filter((post: Project) => post.published !== false)
    .sort((a: Project, b: Project) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    }); */
  
  return projects.slice(0, 4);

}

/**
 * Get a list of unique tags from all projects.
 */
export async function getAllTags(): Promise<string[]> {
  const allProjects = await getAllProjects();
  const tagsSet = new Set<string>();
  allProjects.forEach((post) => {
    post.tags?.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

export function getAllProjects() {
  return sortByDate(projects).filter((p) => p.published);
}
export function getLatestProjects(n = 4) {
  return getAllProjects().slice(0, n);
}
export function getAllProjectTags() {
  return collectTags(getAllProjects());
}