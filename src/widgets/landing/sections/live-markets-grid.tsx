import { ArrowRight } from "lucide-react";

import { ComingSoonButton } from "@/widgets/landing/components/coming-soon-button";
import { NarrativeMarketCard } from "@/widgets/landing/components/narrative-market-card";
import { cn } from "@/lib/utils";
import { narrativeMarketShowcases } from "@/widgets/landing/sections/marketing-landing-content";
import {
  landingSectionLabel,
  landingH2,
  landingLead,
  landingBandInner,
  landingSectionBand,
} from "@/widgets/landing/sections/marketing-landing-rail";
import { LandingReveal } from "@/widgets/landing/sections/marketing-landing-layout";

export function LiveMarketsGrid() {
  return (
    <section
      id="live-markets"
      className={cn(
        landingSectionBand,
        "bg-[radial-gradient(ellipse_90%_60%_at_100%_-5%,oklch(0.38_0.08_220_/_0.22),transparent_55%),radial-gradient(ellipse_70%_55%_at_0%_105%,oklch(0.24_0.05_265_/_0.16),transparent_58%),linear-gradient(188deg,oklch(0.12_0.028_255),hsl(var(--background))_52%,oklch(0.11_0.022_268))]",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-20 before:bg-gradient-to-b before:from-cyan-400/[0.07] before:via-transparent before:to-transparent",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden
      />

      <LandingReveal className={cn(landingBandInner, "relative w-full min-w-0 max-w-full")}>
        <div className="flex min-w-0 max-w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className={landingSectionLabel}>Markets</p>
            <h2 className={landingH2}>Narrative strength. Live flow.</h2>
            <p className={landingLead}>
              Six live narrative markets tracking attention, momentum, and capital flow across crypto. Strength
              scores update as conviction moves on Orakly.
            </p>
          </div>
          <ComingSoonButton
            featureLabel="View all markets"
            className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-md border border-white/[0.08] bg-background/40 px-3.5 py-2 text-sm font-medium text-foreground transition hover:border-yes/35 hover:bg-yes/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yes/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View all markets
            <ArrowRight className="size-4" aria-hidden />
          </ComingSoonButton>
        </div>

        <ul className="mt-8 grid w-full min-w-0 max-w-full list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {narrativeMarketShowcases.map((market, i) => (
            <li key={market.id} className="flex min-w-0 max-w-full">
              <NarrativeMarketCard market={market} index={i} />
            </li>
          ))}
        </ul>
      </LandingReveal>
    </section>
  );
}
