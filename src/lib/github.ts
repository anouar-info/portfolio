import { BlogPost } from './blogs';
import { compileMDX } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';

const GITHUB_API_URL = 'https://api.github.com';
const REPO_OWNER     = process.env.CONTENT_REPO_OWNER;
const REPO_NAME      = process.env.CONTENT_REPO_NAME;
const GITHUB_TOKEN   = process.env.GITHUB_TOKEN;

const headers = {
  Accept:        'application/vnd.github+json',
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  'X-GitHub-Api-Version': '2022-11-28',
};

/* ---------- Local types ---------- */
interface RemoteBlogPost extends Omit<BlogPost, 'body' | 'Component'> {
  Component: React.ReactElement;
}


/* ---------- GitHub helpers ---------- */
async function fetchFromGitHub(path: string) {
  const res = await fetch(
    `${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
    { headers, next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.statusText}`);
  return res.json();
}

async function fetchFileContent(url: string) {
  const res = await fetch(url, { headers, next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Failed to fetch file: ${res.statusText}`);
  return res.text();
}

const decodeBase64Content = (c: string) =>
  Buffer.from(c, 'base64').toString('utf-8');

/* ---------- MDX processing ---------- */
async function processMDXContent(
  mdx: string,
  slug: string,
): Promise<RemoteBlogPost> {
  const { data, content } = matter(mdx);

  const { content: Component } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return {
    slug: `blog/${slug}`,
    slugAsParams: slug,
    title: data.title ?? 'Untitled',
    description: data.description ?? '',
    date: data.date ? String(data.date) : '',
    published: data.published !== false,
    tags: data.tags ?? [],
    Component,
    image: data.image ?? '',
    readTime: data.readTime ?? calculateReadTime(content),
    key: slug,
  };
}

const calculateReadTime = (txt: string) =>
  Math.ceil(txt.trim().split(/\s+/).length / 200);

/* ---------- Public fetchers ---------- */
export async function fetchBlogPosts(): Promise<RemoteBlogPost[]> {
  try {
    const files = await fetchFromGitHub('content/blog');
    if (!Array.isArray(files)) throw new Error('Expected array of files');

    const mdxFiles = files.filter(
      (f) => f.type === 'file' && f.name.endsWith('.mdx'),
    );

    const posts = await Promise.all(
      mdxFiles.map(async (f) => {
        const raw =
          f.content !== undefined
            ? decodeBase64Content(f.content)
            : await fetchFileContent(f.download_url);
        return processMDXContent(raw, f.name.replace(/\.mdx$/, ''));
      }),
    );

    /* safe date compare — handles empty string */
    return posts
      .filter((p) => p.published)
      .sort(
        (a, b) =>
          new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime(),
      );
  } catch {
    return [];
  }
}

export async function fetchBlogPost(
  slug: string,
): Promise<RemoteBlogPost | null> {
  try {
    const file = await fetchFromGitHub(`content/blog/${slug}.mdx`);
    if (!file || file.type !== 'file') return null;

    const raw =
      file.content !== undefined
        ? decodeBase64Content(file.content)
        : await fetchFileContent(file.download_url);

    return processMDXContent(raw, slug);
  } catch {
    return null;
  }
}

export async function fetchProjects(): Promise<RemoteBlogPost[]> {
  try {
    const files = await fetchFromGitHub('content/projects');
    if (!Array.isArray(files)) throw new Error('Expected array of files');

    const mdxFiles = files.filter(
      (f) => f.type === 'file' && f.name.endsWith('.mdx'),
    );

    const projects = await Promise.all(
      mdxFiles.map(async (f) => {
        const raw =
          f.content !== undefined
            ? decodeBase64Content(f.content)
            : await fetchFileContent(f.download_url);
        return processMDXContent(raw, f.name.replace(/\.mdx$/, ''));
      }),
    );

    return projects
      .filter((p) => p.published)
      .sort(
        (a, b) =>
          new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime(),
      );
  } catch {
    return [];
  }
}
