// src/lib/projects.ts
import { fetchProjects } from './github';

export interface Project {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date?: string;
  published: boolean;
  tags?: string[];
  body?: string;
  Component?: React.ReactElement;
  image?: string;
  key?: string;
}

export async function getAllProjects(): Promise<Project[]> {
  return fetchProjects();
}
export async function getLatestProjects(n = 4) {
  return (await getAllProjects()).slice(0, n);
}
export async function getAllProjectTags() {
  const set = new Set<string>();
  (await getAllProjects()).forEach((p) => p.tags?.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}