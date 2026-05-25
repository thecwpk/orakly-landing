"use client";

import { Activity, Flame, TrendingUp, Users, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  narrativeWarsBattles,
  narrativeWarsIntro,
  narrativeWarsTrack,
} from "@/widgets/landing/sections/marketing-landing-content";
import { LandingReveal } from "@/widgets/landing/sections/marketing-landing-layout";
import {
  landingBandInner,
  landingH2,
  landingLead,
  landingSectionBand,
  landingSectionLabel,
} from "@/widgets/landing/sections/marketing-landing-rail";

const TRACK_ICONS = [TrendingUp, Zap, Users, Activity] as const;

function BattleCard({
  battle,
  index,
  reduceMotion,
  featured,
}: {
  battle: (typeof narrativeWarsBattles)[number];
  index: number;
  reduceMotion: boolean;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border bg-gradient-to-b from-white/[0.06] to-background/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_48px_-36px_rgba(0,0,0,0.88)] backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5",
        featured
          ? "border-amber-400/25 p-5 ring-1 ring-amber-400/30 sm:p-6"
          : "border-white/[0.08] p-4 ring-1 sm:p-5",
        !featured && battle.ring,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r opacity-60",
          battle.leftAccent,
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l opacity-60",
          battle.rightAccent,
        )}
        aria-hidden
      />

      <div className="relative z-[1] flex w-full min-w-0 flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
        <span
          className={cn(
            "min-w-0 text-center font-display font-bold leading-tight tracking-tight text-foreground sm:flex-1 sm:text-left",
            featured ? "text-lg sm:text-xl" : "text-base sm:text-lg",
          )}
        >
          {battle.left}
        </span>
        <motion.span
          className="mx-auto flex size-8 shrink-0 items-center justify-center rounded-full border border-amber-400/35 bg-amber-500/10 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-200 sm:mx-0 sm:size-9"
          animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
        >
          vs
        </motion.span>
        <span
          className={cn(
            "min-w-0 text-center font-display font-bold leading-tight tracking-tight text-foreground sm:flex-1 sm:text-right",
            featured ? "text-lg sm:text-xl" : "text-base sm:text-lg",
          )}
        >
          {battle.right}
        </span>
      </div>

      <p
        className={cn(
          "relative z-[1] mt-3 text-center leading-snug text-muted-foreground",
          featured ? "text-sm sm:text-base" : "text-sm",
        )}
      >
        {battle.question}
      </p>

      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-x-6 bottom-0 z-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          aria-hidden
          animate={{ opacity: [0.2, 0.55, 0.2], scaleX: [0.5, 1, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
        />
      )}
    </article>
  );
}

/**
 * Narrative Wars — product story band between hero and markets grid.
 */
export function NarrativeWarsSection() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="narrative-wars"
      className={cn(
        landingSectionBand,
        "bg-[radial-gradient(ellipse_90%_55%_at_15%_-5%,oklch(0.42_0.12_55_/_0.22),transparent_52%),radial-gradient(ellipse_75%_50%_at_95%_110%,oklch(0.35_0.1_285_/_0.2),transparent_55%),linear-gradient(175deg,oklch(0.11_0.03_265),hsl(var(--background))_48%,oklch(0.1_0.028_270))]",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.5_0.14_55_/_0.15),transparent_68%)] blur-3xl"
        aria-hidden
      />

      <LandingReveal className={cn(landingBandInner, "w-full min-w-0 max-w-full")}>
        <div className="grid w-full min-w-0 max-w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:items-start lg:gap-14">
          <div className="min-w-0 max-w-full lg:col-start-1 lg:row-start-1">
            <p className={landingSectionLabel}>Narrative Wars</p>
            <h2 className={landingH2}>{narrativeWarsIntro.headline}</h2>
            <p className={landingLead}>{narrativeWarsIntro.body}</p>
          </div>

          <div className="flex w-full min-w-0 max-w-full flex-col gap-4 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <div className="flex w-full items-center justify-between gap-3 border-b border-white/[0.06] pb-3">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-200/90">
                Active battles
              </p>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-200">
                <Flame className="size-3 shrink-0" aria-hidden />
                Live
              </span>
            </div>

            {narrativeWarsBattles.map((battle, i) => (
              <BattleCard
                key={battle.id}
                battle={battle}
                index={i}
                reduceMotion={reduceMotion}
                featured={i === 0}
              />
            ))}
          </div>

          <div className="min-w-0 max-w-full lg:col-start-1 lg:row-start-2">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-200/90">
                Track
              </p>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {narrativeWarsTrack.map((item, i) => {
                  const Icon = TRACK_ICONS[i] ?? Flame;
                  return (
                    <li
                      key={item.id}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-3 ring-1 ring-white/[0.04] transition-colors hover:border-amber-400/20 hover:bg-amber-500/[0.04]"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-400/25">
                        <Icon className="size-4 text-amber-200/90" aria-hidden />
                      </span>
                      <span className="text-sm font-medium text-foreground/90">{item.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <p className="mt-8 border-l-2 border-yes/50 pl-4 font-display text-lg font-semibold leading-snug text-foreground sm:text-xl">
              {narrativeWarsIntro.closer}
            </p>
          </div>
        </div>
      </LandingReveal>
    </section>
  );
}
