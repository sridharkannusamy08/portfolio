"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  );

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(scrollNext, 4500);
    return () => clearInterval(interval);
  }, [emblaApi, scrollNext]);

  return (
    <section id="testimonials" className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Client Feedback
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            What Clients{" "}
            <span className="gradient-text">Actually Say</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <SpotlightCard className="h-full p-6">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      {"result" in t && (
                        <span className="shrink-0 rounded-full border border-success/20 bg-success/10 px-2.5 py-0.5 text-xs font-bold text-success">
                          {t.result}
                        </span>
                      )}
                    </div>

                    <Quote className="mb-3 h-5 w-5 text-primary/30 fill-primary/20" />
                    <p className="text-sm leading-relaxed text-white/60">
                      {t.text}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{t.name}</p>
                        <p className="text-xs text-white/40">
                          {t.role}
                          {"company" in t && `, ${t.company}`}
                        </p>
                        {"businessType" in t && (
                          <p className="text-xs text-white/30">{t.businessType}</p>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
