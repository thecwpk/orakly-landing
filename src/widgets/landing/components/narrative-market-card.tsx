"use client";

import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { NarrativeMarketMetric, NarrativeMarketShowcase } from "@/lib/market";

const TREND = {
  up: {
    label: "Up",
    Icon: ArrowUp,
    value: "text-yes",
    pill: "border-yes/25 bg-yes/10 text-yes",
    bar: "bg-yes",
  },
  down: {
    label: "Down",
    Icon: ArrowDown,
    value: "text-no",
    pill: "border-no/25 bg-no/10 text-no",
    bar: "bg-no",
  },
  flat: {
    label: "Flat",
    Icon: ArrowRight,
    value: "text-zinc-400",
    pill: "border-white/10 bg-white/[0.04] text-zinc-400",
    bar: "bg-zinc-500/70",
  },
} as const;

function parseStrength(value: string): number | null {
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) ? n : null;
}

function MetricRow({ metric }: { metric: NarrativeMarketMetric }) {
  const strength = parseStrength(metric.value);
  const trend = TREND[metric.trend];
  const TrendIcon = trend.Icon;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <span className="min-w-0 truncate text-xs text-muted-foreground">{metric.label}</span>
        <div className="flex shrink-0 items-center gap-2">
          <span className={cn("text-sm font-semibold tabular-nums", trend.value)}>{metric.value}</span>
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-md border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
              trend.pill,
            )}
          >
            <TrendIcon className="size-2.5" strokeWidth={2.5} aria-hidden />
            {trend.label}
          </span>
        </div>
      </div>
      {strength !== null && (
        <div className="h-1 overflow-hidden rounded-full bg-zinc-800/90">
          <motion.div
            className={cn("h-full rounded-full", trend.bar, metric.signal === "bolt" && "opacity-75")}
            initial={{ width: 0 }}
            whileInView={{ width: `${strength}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.06 }}
          />
        </div>
      )}
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
  return (
    <motion.article
      initial={{ opacity: 1, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.32, delay: Math.min(index * 0.04, 0.2) }}
      className="glass-panel-strong group relative flex h-full w-full min-w-0 max-w-full flex-col overflow-hidden rounded-xl border border-white/[0.08] p-4 transition-colors hover:border-white/[0.12] sm:p-5"
    >
      <div className="relative z-[1] flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-white/[0.05] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-400 ring-1 ring-white/[0.08]">
            {market.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide text-zinc-500">
            <span className="size-1.5 rounded-full bg-yes shadow-[0_0_6px_color-mix(in_srgb,var(--yes)_55%,transparent)]" aria-hidden />
            Live
          </span>
        </div>

        <h3 className="mt-2.5 text-[15px] font-semibold leading-snug text-zinc-100">{market.title}</h3>

        <div className="mt-4 flex flex-col gap-3.5 border-t border-white/[0.06] pt-4">
          {market.metrics.map((metric) => (
            <MetricRow key={metric.label} metric={metric} />
          ))}
        </div>

        <p className="mt-4 border-t border-white/[0.06] pt-3.5 text-xs leading-relaxed text-zinc-500">
          {market.flow}
          <span className="mx-1.5 text-zinc-600" aria-hidden>
            ·
          </span>
          {market.phase}
        </p>
      </div>
    </motion.article>
  );
}
