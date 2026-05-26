"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

import { landingSectionGrid, landingShell } from "./marketing-landing-rail";

/** Grid + indigo hairlines — shared section atmosphere (How it works, hero, Narrative Wars). */
export function LandingSectionAtmosphere() {
  return (
    <>
      <div className={landingSectionGrid} aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden
      />
    </>
  );
}

type LandingShellProps = {
  children: ReactNode;
  className?: string;
};

/** Single max-width + horizontal padding — use inside full-bleed `<section>`. */
export function LandingShell({ children, className }: LandingShellProps) {
  return <div className={cn(landingShell, className)}>{children}</div>;
}

const reveal = {
  hidden: { opacity: 1, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Subtle scroll reveal; no-op when user prefers reduced motion. */
export function LandingReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={cn("w-full min-w-0 max-w-full", className)}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-48px 0px" }}
    >
      {children}
    </motion.div>
  );
}
