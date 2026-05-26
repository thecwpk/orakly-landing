import { cn } from "@/lib/utils";

/**
 * Orakly landing — design tokens + merged canvas layout.
 *
 * Sections are full-bleed color bands with zero gap between them.
 * Vertical rhythm lives inside `landingBandInner` only.
 */

/** Canonical horizontal rail — every section's content aligns to this left edge. */
export const landingShell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

/** Full-bleed section shell — no vertical padding (merged layout). */
export const landingSectionBand = "relative w-full scroll-mt-28 overflow-hidden";

/** Inner content padding inside a color band. */
export const landingBandInner = cn(landingShell, "relative py-12 sm:py-14 lg:py-16");

/** @deprecated Use `landingBandInner` inside `landingSectionBand`. */
export const landingSectionY = "py-12 sm:py-14 lg:py-16";

/** Hero band: same horizontal rail, tighter top padding for navbar adjacency. */
export const landingHeroY = "pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16";

/** @deprecated Use `landingShell`. */
export const landingRail = landingShell;

/** @deprecated Use `landingBandInner` with `landingSectionBand`. */
export const landingRailSection = landingBandInner;

/** Small label inside cards and dense UI. */
export const landingEyebrow =
  "font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground";

/** Section band label — above each major H2 (Markets, How it works, …). */
export const landingSectionLabel =
  "font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-300/90 sm:text-[0.8125rem] sm:tracking-[0.24em]";

/** Accent eyebrow for premium bands. */
export const landingEyebrowAccent = cn(landingEyebrow, "text-yes");

/** Display headline — hero only. */
export const landingDisplay =
  "font-display text-pretty text-[clamp(2rem,4vw+1rem,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-foreground";

/** Section heading — used by every non-hero section. */
export const landingH2 =
  "mt-2 font-display text-[1.75rem] font-bold leading-tight tracking-[-0.02em] text-foreground sm:text-3xl lg:text-[2.125rem]";

/** Card / sub-section heading. */
export const landingH3 = "text-base font-semibold tracking-tight text-foreground sm:text-lg";

/** Lead paragraph below H2. */
export const landingLead =
  "mt-4 max-w-[42rem] text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base";

/** Body copy inside cards. */
export const landingBody = "text-sm leading-relaxed text-muted-foreground";

/** Section canvas — matches How it works band. */
export const landingSectionGradient =
  "bg-[linear-gradient(185deg,oklch(0.14_0.02_255)_0%,hsl(var(--background))_38%,oklch(0.13_0.018_250)_100%)]";

/** Hero band — slightly brighter top lift, same family as `landingSectionGradient`. */
export const landingHeroGradient =
  "bg-[linear-gradient(185deg,oklch(0.15_0.025_255)_0%,hsl(var(--background))_45%,oklch(0.13_0.018_250)_100%)]";

/** Fine grid overlay shared across premium sections. */
export const landingSectionGrid =
  "pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px]";

/** Glass step card — pairs with `.hw-step` keyframe shimmer. */
export const landingGlassCard =
  "hw-step rounded-2xl border border-white/[0.1] bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition hover:border-indigo-400/30 hover:bg-white/[0.055]";

/** Mono tag inside glass cards (How it works steps, battles, etc.). */
export const landingCardTag =
  "font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground";

/* ---------- DEPRECATED ALIASES ---------- */
export const landingH1 = landingDisplay;
export const landingH2Ultra = landingH2;
export const landingH2Editorial = landingH2;
export const landingH2Lg = landingH2;
export const landingLeadMuted = landingLead;
export const landingTextGradientAccent = "text-yes";
export const landingTextGradientSpotlight = "text-foreground";
