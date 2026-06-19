"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { MagneticLink } from "@/components/shared/magnetic-link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-[100] section-padding pt-4"
      >
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 transition-all duration-500 md:px-6",
            scrolled
              ? "rounded-full glass bg-black/50 backdrop-blur-md shadow-lg shadow-black/20"
              : "bg-transparent"
          )}
        >
          <a href="/#home" className="font-heading text-xl font-bold tracking-tight text-white">
            {SITE.brand}
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isExternal = link.href.startsWith("/");
              return isExternal ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ) : (
                <MagneticLink
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </MagneticLink>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Button asChild size="sm" className="bg-success hover:bg-success/90 glow-green">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Me
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-6 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            {NAV_LINKS.map((link, i) => {
              const isExternal = link.href.startsWith("/");
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {isExternal ? (
                    <Link
                      href={link.href}
                      className="font-heading text-2xl font-bold text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="font-heading text-2xl font-bold text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              );
            })}
            <Button asChild className="mt-4 bg-success hover:bg-success/90 glow-green">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Me
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
