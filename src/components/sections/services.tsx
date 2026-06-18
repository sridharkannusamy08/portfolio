"use client";

import {
  Target,
  Layout,
  Search,
  Megaphone,
  PenLine,
  Briefcase,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Layout,
  Search,
  Megaphone,
  PenLine,
  Briefcase,
};

export function Services() {
  return (
    <section id="services" className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Services</p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            End-to-End{" "}
            <span className="gradient-text">Growth Solutions</span>
          </h2>
          <p className="mt-4 max-w-2xl text-white/50">
            From brand strategy to paid acquisition—comprehensive services designed to build
            authority and drive qualified leads.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.title}>
                <SpotlightCard className="group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{service.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
