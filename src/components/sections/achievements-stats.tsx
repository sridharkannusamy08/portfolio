"use client";

import {
  Award,
  Globe,
  Users,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { CountUpNumber } from "@/components/shared/count-up-number";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ACHIEVEMENTS, STATS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Globe,
  Users,
  GraduationCap,
};

export function AchievementsStats() {
  return (
    <section className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Achievements
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            Proven{" "}
            <span className="gradient-text">Track Record</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerItem key={item.title}>
                <SpotlightCard className="p-6 text-center">
                  <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">{item.desc}</p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl font-bold text-white md:text-5xl">
                  <CountUpNumber end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
