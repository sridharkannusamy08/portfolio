"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, Search, Tag, X } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";
import { cn } from "@/lib/utils";

const POSTS_PER_PAGE = 6;

const categoryColors: Record<string, string> = {
  "Case Studies": "border-primary/25 bg-primary/10 text-primary",
  "SEO Guides": "border-blue-400/25 bg-blue-400/10 text-blue-400",
  "Growth Strategies": "border-success/25 bg-success/10 text-success",
  "Advertising Tips": "border-primary-light/25 bg-primary-light/10 text-primary-light",
  "Automation Tutorials": "border-purple-400/25 bg-purple-400/10 text-purple-400",
  "Branding": "border-amber-400/25 bg-amber-400/10 text-amber-400",
};

export function BlogClient({
  posts,
  categories,
}: {
  posts: BlogPostMeta[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = posts;
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [posts, activeCategory, searchQuery]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setPage(1);
  };

  return (
    <div>
      {/* Search + Filter bar */}
      <div className="mb-10 flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
          <input
            type="search"
            placeholder="Search articles, topics, tags..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-10 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary/40 focus:bg-white/8 transition-all"
            id="blog-search"
            aria-label="Search blog posts"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => handleSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "border-primary bg-primary text-white shadow-lg shadow-primary/20"
                  : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-white/40">
        {filtered.length} article{filtered.length !== 1 ? "s" : ""}
        {searchQuery && ` for "${searchQuery}"`}
        {activeCategory !== "All" && ` in ${activeCategory}`}
      </p>

      {/* Grid */}
      {paginated.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-white/3 py-16 text-center">
          <p className="font-heading text-lg font-bold text-white">
            No articles found
          </p>
          <p className="text-sm text-white/50">
            Try a different search term or category.
          </p>
          <button
            type="button"
            onClick={() => { handleSearch(""); handleCategoryChange("All"); }}
            className="text-sm text-primary underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginated.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
              <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/3 transition-all duration-300 hover:border-primary/20 hover:bg-white/5 hover:-translate-y-1">
                <div className="flex items-center justify-between p-6 pb-0">
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                      categoryColors[post.category] ?? "border-white/15 bg-white/5 text-white/50"
                    )}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-white/40">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold leading-snug text-white transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-xs text-white/35">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
                    <span className="text-xs text-white/40">{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Read
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition-colors hover:border-white/20 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              type="button"
              onClick={() => setPage(i + 1)}
              className={cn(
                "h-9 w-9 rounded-lg text-sm font-medium transition-all",
                page === i + 1
                  ? "bg-primary text-white"
                  : "border border-white/10 bg-white/5 text-white/60 hover:text-white"
              )}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition-colors hover:border-white/20 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
