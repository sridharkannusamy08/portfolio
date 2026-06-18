"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SKILLS, TOOLS } from "@/lib/constants";

function SkillBar({ name, value }: { name: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-white">{name}</span>
        <span className="text-primary">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
        />
      </div>
    </div>
  );
}

export function SkillsTools() {
  return (
    <section id="skills" className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <ScrollReveal>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Skills
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-4xl">
                Core{" "}
                <span className="gradient-text">Expertise</span>
              </h2>
            </ScrollReveal>

            <div className="mt-10 space-y-6">
              {SKILLS.map((skill, i) => (
                <ScrollReveal key={skill.name} delay={i * 0.05}>
                  <SkillBar name={skill.name} value={skill.value} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Tools
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-4xl">
                Tech{" "}
                <span className="gradient-text">Stack</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative mt-10 flex min-h-[280px] flex-wrap items-center justify-center gap-3">
                {TOOLS.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="animate-float rounded-full glass px-4 py-2 text-sm font-medium text-white/70"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
