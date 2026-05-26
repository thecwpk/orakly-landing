"use client";

import { Activity, TrendingUp, Users, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  narrativeWarsBattles,
  narrativeWarsIntro,
  narrativeWarsTrack,
} from "@/widgets/landing/sections/marketing-landing-content";
import {
  landingH2,
  landingLead,
  landingSectionBand,
  landingSectionGrid,
  landingSectionGradient,
  landingShell,
} from "@/widgets/landing/sections/marketing-landing-rail";

const EASE = [0.22, 1, 0.36, 1] as const;
const TRACK_ICONS = [TrendingUp, Zap, Users, Activity] as const;

const BATTLE_CARD_SIZE = "h-[13rem] w-full sm:h-[13.5rem]";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const battleCardShell = cn(
  BATTLE_CARD_SIZE,
  "group relative flex shrink-0 flex-col overflow-hidden rounded-2xl",
  "border border-white/[0.12] bg-gradient-to-br from-white/[0.07] via-white/[0.04] to-transparent",
  "backdrop-blur-xl",
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_28px_60px_-32px_rgba(0,0,0,0.72)]",
  "transition-[border-color,box-shadow] duration-300",
  "hover:border-indigo-400/35 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_36px_72px_-30px_rgba(99,102,241,0.32)]",
);

const iconMotionByIndex = [
  { y: [0, -2, 0], rotate: [0, 2, 0] },
  { opacity: [0.75, 1, 0.75], scale: [1, 1.08, 1] },
  { scale: [1, 1.06, 1] },
  { scaleX: [1, 1.12, 1], opacity: [0.8, 1, 0.8] },
];

function LiveBadge({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-yes/35 bg-yes/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-yes">
      <motion.span
        className="relative flex size-1.5"
        aria-hidden
        animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [1, 1.2, 1] }}
        transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="absolute inset-0 rounded-full bg-yes/50 blur-[3px]" />
        <span className="relative size-full rounded-full bg-yes" />
      </motion.span>
      Live
    </span>
  );
}

function FighterTile({
  label,
  side,
  reduceMotion,
  delay,
}: {
  label: string;
  side: "yes" | "indigo";
  reduceMotion: boolean;
  delay: number;
}) {
  const isYes = side === "yes";

  const shell = cn(
    "relative flex h-[4.75rem] items-center justify-center overflow-hidden rounded-xl border px-2 text-center",
    isYes
      ? "border-yes/30 bg-yes/[0.09]"
      : "border-indigo-400/28 bg-indigo-500/[0.11]",
  );

  const glowAnim = isYes
    ? {
        boxShadow: [
          "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 24px -10px color-mix(in srgb, var(--yes) 28%, transparent)",
          "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 36px -8px color-mix(in srgb, var(--yes) 42%, transparent)",
          "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 24px -10px color-mix(in srgb, var(--yes) 28%, transparent)",
        ],
        borderColor: ["rgba(62,207,142,0.28)", "rgba(62,207,142,0.5)", "rgba(62,207,142,0.28)"],
      }
    : {
        boxShadow: [
          "inset 0 1px 0 rgba(255,255,255,0.05), 0 0 24px -10px rgba(99,102,241,0.22)",
          "inset 0 1px 0 rgba(255,255,255,0.07), 0 0 36px -8px rgba(99,102,241,0.38)",
          "inset 0 1px 0 rgba(255,255,255,0.05), 0 0 24px -10px rgba(99,102,241,0.22)",
        ],
        borderColor: ["rgba(129,140,248,0.28)", "rgba(129,140,248,0.48)", "rgba(129,140,248,0.28)"],
      };

  const inner = (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent",
          isYes ? "from-yes/[0.12]" : "from-indigo-500/[0.14]",
        )}
        aria-hidden
      />
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
          animate={{ x: ["-120%", "280%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay }}
          aria-hidden
        />
      )}
      <motion.p
        className={cn(
          "relative font-display text-sm font-bold tracking-tight sm:text-base",
          isYes ? "text-yes" : "text-indigo-100",
        )}
        animate={reduceMotion ? undefined : { opacity: [0.88, 1, 0.88], y: [0, -1, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }}
      >
        {label}
      </motion.p>
    </>
  );

  if (reduceMotion) {
    return <div className={shell}>{inner}</div>;
  }

  return (
    <motion.div
      className={shell}
      animate={glowAnim}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {inner}
    </motion.div>
  );
}

function VsMedallion({ reduceMotion, delay }: { reduceMotion: boolean; delay: number }) {
  return (
    <div className="relative z-[2] flex size-11 shrink-0 items-center justify-center">
      {!reduceMotion && (
        <>
          <motion.span
            className="absolute inset-0 rounded-full border border-yes/20"
            animate={{ scale: [1, 1.22, 1], opacity: [0.35, 0.05, 0.35] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay }}
            aria-hidden
          />
          <motion.span
            className="absolute inset-0 rounded-full border border-indigo-400/25"
            animate={{ scale: [1.1, 1.28, 1.1], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: delay + 0.4 }}
            aria-hidden
          />
        </>
      )}
      <motion.span
        className="relative flex size-11 items-center justify-center rounded-full border border-white/[0.14] bg-[oklch(0.15_0.022_265)] font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-100/95 shadow-[0_0_24px_-4px_rgba(99,102,241,0.55)]"
        animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        vs
      </motion.span>
    </div>
  );
}

function FighterArena({
  battle,
  reduceMotion,
  cardIndex,
}: {
  battle: (typeof narrativeWarsBattles)[number];
  reduceMotion: boolean;
  cardIndex: number;
}) {
  const baseDelay = cardIndex * 0.35;

  return (
    <div className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 sm:p-3">
      {!reduceMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-4 top-1/2 size-16 -translate-y-1/2 rounded-full bg-yes/10 blur-2xl"
            animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: baseDelay }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute -right-4 top-1/2 size-16 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-2xl"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.12, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: baseDelay + 0.5 }}
            aria-hidden
          />
        </>
      )}
      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-2.5">
        <FighterTile label={battle.left} side="yes" reduceMotion={reduceMotion} delay={baseDelay} />
        <VsMedallion reduceMotion={reduceMotion} delay={baseDelay + 0.2} />
        <FighterTile label={battle.right} side="indigo" reduceMotion={reduceMotion} delay={baseDelay + 0.6} />
      </div>
    </div>
  );
}

function BattleCard({
  battle,
  reduceMotion,
  cardIndex,
}: {
  battle: (typeof narrativeWarsBattles)[number];
  reduceMotion: boolean;
  cardIndex: number;
}) {
  const cardDelay = cardIndex * 0.4;

  const content = (
    <>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-yes/30 via-indigo-400/50 to-indigo-400/30"
        aria-hidden
      />
      {!reduceMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-yes/[0.03] via-transparent to-indigo-500/[0.05]"
            animate={{ opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: cardDelay }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden"
            aria-hidden
          >
            <motion.div
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: ["-50%", "350%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: cardDelay }}
            />
          </motion.div>
        </>
      )}
      <div className="relative flex h-full flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          {reduceMotion ? (
            <h3 className="min-w-0 flex-1 font-display text-[0.95rem] font-semibold leading-snug tracking-tight text-foreground sm:text-base">
              {battle.question}
            </h3>
          ) : (
            <motion.h3
              className="min-w-0 flex-1 font-display text-[0.95rem] font-semibold leading-snug tracking-tight text-foreground sm:text-base"
              animate={{ opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: cardDelay }}
            >
              {battle.question}
            </motion.h3>
          )}
          <LiveBadge reduceMotion={reduceMotion} />
        </div>
        <div className="mt-auto pt-4">
          <FighterArena battle={battle} reduceMotion={reduceMotion} cardIndex={cardIndex} />
        </div>
      </div>
    </>
  );

  if (reduceMotion) {
    return <article className={battleCardShell}>{content}</article>;
  }

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -5,
        scale: 1.01,
        transition: { duration: 0.28, ease: EASE },
      }}
      className={battleCardShell}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[1.05rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(62,207,142,0.12) 0%, transparent 40%, rgba(99,102,241,0.15) 100%)",
        }}
        aria-hidden
      />
      {content}
    </motion.article>
  );
}

function ConvictionSignalCard({
  item,
  iconIndex,
  reduceMotion,
}: {
  item: (typeof narrativeWarsTrack)[number];
  iconIndex: number;
  reduceMotion: boolean;
}) {
  const Icon = TRACK_ICONS[iconIndex] ?? TrendingUp;
  const iconAnim = iconMotionByIndex[iconIndex] ?? iconMotionByIndex[0];
  const delay = iconIndex * 0.3;

  const shell = cn(
    "relative flex min-h-[5.75rem] flex-col justify-between overflow-hidden rounded-xl",
    "border border-white/[0.09] bg-white/[0.03] p-4",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
  );

  const inner = (
    <>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"
        aria-hidden
      />
      <span
        className={cn(
          "relative flex size-9 items-center justify-center rounded-lg",
          "border border-indigo-400/22 bg-indigo-500/[0.14] text-indigo-200",
        )}
      >
        <Icon className="size-4" aria-hidden />
      </span>
      <p className="relative mt-3 text-sm font-medium leading-snug text-foreground/92">{item.label}</p>
    </>
  );

  if (reduceMotion) {
    return <li className={shell}>{inner}</li>;
  }

  return (
    <motion.li
      className={shell}
      animate={{
        borderColor: ["rgba(255,255,255,0.09)", "rgba(129,140,248,0.28)", "rgba(255,255,255,0.09)"],
        boxShadow: [
          "inset 0 1px 0 rgba(255,255,255,0.05), 0 0 0 rgba(99,102,241,0)",
          "inset 0 1px 0 rgba(255,255,255,0.07), 0 12px 32px -20px rgba(99,102,241,0.35)",
          "inset 0 1px 0 rgba(255,255,255,0.05), 0 0 0 rgba(99,102,241,0)",
        ],
      }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"
        aria-hidden
      />
      <motion.span
        className={cn(
          "relative flex size-9 items-center justify-center rounded-lg",
          "border border-indigo-400/22 bg-indigo-500/[0.14] text-indigo-200",
        )}
        animate={iconAnim}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <Icon className="size-4" aria-hidden />
      </motion.span>
      <p className="relative mt-3 text-sm font-medium leading-snug text-foreground/92">{item.label}</p>
    </motion.li>
  );
}

function LeftInsightsPanel({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.1]",
        "bg-gradient-to-br from-white/[0.05] via-white/[0.025] to-transparent",
        "p-5 sm:p-6",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_20px_48px_-32px_rgba(0,0,0,0.55)]",
      )}
    >
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 bg-indigo-500/[0.03]"
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      )}
      <div
        className="pointer-events-none absolute inset-y-3 left-0 w-0.5 rounded-full bg-gradient-to-b from-yes/50 via-indigo-400/40 to-transparent"
        aria-hidden
      />

      <div className="relative pl-3">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-300/85">
          Live narratives
        </p>
        <p className="mt-2 font-display text-lg font-semibold leading-snug text-foreground sm:text-xl">
          Choose the story the market follows
        </p>
      </div>

      <div className="relative mt-8 border-t border-white/[0.08] pt-6 pl-3">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-300/75">
          Conviction signals
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          What shifts before price — attention, momentum, community belief, sentiment.
        </p>

        <ul className="mt-5 grid list-none grid-cols-1 gap-3 min-[480px]:grid-cols-2">
          {narrativeWarsTrack.map((item, i) => (
            <ConvictionSignalCard key={item.id} item={item} iconIndex={i} reduceMotion={reduceMotion} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function LeftColumn({ reduceMotion }: { reduceMotion: boolean }) {
  const header = (
    <>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300/85">
        Narrative Wars
      </p>
      <h2 className={cn(landingH2, "mt-4 text-[clamp(1.625rem,2.5vw+0.75rem,2.5rem)] leading-[1.12]")}>
        {narrativeWarsIntro.headline}
      </h2>
      <p className={cn(landingLead, "mt-4 max-w-none")}>{narrativeWarsIntro.body}</p>
      <p className="mt-6 font-display text-lg font-medium leading-snug text-foreground/85">
        {narrativeWarsIntro.closer}
      </p>
    </>
  );

  if (reduceMotion) {
    return (
      <div className="min-w-0">
        <header>{header}</header>
        <div className="mt-10">
          <LeftInsightsPanel reduceMotion />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-w-0"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.header variants={fadeUp}>{header}</motion.header>
      <motion.div className="mt-10" variants={fadeUp}>
        <LeftInsightsPanel reduceMotion={false} />
      </motion.div>
    </motion.div>
  );
}

function BattleStack({ reduceMotion }: { reduceMotion: boolean }) {
  const list = (
    <ul className="flex w-full flex-col gap-5">
      {narrativeWarsBattles.map((battle, i) => (
        <li key={battle.id} className="w-full">
          <BattleCard battle={battle} reduceMotion={reduceMotion} cardIndex={i} />
        </li>
      ))}
    </ul>
  );

  if (reduceMotion) return list;

  return (
    <motion.ul
      className="flex w-full flex-col gap-5"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      {narrativeWarsBattles.map((battle, i) => (
        <motion.li key={battle.id} variants={fadeUp} className="w-full">
          <BattleCard battle={battle} reduceMotion={false} cardIndex={i} />
        </motion.li>
      ))}
    </motion.ul>
  );
}

/** Narrative Wars — left copy + animated conviction; right stack of equal battle cards. */
export function NarrativeWarsSection() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="narrative-wars"
      className={cn(landingSectionBand, landingSectionGradient, "border-y border-white/[0.06]")}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-8%,rgba(99,102,241,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className={cn(landingSectionGrid, "pointer-events-none absolute inset-0 opacity-[0.06]")} aria-hidden />

      <div className={cn(landingShell, "relative z-[1] py-16 sm:py-20 lg:py-24")}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-0 xl:gap-x-16">
          <LeftColumn reduceMotion={reduceMotion} />
          <div className="min-w-0 lg:max-w-xl lg:justify-self-end xl:max-w-[28rem]">
            <BattleStack reduceMotion={reduceMotion} />
          </div>
        </div>
      </div>
    </section>
  );
}
