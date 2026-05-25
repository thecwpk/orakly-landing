import { cn } from "@/lib/utils";
import { HeroNarrativeWarPreview } from "@/widgets/landing/components/hero-narrative-war-preview";
import { MarketingLandingCtas } from "@/widgets/landing/components/marketing-landing-ctas";
import {
  landingDisplay,
  landingHeroY,
  landingLead,
  landingShell,
} from "@/widgets/landing/sections/marketing-landing-rail";

/**
 * Hero — primary CTAs use coming-soon toast; proof strip is qualitative only.
 */
export function MarketingLandingHero() {
  return (
    <section
      id="markets"
      className={cn(
        "relative w-full scroll-mt-28 overflow-hidden",
        "bg-[radial-gradient(ellipse_120%_70%_at_50%_-10%,oklch(0.32_0.08_270_/_0.35),transparent_55%),linear-gradient(180deg,oklch(0.13_0.025_265)_0%,hsl(var(--background))_70%)]",
      )}
    >
      <div
        className="pointer-events-none absolute -left-24 top-16 size-72 rounded-full bg-[radial-gradient(circle,oklch(0.45_0.12_270_/_0.2),transparent_70%)] ml-ambient-orb blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 bottom-8 size-64 translate-x-1/4 rounded-full bg-[radial-gradient(circle,oklch(0.42_0.1_200_/_0.18),transparent_70%)] ml-ambient-orb-delayed blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] ml-grid-drift [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:48px_48px] sm:[background-size:64px_64px]"
        aria-hidden
      />

      <div className={cn(landingShell, landingHeroY, "relative w-full min-w-0 max-w-full")}>
        <div className="relative grid w-full min-w-0 max-w-full grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-12">
          <div className="min-w-0 max-w-full">
            <h1 className={landingDisplay}>The Prediction Market for Crypto Attention.</h1>
            <p className={cn(landingLead, "text-foreground")}>
              Trade meme coins, narratives, and market conviction through transparent on-chain markets
              built for crypto-native traders.
            </p>

            <MarketingLandingCtas className="mt-7" />
          </div>

          <div className="relative min-w-0 w-full max-w-full overflow-hidden">
            <HeroNarrativeWarPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
