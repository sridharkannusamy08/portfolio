import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag, ArrowUpRight } from "lucide-react";
import { getAllBlogSlugs, getAllBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { SITE } from "@/lib/constants";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllBlogSlugs();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    const meta = mod.metadata;
    return {
      title: `${meta.title} | Sridhar Kannusamy`,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        type: "article",
        publishedTime: meta.date,
        authors: [meta.author],
        tags: meta.tags,
      },
    };
  } catch {
    return { title: "Article | Sridhar Kannusamy" };
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;

  let PostContent: React.ComponentType;
  let meta: {
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    category: string;
    readTime: string;
    featured: boolean;
  };

  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    PostContent = mod.default;
    meta = mod.metadata;
  } catch {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const allPosts = await getAllBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === meta.category)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="relative z-10 section-padding pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {meta.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                <Calendar className="h-3.5 w-3.5" />
                {formatDate(meta.date)}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                <Clock className="h-3.5 w-3.5" />
                {meta.readTime}
              </div>
            </div>

            <h1 className="font-heading text-3xl font-bold leading-tight tracking-tighter text-white md:text-5xl">
              {meta.title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-white/55">
              {meta.description}
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Author */}
            <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                SK
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{meta.author}</p>
                <p className="text-xs text-white/40">
                  Growth Marketing Consultant · Founder, BRANDZ
                </p>
              </div>
            </div>
          </header>

          {/* Divider */}
          <div className="mb-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* MDX Content */}
          <article className="prose-blog">
            <PostContent />
          </article>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <p className="font-heading text-xl font-bold text-white">
              Ready to Apply These Strategies?
            </p>
            <p className="mt-2 text-sm text-white/55">
              Let&apos;s build a custom growth plan for your business.
            </p>
            <Button
              asChild
              className="mt-6 bg-success hover:bg-success/90 glow-green"
            >
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Me
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <p className="mb-6 font-heading text-lg font-bold text-white">
                Related Articles
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-xl border border-white/8 bg-white/3 p-5 transition-all hover:border-primary/20 hover:bg-white/5"
                  >
                    <p className="font-heading font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </p>
                    <p className="mt-2 text-xs text-white/40">
                      {post.readTime} · {formatDate(post.date)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
