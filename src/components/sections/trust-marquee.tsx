"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";

export function TrustMarquee() {
  return (
    <section className="relative border-y border-white/5 py-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />

      <div className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {TRUST_BADGES.map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span>{badge}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
