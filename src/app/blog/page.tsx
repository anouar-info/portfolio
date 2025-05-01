import { getAllPosts, getAllTags } from '@/lib/blogs';
import { BlogsPageClient } from '@/components/BlogsPageClient';

/** Server component ─ fetch first, then hand data to the client part */
export default async function BlogListPage() {
  const posts = await getAllPosts();   
  const tags  = await getAllTags();    

  return <BlogsPageClient posts={posts} tags={tags} />;
}
