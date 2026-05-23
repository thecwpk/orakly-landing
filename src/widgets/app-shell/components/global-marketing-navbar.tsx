"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BrandWordmarkLink } from "@/shared/ui";
import { XLogo } from "@/shared/ui/x-logo";
import { ROUTES } from "@/shared/constants/routes";
import { ComingSoonButton } from "@/widgets/landing/components/coming-soon-button";
import { LANDING_EXTERNAL_LINKS } from "@/widgets/landing/lib/landing-external-links";
import {
  LANDING_NAV_SECTIONS,
  scrollToLandingSection,
} from "@/widgets/landing/lib/landing-nav-sections";
import { landingShell } from "@/widgets/landing/sections/marketing-landing-rail";

const NEW_TAB = { target: "_blank" as const, rel: "noopener noreferrer" as const };

export type GlobalMarketingNavbarProps = {
  variant: "landing" | "app";
  appendActions?: ReactNode;
  chrome?: "default" | "glass";
};

export function GlobalMarketingNavbar({ variant, appendActions, chrome = "default" }: GlobalMarketingNavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const app = variant === "app";
  const glass = !app && chrome === "glass";

  useEffect(() => {
    if (app) return;
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [app]);

  const navLinkClass = cn(
    "marketing-nav-link shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] font-medium transition-colors duration-200 sm:px-3 sm:text-[13px]",
    glass
      ? "text-[var(--text-muted)] hover:bg-white/[0.06] hover:text-[var(--text-primary)]"
      : "text-slate-300/90 hover:bg-sky-500/[0.08] hover:text-white",
  );

  const externalLinkClass = cn(
    "marketing-nav-signin hidden size-10 shrink-0 p-0 lg:inline-flex",
    glass && "text-[var(--text-muted)]",
  );

  const xLink = (
    <a
      href={LANDING_EXTERNAL_LINKS.twitter}
      className={externalLinkClass}
      aria-label="X (formerly Twitter)"
      {...NEW_TAB}
    >
      <XLogo />
    </a>
  );

  const renderSectionLink = (
    item: (typeof LANDING_NAV_SECTIONS)[number],
    className: string,
    onNavigate?: () => void,
  ) => (
    <a
      key={item.href}
      href={item.href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        scrollToLandingSection(item.href);
        onNavigate?.();
      }}
    >
      {item.label}
    </a>
  );

  const rightActions = app ? (
    <>
      <Link href={ROUTES.signIn} className="marketing-nav-signin hidden sm:inline-flex" {...NEW_TAB}>
        Sign in
      </Link>
      <Link href={ROUTES.dapp} className="marketing-nav-cta hidden sm:inline-flex" {...NEW_TAB}>
        Launch app
      </Link>
    </>
  ) : (
    <>
      {xLink}
      <a href={LANDING_EXTERNAL_LINKS.dextools} className={externalLinkClass} {...NEW_TAB}>
        Dextool
      </a>
      <ComingSoonButton className="marketing-nav-cta hidden lg:inline-flex" featureLabel="Launch app">
        Launch app
      </ComingSoonButton>
    </>
  );

  const mobileRightActions = app ? (
    <>
      <Link href={ROUTES.signIn} className="marketing-nav-signin justify-center py-2.5" onClick={() => setOpen(false)} {...NEW_TAB}>
        Sign in
      </Link>
      <Link href={ROUTES.dapp} className="marketing-nav-cta justify-center py-2.5" onClick={() => setOpen(false)} {...NEW_TAB}>
        Launch app
      </Link>
    </>
  ) : (
    <>
      <a
        href={LANDING_EXTERNAL_LINKS.twitter}
        className="marketing-nav-signin inline-flex items-center justify-center py-2.5"
        onClick={() => setOpen(false)}
        aria-label="X (formerly Twitter)"
        {...NEW_TAB}
      >
        <XLogo className="size-5" />
      </a>
      <a
        href={LANDING_EXTERNAL_LINKS.dextools}
        className="marketing-nav-signin justify-center py-2.5"
        onClick={() => setOpen(false)}
        {...NEW_TAB}
      >
        Dextool
      </a>
      <ComingSoonButton
        className="marketing-nav-cta w-full justify-center py-2.5"
        featureLabel="Launch app"
        onClick={() => setOpen(false)}
      >
        Launch app
      </ComingSoonButton>
    </>
  );

  return (
    <header
      data-scrolled={!app && scrolled ? "true" : undefined}
      className={cn(
        "marketing-nav-shell sticky top-0 z-50 max-w-[100vw] overflow-x-hidden text-foreground transition-[box-shadow,backdrop-filter] duration-300",
        glass
          ? "z-[70] border-b border-[color:var(--border-soft)] bg-[color-mix(in_srgb,var(--bg-2)_78%,transparent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--bg-2)_65%,transparent)]"
          : "marketing-header-shell",
        !app && scrolled && "shadow-[0_12px_40px_-16px_rgba(8,20,48,0.55)]",
      )}
    >
      <div
        className={cn(
          landingShell,
          "relative flex min-w-0 items-center justify-between gap-2 overflow-hidden transition-[height] duration-200 sm:gap-3",
          !app && scrolled ? "h-[3.25rem]" : "h-14 sm:h-[3.75rem]",
        )}
      >
        <BrandWordmarkLink
          href={app ? ROUTES.home : "#markets"}
          showTitle
          variant="nav"
          priority
          openInNewTab={app}
          className="relative z-[2] min-w-0 flex-1 overflow-hidden pr-1"
        />

        {!app ? (
          <nav
            className="absolute left-1/2 z-[1] hidden max-w-[min(calc(100vw-11rem),52rem)] -translate-x-1/2 items-center gap-0.5 overflow-x-auto rounded-full border border-white/[0.06] bg-white/[0.03] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md [-ms-overflow-style:none] [scrollbar-width:none] lg:flex [&::-webkit-scrollbar]:hidden"
            aria-label="Page sections"
          >
            {LANDING_NAV_SECTIONS.map((item) => renderSectionLink(item, navLinkClass))}
          </nav>
        ) : null}

        <div className="relative z-[2] ml-auto flex min-w-0 shrink-0 items-center justify-end gap-1.5 sm:gap-2">
          {rightActions}
          {appendActions ? (
            <span className="ml-0.5 flex shrink-0 items-center gap-2 border-l border-white/[0.08] pl-2 sm:pl-2.5">
              {appendActions}
            </span>
          ) : null}
          <button
            type="button"
            className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-sky-500/15 bg-sky-500/[0.06] text-foreground transition hover:border-sky-400/30 hover:bg-sky-500/10 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-sky-500/10 bg-[hsl(225_32%_11%_/_0.95)] backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className={cn(landingShell, "flex flex-col gap-1 py-3")} aria-label="Mobile sections">
          {LANDING_NAV_SECTIONS.map((item) =>
            renderSectionLink(
              item,
              cn(
                "rounded-xl px-3 py-2.5 text-sm font-medium transition",
                "text-slate-300 hover:bg-sky-500/[0.08] hover:text-white",
              ),
              () => setOpen(false),
            ),
          )}
          <div className="mt-2 flex flex-col gap-2 border-t border-white/[0.06] pt-3">{mobileRightActions}</div>
        </nav>
      </div>
    </header>
  );
}
