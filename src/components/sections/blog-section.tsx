import Link from "next/link";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { getFeaturedBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";

const categoryColors: Record<string, string> = {
  "Case Studies": "border-primary/25 bg-primary/10 text-primary",
  "SEO Guides": "border-blue-400/25 bg-blue-400/10 text-blue-400",
  "Growth Strategies": "border-success/25 bg-success/10 text-success",
  "Advertising Tips": "border-primary-light/25 bg-primary-light/10 text-primary-light",
  "Automation Tutorials": "border-purple-400/25 bg-purple-400/10 text-purple-400",
  "Branding": "border-amber-400/25 bg-amber-400/10 text-amber-400",
};

export async function BlogSection() {
  const posts = await getFeaturedBlogPosts();
  const displayPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Marketing Insights
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
                Ideas That Drive{" "}
                <span className="gradient-text">Revenue</span>
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/blog">
                All Articles
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-4 max-w-xl text-white/50">
            Real strategies, real case studies, real insights from active campaigns.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
          {displayPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/3 transition-all duration-300 hover:border-primary/20 hover:bg-white/5 hover:-translate-y-1">
                  {/* Category + read time */}
                  <div className="flex items-center justify-between p-6 pb-0">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                        categoryColors[post.category] ??
                        "border-white/15 bg-white/5 text-white/50"
                      }`}
                    >
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-white/40">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-bold text-white leading-snug transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50 line-clamp-3">
                      {post.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 text-xs text-white/35"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
                      <span className="text-xs text-white/40">
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Read Article
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
