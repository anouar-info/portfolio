import { getAllPosts, getAllTags } from "@/lib/blogs";
import { BlogsPageClient } from "@/components/BlogsPageClient";

export default function BlogListPage() {
  return (
    <BlogsPageClient
      posts={getAllPosts()}
      tags={getAllTags()}
    />
  );
}
