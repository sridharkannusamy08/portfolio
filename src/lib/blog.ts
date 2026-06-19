import fs from "fs";
import path from "path";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  readTime: string;
  featured: boolean;
  coverImage?: string;
}

export interface BlogPostWithContent extends BlogPostMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

// Read all blog post metadata (server-side only)
export async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts: BlogPostMeta[] = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    try {
      // Dynamically import the MDX file to get its exported metadata
      const mod = await import(`@/content/blog/${slug}.mdx`);
      const meta = mod.metadata as Omit<BlogPostMeta, "slug">;
      posts.push({ slug, ...meta });
    } catch {
      // Skip files that can't be imported
    }
  }

  // Sort by date descending
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Get all unique categories from blog posts
export async function getAllBlogCategories(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const cats = new Set(posts.map((p) => p.category));
  return ["All", ...Array.from(cats)];
}

// Get all unique tags from blog posts
export async function getAllBlogTags(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const tags = new Set(posts.flatMap((p) => p.tags));
  return Array.from(tags);
}

// Get featured posts
export async function getFeaturedBlogPosts(): Promise<BlogPostMeta[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((p) => p.featured);
}

// Get posts with optional category filter and search
export async function getFilteredBlogPosts(
  category?: string,
  searchQuery?: string,
  tag?: string
): Promise<BlogPostMeta[]> {
  let posts = await getAllBlogPosts();

  if (category && category !== "All") {
    posts = posts.filter((p) => p.category === category);
  }

  if (tag) {
    posts = posts.filter((p) => p.tags.includes(tag));
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
    );
  }

  return posts;
}

// Paginate posts
export function paginatePosts<T>(
  posts: T[],
  page: number,
  perPage: number = 6
): { posts: T[]; totalPages: number; currentPage: number; total: number } {
  const total = posts.length;
  const totalPages = Math.ceil(total / perPage);
  const currentPage = Math.min(Math.max(1, page), totalPages || 1);
  const start = (currentPage - 1) * perPage;
  return {
    posts: posts.slice(start, start + perPage),
    totalPages,
    currentPage,
    total,
  };
}

// Get all slugs for generateStaticParams
export function getAllBlogSlugs(): { slug: string }[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

// Format date
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
