"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { ComingSoonButton } from "@/widgets/landing/components/coming-soon-button";

const primaryClass =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-primary to-[color:color-mix(in_srgb,var(--primary)_72%,black)] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_-14px_color-mix(in_srgb,var(--primary)_70%,transparent)] ring-1 ring-white/10 transition hover:brightness-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yes focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const secondaryClass =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-background/35 px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur-md transition hover:border-yes/35 hover:bg-yes/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yes/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const heroPrimaryClass =
  "hero-cta-primary group relative inline-flex min-w-[10rem] items-center justify-center gap-2 overflow-hidden rounded-xl px-7 py-3.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yes/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const heroSecondaryClass =
  "hero-cta-secondary group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-7 py-3.5 text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function MarketingLandingCtas({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "hero";
}) {
  const isHero = variant === "hero";
  const primary = isHero ? heroPrimaryClass : primaryClass;
  const secondary = isHero ? heroSecondaryClass : secondaryClass;
  const reduceMotion = useReducedMotion() ?? false;

  const wrap = (child: ReactNode, delay: number) =>
    isHero && !reduceMotion ? (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {child}
      </motion.div>
    ) : (
      child
    );

  return (
    <div className={cn("flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center", className)}>
      {wrap(
        <ComingSoonButton className={primary} featureLabel="Launch app">
          <span className="relative z-[1] flex items-center gap-2">
            Launch app
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </span>
        </ComingSoonButton>,
        0.2,
      )}
      {wrap(
        <ComingSoonButton className={secondary} featureLabel="Explore markets">
          <span className="relative z-[1]">Explore markets</span>
        </ComingSoonButton>,
        0.28,
      )}
    </div>
  );
}
