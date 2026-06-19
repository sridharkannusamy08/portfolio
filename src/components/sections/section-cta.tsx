"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { SITE } from "@/lib/constants";

interface SectionCTAProps {
  heading?: string;
  subtext?: string;
  cta?: string;
}

export function SectionCTA({
  heading = "Want Similar Results?",
  subtext = "Let's discuss what's possible for your business.",
  cta = "WhatsApp Me",
}: SectionCTAProps) {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/3 px-8 py-6 sm:flex-row">
          <div>
            <p className="font-heading text-lg font-bold text-white">
              {heading}
            </p>
            <p className="text-sm text-white/50">{subtext}</p>
          </div>
          <Button
            asChild
            className="shrink-0 bg-success hover:bg-success/90 glow-green"
          >
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              {cta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
