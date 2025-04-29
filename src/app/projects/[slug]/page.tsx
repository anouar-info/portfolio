import { notFound } from "next/navigation";
import { projects } from "../../../../.velite";
import { formatDate } from "@/lib/utils";
import { MDXContent } from "@/components/MDXComponents";
import "@/styles/mdx.css";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project =
    projects.find((p) => p.slug === `projects/${slug}`) ??
    projects.find((p) => p.slugAsParams === slug);

  if (!project) notFound();

  return (
    <article className="container prose dark:prose-invert mx-auto px-4 py-12">
      <h1>{project.title}</h1>
      {project.date && <p className="text-sm">{formatDate(project.date)}</p>}
      <hr className="my-6" />
      <MDXContent code={project.body} />
    </article>
  );
}
