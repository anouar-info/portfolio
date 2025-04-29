import { NextResponse } from 'next/server';
import { fetchBlogPosts, fetchBlogPost } from '@/lib/github';

/* ──────────────────────────────────
   Helper interfaces for the JSON we
   return from this diagnostic route
   ────────────────────────────────── */
interface EnvCheck {
  hasGithubToken: boolean;
  hasRepoOwner: boolean;
  hasRepoName: boolean;
  hasRevalidationToken: boolean;
}

interface SamplePost {
  title: string;
  slug: string;
  hasContent: boolean;
}

export async function GET(): Promise<NextResponse> {
  try {
    /* ---------- Check env vars ---------- */
    const envCheck: EnvCheck = {
      hasGithubToken: Boolean(process.env.GITHUB_TOKEN),
      hasRepoOwner: Boolean(process.env.CONTENT_REPO_OWNER),
      hasRepoName: Boolean(process.env.CONTENT_REPO_NAME),
      hasRevalidationToken: Boolean(process.env.REVALIDATION_TOKEN),
    };

    /* ---------- Fetch remote posts ---------- */
    const posts = await fetchBlogPosts();
    const singlePost = posts.length
      ? await fetchBlogPost(posts[0].slugAsParams)
      : null;

    /* ---------- Minimal sample object ---------- */
    const samplePost: SamplePost | null = singlePost
      ? {
          title: singlePost.title,
          slug: singlePost.slug,
          // RemoteBlogPost has **Component** instead of body
          hasContent: Boolean(singlePost.Component),
        }
      : null;

    return NextResponse.json({
      status: 'success',
      environmentCheck: envCheck,
      postsCount: posts.length,
      samplePost,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { status: 'error', message },
      { status: 500 },
    );
  }
}
