"use client";

import { ArrowUp, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="section-padding border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-xl font-bold text-white">{SITE.brand}</p>
            <p className="mt-2 text-sm text-white/50">{SITE.tagline}</p>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-white/40">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-white/40">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-success"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={SITE.email}
                className="text-white/50 transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-primary"
          >
            Back to Top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
