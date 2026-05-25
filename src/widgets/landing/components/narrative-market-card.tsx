"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { NarrativeMarketMetric, NarrativeMarketShowcase } from "@/lib/market";

const TREND_LABEL = { up: "Up", down: "Down", flat: "Flat" } as const;
const SIGNAL_LABEL = { fire: "High", bolt: "Moderate" } as const;

function parseStrength(value: string): number | null {
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) ? n : null;
}

function MetricRow({ metric }: { metric: NarrativeMarketMetric }) {
  const strength = parseStrength(metric.value);
  const trendColor =
    metric.trend === "up" ? "text-yes"
    : metric.trend === "down" ? "text-rose-300/90"
    : "text-slate-400";

  return (
    <div className="space-y-1.5">
      <div className="flex items-start justify-between gap-2">
        <span className="text-[11px] leading-snug text-muted-foreground">{metric.label}</span>
        <span className="flex shrink-0 flex-wrap items-center justify-end gap-1.5 text-right text-[11px] font-medium text-foreground">
          <span className="tabular-nums">{metric.value}</span>
          <span
            className={cn(
              "rounded px-1 py-0.5 text-[9px] font-semibold uppercase tracking-wide",
              metric.signal === "fire"
                ? "bg-amber-500/15 text-amber-200/95"
                : "bg-sky-500/15 text-sky-200/95",
            )}
          >
            {SIGNAL_LABEL[metric.signal]}
          </span>
          <span className={cn("font-semibold uppercase tracking-wide", trendColor)}>
            {TREND_LABEL[metric.trend]}
          </span>
          {metric.trendNote ? (
            <span className={cn("font-normal capitalize text-muted-foreground", trendColor)}>
              {metric.trendNote}
            </span>
          ) : null}
        </span>
      </div>
      {strength !== null && (
        <div className="h-1 overflow-hidden rounded-full bg-zinc-800/80">
          <motion.div
            className={cn(
              "h-full rounded-full",
              metric.trend === "up"
                ? "bg-gradient-to-r from-cyan-500 to-emerald-400"
                : metric.trend === "down"
                  ? "bg-gradient-to-r from-rose-500/80 to-amber-400/60"
                  : "bg-gradient-to-r from-slate-500 to-slate-400",
            )}
            initial={{ width: 0 }}
            whileInView={{ width: `${strength}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
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
      initial={{ opacity: 1, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.25) }}
      className="glass-panel-strong group relative flex h-full w-full min-w-0 max-w-full flex-col overflow-hidden rounded-xl border border-white/[0.08] p-4 transition-colors hover:border-white/[0.14] sm:p-5"
    >

      <div className="relative z-[1] flex flex-1 flex-col">
        <div className="flex flex-wrap items-start gap-2">
          <span className="rounded-full bg-white/6 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-400 ring-1 ring-white/10">
            {market.category}
          </span>
          <span className="text-[10px] text-zinc-500">OPEN</span>
        </div>

        <h3 className="mt-2 text-sm font-semibold leading-snug text-zinc-100">{market.title}</h3>

        <div className="mt-3 flex min-h-[7.5rem] flex-col justify-center gap-3 border-t border-white/[0.06] pt-3">
          {market.metrics.map((metric) => (
            <MetricRow key={metric.label} metric={metric} />
          ))}
        </div>

        <div className="mt-auto space-y-2 border-t border-white/[0.06] pt-3">
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            <span className="font-medium text-zinc-400">Flow:</span> {market.flow}
          </p>
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            <span className="font-medium text-zinc-400">Phase:</span> {market.phase}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
