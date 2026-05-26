"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { landingSectionGrid } from "@/widgets/landing/sections/marketing-landing-rail";

/** Subtle dark backdrop — keeps focus on content. */
export function HeroCinematicAtmosphere() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[hsl(var(--background))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.16_0.03_258)_0%,hsl(var(--background))_45%,hsl(var(--background))_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,oklch(0.28_0.08_265_/_0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_50%,oklch(0.26_0.07_165_/_0.2),transparent_50%)]" />

      <motion.div
        className="absolute -right-24 top-[10%] size-[min(28rem,50vw)] rounded-full opacity-40 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.45), transparent 70%)" }}
        animate={reduceMotion ? undefined : { opacity: [0.35, 0.5, 0.35] }}
        transition={reduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-16 bottom-[20%] size-[min(22rem,40vw)] rounded-full opacity-35 blur-[90px]"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--yes) 40%, transparent), transparent 70%)" }}
        animate={reduceMotion ? undefined : { opacity: [0.3, 0.45, 0.3] }}
        transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className={cn(landingSectionGrid, "opacity-[0.1]")} />
      <div className="hero-noise absolute inset-0 opacity-[0.035]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[hsl(var(--background))]" />
    </div>
  );
}
