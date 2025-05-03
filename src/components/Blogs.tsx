"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blogs";
import { CTA } from "@/components/CTA";
import { FaArrowRight } from "react-icons/fa";

interface BlogPost {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  date?: string;
  body: string;
  image?: string;
  readTime?: number;
}

const Blogs: React.FC = () => {
  const [blogData, setBlogData] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        setError(null);
        const posts = await getAllPosts();
        setBlogData(posts.slice(0, 4));
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
        console.error("Error fetching blog posts:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section className="bg-transparent dark:bg-transparent py-12 font-space">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-5xl font-bold text-oceanLight dark:text-sky-100">
            <Link href="/blog">Blogs</Link>
          </h2>
          <CTA
            href="/blog"
            label="See All Blogs"
            Icon={FaArrowRight}
            ariaLabel="View all blog articles"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogData.map((blog, index) => (
              <BlogCard
                key={blog.slug || index}
                slug={blog.slug}
                slugAsParams={blog.slugAsParams}
                title={blog.title}
                description={blog.description}
                date={blog.date}
                readTime={blog.readTime}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
