"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { CASE_STUDIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  return (
    <section id="projects" className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Case Studies
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            Featured{" "}
            <span className="gradient-text">Client Results</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 flex flex-col gap-16 md:gap-24">
          {CASE_STUDIES.map((project, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <ScrollReveal key={project.name} delay={0.1}>
                <div
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                    isReversed && "lg:[direction:rtl]"
                  )}
                >
                  <div className={cn("lg:[direction:ltr]", isReversed && "lg:order-2")}>
                    <SpotlightCard className="overflow-hidden">
                      <div
                        className={cn(
                          "flex aspect-[16/10] items-center justify-center bg-gradient-to-br",
                          project.gradient
                        )}
                      >
                        <div className="text-center">
                          <p className="font-heading text-3xl font-bold text-white md:text-4xl">
                            {project.name}
                          </p>
                          <p className="mt-2 text-sm text-white/40">Case Study Preview</p>
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>

                  <div className={cn("lg:[direction:ltr]", isReversed && "lg:order-1")}>
                    <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                      {project.name}
                    </h3>
                    <div className="mt-6 space-y-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-primary">
                          Challenge
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/60">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-primary">
                          Solution
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/60">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-success">
                          Results
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/60">
                          {project.results}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
