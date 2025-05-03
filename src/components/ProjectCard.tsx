import Link from "next/link";
import React from "react";

export interface ProjectCardProps {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
}

export default function ProjectCard({
  slugAsParams,
  title,
  description,
  date,
  tags,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col lg:flex-row bg-white/80 dark:bg-ocean/30 backdrop-blur-md rounded-xl border-l-4 border-ocean dark:border-gold shadow-md hover:shadow-xl transition-shadow duration-300 p-6 gap-6">
      {/*
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      */}

      <div className="flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-ocean dark:text-gold mb-2">
          {title}
        </h3>

        {date && (
          <time
            dateTime={date}
            className="text-sm text-gray-600 dark:text-blue-200 mb-3"
          >
            {new Date(date).toLocaleDateString()}
          </time>
        )}

        {description && (
          <p className="text-base text-gray-800 dark:text-blue-100 mb-4 flex-grow">
            {description}
          </p>
        )}

        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-ocean/20 text-ocean dark:bg-gold/20 dark:text-gold px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/projects/${slugAsParams}`}
          className="self-start inline-block px-4 py-2 bg-ocean text-white rounded-lg font-medium hover:bg-ocean-dark dark:bg-gold dark:text-ocean dark:hover:bg-gold/90 transition-colors duration-200"
        >
          View Project →
        </Link>
      </div>
    </article>
  );
}