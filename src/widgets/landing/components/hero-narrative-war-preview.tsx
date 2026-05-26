"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { StaticMarketSparkline } from "@/widgets/landing/components/static-market-sparkline";

const EASE = [0.22, 1, 0.36, 1] as const;
const BTC_PCT = 68;
const ETH_PCT = 41;
const SPARK_END = 64;
const CONVICTION_DELTA = "+12.4%";

const STATS = [
  { label: "Open interest", value: "$2.4M" },
  { label: "Traders", value: "1.8k" },
  { label: "Resolution", value: "72h" },
] as const;

const cardShell = cn(
  "relative w-full overflow-hidden rounded-2xl",
  "border border-white/[0.11] bg-gradient-to-br from-white/[0.06] via-white/[0.035] to-transparent",
  "p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_56px_-28px_rgba(0,0,0,0.72)]",
  "backdrop-blur-xl sm:p-5",
);

function LivePill({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-yes/30 bg-yes/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-yes">
      <motion.span
        className="relative flex size-1.5"
        aria-hidden
        animate={reduceMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
        transition={reduceMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="relative size-full rounded-full bg-yes" />
      </motion.span>
      Live
    </span>
  );
}

function PctCard({
  asset,
  pct,
  delay,
  played,
  reduceMotion,
}: {
  asset: "BTC" | "ETH";
  pct: number;
  delay: number;
  played: boolean;
  reduceMotion: boolean;
}) {
  const isBtc = asset === "BTC";

  return (
    <motion.div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border px-3 py-3.5",
        isBtc
          ? "border-yes/25 bg-yes/[0.07] shadow-[0_0_24px_-12px_color-mix(in_srgb,var(--yes)_28%,transparent)]"
          : "border-indigo-400/25 bg-indigo-500/[0.09] shadow-[0_0_24px_-12px_rgba(99,102,241,0.2)]",
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: EASE }}
    >
      <span
        className={cn(
          "font-display text-xs font-bold uppercase tracking-[0.12em]",
          isBtc ? "text-yes" : "text-indigo-200",
        )}
      >
        {asset}
      </span>
      <motion.span
        className={cn(
          "mt-1.5 font-display text-[1.75rem] font-bold leading-none tabular-nums sm:text-[1.9rem]",
          isBtc ? "text-yes" : "text-indigo-100",
        )}
        animate={reduceMotion ? undefined : { opacity: played ? [0.92, 1, 0.92] : 0.5 }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {pct}%
      </motion.span>
      <span className="mt-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
        Narrative strength
      </span>
    </motion.div>
  );
}

/** Right-column narrative battle card — organized sections, theme yes + indigo. */
export function HeroNarrativeWarPreview() {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, amount: 0.15 });
  const reduceMotion = useReducedMotion() ?? false;
  const [played, setPlayed] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    setPlayed(true);
  }, [inView, reduceMotion]);

  return (
    <motion.article
      ref={rootRef}
      className={cardShell}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent"
        aria-hidden
      />

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-300/85">
          Narrative war
        </p>
        <LivePill reduceMotion={reduceMotion} />
      </div>

      {/* Conviction curve */}
      <div className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Conviction curve
          </span>
          <span className="font-display text-lg font-bold tabular-nums text-yes">{SPARK_END}%</span>
        </div>
        <div className="mt-2.5 h-9 w-full sm:h-10">
          <StaticMarketSparkline endPct={SPARK_END} className="h-full w-full" />
        </div>
      </div>

      {/* BTC vs ETH */}
      <div className="mt-4">
        <p className="text-center text-xs font-medium text-muted-foreground sm:text-sm">
          Which narrative leads this cycle?
        </p>
        <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <PctCard asset="BTC" pct={BTC_PCT} delay={0.1} played={played} reduceMotion={reduceMotion} />
          <div className="flex size-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-indigo-300/80">
            vs
          </div>
          <PctCard asset="ETH" pct={ETH_PCT} delay={0.16} played={played} reduceMotion={reduceMotion} />
        </div>
      </div>

      {/* 24h conviction */}
      <div
        className={cn(
          "mt-4 flex items-center justify-center gap-2 rounded-xl border border-yes/25 bg-yes/[0.08] px-3 py-2.5",
          "text-center sm:px-4",
        )}
      >
        <TrendingUp className="size-3.5 shrink-0 text-yes" aria-hidden />
        <p className="text-xs leading-snug text-foreground/90 sm:text-sm">
          <span className="font-medium">24h conviction</span>{" "}
          <span className="font-display font-bold tabular-nums text-yes">{CONVICTION_DELTA}</span>{" "}
          <span className="text-muted-foreground">attention</span>
        </p>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.08] pt-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] px-2 py-2.5 text-center"
          >
            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-muted-foreground sm:text-[9px]">
              {stat.label}
            </span>
            <span className="mt-1 font-display text-sm font-bold tabular-nums text-foreground">{stat.value}</span>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
