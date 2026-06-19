"use client";

import {
  Building2,
  ShoppingBag,
  Rocket,
  Palette,
  Camera,
  Leaf,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { WHO_I_HELP, SITE } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  ShoppingBag,
  Rocket,
  Palette,
  Camera,
  Leaf,
};

export function WhoIHelp() {
  return (
    <section id="who-i-help" className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Who I Work With
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            Helping Ambitious Businesses{" "}
            <span className="gradient-text">Scale Faster</span>
          </h2>
          <p className="mt-4 max-w-2xl text-white/50">
            I&apos;ve worked across industries. Every business has unique
            challenges — and industry-specific solutions. Here&apos;s how I
            help each.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHO_I_HELP.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerItem key={item.industry}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group h-full rounded-2xl border border-white/8 bg-white/3 p-6 transition-all duration-300 hover:border-primary/25 hover:bg-white/5"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {item.industry}
                  </h3>

                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-danger/80">
                        Common Challenge
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                        {item.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-success">
                        How I Solve It
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-xs font-medium text-primary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-white/8 bg-white/3 p-8 text-center">
            <p className="text-base font-medium text-white/70">
              Not sure if I can help your business?
            </p>
            <Button
              asChild
              className="bg-success hover:bg-success/90 glow-green"
            >
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Tell Me About Your Business
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
