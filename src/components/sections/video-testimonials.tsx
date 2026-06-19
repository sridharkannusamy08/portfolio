"use client";

import { motion } from "framer-motion";
import { Play, Star, ArrowUpRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { VIDEO_TESTIMONIALS, getEmbedUrl } from "@/content/video-testimonials";
import { SITE } from "@/lib/constants";
import { useState } from "react";

function VideoCard({ testimonial }: { testimonial: typeof VIDEO_TESTIMONIALS[number] }) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = getEmbedUrl(testimonial);
  const hasVideo = !!testimonial.videoUrl && !!embedUrl;

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/8 bg-white/3 transition-all duration-300 hover:border-primary/20 hover:bg-white/5">
      {/* Video area */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/10 via-background to-primary-light/5">
        {hasVideo && playing ? (
          <iframe
            src={`${embedUrl}?autoplay=1`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${testimonial.clientName} testimonial`}
          />
        ) : (
          /* Placeholder / thumbnail */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-2 text-center px-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm font-medium text-white/60 max-w-[200px]">
                &ldquo;{testimonial.resultAchieved}&rdquo;
              </p>
            </div>

            <motion.button
              type="button"
              onClick={() => hasVideo && setPlaying(true)}
              whileHover={hasVideo ? { scale: 1.1 } : {}}
              whileTap={hasVideo ? { scale: 0.95 } : {}}
              className={`flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                hasVideo
                  ? "border-primary bg-primary/20 hover:bg-primary/30 cursor-pointer"
                  : "border-white/20 bg-white/5 cursor-not-allowed opacity-40"
              }`}
              aria-label={hasVideo ? "Play testimonial" : "Video coming soon"}
            >
              <Play className="ml-1 h-6 w-6 fill-current text-white" />
            </motion.button>

            {!hasVideo && (
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/40">
                Video Coming Soon
              </span>
            )}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-heading font-bold text-white">{testimonial.clientName}</p>
            <p className="text-sm text-white/50">
              {testimonial.clientRole} · {testimonial.businessType}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-success/10 border border-success/20 px-2.5 py-0.5 text-xs font-bold text-success">
            {testimonial.resultAchieved}
          </span>
        </div>
      </div>
    </div>
  );
}

export function VideoTestimonials() {
  return (
    <section className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
            Don&apos;t Take My{" "}
            <span className="gradient-text">Word For It</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/50">
            Hear directly from the business owners who saw the results.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2">
          {VIDEO_TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <VideoCard testimonial={testimonial} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-white/50">
              Ready to become the next success story?
            </p>
            <Button
              asChild
              className="bg-success hover:bg-success/90 glow-green"
            >
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Me Now
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
