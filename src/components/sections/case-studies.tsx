"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, TrendingUp, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { getFeaturedCaseStudies } from "@/content/projects";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CaseStudyTab = "challenge" | "strategy" | "execution" | "results";

const TABS: { key: CaseStudyTab; label: string }[] = [
  { key: "challenge", label: "Challenge" },
  { key: "strategy", label: "Strategy" },
  { key: "execution", label: "Execution" },
  { key: "results", label: "Results" },
];

export function CaseStudies() {
  const projects = getFeaturedCaseStudies();
  const [activeTab, setActiveTab] = useState<Record<string, CaseStudyTab>>(
    Object.fromEntries(projects.map((p) => [p.slug, "challenge"]))
  );

  return (
    <section id="case-studies" className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Case Studies
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            Featured{" "}
            <span className="gradient-text">Client Results</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/50">
            Real campaigns. Real budgets. Real results you can verify.
          </p>
        </ScrollReveal>

        <div className="mt-16 flex flex-col gap-16 md:gap-24">
          {projects.map((project, i) => {
            const isReversed = i % 2 !== 0;
            const currentTab = activeTab[project.slug] ?? "challenge";

            const tabContent: Record<CaseStudyTab, string> = {
              challenge: project.challenge,
              strategy: project.strategy,
              execution: project.execution,
              results: project.results.join("\n"),
            };

            return (
              <ScrollReveal key={project.slug} delay={0.1}>
                <div
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                    isReversed && "lg:[direction:rtl]"
                  )}
                >
                  {/* Visual Panel */}
                  <div className={cn("lg:[direction:ltr]")}>
                    <div
                      className={cn(
                        "group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br",
                        project.gradient
                      )}
                    >
                      <div className="flex aspect-[16/10] flex-col items-center justify-center p-8 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/60 backdrop-blur-sm mb-4">
                          <span>{project.industry}</span>
                        </div>
                        <p className="font-heading text-2xl font-bold text-white md:text-3xl leading-tight">
                          {project.title}
                        </p>
                        <div className="mt-4 flex items-center gap-2 rounded-full bg-success/15 border border-success/20 px-4 py-2">
                          <TrendingUp className="h-4 w-4 text-success" />
                          <span className="text-sm font-bold text-success">
                            {project.keyMetric.value} {project.keyMetric.label}
                          </span>
                        </div>
                      </div>

                      {/* Tag row */}
                      <div className="border-t border-white/10 bg-black/20 px-6 py-3 backdrop-blur-sm">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="lg:[direction:ltr]">
                    <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/40">
                      <span>{project.client}</span>
                      <span>·</span>
                      <span>{project.duration}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                      {project.title}
                    </h3>

                    {/* Tab Navigation */}
                    <div className="mt-6 flex flex-wrap gap-1 rounded-xl border border-white/8 bg-white/3 p-1">
                      {TABS.map((tab) => (
                        <button
                          key={tab.key}
                          type="button"
                          onClick={() =>
                            setActiveTab((prev) => ({
                              ...prev,
                              [project.slug]: tab.key,
                            }))
                          }
                          className={cn(
                            "flex-1 rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200",
                            currentTab === tab.key
                              ? "bg-primary text-white shadow-lg shadow-primary/20"
                              : "text-white/40 hover:text-white/70"
                          )}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content */}
                    <div className="mt-4 min-h-[120px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentTab}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                        >
                          {currentTab === "results" ? (
                            <ul className="space-y-2">
                              {project.results.map((r, ri) => (
                                <li
                                  key={ri}
                                  className="flex items-start gap-2.5 text-sm leading-relaxed text-white/60"
                                >
                                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm leading-relaxed text-white/60">
                              {tabContent[currentTab]}
                            </p>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button asChild variant="outline" size="sm">
                        <a href={`/projects/${project.slug}`}>
                          <ExternalLink className="h-4 w-4" />
                          View Full Case Study
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="bg-success hover:bg-success/90"
                      >
                        <a
                          href={SITE.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                          Want Similar Results?
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg">
              <a href="/projects">
                View All Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
