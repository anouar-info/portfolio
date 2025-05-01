import { getAllProjects } from "@/lib/projects";
import { ProjectsPageClient } from "@/components/ProjectsPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects",
  description: "Browse all projects",
};


export default async function ProjectsPage() {
  const projects = await getAllProjects(); // Fetch all projects
  return <ProjectsPageClient projects={projects} />;
}
