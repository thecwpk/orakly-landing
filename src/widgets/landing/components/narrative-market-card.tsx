"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { NarrativeMarketMetric, NarrativeMarketShowcase } from "@/lib/market";
import { StaticMarketSparkline } from "@/widgets/landing/components/static-market-sparkline";

const EASE = [0.22, 1, 0.36, 1] as const;

const INDIGO_STROKE = "rgb(129 140 248)";

/** Theme palette: yes (lead), indigo (secondary), muted (flat) — no extra red/green clash. */
const TREND = {
  up: { symbol: "↑", valueClass: "text-yes", bar: "bg-yes/85", stroke: "var(--yes)" },
  down: {
    symbol: "↓",
    valueClass: "text-indigo-300/90",
    bar: "bg-indigo-400/55",
    stroke: INDIGO_STROKE,
  },
  flat: {
    symbol: "→",
    valueClass: "text-muted-foreground",
    bar: "bg-white/20",
    stroke: "oklch(0.72 0.018 265)",
  },
} as const;

const marketCard = cn(
  "group relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-2xl",
  "border border-white/[0.11] bg-gradient-to-br from-white/[0.06] via-white/[0.035] to-white/[0.02]",
  "p-5 backdrop-blur-xl",
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_20px_48px_-28px_rgba(0,0,0,0.65)]",
  "transition-[border-color,box-shadow] duration-300",
  "hover:border-indigo-400/28 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_28px_56px_-26px_rgba(99,102,241,0.22)]",
);

function parseStrength(value: string): number {
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) ? Math.max(0, Math.min(100, n)) : 0;
}

function metricShortLabel(label: string): string {
  const lower = label.toLowerCase();
  if (lower.includes("new meme")) return "New meme";
  if (lower.includes("institutional flow")) return "Inst";
  if (lower.includes("app layer")) return "App";
  if (lower.includes("pepe")) return "PEPE";
  if (lower.includes("ai agent")) return "AI";
  if (lower.includes("memecoin")) return "Memes";
  if (lower.includes("etf")) return "ETF";
  if (lower.includes("rwa")) return "RWA";
  return label.split(/\s+/)[0] ?? label;
}

function StrengthBar({
  pct,
  trend,
  reduceMotion,
  delay = 0,
}: {
  pct: number;
  trend: NarrativeMarketMetric["trend"];
  reduceMotion: boolean;
  delay?: number;
}) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
      <motion.div
        className={cn("h-full rounded-full", TREND[trend].bar, trend === "flat" && "opacity-70")}
        initial={reduceMotion ? false : { width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay, ease: EASE }}
      />
    </div>
  );
}

function MetricRow({
  metric,
  align = "start",
  reduceMotion,
  barDelay,
}: {
  metric: NarrativeMarketMetric;
  align?: "start" | "end";
  reduceMotion: boolean;
  barDelay: number;
}) {
  const trend = TREND[metric.trend];

  return (
    <div className={cn("flex min-w-0 flex-1 flex-col gap-2", align === "end" && "items-end")}>
      <div className={cn("flex w-full items-baseline justify-between gap-2", align === "end" && "flex-row-reverse")}>
        <span className="text-xs font-medium text-muted-foreground">{metricShortLabel(metric.label)}</span>
        <span className="flex shrink-0 items-baseline gap-0.5 tabular-nums">
          <span className="text-base font-bold text-foreground">{metric.value}%</span>
          <span className={cn("text-sm font-semibold", trend.valueClass)} aria-hidden>
            {trend.symbol}
          </span>
        </span>
      </div>
      <StrengthBar pct={parseStrength(metric.value)} trend={metric.trend} reduceMotion={reduceMotion} delay={barDelay} />
    </div>
  );
}

function DualSparklineChart({
  left,
  right,
  gradientLeft,
  gradientRight,
}: {
  left: NarrativeMarketMetric;
  right: NarrativeMarketMetric;
  gradientLeft: string;
  gradientRight: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-lg border border-yes/15 bg-yes/[0.04] p-2">
        <p className="mb-1 font-mono text-[9px] uppercase tracking-wider text-yes/80">
          {metricShortLabel(left.label)}
        </p>
        <div className="h-12 w-full">
          <StaticMarketSparkline
            endPct={parseStrength(left.value)}
            gradientId={gradientLeft}
            stroke={TREND[left.trend].stroke}
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="rounded-lg border border-indigo-400/18 bg-indigo-500/[0.06] p-2">
        <p className="mb-1 text-right font-mono text-[9px] uppercase tracking-wider text-indigo-300/80">
          {metricShortLabel(right.label)}
        </p>
        <div className="h-12 w-full">
          <StaticMarketSparkline
            endPct={parseStrength(right.value)}
            gradientId={gradientRight}
            stroke={INDIGO_STROKE}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

function ComparisonBar({
  left,
  right,
  reduceMotion,
}: {
  left: NarrativeMarketMetric;
  right: NarrativeMarketMetric;
  reduceMotion: boolean;
}) {
  const leftPct = parseStrength(left.value);
  const rightPct = parseStrength(right.value);
  const total = leftPct + rightPct || 1;

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
        <span className="text-yes/75">{metricShortLabel(left.label)}</span>
        <span className="text-indigo-300/75">{metricShortLabel(right.label)}</span>
      </div>
      <div className="flex h-2 overflow-hidden rounded-full bg-white/[0.08]">
        <motion.div
          className="h-full bg-yes/75"
          initial={reduceMotion ? false : { width: 0 }}
          whileInView={{ width: `${(leftPct / total) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        />
        <motion.div
          className="h-full bg-indigo-400/60"
          initial={reduceMotion ? false : { width: 0 }}
          whileInView={{ width: `${(rightPct / total) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
        />
      </div>
    </div>
  );
}

export function NarrativeMarketCard({
  market,
  index = 0,
}: {
  market: NarrativeMarketShowcase;
  index?: number;
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const uid = useId().replace(/:/g, "");
  const [left, right] = market.metrics;
  const baseDelay = Math.min(index * 0.05, 0.2);

  if (!left || !right) return null;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: baseDelay, ease: EASE }}
      whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.22 } }}
      className={marketCard}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/35 to-transparent"
        aria-hidden
      />

      <div className="relative flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-300/85">
          {market.category}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-yes/30 bg-yes/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-yes">
          <span className="size-1.5 rounded-full bg-yes" aria-hidden />
          Live
        </span>
      </div>

      <h3 className="mt-3 font-display text-base font-semibold leading-snug text-foreground">{market.title}</h3>

      <div className="mt-4 space-y-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
        <DualSparklineChart
          left={left}
          right={right}
          gradientLeft={`spark-${uid}-l`}
          gradientRight={`spark-${uid}-r`}
        />

        <ComparisonBar left={left} right={right} reduceMotion={reduceMotion} />

        <div className="flex items-start gap-3 border-t border-white/[0.06] pt-3">
          <MetricRow metric={left} reduceMotion={reduceMotion} barDelay={baseDelay + 0.15} />
          <span className="shrink-0 pt-5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-300/50">
            vs
          </span>
          <MetricRow metric={right} align="end" reduceMotion={reduceMotion} barDelay={baseDelay + 0.22} />
        </div>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{market.flow}</p>
    </motion.article>
  );
}
