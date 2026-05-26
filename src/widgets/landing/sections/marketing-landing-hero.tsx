"use client";

import { cn } from "@/lib/utils";
import { HeroCinematicAtmosphere } from "@/widgets/landing/components/hero-cinematic-atmosphere";
import { HeroNarrativeWarPreview } from "@/widgets/landing/components/hero-narrative-war-preview";
import { MarketingLandingCtas } from "@/widgets/landing/components/marketing-landing-ctas";
import { landingSectionBand, landingShell } from "@/widgets/landing/sections/marketing-landing-rail";

/**
 * Hero — two columns on md+: copy left (60%), narrative card right (40%).
 */
export function MarketingLandingHero() {
  return (
    <section
      id="markets"
      className={cn(
        landingSectionBand,
        "relative overflow-hidden border-b border-white/[0.08] bg-[hsl(var(--background))]",
      )}
    >
      <HeroCinematicAtmosphere />

      <div
        className={cn(
          landingShell,
          "relative z-[1] w-full min-w-0",
          "py-14 sm:py-16 lg:py-20",
          "pb-16 sm:pb-20",
          "mb-16 sm:mb-20",
        )}
      >
        <div className="flex flex-col items-stretch gap-10 md:flex-row md:items-center md:gap-8 lg:gap-12">
          {/* Left — 60% */}
          <div className="flex min-w-0 flex-col justify-start md:w-[60%] md:max-w-[60%] md:pr-2 lg:pr-6">
            <h1 className="font-display text-pretty text-[clamp(2rem,4.2vw+0.5rem,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-foreground">
              The prediction market for{" "}
              <span className="bg-gradient-to-r from-yes via-emerald-300/95 to-cyan-300/90 bg-clip-text text-transparent">
                crypto attention.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:mt-6">
              Trade narratives, meme cycles, and conviction through transparent on-chain markets — built for
              crypto-native traders.
            </p>

            <div className="mt-8 sm:mt-10">
              <MarketingLandingCtas variant="hero" />
            </div>
          </div>

          {/* Right — 40% */}
          <div className="min-w-0 md:w-[40%] md:max-w-[40%] md:shrink-0">
            <HeroNarrativeWarPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
