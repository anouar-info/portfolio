import { getAllProjects } from "@/lib/projects";
import { ProjectsPageClient } from "@/components/ProjectsPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects",
  description: "Browse all projects",
};

/**
 * Server component – sends the static list
 * down to a (now much smaller) client component.
 */
export default function ProjectsPage() {
  return <ProjectsPageClient projects={getAllProjects()} />;
}
