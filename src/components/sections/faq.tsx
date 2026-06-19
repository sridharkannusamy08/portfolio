"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { FAQ_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border transition-all duration-300",
        isOpen
          ? "border-primary/25 bg-primary/5"
          : "border-white/8 bg-white/3 hover:border-white/15"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
        id={`faq-${index}`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-heading text-base font-semibold text-white md:text-lg">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-colors",
              isOpen ? "text-primary" : "text-white/40"
            )}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border-t border-white/8 px-6 pb-6 pt-4">
              <p className="text-sm leading-relaxed text-white/60 md:text-base">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              FAQ
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-5xl">
              Common Questions,{" "}
              <span className="gradient-text">Straight Answers</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/50">
              No vague promises. Here&apos;s what you actually need to know
              before we work together.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-16 flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <StaggerItem key={i}>
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-white/8 bg-white/3 p-8 text-center">
            <p className="text-base font-medium text-white/70">
              Still have questions? Let&apos;s talk directly.
            </p>
            <Button
              asChild
              className="bg-success hover:bg-success/90 glow-green"
            >
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Ask Me on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
