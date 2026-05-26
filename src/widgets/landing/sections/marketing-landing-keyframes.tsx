"use client";

/**
 * Global class names for hero (ml-*) and how-it-works (hw-*) animations.
 * Must be global so styles apply when sections live in separate modules.
 */
export function MarketingLandingKeyframes() {
  return (
    // eslint-disable-next-line react/no-unknown-property -- Next.js styled-jsx `jsx` / `global`
    <style jsx global>{`
      .ml-ambient-orb {
        animation: mlOrbFloat 9s ease-in-out infinite;
      }
      .ml-ambient-orb-delayed {
        animation: mlOrbFloat 11s ease-in-out infinite reverse;
        animation-delay: 1.4s;
      }
      .ml-grid-drift {
        animation: mlGridDrift 18s linear infinite;
      }
      .ml-preview-float {
        animation: mlCardFloat 6.5s ease-in-out infinite;
      }
      .ml-chart-shell {
        position: relative;
        overflow: hidden;
      }
      .ml-chart-shell::after {
        content: "";
        position: absolute;
        inset: -8% -40%;
        background: linear-gradient(
          100deg,
          transparent 20%,
          color-mix(in srgb, var(--yes) 22%, transparent) 50%,
          transparent 80%
        );
        opacity: 0.35;
        transform: translateX(-60%);
        animation: mlShimmer 3.6s ease-in-out infinite;
        pointer-events: none;
      }
      @keyframes mlOrbFloat {
        0%,
        100% {
          transform: translate3d(0, 0, 0) scale(1);
          opacity: 0.85;
        }
        50% {
          transform: translate3d(12px, -10px, 0) scale(1.04);
          opacity: 1;
        }
      }
      @keyframes mlGridDrift {
        0% {
          transform: translate3d(0, 0, 0);
        }
        100% {
          transform: translate3d(-20px, -14px, 0);
        }
      }
      @keyframes mlCardFloat {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-6px);
        }
      }
      @keyframes mlShimmer {
        0% {
          transform: translateX(-65%);
        }
        60%,
        100% {
          transform: translateX(65%);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .ml-ambient-orb,
        .ml-ambient-orb-delayed,
        .ml-grid-drift,
        .ml-preview-float,
        .ml-chart-shell::after,
        .hero-preview-float,
        .hero-scanline,
        .hero-preview-tilt,
        .hero-mesh,
        .hero-grid-drift,
        .hero-headline-shine,
        .hero-dashboard-glow,
        .hero-chart-shell::after,
        .hero-particle,
        .hero-live-dot,
        .hero-pulse-dot,
        .hero-float-chip,
        .hero-holo-scan,
        .hero-scanline-vertical,
        .hero-sparkline-live,
        .hero-sparkline-dot,
        .hero-deck-card,
        .hero-nebula,
        .hero-dust-field,
        .hero-light-streak,
        .hero-atmo-fog,
        .hero-diagonal-beam,
        .hero-bottom-glow-carry,
        .hero-indicator-dot-active {
          animation: none !important;
          transform: none !important;
        }
      }

      /* —— Cinematic hero —— */
      .hero-nebula {
        background:
          radial-gradient(ellipse 80% 60% at 20% 30%, rgba(99, 102, 241, 0.2) 0, transparent 55%),
          radial-gradient(ellipse 70% 50% at 85% 20%, rgba(56, 189, 248, 0.14) 0, transparent 50%),
          radial-gradient(ellipse 60% 55% at 55% 80%, rgba(139, 92, 246, 0.12) 0, transparent 52%);
        filter: blur(40px);
      }
      .hero-diagonal-beam {
        background: linear-gradient(
          128deg,
          transparent 0%,
          rgba(99, 102, 241, 0.06) 38%,
          rgba(62, 207, 142, 0.08) 52%,
          rgba(56, 189, 248, 0.05) 62%,
          transparent 78%
        );
        opacity: 0.9;
      }
      .hero-atmo-fog {
        background: radial-gradient(ellipse 120% 80% at 50% 100%, rgba(15, 23, 42, 0.5), transparent 55%);
        opacity: 0.85;
      }
      .hero-light-streak {
        background: linear-gradient(
          165deg,
          transparent,
          rgba(99, 102, 241, 0.12) 45%,
          rgba(56, 189, 248, 0.08) 55%,
          transparent
        );
        filter: blur(48px);
        opacity: 0.7;
        transform: rotate(-8deg);
        animation: heroStreakDrift 14s ease-in-out infinite;
      }
      .hero-light-streak-alt {
        transform: rotate(12deg);
        animation-delay: 3s;
        opacity: 0.5;
      }
      @keyframes heroStreakDrift {
        0%,
        100% {
          opacity: 0.45;
          transform: rotate(-8deg) translateY(0);
        }
        50% {
          opacity: 0.75;
          transform: rotate(-6deg) translateY(-12px);
        }
      }
      .hero-dust-field {
        background-image: radial-gradient(circle, rgba(255, 255, 255, 0.35) 0.5px, transparent 0.5px);
        background-size: 48px 48px;
        opacity: 0.04;
        mask-image: radial-gradient(ellipse 90% 70% at 50% 40%, black, transparent 75%);
        animation: heroDustDrift 40s linear infinite;
      }
      @keyframes heroDustDrift {
        to {
          transform: translate3d(-24px, -18px, 0);
        }
      }
      .hero-vignette {
        background: radial-gradient(ellipse 95% 85% at 50% 45%, transparent 35%, rgba(0, 0, 0, 0.65) 100%);
      }
      .hero-fg-blur {
        width: min(28vw, 320px);
        height: min(50vh, 420px);
        border-radius: 999px;
        filter: blur(64px);
        opacity: 0.35;
      }
      .hero-fg-blur-left {
        background: radial-gradient(circle, rgba(62, 207, 142, 0.15), transparent 70%);
        transform: translateX(-40%);
      }
      .hero-fg-blur-right {
        background: radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%);
        transform: translateX(35%);
      }
      .hero-bottom-glow-carry {
        background: linear-gradient(
          180deg,
          transparent 0%,
          rgba(99, 102, 241, 0.06) 35%,
          rgba(62, 207, 142, 0.04) 55%,
          transparent 85%
        );
        pointer-events: none;
      }
      .hero-grid-warp {
        transform: perspective(800px) rotateX(12deg) scale(1.08);
        transform-origin: 50% 20%;
        mask-image: radial-gradient(ellipse 90% 70% at 50% 30%, black, transparent 78%);
      }
      .hero-copy-glow {
        background: radial-gradient(ellipse at 30% 40%, rgba(99, 102, 241, 0.12), transparent 68%);
        filter: blur(24px);
      }
      .hero-headline-luxury {
        font-size: clamp(2.55rem, 5.4vw + 0.35rem, 5rem);
        line-height: 0.98;
        letter-spacing: -0.042em;
      }
      .hero-headline-line {
        text-shadow: 0 0 40px rgba(0, 0, 0, 0.35);
      }
      .hero-headline-accent {
        letter-spacing: -0.036em;
        line-height: 1.02;
      }
      .hero-stage {
        isolation: isolate;
      }
      .hero-mesh {
        background:
          radial-gradient(at 27% 18%, rgba(62, 207, 142, 0.14) 0, transparent 42%),
          radial-gradient(at 78% 12%, rgba(56, 189, 248, 0.12) 0, transparent 40%),
          radial-gradient(at 62% 68%, rgba(99, 102, 241, 0.16) 0, transparent 48%),
          radial-gradient(at 12% 72%, rgba(139, 92, 246, 0.1) 0, transparent 44%);
        animation: heroMeshDrift 22s ease-in-out infinite;
      }
      @keyframes heroMeshDrift {
        0%,
        100% {
          transform: translate3d(0, 0, 0) scale(1);
        }
        50% {
          transform: translate3d(-2%, 1.5%, 0) scale(1.02);
        }
      }
      .hero-top-beam {
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.07) 0%,
          rgba(99, 102, 241, 0.08) 28%,
          transparent 100%
        );
        mask-image: linear-gradient(180deg, black 0%, transparent 100%);
      }
      .hero-bottom-fade {
        background: linear-gradient(
          180deg,
          transparent 0%,
          color-mix(in oklch, hsl(var(--background)) 40%, transparent) 42%,
          hsl(var(--background)) 100%
        );
      }
      .hero-flow-arc {
        background: radial-gradient(
          ellipse 100% 40% at 0% 50%,
          rgba(99, 102, 241, 0.2),
          transparent 70%
        );
        filter: blur(28px);
      }
      .hero-grid-drift {
        animation: heroGridDrift 24s linear infinite;
      }
      @keyframes heroGridDrift {
        to {
          transform: translate3d(-16px, -12px, 0);
        }
      }
      .hero-eyebrow {
        font-family: var(--font-mono, ui-monospace, monospace);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: color-mix(in srgb, var(--muted-foreground) 88%, white);
      }
      .hero-live-dot {
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: var(--yes);
        box-shadow: 0 0 12px color-mix(in srgb, var(--yes) 65%, transparent);
        animation: heroLivePulse 2.2s ease-in-out infinite;
      }
      @keyframes heroLivePulse {
        0%,
        100% {
          opacity: 0.75;
          transform: scale(1);
        }
        50% {
          opacity: 1;
          transform: scale(1.15);
        }
      }
      .hero-headline-shine {
        background-size: 220% auto;
        filter: drop-shadow(0 0 32px color-mix(in srgb, var(--yes) 18%, transparent));
        animation: heroHeadlineGradient 10s ease-in-out infinite;
      }
      @keyframes heroHeadlineGradient {
        0%,
        100% {
          background-position: 0% center;
        }
        50% {
          background-position: 100% center;
        }
      }
      .hero-orb {
        border-radius: 999px;
        filter: blur(80px);
        opacity: 0.62;
        will-change: transform;
      }
      .hero-orb-yes {
        background: radial-gradient(circle, color-mix(in srgb, var(--yes) 58%, transparent), transparent 68%);
      }
      .hero-orb-cyan {
        background: radial-gradient(circle, rgba(56, 189, 248, 0.42), transparent 68%);
      }
      .hero-orb-indigo {
        background: radial-gradient(circle, rgba(99, 102, 241, 0.52), transparent 68%);
      }
      .hero-orb-violet {
        background: radial-gradient(circle, rgba(139, 92, 246, 0.38), transparent 68%);
      }
      .hero-noise {
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
        opacity: 0.045;
        mix-blend-mode: overlay;
      }
      .hero-dashboard-glow {
        background: linear-gradient(
          135deg,
          color-mix(in srgb, var(--yes) 40%, transparent),
          rgba(99, 102, 241, 0.5) 40%,
          rgba(56, 189, 248, 0.4) 100%
        );
        box-shadow:
          0 0 80px -16px rgba(99, 102, 241, 0.4),
          0 40px 100px -40px rgba(0, 0, 0, 0.9);
        animation: heroBorderGlow 5s ease-in-out infinite;
      }
      .hero-dashboard-glow-active,
      .hero-terminal-hovered .hero-dashboard-glow {
        box-shadow:
          0 0 100px -8px rgba(99, 102, 241, 0.5),
          0 0 48px -8px color-mix(in srgb, var(--yes) 35%, transparent),
          0 48px 120px -36px rgba(0, 0, 0, 0.95);
      }
      @keyframes heroBorderGlow {
        0%,
        100% {
          opacity: 0.8;
        }
        50% {
          opacity: 1;
        }
      }
      .hero-terminal-rig {
        transform-style: preserve-3d;
        perspective: 1800px;
      }
      .hero-deck-card {
        position: absolute;
        inset: 4% 3%;
        border-radius: 1.35rem;
        border: 1px solid rgba(255, 255, 255, 0.06);
        background: linear-gradient(160deg, rgba(255, 255, 255, 0.04), rgba(6, 10, 22, 0.5));
        backdrop-filter: blur(12px);
        transform-style: preserve-3d;
      }
      .hero-deck-card-1 {
        transform: rotateY(-16deg) rotateX(7deg) translateZ(-28px) translate(10px, 18px) scale(0.98);
        opacity: 0.35;
        box-shadow: 0 24px 48px -32px rgba(0, 0, 0, 0.8);
      }
      .hero-deck-card-2 {
        transform: rotateY(-16deg) rotateX(7deg) translateZ(-56px) translate(18px, 32px) scale(0.96);
        opacity: 0.22;
      }
      .hero-deck-card-3 {
        transform: rotateY(-16deg) rotateX(7deg) translateZ(-84px) translate(26px, 46px) scale(0.94);
        opacity: 0.12;
      }
      @media (max-width: 1023px) {
        .hero-deck-card-1 {
          transform: translate(8px, 14px) scale(0.98);
        }
        .hero-deck-card-2 {
          transform: translate(14px, 24px) scale(0.96);
        }
        .hero-deck-card-3 {
          transform: translate(20px, 34px) scale(0.94);
        }
      }
      .hero-terminal-shadow {
        position: absolute;
        left: 8%;
        right: 8%;
        bottom: -6%;
        height: 28%;
        border-radius: 999px;
        background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.65), transparent 70%);
        filter: blur(20px);
        transform: rotateX(75deg) scaleY(0.5);
        z-index: 0;
      }
      .hero-terminal-reflection {
        position: absolute;
        left: 10%;
        right: 10%;
        bottom: -2%;
        height: 18%;
        border-radius: 1.35rem;
        background: linear-gradient(180deg, rgba(99, 102, 241, 0.12), transparent);
        filter: blur(8px);
        opacity: 0.5;
        transform: scaleY(-0.35) translateY(40%);
        z-index: 0;
      }
      .hero-holo-scan {
        top: 0;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.35),
          transparent
        );
        animation: heroHoloScan 4.5s ease-in-out infinite;
        box-shadow: 0 0 24px rgba(99, 102, 241, 0.4);
      }
      @keyframes heroHoloScan {
        0% {
          top: 0;
          opacity: 0;
        }
        8% {
          opacity: 0.7;
        }
        92% {
          opacity: 0.5;
        }
        100% {
          top: 100%;
          opacity: 0;
        }
      }
      .hero-scanline-vertical {
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.05), transparent);
        animation: heroScanVert 6s ease-in-out infinite;
      }
      @keyframes heroScanVert {
        0%,
        100% {
          opacity: 0.15;
          transform: translateX(0);
        }
        50% {
          opacity: 0.35;
          transform: translateX(8px);
        }
      }
      .hero-corner-accent {
        position: absolute;
        width: 28px;
        height: 28px;
        border-color: rgba(255, 255, 255, 0.2);
        z-index: 4;
      }
      .hero-corner-tl {
        top: 12px;
        left: 12px;
        border-top: 1px solid;
        border-left: 1px solid;
      }
      .hero-corner-br {
        bottom: 12px;
        right: 12px;
        border-bottom: 1px solid;
        border-right: 1px solid;
      }
      .hero-sparkline-wrap {
        transform-origin: center bottom;
        animation: heroSparkDrift 11s ease-in-out infinite;
      }
      @keyframes heroSparkDrift {
        0%,
        100% {
          transform: scaleY(1) translateY(0);
        }
        50% {
          transform: scaleY(1.04) translateY(-2px);
        }
      }
      .hero-sparkline-dot {
        position: absolute;
        right: 2%;
        top: 38%;
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: var(--yes);
        box-shadow: 0 0 12px color-mix(in srgb, var(--yes) 70%, transparent);
        animation: heroSparkDot 2s ease-in-out infinite;
      }
      @keyframes heroSparkDot {
        0%,
        100% {
          opacity: 0.6;
          transform: scale(1);
        }
        50% {
          opacity: 1;
          transform: scale(1.25);
        }
      }
      .hero-indicator-dot {
        width: 4px;
        height: 4px;
        border-radius: 999px;
        background: rgba(113, 113, 122, 0.8);
      }
      .hero-indicator-dot-active {
        background: var(--yes);
        box-shadow: 0 0 8px color-mix(in srgb, var(--yes) 55%, transparent);
        animation: heroLivePulse 1.6s ease-in-out infinite;
      }
      .hero-glass-panel {
        border: 1px solid rgba(255, 255, 255, 0.11);
        background: linear-gradient(
          155deg,
          rgba(255, 255, 255, 0.09) 0%,
          rgba(255, 255, 255, 0.025) 38%,
          rgba(6, 10, 22, 0.62) 100%
        );
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.12),
          inset 0 -24px 48px -24px rgba(0, 0, 0, 0.4),
          0 40px 80px -32px rgba(0, 0, 0, 0.9),
          0 0 100px -24px rgba(99, 102, 241, 0.28);
        backdrop-filter: blur(28px);
      }
      .hero-glass-inner {
        background: linear-gradient(180deg, rgba(6, 10, 22, 0.35) 0%, rgba(4, 8, 18, 0.55) 100%);
      }
      .hero-chart-shell {
        position: relative;
        overflow: hidden;
      }
      .hero-chart-shell::after {
        content: "";
        position: absolute;
        inset: -10% -45%;
        background: linear-gradient(
          100deg,
          transparent 18%,
          color-mix(in srgb, var(--yes) 18%, transparent) 50%,
          transparent 82%
        );
        opacity: 0.3;
        transform: translateX(-70%);
        animation: heroChartShimmer 4.2s ease-in-out infinite;
        pointer-events: none;
      }
      @keyframes heroChartShimmer {
        0% {
          transform: translateX(-70%);
        }
        55%,
        100% {
          transform: translateX(70%);
        }
      }
      .hero-float-chip {
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.08),
          0 12px 32px -16px rgba(0, 0, 0, 0.75);
      }
      .hero-particles {
        overflow: visible;
      }
      .hero-particle {
        position: absolute;
        width: 3px;
        height: 3px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.35);
        box-shadow: 0 0 8px rgba(99, 102, 241, 0.5);
        animation: heroParticleFloat 7s ease-in-out infinite;
      }
      .hero-particle-0 {
        left: 8%;
        top: 20%;
        animation-delay: 0s;
      }
      .hero-particle-1 {
        left: 22%;
        top: 62%;
        animation-delay: 0.8s;
      }
      .hero-particle-2 {
        right: 18%;
        top: 14%;
        animation-delay: 1.4s;
      }
      .hero-particle-3 {
        right: 8%;
        top: 48%;
        animation-delay: 2s;
      }
      .hero-particle-4 {
        left: 48%;
        top: 8%;
        animation-delay: 0.4s;
      }
      .hero-particle-5 {
        left: 72%;
        bottom: 22%;
        animation-delay: 1.8s;
      }
      .hero-particle-6 {
        left: 14%;
        bottom: 12%;
        animation-delay: 2.6s;
      }
      .hero-particle-7 {
        right: 32%;
        bottom: 8%;
        animation-delay: 3.2s;
      }
      @keyframes heroParticleFloat {
        0%,
        100% {
          opacity: 0.25;
          transform: translateY(0);
        }
        50% {
          opacity: 0.7;
          transform: translateY(-10px);
        }
      }
      .hero-pulse-dot {
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 999px;
        background: var(--yes);
        animation: heroLivePulse 1.8s ease-in-out infinite;
      }
      .hero-preview-stage {
        perspective: 2000px;
      }
      .hero-preview-tilt {
        transform: rotateY(-16deg) rotateX(8deg);
        transform-style: preserve-3d;
      }
      .hero-preview-tilt-motion {
        transform: none;
      }
      .hero-preview-float {
        animation: heroPreviewFloat 10s ease-in-out infinite;
        transform-style: preserve-3d;
      }
      @keyframes heroPreviewFloat {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-12px);
        }
      }
      @media (max-width: 1023px) {
        .hero-preview-tilt {
          transform: none;
        }
        .hero-preview-float {
          animation: heroPreviewFloatMobile 10s ease-in-out infinite;
        }
        .hero-deck-card {
          display: none;
        }
      }
      @keyframes heroPreviewFloatMobile {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-8px);
        }
      }
      .hero-scanline {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent);
        animation: heroScan 5s ease-in-out infinite;
      }
      @keyframes heroScan {
        0%,
        100% {
          opacity: 0.2;
        }
        50% {
          opacity: 0.5;
        }
      }
      .hero-cta-primary {
        color: oklch(0.16 0.04 268);
        background: linear-gradient(
          180deg,
          color-mix(in srgb, var(--yes) 94%, white) 0%,
          color-mix(in srgb, var(--yes) 68%, black) 100%
        );
        box-shadow:
          0 0 0 1px color-mix(in srgb, var(--yes) 60%, transparent),
          0 0 24px -4px color-mix(in srgb, var(--yes) 45%, transparent),
          0 22px 52px -14px color-mix(in srgb, var(--yes) 52%, transparent);
        transition:
          box-shadow 0.32s ease,
          filter 0.32s ease;
      }
      .hero-cta-primary::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          105deg,
          transparent 32%,
          rgba(255, 255, 255, 0.28) 50%,
          transparent 68%
        );
        transform: translateX(-130%);
        transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .hero-cta-primary::after {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(
          120deg,
          color-mix(in srgb, var(--yes) 80%, white),
          transparent 40%,
          rgba(56, 189, 248, 0.5)
        );
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0.85;
        pointer-events: none;
      }
      .hero-cta-primary:hover {
        filter: brightness(1.04);
        box-shadow:
          0 0 0 1px color-mix(in srgb, var(--yes) 55%, transparent),
          0 0 32px -2px color-mix(in srgb, var(--yes) 50%, transparent),
          0 28px 60px -12px color-mix(in srgb, var(--yes) 58%, transparent);
      }
      .hero-cta-primary:hover::before {
        transform: translateX(130%);
      }
      .hero-cta-secondary {
        border: 1px solid rgba(255, 255, 255, 0.14);
        background: rgba(255, 255, 255, 0.05);
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.08),
          0 14px 36px -22px rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(20px);
        transition:
          border-color 0.32s ease,
          background 0.32s ease,
          box-shadow 0.32s ease;
      }
      .hero-cta-secondary::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(
          135deg,
          rgba(99, 102, 241, 0.45),
          transparent 42%,
          rgba(62, 207, 142, 0.3)
        );
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.32s ease;
      }
      .hero-cta-secondary:hover {
        border-color: rgba(99, 102, 241, 0.4);
        background: rgba(99, 102, 241, 0.1);
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.1),
          0 0 28px -8px rgba(99, 102, 241, 0.35),
          0 18px 44px -16px rgba(99, 102, 241, 0.28);
      }
      .hero-cta-secondary:hover::before {
        opacity: 1;
      }
      .nw-glass-card {
        border: 1px solid rgba(255, 255, 255, 0.09);
        background: linear-gradient(
          165deg,
          rgba(255, 255, 255, 0.05) 0%,
          rgba(255, 255, 255, 0.015) 50%,
          rgba(6, 10, 22, 0.35) 100%
        );
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.07),
          0 20px 48px -32px rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(20px);
        transition:
          border-color 0.28s ease,
          box-shadow 0.28s ease;
      }
      .nw-glass-card:hover {
        border-color: rgba(99, 102, 241, 0.28);
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.09),
          0 24px 56px -28px rgba(99, 102, 241, 0.18);
      }

      .hw-cycle-wrap {
        position: relative;
        width: 100%;
        min-height: 440px;
        border-radius: 16px;
        border: none;
        background: transparent;
        overflow: hidden;
      }
      .hw-cycle-glass {
        position: absolute;
        inset: 50% auto auto 50%;
        width: min(78vw, 390px);
        height: min(78vw, 390px);
        border-radius: 999px;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(36, 48, 76, 0.24) 0%, rgba(13, 18, 32, 0.08) 55%, transparent 78%);
        border: 1px solid rgba(255, 255, 255, 0.06);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 22px 44px -34px rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(5px);
      }
      .hw-cycle-ring {
        position: absolute;
        inset: 50% auto auto 50%;
        width: min(62vw, 320px);
        height: min(62vw, 320px);
        border-radius: 999px;
        border: 1px solid color-mix(in oklch, var(--border), transparent 20%);
        transform: translate(-50%, -50%);
      }
      .hw-cycle-ring::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        border: 2.5px solid transparent;
        border-top-color: color-mix(in srgb, var(--yes) 75%, white);
        border-right-color: color-mix(in srgb, var(--yes) 45%, transparent);
        filter: drop-shadow(0 0 10px color-mix(in srgb, var(--yes) 42%, transparent));
        animation: hwSpin 3.2s linear infinite;
      }
      .hw-cycle-core {
        position: absolute;
        inset: 50% auto auto 50%;
        width: 188px;
        transform: translate(-50%, -50%);
        text-align: center;
        border-radius: 0;
        border: none;
        background: transparent;
        padding: 10px 8px;
        animation: hwCorePulse 2.2s ease-in-out infinite;
      }
      .hw-node {
        position: absolute;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        color: hsl(var(--foreground));
        font-weight: 600;
        letter-spacing: 0.01em;
        z-index: 3;
        animation: hwNodeBob 3.2s ease-in-out infinite;
      }
      .hw-node-dot {
        width: 9px;
        height: 9px;
        border-radius: 999px;
        background: var(--yes);
        box-shadow: 0 0 0 6px color-mix(in srgb, var(--yes) 20%, transparent),
          0 0 18px color-mix(in srgb, var(--yes) 52%, transparent);
        animation: hwDotPulse 1.6s ease-in-out infinite;
      }
      .hw-node-label {
        display: inline-flex;
        flex-direction: column;
        gap: 1px;
        white-space: nowrap;
        color: hsl(var(--foreground) / 0.95);
        text-shadow: 0 0 12px rgba(0, 0, 0, 0.45);
        padding: 1px 4px;
        border-radius: 6px;
        background: color-mix(in oklch, hsl(var(--background)) 52%, transparent);
        border: 1px solid rgba(255, 255, 255, 0.06);
        box-shadow: 0 8px 24px -18px rgba(0, 0, 0, 0.8);
      }
      .hw-node-label strong {
        font-size: 10px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--muted-foreground);
      }
      .hw-node-label span {
        font-size: 12px;
        font-weight: 600;
      }
      .hw-node-0 {
        left: 50%;
        top: 18px;
        transform: translateX(-50%);
      }
      .hw-node-1 {
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
      .hw-node-2 {
        left: 50%;
        bottom: 18px;
        transform: translateX(-50%);
      }
      .hw-node-3 {
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
      .hw-step {
        position: relative;
        overflow: hidden;
        transition: border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
        animation: hwStepGlow 4.2s ease-in-out infinite;
      }
      .hw-step::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(
          100deg,
          transparent 15%,
          color-mix(in srgb, var(--yes) 10%, transparent) 45%,
          transparent 75%
        );
        transform: translateX(-85%);
        animation: hwSweep 4.6s ease-in-out infinite;
      }
      .hw-step:hover {
        border-color: color-mix(in srgb, var(--yes) 24%, var(--border));
        transform: translateY(-1px);
        box-shadow: 0 14px 36px -26px rgba(0, 0, 0, 0.75);
      }
      .wo-metric-glow {
        animation: woMetricGlow 3.8s ease-in-out infinite;
      }
      @keyframes hwSpin {
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes hwCorePulse {
        0%,
        100% {
          transform: translate(-50%, -50%) scale(1);
          text-shadow: 0 0 0 rgba(0, 0, 0, 0);
        }
        50% {
          transform: translate(-50%, -50%) scale(1.06);
          text-shadow: 0 0 18px color-mix(in srgb, var(--yes) 35%, transparent);
        }
      }
      @keyframes hwNodeBob {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-3px);
        }
      }
      .hw-node-0,
      .hw-node-2 {
        animation-name: hwNodeBobX;
      }
      @keyframes hwNodeBobX {
        0%,
        100% {
          transform: translateX(-50%);
        }
        50% {
          transform: translateX(-50%) translateY(-5px);
        }
      }
      .hw-node-1,
      .hw-node-3 {
        animation-name: hwNodeBobY;
      }
      @keyframes hwNodeBobY {
        0%,
        100% {
          transform: translateY(-50%);
        }
        50% {
          transform: translateY(-50%) translateX(4px);
        }
      }
      @keyframes hwDotPulse {
        0%,
        100% {
          filter: brightness(1);
        }
        50% {
          filter: brightness(1.25);
        }
      }
      @keyframes hwStepGlow {
        0%,
        100% {
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 0 0 rgba(0, 0, 0, 0);
        }
        50% {
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 18px 40px -28px color-mix(in srgb, var(--yes) 18%, transparent);
        }
      }
      @keyframes hwSweep {
        0% {
          transform: translateX(-85%);
        }
        45%,
        100% {
          transform: translateX(85%);
        }
      }
      @keyframes woMetricGlow {
        0%,
        100% {
          border-color: rgba(255, 255, 255, 0.06);
        }
        50% {
          border-color: color-mix(in srgb, var(--yes) 28%, transparent);
        }
      }

      .wo-trad-grid-drift {
        animation: woTradGridDrift 22s linear infinite;
      }
      .wo-trad-orb {
        animation: woTradOrb 8s ease-in-out infinite;
      }
      .wo-trad-stale-badge {
        animation: woTradStalePulse 2.8s ease-in-out infinite;
      }
      .wo-trad-frozen-odds {
        animation: woTradFrozen 3.2s ease-in-out infinite;
      }
      .wo-trad-row:nth-child(odd) {
        animation: woTradRowFade 4s ease-in-out infinite;
      }
      .wo-trad-spinner {
        animation: woTradSpin 1.4s linear infinite;
      }
      .wo-trad-progress-bar {
        animation: woTradProgress 2.8s ease-in-out infinite;
      }
      .wo-trad-scan::after {
        content: "";
        position: absolute;
        inset: -20% 0;
        background: linear-gradient(
          180deg,
          transparent 0%,
          rgba(255, 255, 255, 0.03) 48%,
          transparent 100%
        );
        animation: woTradScan 5.5s ease-in-out infinite;
        pointer-events: none;
      }
      @keyframes woTradGridDrift {
        to {
          transform: translate3d(-12px, -8px, 0);
        }
      }
      @keyframes woTradOrb {
        0%,
        100% {
          opacity: 0.5;
          transform: translateY(0);
        }
        50% {
          opacity: 0.85;
          transform: translateY(-8px);
        }
      }
      @keyframes woTradStalePulse {
        0%,
        100% {
          border-color: rgba(113, 113, 122, 0.35);
          color: rgb(113 113 122);
        }
        50% {
          border-color: rgba(113, 113, 122, 0.55);
          color: rgb(161 161 170);
        }
      }
      @keyframes woTradFrozen {
        0%,
        100% {
          opacity: 0.55;
        }
        50% {
          opacity: 0.85;
        }
      }
      @keyframes woTradRowFade {
        0%,
        100% {
          background-color: transparent;
        }
        50% {
          background-color: rgba(255, 255, 255, 0.02);
        }
      }
      @keyframes woTradSpin {
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes woTradProgress {
        0%,
        100% {
          width: 32%;
          opacity: 0.7;
        }
        50% {
          width: 41%;
          opacity: 1;
        }
      }
      @keyframes woTradScan {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(100%);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .hw-cycle-ring::before,
        .hw-cycle-core,
        .hw-node,
        .hw-step,
        .hw-step::after,
        .wo-metric-glow,
        .wo-trad-grid-drift,
        .wo-trad-orb,
        .wo-trad-stale-badge,
        .wo-trad-frozen-odds,
        .wo-trad-row,
        .wo-trad-spinner,
        .wo-trad-progress-bar,
        .wo-trad-scan::after {
          animation: none !important;
        }
      }
      @media (max-width: 1023px) {
        .hw-cycle-wrap {
          min-height: 390px;
        }
        .hw-cycle-glass {
          width: min(92vw, 340px);
          height: min(92vw, 340px);
        }
      }
    `}</style>
  );
}
