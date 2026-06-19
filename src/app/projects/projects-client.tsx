"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, TrendingUp, X, Star } from "lucide-react";
import type { Project, ProjectCategory } from "@/content/projects";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

export function ProjectsClient({
  projects,
  categories,
}: {
  projects: Project[];
  categories: ProjectCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...projects];
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category.includes(activeCategory as ProjectCategory));
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.client.toLowerCase().includes(q) ||
          p.industry.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [projects, activeCategory, searchQuery]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleCategory = (cat: string) => { setActiveCategory(cat); setPage(1); };
  const handleSearch = (q: string) => { setSearchQuery(q); setPage(1); };

  return (
    <div>
      {/* Controls */}
      <div className="mb-10 flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
          <input
            id="projects-search"
            type="search"
            placeholder="Search by client, industry, service, result..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-10 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary/40 transition-all"
            aria-label="Search projects"
          />
          {searchQuery && (
            <button type="button" onClick={() => handleSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60" aria-label="Clear">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
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

      <p className="mb-6 text-sm text-white/40">
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        {searchQuery && ` for "${searchQuery}"`}
        {activeCategory !== "All" && ` in ${activeCategory}`}
      </p>

      {/* Grid */}
      {paginated.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-white/3 py-16 text-center">
          <p className="font-heading text-lg font-bold text-white">No projects found</p>
          <p className="text-sm text-white/50">Try different filters.</p>
          <button type="button" onClick={() => { handleSearch(""); handleCategory("All"); }} className="text-sm text-primary underline underline-offset-4">
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginated.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/3 transition-all duration-300 hover:border-primary/20 hover:-translate-y-1">
                  {/* Visual header */}
                  <div className={cn("relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br p-6", project.gradient)}>
                    {project.featured && (
                      <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-primary/20 border border-primary/30 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                        <Star className="h-3 w-3 fill-primary" />
                        Featured
                      </div>
                    )}
                    <div className="text-center">
                      <p className="font-heading text-xs uppercase tracking-widest text-white/50 mb-1">{project.industry}</p>
                      <p className="font-heading text-2xl font-bold text-white leading-tight">{project.keyMetric.value}</p>
                      <p className="text-xs text-white/60 mt-1">{project.keyMetric.label}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-base font-bold text-white leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/40">{project.client}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/40">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-4">
                      <span className="text-xs text-white/40">{project.duration} · {project.year}</span>
                      <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        View Project
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button type="button" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed">
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i + 1} type="button" onClick={() => setPage(i + 1)}
              className={cn("h-9 w-9 rounded-lg text-sm font-medium transition-all", page === i + 1 ? "bg-primary text-white" : "border border-white/10 bg-white/5 text-white/60 hover:text-white")}>
              {i + 1}
            </button>
          ))}
          <button type="button" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      )}
    </div>
  );
}
