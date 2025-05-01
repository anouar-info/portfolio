'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects, Project } from '@/lib/projects';

const Projects: React.FC = () => {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [isLoading,  setIsLoading]  = useState(true);
  const [error,      setError]      = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const projects = await getAllProjects();
        setProjectData(projects.slice(0, 4));
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <section className="bg-transparent dark:bg-transparent py-12 font-space">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between">
          <h2 className="mr-6 text-2xl md:text-5xl font-bold mb-6 text-oceanLight dark:text-blue-100">
            <Link href="/projects">Projects</Link>
          </h2>
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-500 font-medium hover:underline"
          >
            See All Projects
          </Link>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
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
            {projectData.map((project, index) => {
              const {
                slug,
                slugAsParams,
                title,
                description,
                date,
                tags,
              } = project;
              return (
                <ProjectCard
                  key={slug || index}
                  slug={slug}
                  slugAsParams={slugAsParams}
                  title={title}
                  description={description}
                  date={date}
                  tags={tags}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
