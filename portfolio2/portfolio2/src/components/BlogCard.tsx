
import Link from "next/link";
import React from "react";
export interface BlogCardProps {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  readTime?: number;
}

export default function BlogCard(props: BlogCardProps) {
  const { slugAsParams,title,description,date,readTime } = props;
  return (
    <div className="flex flex-col bg-ocean/50 dark:bg-sky-600/50 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 border border-white/30">
    {/* {image && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={260}
          className="w-full h-auto object-cover"
        />
      )} */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gold mb-2">{title}</h3>
        <p className="text-xs text-blue-100 dark:text-black font-bold mb-2">
          {date && new Date(date).toLocaleDateString()}{" "}
          {readTime && `• ${readTime} min read`}
        </p>
        <p className="text-lightBlue dark:text-white mb-3">{description}</p>
        <Link
          href={`/blog/${slugAsParams}`}
          className="text-blue-600 dark:text-blue-900 font-medium hover:underline"
        >
          Read full article
        </Link>
      </div>
    </div>
  );
};