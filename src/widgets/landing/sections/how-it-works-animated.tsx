"use client";

import { cn } from "@/lib/utils";
import { howSteps } from "@/widgets/landing/sections/marketing-landing-content";
import { LandingReveal } from "@/widgets/landing/sections/marketing-landing-layout";
import { LandingSectionAtmosphere } from "@/widgets/landing/sections/marketing-landing-layout";
import {
  landingBandInner,
  landingCardTag,
  landingGlassCard,
  landingH2,
  landingLead,
  landingSectionBand,
  landingSectionGradient,
  landingSectionLabel,
} from "@/widgets/landing/sections/marketing-landing-rail";

/**
 * Three-step loop with live cycle animation — headline stays "Three steps. No magic."
 * Side cards carry the detail; center ring shows the real-time loop.
 */
export function HowItWorksAnimated() {
  return (
    <section id="how-it-works" className={cn(landingSectionBand, landingSectionGradient)}>
      <LandingSectionAtmosphere />
      <LandingReveal className={landingBandInner}>
        <p className={landingSectionLabel}>How it works</p>
        <h2 className={landingH2}>Three steps. No magic.</h2>
        <p className={landingLead}>
          Discover, trade, and settle on-chain. The loop runs live in the center while you read the detail.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(240px,1fr)_minmax(280px,460px)_minmax(240px,1fr)] lg:items-center lg:gap-6">
          <div className="space-y-3">
            <StepCard step={howSteps[0]} />
          </div>
          <CycleDiagram />
          <div className="space-y-3">
            <StepCard step={howSteps[1]} />
            <StepCard step={howSteps[2]} />
          </div>
        </div>
      </LandingReveal>
    </section>
  );
}

function StepCard({ step }: { step: (typeof howSteps)[number] }) {
  return (
    <article className={cn(landingGlassCard, "p-4")}>
      <p className={landingCardTag}>{step.tag}</p>
      <h3 className="mt-1.5 text-sm font-semibold text-foreground">{step.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
    </article>
  );
}

function CycleDiagram() {
  return (
    <div className="hw-cycle-wrap">
      <div className="hw-cycle-ring" aria-hidden />
      <div className="hw-cycle-glass" aria-hidden />
      <div className="hw-cycle-core">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Orakly loop</p>
        <p className="mt-1 font-display text-base font-bold leading-tight text-foreground">
          Discover
          <br />
          Trade
          <br />
          Settle
        </p>
      </div>
      {howSteps.map((s, i) => (
        <div key={s.n} className={cn("hw-node", `hw-node-${i}`)}>
          <span className="hw-node-dot" aria-hidden />
          <span className="hw-node-label">
            <strong>Step {s.n}</strong>
            <span>{s.title}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
