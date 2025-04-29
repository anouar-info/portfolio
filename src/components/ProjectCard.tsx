
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slugAsParams,
  title,
  description,
  date,
  tags,
}) => {
  return (
    <div className="flex bg-transparent">
      {/* image && (
        <div>
          <img
            src={image}
            alt={title}
            className="flex justify-center w-fit h-52 object-cover"
          />
        </div>
      ) */}
      <div className="p-4 flex flex-col">
        <h3 className="text-2xl font-semibold text-ocean hover:text-gold dark:text-blue-100 dark:hover:text-gold mb-2">
          {title}
        </h3>
        {/* Fixed the tailwind class here: previously "text-lgtext-oceanLight" */}
        <p className="text-xs text-blue-100 dark:text-sky-900 font-bold mb-2">
          {date && new Date(date).toLocaleDateString()}{" "}
        </p>
        <p className="text-lg text-oceanLight dark:text-blue-300 mb-3">
          {description}
        </p>
        <p className="text-lg text-oceanLight dark:text-blue-300 mb-3">
          {tags}
        </p>
        <Link
          href={`/projects/${slugAsParams}`}
          className="text-blue-600 dark:text-blue-600 font-medium hover:underline"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
