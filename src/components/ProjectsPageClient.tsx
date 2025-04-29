/*  ────────────────────────────────────────────────
    This file no longer fetches on the client – the
    server page supplies <projects> as a prop.
    Because there’s no state/effect now, it can be
    either a server OR client component.  Leave the
    directive off unless you add interactivity later.
    ──────────────────────────────────────────────── */

    import Link from "next/link";
    import ProjectCard from "@/components/ProjectCard";
    
    export interface Project {
      slug: string;
      slugAsParams: string;
      title: string;
      description?: string;
      date?: string;
      tags?: string[];
      image?: string;
    }
    
    interface ProjectsPageClientProps {
      projects: Project[];
    }
    
    export function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
      return (
        <div className="container mx-auto px-4">
          <header className="my-4">
            <h2 className="text-2xl md:text-5xl font-bold text-oceanLight dark:text-blue-100">
              <Link href="/projects">Projects</Link>
            </h2>
          </header>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      );
    }
    