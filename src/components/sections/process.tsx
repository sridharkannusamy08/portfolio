"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  Target,
  Zap,
  TrendingUp,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Target,
  Zap,
  TrendingUp,
  Rocket,
};

const stepColors = [
  "from-primary/20 to-primary/5 border-primary/30",
  "from-primary-light/20 to-primary-light/5 border-primary-light/30",
  "from-primary-lighter/20 to-primary-lighter/5 border-primary-lighter/30",
  "from-success/20 to-success/5 border-success/30",
  "from-primary/20 to-primary/5 border-primary/30",
];

const numberColors = [
  "text-primary",
  "text-primary-light",
  "text-primary-lighter",
  "text-success",
  "text-primary",
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section id="process" className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            The 5-Stage{" "}
            <span className="gradient-text">Growth System</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/50">
            A systematic process that takes your business from where you are to
            where you want to be — with full clarity at every stage.
          </p>
        </ScrollReveal>

        {/* Desktop: Horizontal timeline */}
        <div ref={containerRef} className="relative mt-20 hidden md:block">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-10 h-0.5 bg-white/8">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-primary via-primary-light to-success"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <ScrollReveal key={step.step} delay={i * 0.1}>
                  <div className="relative flex flex-col items-center text-center">
                    {/* Step circle */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
                      className={`relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 bg-gradient-to-br ${stepColors[i]} bg-background shadow-lg`}
                    >
                      <Icon className={`h-7 w-7 ${numberColors[i]}`} />
                      <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background border border-white/10">
                        <span className={`text-xs font-bold ${numberColors[i]}`}>
                          {step.step}
                        </span>
                      </div>
                    </motion.div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="mt-16 md:hidden">
          <div className="relative ml-6 border-l border-white/10 pl-8">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <ScrollReveal key={step.step} delay={i * 0.1}>
                  <div className="relative mb-10 last:mb-0">
                    <div
                      className={`absolute -left-[53px] flex h-12 w-12 items-center justify-center rounded-full border bg-gradient-to-br ${stepColors[i]}`}
                    >
                      <Icon className={`h-5 w-5 ${numberColors[i]}`} />
                    </div>
                    <div className="mb-1 text-xs font-bold uppercase tracking-wider text-white/30">
                      Step {step.step}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
