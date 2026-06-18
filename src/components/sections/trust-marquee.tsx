import { Check } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";

export function TrustMarquee() {
  const items = [...TRUST_BADGES, ...TRUST_BADGES];

  return (
    <section className="relative overflow-hidden border-y border-white/5 py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((badge, i) => (
          <div
            key={`${badge}-${i}`}
            className="mx-8 flex items-center gap-2 text-sm font-medium text-white/60"
          >
            <Check className="h-4 w-4 text-primary" />
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
}
