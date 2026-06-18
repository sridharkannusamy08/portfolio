"use client";

import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Get In Touch
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
              Let&apos;s Build Your{" "}
              <span className="gradient-text">Brand Together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/50">
              No forms, no friction. Reach out directly on WhatsApp or email and let&apos;s discuss
              how to grow your brand and generate qualified leads.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="block">
              <SpotlightCard
                className={cn(
                  "group h-full p-8 transition-all duration-300 md:p-10",
                  "hover:glow-green hover:border-success/30"
                )}
              >
                <div className="mb-6 inline-flex rounded-2xl bg-success/10 p-4 transition-transform duration-300 group-hover:scale-110">
                  <WhatsAppIcon className="h-10 w-10 text-success" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Chat Directly On WhatsApp
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  Get quick answers and discuss your project instantly. A pre-filled message is
                  ready — just tap send.
                </p>
                <Button
                  variant="outline"
                  className="mt-8 border-success/30 text-success hover:bg-success/10 hover:text-success"
                  asChild
                >
                  <span>Open WhatsApp</span>
                </Button>
              </SpotlightCard>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <a href={SITE.email} className="block">
              <SpotlightCard
                className={cn(
                  "group h-full p-8 transition-all duration-300 md:p-10",
                  "hover:glow-orange hover:border-primary/30"
                )}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-4 transition-transform duration-300 group-hover:scale-110">
                    <Mail className="h-10 w-10 text-primary" />
                  </div>
                  <div className="inline-flex rounded-2xl bg-success/10 p-3 transition-transform duration-300 group-hover:scale-110">
                    <WhatsAppIcon className="h-7 w-7 text-success" />
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Send An Email</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  Share your project requirements and I&apos;ll respond within 24 hours.
                </p>
                <Button className="mt-8" asChild>
                  <span>Send Email</span>
                </Button>
              </SpotlightCard>
            </a>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex items-center justify-center gap-6">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-full glass transition-all duration-300 hover:glow-green hover:border-success/30"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-6 w-6 text-white/60 transition-colors group-hover:text-success" />
            </a>
            <a
              href={SITE.email}
              className="group flex h-14 w-14 items-center justify-center rounded-full glass transition-all duration-300 hover:glow-orange hover:border-primary/30"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-white/60 transition-colors group-hover:text-primary" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-full glass transition-all duration-300 hover:glow-orange hover:border-primary/30"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-6 w-6 text-white/60 transition-colors group-hover:text-primary" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
