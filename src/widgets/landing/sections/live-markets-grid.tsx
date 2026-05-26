"use client";

import { ArrowRight } from "lucide-react";

import { ComingSoonButton } from "@/widgets/landing/components/coming-soon-button";
import { NarrativeMarketCard } from "@/widgets/landing/components/narrative-market-card";
import { cn } from "@/lib/utils";
import { narrativeMarketShowcases } from "@/widgets/landing/sections/marketing-landing-content";
import { LandingReveal } from "@/widgets/landing/sections/marketing-landing-layout";
import {
  landingH2,
  landingLead,
  landingSectionBand,
  landingSectionGrid,
  landingSectionGradient,
  landingShell,
} from "@/widgets/landing/sections/marketing-landing-rail";

/** Markets — same indigo band as Narrative Wars; yes accent in atmosphere only. */
export function LiveMarketsGrid() {
  return (
    <section
      id="live-markets"
      className={cn(landingSectionBand, landingSectionGradient, "border-y border-white/[0.06]")}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(99,102,241,0.11),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_100%,color-mix(in_srgb,var(--yes)_6%,transparent),transparent_50%)]"
        aria-hidden
      />
      <div className={cn(landingSectionGrid, "pointer-events-none absolute inset-0 opacity-[0.06]")} aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"
        aria-hidden
      />

      <LandingReveal className={cn(landingShell, "relative z-[1] py-16 md:py-20")}>
        <div className="flex min-w-0 flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <header className="min-w-0 max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300/85">
              Markets
            </p>
            <h2 className={landingH2}>Narrative strength. Live flow.</h2>
            <p className={landingLead}>
              Six narrative markets tracking attention, momentum, and capital flow across crypto. Strength
              scores update as conviction moves on Orakly.
            </p>
          </header>

          <ComingSoonButton
            featureLabel="View all markets"
            className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition hover:border-indigo-400/35 hover:bg-indigo-500/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40"
          >
            View all markets
            <ArrowRight className="size-4" aria-hidden />
          </ComingSoonButton>
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {narrativeMarketShowcases.map((market, i) => (
            <li key={market.id} className="flex min-w-0">
              <NarrativeMarketCard market={market} index={i} />
            </li>
          ))}
        </ul>
      </LandingReveal>
    </section>
  );
}
