"use client";

import { useRef, type MouseEvent } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { WHY_CARDS } from "@/lib/constants";

function TiltCard({ title, desc }: { title: string; desc: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="transition-transform duration-300 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      <SpotlightCard className="h-full p-6">
        <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/50">{desc}</p>
      </SpotlightCard>
    </div>
  );
}

export function WhyWorkWithMe() {
  return (
    <section className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Why Work With Me
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            Strategic Partner, Not Just a{" "}
            <span className="gradient-text">Service Provider</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((card) => (
            <StaggerItem key={card.title}>
              <TiltCard title={card.title} desc={card.desc} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
