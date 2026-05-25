"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Target } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  roadmapPhases,
  type RoadmapPhase,
  type RoadmapPhaseStatus,
} from "@/widgets/landing/sections/marketing-landing-content";
import {
  landingBody,
  landingSectionLabel,
  landingH2,
  landingLead,
  landingBandInner,
  landingSectionBand,
} from "@/widgets/landing/sections/marketing-landing-rail";
import { LandingReveal } from "@/widgets/landing/sections/marketing-landing-layout";

const EASE = [0.22, 1, 0.36, 1] as const;
const CYCLE_MS_DESKTOP = 4200;
const MOBILE_MQ = "(max-width: 639px)";

const STATUS_TONE: Record<RoadmapPhaseStatus, string> = {
  Shipping: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
  Next: "border-sky-400/30 bg-sky-500/10 text-sky-200",
  Planned: "border-violet-400/25 bg-violet-500/10 text-violet-200",
  Vision: "border-white/12 bg-white/[0.04] text-slate-300",
};

const PHASE_ACCENT: Record<string, string> = {
  mvp: "from-emerald-400/70 via-cyan-400/40 to-transparent",
  intelligence: "from-sky-400/70 via-indigo-400/35 to-transparent",
  conviction: "from-violet-400/65 via-fuchsia-400/30 to-transparent",
  ai: "from-amber-300/70 via-orange-400/35 to-transparent",
  platform: "from-rose-300/55 via-slate-400/25 to-transparent",
};

const PHASE_RING: Record<string, string> = {
  mvp: "ring-emerald-400/45 shadow-[0_0_20px_rgba(52,211,153,0.45)]",
  intelligence: "ring-sky-400/45 shadow-[0_0_20px_rgba(56,189,248,0.4)]",
  conviction: "ring-violet-400/40 shadow-[0_0_20px_rgba(167,139,250,0.38)]",
  ai: "ring-amber-300/45 shadow-[0_0_20px_rgba(251,191,36,0.35)]",
  platform: "ring-slate-400/35 shadow-[0_0_16px_rgba(148,163,184,0.3)]",
};

const PHASE_DOT: Record<string, string> = {
  mvp: "bg-emerald-400",
  intelligence: "bg-sky-400",
  conviction: "bg-violet-400",
  ai: "bg-amber-300",
  platform: "bg-slate-400",
};

const PHASE_BULLET: Record<string, string> = {
  mvp: "bg-emerald-400/80",
  intelligence: "bg-sky-400/80",
  conviction: "bg-violet-400/75",
  ai: "bg-amber-300/80",
  platform: "bg-slate-400/70",
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function PhaseCard({
  phase,
  index,
  isActive,
  reduceMotion,
  isMobile,
  onFocus,
  phaseRef,
}: {
  phase: RoadmapPhase;
  index: number;
  isActive: boolean;
  reduceMotion: boolean;
  isMobile: boolean;
  onFocus: () => void;
  phaseRef: (el: HTMLLIElement | null) => void;
}) {
  const items = phase.features ?? phase.build ?? [];
  const listLabel = phase.features ? "Features" : "Build";
  const pulseScale = isMobile ? 1.28 : 1.45;
  const floatY = isMobile ? 2 : 3;

  const nodePulse = reduceMotion
    ? {}
    : {
        scale: isActive ? [1, pulseScale, 1] : 1,
        opacity: isActive ? 1 : 0.45,
        transition: {
          scale: { duration: 1.8, repeat: Infinity, ease: "easeInOut" as const },
          opacity: { duration: 0.45 },
        },
      };

  const linkPulse = reduceMotion
    ? {}
    : {
        scaleX: isActive ? [0.55, 1, 0.8] : 0.3,
        opacity: isActive ? [0.45, 1, 0.65] : 0.22,
        transition: {
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <motion.li
      ref={phaseRef}
      className="relative flex gap-2.5 sm:gap-4"
      initial={reduceMotion ? false : { opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-24px 0px" }}
      transition={{ duration: 0.45, ease: EASE, delay: index * 0.05 }}
      onMouseEnter={onFocus}
      onFocus={onFocus}
    >
      <div className="relative z-[2] flex shrink-0 items-start gap-0 pt-6 sm:pt-7" aria-hidden>
        <motion.span
          className={cn(
            "size-2.5 shrink-0 rounded-full ring-2 ring-offset-1 ring-offset-[hsl(228_30%_11%)] transition-shadow duration-500 sm:size-3.5 sm:ring-offset-2",
            PHASE_DOT[phase.id] ?? "bg-white/60",
            isActive ? cn("ring-white/25", PHASE_RING[phase.id]) : "ring-transparent",
          )}
          animate={nodePulse}
        />
        <motion.span
          className={cn(
            "mt-[0.45rem] h-0.5 w-3 shrink-0 rounded-full bg-gradient-to-r sm:mt-[0.55rem] sm:w-5",
            PHASE_ACCENT[phase.id],
          )}
          style={{ transformOrigin: "left center" }}
          animate={linkPulse}
        />
      </div>

      <motion.article
        role="button"
        tabIndex={0}
        aria-label={`${phase.phase}: ${phase.name}. Tap to highlight.`}
        onClick={onFocus}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onFocus();
          }
        }}
        className={cn(
          "relative mb-4 min-w-0 flex-1 touch-manipulation overflow-hidden rounded-2xl border bg-white/[0.025] p-4 backdrop-blur-sm transition-[border-color,box-shadow,opacity] duration-500 sm:mb-6 sm:cursor-default sm:p-6 lg:mb-7",
          isActive
            ? "border-white/[0.16] bg-white/[0.04] shadow-[0_8px_40px_-16px_rgba(8,20,48,0.55)]"
            : "border-white/[0.07] opacity-[0.82] active:opacity-95 sm:hover:border-white/[0.11] sm:hover:opacity-95",
        )}
        animate={
          reduceMotion
            ? undefined
            : {
                y: isActive ? [0, -floatY, 0] : 0,
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
              }
        }
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r",
            isActive ? "roadmap-card-shimmer opacity-100" : "opacity-50",
            PHASE_ACCENT[phase.id],
          )}
          aria-hidden
        />

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-3">
          <div className="min-w-0">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:tracking-[0.2em]">
              {phase.phase}
            </p>
            <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-foreground sm:text-xl md:text-2xl">
              {phase.name}
            </h3>
            {phase.subtitle ? (
              <p className="mt-1 text-xs font-medium text-sky-300/80">{phase.subtitle}</p>
            ) : null}
          </div>
          <span
            className={cn(
              "w-fit shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide transition-opacity duration-500",
              STATUS_TONE[phase.status],
              isActive ? "opacity-100" : "opacity-70",
            )}
          >
            {phase.status}
          </span>
        </div>

        {phase.goal ? (
          <p className={cn(landingBody, "mt-3 max-w-prose text-[13px] text-slate-300/95 sm:mt-4")}>
            <span className="font-medium text-foreground">Goal: </span>
            {phase.goal}
          </p>
        ) : null}

        <div className="mt-4 sm:mt-5">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {listLabel}
          </p>
          <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:mt-3 sm:grid-cols-2">
            {items.map((item, itemIndex) => (
              <motion.li
                key={item}
                className="flex gap-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-2.5 text-[13px] leading-snug text-slate-300/95"
                initial={reduceMotion ? false : { opacity: 0, x: -4 }}
                animate={{
                  opacity: isActive ? 1 : 0.72,
                  x: 0,
                  borderColor: isActive ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
                }}
                transition={{
                  opacity: { duration: 0.4 },
                  x: { duration: 0.3, delay: itemIndex * 0.03 },
                }}
              >
                <span
                  className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", PHASE_BULLET[phase.id] ?? "bg-white/50")}
                  aria-hidden
                />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {phase.kpi ? (
          <motion.div
            className="mt-4 flex gap-3 rounded-xl border border-emerald-500/15 bg-emerald-500/[0.06] px-3.5 py-3 sm:mt-5 sm:px-4"
            animate={{ opacity: isActive ? 1 : 0.75 }}
            transition={{ duration: 0.45 }}
          >
            <Target className="mt-0.5 size-4 shrink-0 text-emerald-300/90" aria-hidden />
            <p className={cn(landingBody, "text-[13px] text-emerald-100/90")}>
              <span className="font-semibold text-emerald-200/95">KPI: </span>
              {phase.kpi}
            </p>
          </motion.div>
        ) : null}
      </motion.article>
    </motion.li>
  );
}

export function RoadmapTimeline() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const trackRef = useRef<HTMLDivElement>(null);
  const phaseRefs = useRef<(HTMLLIElement | null)[]>([]);
  const isInView = useInView(trackRef, { margin: "-10% 0px", amount: 0.15 });
  const [activeIndex, setActiveIndex] = useState(0);

  const setPhaseRef = useCallback(
    (index: number) => (el: HTMLLIElement | null) => {
      phaseRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    if (reduceMotion || !isInView || isMobile) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % roadmapPhases.length);
    }, CYCLE_MS_DESKTOP);

    return () => window.clearInterval(id);
  }, [reduceMotion, isInView, isMobile]);

  useEffect(() => {
    if (reduceMotion || !isMobile || !isInView) return;

    const nodes = phaseRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0]?.target;
        if (!top) return;
        const idx = nodes.indexOf(top as HTMLLIElement);
        if (idx >= 0) setActiveIndex(idx);
      },
      { rootMargin: "-28% 0px -38% 0px", threshold: [0.25, 0.45, 0.65] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [reduceMotion, isMobile, isInView]);

  return (
    <section
      id="roadmap"
      className={cn(
        landingSectionBand,
        "bg-[radial-gradient(ellipse_90%_70%_at_10%_0%,oklch(0.38_0.08_55_/_0.14),transparent_55%),linear-gradient(120deg,oklch(0.14_0.02_25),hsl(var(--background))_45%,oklch(0.12_0.018_35))]",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,220,200,0.04)_1px,transparent_0)] [background-size:20px_20px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/25 to-transparent"
        aria-hidden
      />
      <LandingReveal className={cn(landingBandInner, "relative")}>
        <p className={cn(landingSectionLabel, "text-amber-200/85")}>Roadmap</p>
        <h2 className={landingH2}>Five phases. One narrative arc.</h2>
        <p className={landingLead}>
          From validating Narrative Wars to AI-native infrastructure, each phase unlocks the next layer of
          attention, conviction, and platform scale.
        </p>

        <div ref={trackRef} className="relative mt-8 max-w-4xl pl-0.5 sm:mt-10 sm:pl-1">
          {!reduceMotion ? (
            <div className="roadmap-track-rail pointer-events-none" aria-hidden>
              <div className="roadmap-track-flow" />
            </div>
          ) : (
            <div
              className="pointer-events-none absolute left-[0.3125rem] top-6 bottom-6 w-0.5 rounded-full bg-white/10 sm:left-[0.4375rem] sm:top-7 sm:bottom-8"
              aria-hidden
            />
          )}

          <ol className="relative space-y-0">
            {roadmapPhases.map((phase, index) => (
              <PhaseCard
                key={phase.id}
                phase={phase}
                index={index}
                isActive={activeIndex === index}
                reduceMotion={!!reduceMotion}
                isMobile={isMobile}
                onFocus={() => setActiveIndex(index)}
                phaseRef={setPhaseRef(index)}
              />
            ))}
          </ol>

          {isMobile ? (
            <p className="mt-4 text-center text-[11px] text-muted-foreground/80">
              Tap a phase or scroll. The track follows where you are.
            </p>
          ) : null}
        </div>
      </LandingReveal>
    </section>
  );
}
