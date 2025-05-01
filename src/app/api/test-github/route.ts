// src/app/api/test-github/route.ts
import { NextResponse } from 'next/server';
import { fetchBlogPosts, fetchBlogPost } from '@/lib/github';

interface EnvCheck {
  hasGithubToken: boolean;
  hasRepoOwner: boolean;
  hasRepoName: boolean;
  hasRevalidationToken: boolean;
}
interface SamplePost {
  title: string;
  slug: string;
  hasComponent: boolean;
}

export async function GET() {
  /* env flags */
  const env: EnvCheck = {
    hasGithubToken: !!process.env.GITHUB_TOKEN,
    hasRepoOwner:   !!process.env.CONTENT_REPO_OWNER,
    hasRepoName:    !!process.env.CONTENT_REPO_NAME,
    hasRevalidationToken: !!process.env.REVALIDATION_TOKEN,
  };

  /* fetch */
  const posts = await fetchBlogPosts();
  const first = posts[0] ? await fetchBlogPost(posts[0].slugAsParams) : null;

  const sample: SamplePost | null = first
    ? { title: first.title, slug: first.slug, hasComponent: !!first.Component }
    : null;

  return NextResponse.json({
    status: 'success',
    environmentCheck: env,
    postsCount: posts.length,
    samplePost: sample,
  });
}
