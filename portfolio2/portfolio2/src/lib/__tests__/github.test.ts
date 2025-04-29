import { fetchBlogPosts, fetchBlogPost } from '../github';

describe('GitHub Content Integration', () => {
  test('fetchBlogPosts returns an array of posts', async () => {
    const posts = await fetchBlogPosts();
    expect(Array.isArray(posts)).toBe(true);
    
    if (posts.length > 0) {
      const post = posts[0];
      expect(post).toHaveProperty('slug');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
      expect(post.published).toBe(true);
    }
  });

  test('fetchBlogPost returns a single post', async () => {
    // Replace with a known slug from your content repository
    const slug = 'hello-world';
    const post = await fetchBlogPost(slug);
    
    if (post) {
      expect(post).toHaveProperty('slug', `blog/${slug}`);
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
      expect(post.published).toBe(true);
    } else {
      console.warn(`Test post '${slug}' not found. Make sure it exists in the repository.`);
    }
  });

  test('fetchBlogPost returns null for non-existent post', async () => {
    const post = await fetchBlogPost('non-existent-post');
    expect(post).toBeNull();
  });
}); 