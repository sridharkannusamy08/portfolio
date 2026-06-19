"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowUpRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { WHY_FAILS, SITE } from "@/lib/constants";

export function WhyWorkWithMe() {
  return (
    <section className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            The Real Problem
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            Why Businesses{" "}
            <span className="gradient-text">Struggle to Scale</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/50">
            Most marketing budgets are wasted not because of the market — but
            because of these five avoidable mistakes.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-4 md:grid-cols-1">
          {WHY_FAILS.map((point, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 rounded-xl border border-danger/15 bg-danger/5 p-5 transition-all duration-200 hover:border-danger/25 hover:bg-danger/8"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-danger/15">
                  <X className="h-4 w-4 text-danger" />
                </div>
                <p className="text-base text-white/70">{point}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Transition line */}
        <ScrollReveal delay={0.3}>
          <div className="my-12 flex items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white/40">
              The Solution
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>
        </ScrollReveal>

        {/* Solution statement */}
        <ScrollReveal delay={0.4}>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success/15">
                <Check className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-white md:text-2xl">
                  That&apos;s exactly what I help businesses fix.
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/60">
                  My consulting engagement audits all five problem areas and
                  builds a systematic growth engine — strategy, execution,
                  tracking, and automation working together. Not piecemeal fixes
                  that don&apos;t move the needle.
                </p>
                <Button
                  asChild
                  className="mt-6 bg-success hover:bg-success/90 glow-green"
                >
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Let&apos;s Fix Your Growth
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
