"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { SITE } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-primary-light/5 p-10 text-center md:p-16"
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary-light/10 blur-3xl" />

          {/* Decorative top badge */}
          <div className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Growth Marketing Consultant
          </div>

          <h2 className="relative font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl lg:text-6xl">
            Ready to Scale{" "}
            <span className="gradient-text">Your Business?</span>
          </h2>

          <p className="relative mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            Whether you&apos;re looking for more leads, higher sales, stronger
            branding, or smarter automation — let&apos;s build a growth system
            that delivers measurable results. No fluff. No vanity metrics. Just
            revenue.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-success hover:bg-success/90 glow-green text-base"
            >
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Me
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <a href="#case-studies">View Case Studies</a>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/8 pt-8">
            {[
              "No long-term contracts",
              "Weekly reporting",
              "Revenue-focused KPIs",
            ].map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-sm text-white/40"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-success" />
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
