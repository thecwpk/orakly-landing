"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const BTC_PCT = 68;
const ETH_PCT = 41;
const BATTLE_MS = 3200;

const STAT_PILLS = ["Attention Surge", "18.4K Participants", "Momentum Rising"] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

type StrengthBarProps = {
  label: string;
  target: number;
  tone: "btc" | "eth";
  focused: boolean;
  delay: number;
  played: boolean;
  reduceMotion: boolean;
};

function NarrativeStrengthBar({
  label,
  target,
  tone,
  focused,
  delay,
  played,
  reduceMotion,
}: StrengthBarProps) {
  const isBtc = tone === "btc";
  const fillClass = isBtc
    ? "bg-gradient-to-r from-yes/55 via-yes to-emerald-300/90"
    : "bg-gradient-to-r from-sky-600/70 via-sky-400 to-cyan-300/80";
  const textClass = isBtc ? "text-yes" : "text-sky-300";
  const barWidth = reduceMotion || played ? `${target}%` : "0%";

  return (
    <motion.div
      layout
      className={cn(
        "rounded-xl px-2 py-1.5",
        focused && !reduceMotion && isBtc && "shadow-[0_0_28px_-6px] shadow-yes/25",
        focused && !reduceMotion && !isBtc && "shadow-[0_0_28px_-6px] shadow-sky-500/20",
      )}
      animate={
        reduceMotion || !focused
          ? { scale: 1 }
          : { scale: [1, 1.015, 1] }
      }
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-baseline justify-between gap-2 text-xs">
        <span
          className={cn(
            "font-medium transition-colors duration-500",
            focused ? "text-foreground" : "text-foreground/80",
          )}
        >
          {label}
        </span>
        <span className={cn("font-display text-sm font-bold tabular-nums", textClass)}>{target}%</span>
      </div>
      <div
        className="relative mt-2 h-2.5 overflow-hidden rounded-full bg-white/[0.06]"
        role="progressbar"
        aria-valuenow={target}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <motion.div
          className={cn("relative h-full min-w-[2px] rounded-full", fillClass)}
          initial={false}
          animate={{ width: barWidth }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 1.2, delay, ease: EASE }
          }
        >
          {!reduceMotion && played && (
            <motion.span
              className="pointer-events-none absolute inset-y-0 w-[38%] bg-gradient-to-r from-transparent via-white/45 to-transparent"
              aria-hidden
              animate={{ x: ["-120%", "220%"] }}
              transition={{
                duration: 2.1,
                repeat: Infinity,
                repeatDelay: focused ? 0.35 : 1.1,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
        {!reduceMotion && focused && (
          <motion.span
            className={cn(
              "pointer-events-none absolute inset-0 rounded-full ring-1",
              isBtc ? "ring-yes/40" : "ring-sky-400/35",
            )}
            aria-hidden
            animate={{ opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
    </motion.div>
  );
}

/**
 * Hero preview — Narrative War card with Framer Motion battle choreography.
 */
export function HeroNarrativeWarPreview() {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, amount: 0.25 });
  const reduceMotion = useReducedMotion() ?? false;
  const [battleFocus, setBattleFocus] = useState<"btc" | "eth">("btc");
  const [barsPlayed, setBarsPlayed] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    setBarsPlayed(true);
  }, [inView, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    const id = window.setInterval(() => {
      setBattleFocus((f) => (f === "btc" ? "eth" : "btc"));
    }, BATTLE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, inView]);

  return (
    <div ref={rootRef} className="relative w-full min-w-0 max-w-full overflow-hidden">
      {!reduceMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_srgb,var(--yes)_22%,transparent),transparent_58%)] blur-2xl"
            aria-hidden
            animate={{ opacity: battleFocus === "btc" ? [0.35, 0.75, 0.35] : [0.2, 0.35, 0.2] }}
            transition={{ duration: BATTLE_MS / 1000, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(ellipse_at_75%_75%,color-mix(in_srgb,#38bdf8_18%,transparent),transparent_55%)] blur-2xl"
            aria-hidden
            animate={{ opacity: battleFocus === "eth" ? [0.28, 0.65, 0.28] : [0.15, 0.28, 0.15] }}
            transition={{ duration: BATTLE_MS / 1000, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      <div
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_srgb,var(--yes)_14%,transparent),transparent_55%)] opacity-90 blur-2xl"
        aria-hidden
      />

      <motion.article
        className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-b from-background/55 to-background/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_32px_64px_-36px_rgba(0,0,0,0.88)] backdrop-blur-xl sm:p-5"
        initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
        animate={
          reduceMotion
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 1, y: [0, -7, 0], scale: 1 }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                opacity: { duration: 0.65, ease: EASE },
                y: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.65 },
                scale: { duration: 0.75, ease: EASE },
              }
        }
      >
        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent"
            aria-hidden
            animate={{ opacity: [0.2, 0.85, 0.2], scaleX: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute -left-1/3 top-0 z-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
            aria-hidden
            animate={{ x: ["-30%", "130%"] }}
            transition={{ duration: 4.2, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
          />
        )}

        <div className="relative z-[1]">
          <motion.span
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-amber-400/35 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-200"
          >
            {!reduceMotion && (
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/25 to-transparent"
                aria-hidden
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "linear", repeatDelay: 0.6 }}
              />
            )}
            <span className="relative size-1.5 shrink-0 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.65)]" aria-hidden />
            <span className="relative">Live narrative war</span>
          </motion.span>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.06 }}
            className="mt-4 flex items-center justify-center gap-2 sm:gap-3"
          >
            <motion.span
              className="font-display text-2xl font-bold tracking-tight text-yes sm:text-[1.75rem]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: battleFocus === "btc" ? [0, -2, 0] : 0,
                      textShadow:
                        battleFocus === "btc"
                          ? [
                              "0 0 0px transparent",
                              "0 0 22px color-mix(in srgb, var(--yes) 45%, transparent)",
                              "0 0 0px transparent",
                            ]
                          : "0 0 0px transparent",
                    }
              }
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              BTC
            </motion.span>
            <motion.span
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
              animate={
                reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.65, 1, 0.65] }
              }
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              vs
            </motion.span>
            <motion.span
              className="font-display text-2xl font-bold tracking-tight text-sky-300 sm:text-[1.75rem]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: battleFocus === "eth" ? [0, 2, 0] : 0,
                      textShadow:
                        battleFocus === "eth"
                          ? [
                              "0 0 0px transparent",
                              "0 0 22px rgba(56,189,248,0.45)",
                              "0 0 0px transparent",
                            ]
                          : "0 0 0px transparent",
                    }
              }
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              ETH
            </motion.span>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-2 text-center text-sm leading-snug text-muted-foreground"
          >
            Which narrative dominates this cycle?
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.14 }}
            className="relative mt-5 space-y-4"
          >
            {!reduceMotion && (
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-px w-[72%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yes/0 via-white/15 to-sky-400/0"
                aria-hidden
                animate={{ scaleX: [0.4, 1, 0.4], opacity: [0.15, 0.45, 0.15] }}
                transition={{ duration: BATTLE_MS / 1000, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            <div className="relative z-[1] space-y-4">
              <NarrativeStrengthBar
                label="BTC Narrative Strength"
                target={BTC_PCT}
                tone="btc"
                focused={battleFocus === "btc"}
                delay={0.2}
                played={barsPlayed}
                reduceMotion={reduceMotion}
              />
              <NarrativeStrengthBar
                label="ETH Narrative Strength"
                target={ETH_PCT}
                tone="eth"
                focused={battleFocus === "eth"}
                delay={0.38}
                played={barsPlayed}
                reduceMotion={reduceMotion}
              />
            </div>
          </motion.div>

          <motion.ul
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.22 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {STAT_PILLS.map((label, i) => (
              <motion.li
                key={label}
                className="inline-flex items-center rounded-full border border-white/[0.08] bg-background/40 px-2.5 py-1 text-[11px] font-medium text-foreground/90"
                animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
                transition={{
                  duration: 3.2 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 + i * 0.35,
                }}
              >
                {label}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.28 }}
            className="mt-4 text-[11px] leading-relaxed text-muted-foreground"
          >
            Live battle preview. Join a side when Narrative Wars open in the app.
          </motion.p>
        </div>
      </motion.article>
    </div>
  );
}
