"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Process
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            How We{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
        </ScrollReveal>

        <div ref={containerRef} className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-white/10 md:block">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-gradient-to-r from-primary to-primary-light"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="relative text-center md:text-left">
                  <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background font-heading text-lg font-bold text-primary md:mx-0">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
