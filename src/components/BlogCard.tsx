import Link from "next/link";
import React from "react";

export interface BlogCardProps {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date?: string;
  readTime?: number;
}

export default function BlogCard({
  slugAsParams,
  title,
  description,
  date,
  readTime,
}: BlogCardProps) {
  return (
    <article className="relative flex flex-col bg-sky-50 bg-opacity-30 dark:bg-sky-700 dark:bg-opacity-40 backdrop-blur-lg rounded-2xl border-t-4 border-sky-600 dark:border-sky-50 shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      {/*
      <Image
        src={image}
        alt={title}
        width={500}
        height={260}
        className="w-full h-auto object-cover"
      />
      */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-100 mb-3">{title}</h3>
        <div className="flex items-center text-sm text-sky-500 mb-4">
          {date && (
            <time dateTime={date} className="underline decoration-dotted">
              {new Date(date).toLocaleDateString()}
            </time>
          )}
          {readTime && <span className="mx-2">•</span>}
          {readTime && <span>{readTime} min read</span>}
        </div>
        {description && (
          <p className="text-base text-sky-800 dark:text-gray-300 flex-grow font-bold">{description}</p>
        )}
        <Link
          href={`/blog/${slugAsParams}`}
          className="mt-4 inline-flex items-center text-gold2 dark:text-gold3 hover:text-blue-800 dark:hover:text-sky-50  font-medium"
        >
          Read full article <span aria-hidden="true" className="ml-2 font-extrabold">→</span>
        </Link>
      </div>
    </article>
  );
}
