"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import { CTA } from "@/components/CTA";
import { FaArrowRight } from "react-icons/fa";

interface Project {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  body: string;
  image?: string;
}

const Projects: React.FC = () => {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setIsLoading(true);
        setError(null);
        const posts = await getAllProjects();
        setProjectData(posts.slice(0, 4));
      } catch (err) {
        setError("Failed to load projects. Please try again later.");
        console.error("Error fetching projects:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section className="bg-transparent dark:bg-transparent py-12 font-space">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="mr-6 text-2xl md:text-5xl font-bold text-oceanLight dark:text-blue-100">
            <Link href="/projects">Projects</Link>
          </h2>
          <CTA
            href="/projects"
            label="See All Projects"
            Icon={FaArrowRight}
            ariaLabel="View all projects"
          />
        </div>

        {isLoading && (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center min-h-[200px] text-red-500 dark:text-red-400">
            <p className="text-lg mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectData.map((project, index) => (
              <ProjectCard
                key={project.slug || index}
                slug={project.slug}
                slugAsParams={project.slugAsParams}
                title={project.title}
                description={project.description}
                date={project.date}
                tags={project.tags}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
