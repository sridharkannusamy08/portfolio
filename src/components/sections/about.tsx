"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { TIMELINE } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">About Me</p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            Crafting Brands That{" "}
            <span className="gradient-text">Convert & Scale</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal delay={0.1}>
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="absolute -inset-1 animate-pulse-glow rounded-3xl bg-gradient-to-br from-primary via-primary-light to-primary-lighter opacity-60 blur-sm" />
              <div className="relative overflow-hidden rounded-3xl glass">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/sridhar-portrait.jpeg"
                    alt="Sridhar Kannusamy - Digital Marketing Strategist"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    priority
                  />
                </div>
                <div className="absolute bottom-4 left-4 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Founder
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.2}>
              <p className="mb-8 text-base leading-relaxed text-white/60 md:text-lg">
                I am an MBA student in Digital Marketing and the founder of BRANDZ—a strategic
                consulting platform helping businesses build memorable brands and generate
                qualified leads. With hands-on experience across brand strategy, SEO, Meta ads,
                and web design, I combine creative vision with data-driven execution to deliver
                measurable growth for my clients.
              </p>
            </ScrollReveal>

            <div className="relative ml-4 border-l border-white/10 pl-8">
              {TIMELINE.map((item, i) => (
                <ScrollReveal key={item.year} delay={0.1 * i}>
                  <div className="relative mb-8 last:mb-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background"
                    />
                    <p className="font-heading text-sm font-bold text-primary">{item.year}</p>
                    <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/50">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
