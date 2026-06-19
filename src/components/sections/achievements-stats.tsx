"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { STATS } from "@/lib/constants";

function AnimatedStat({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center justify-center rounded-2xl border border-white/8 bg-white/3 p-8 text-center"
    >
      {/* Glow behind number */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <p className="font-heading text-5xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        >
          {stat.prefix}
        </motion.span>
        <CountUp
          end={stat.value}
          inView={inView}
          delay={index * 0.1 + 0.3}
        />
        <motion.span
          className="gradient-text"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
        >
          {stat.suffix}
        </motion.span>
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-wider text-white/50">
        {stat.label}
      </p>
    </motion.div>
  );
}

function CountUp({
  end,
  inView,
  delay,
}: {
  end: number;
  inView: boolean;
  delay: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={
        inView
          ? {
              opacity: 1,
            }
          : {}
      }
      onAnimationComplete={() => {
        if (!ref.current || !inView) return;
        let start = 0;
        const duration = 1500;
        const startTime = performance.now();

        function step(currentTime: number) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * end);
          if (ref.current) {
            ref.current.textContent = current.toString();
          }
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        }
        requestAnimationFrame(step);
      }}
      transition={{ duration: 0.1, delay }}
    >
      0
    </motion.span>
  );
}

export function AchievementsStats() {
  return (
    <section id="results" className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Results
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            Numbers That{" "}
            <span className="gradient-text">Speak For Themselves</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/50">
            Every number below is real, verified, and attributable to specific
            client campaigns.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 rounded-2xl border border-primary/15 bg-primary/5 p-8">
            <p className="text-center text-base italic text-white/60 md:text-lg">
              &ldquo;These results come from real clients, real campaigns, and
              real money on the line. No inflated estimates, no projected
              figures.&rdquo;
            </p>
            <p className="mt-4 text-center text-sm font-semibold text-primary">
              — Sridhar Kannusamy, Growth Marketing Consultant
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
