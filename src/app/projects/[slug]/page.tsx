// src/app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getAllProjects } from '@/lib/projects';
import { formatDate } from '@/lib/utils';
import '@/styles/mdx.css';

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = (await getAllProjects()).find(
    (p) => p.slugAsParams === slug || p.slug === `projects/${slug}`,
  );
  if (!project) notFound();

  return (
    <article className="container prose dark:prose-invert mx-auto px-4 py-12">
      <h1>{project.title}</h1>
      {project.date && <p className="text-sm">{formatDate(project.date)}</p>}
      <hr className="my-6" />
      {project.Component ?? <p className="text-red-600">No content</p>}
    </article>
  );
}