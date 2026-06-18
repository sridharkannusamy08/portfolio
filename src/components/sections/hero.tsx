"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SITE } from "@/lib/constants";

const dashboardCards = [
  { label: "SEO Performance", value: "+247%", sub: "Organic Traffic", icon: TrendingUp, color: "text-success" },
  { label: "Meta Ads ROI", value: "3.2x", sub: "Return on Ad Spend", icon: BarChart3, color: "text-primary" },
  { label: "Lead Generation", value: "1,840", sub: "Qualified Leads", icon: Users, color: "text-primary-light" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen section-padding pt-28 pb-16 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Premium Brand Consulting
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="gradient-text">SRIDHAR</span>
              <br />
              <span className="text-white">KANNUSAMY</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg font-medium text-white/80 md:text-xl"
          >
            Digital Marketing Strategist | Brand Consultant | Founder of {SITE.brand}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
          >
            I help businesses build memorable brands, generate qualified leads, and scale
            profitably through strategic digital marketing, SEO, Meta ads, and conversion-focused
            web design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="bg-success hover:bg-success/90 glow-green">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View Case Studies</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 flex flex-wrap gap-6 border-t border-white/10 pt-6"
          >
            {[
              { value: "10+", label: "Brand Projects" },
              { value: "5+", label: "Websites" },
              { value: "Multiple", label: "Consulted" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl glass p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40">Analytics Dashboard</p>
                <p className="font-heading text-lg font-bold text-white">Performance Overview</p>
              </div>
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-danger/80" />
                <div className="h-3 w-3 rounded-full bg-primary-lighter/80" />
                <div className="h-3 w-3 rounded-full bg-success/80" />
              </div>
            </div>

            <div className="grid gap-4">
              {dashboardCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="animate-float"
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <SpotlightCard className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-white/50">{card.label}</p>
                        <p className={`font-heading text-2xl font-bold ${card.color}`}>{card.value}</p>
                        <p className="text-xs text-white/40">{card.sub}</p>
                      </div>
                      <div className="rounded-xl bg-white/5 p-3">
                        <card.icon className={`h-5 w-5 ${card.color}`} />
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-end gap-1.5 px-2">
              {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 0.6}px` }}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/20 to-primary"
                />
              ))}
            </div>
          </div>

          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-primary-light/15 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
