"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BrandWordmarkLink } from "@/shared/ui";
import { DextoolsLogo } from "@/shared/ui/dextools-logo";
import { TelegramLogo } from "@/shared/ui/telegram-logo";
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

function SocialIconLinks({ className }: { className?: string }) {
  return (
    <>
      <a
        href={LANDING_EXTERNAL_LINKS.twitter}
        className={cn("marketing-nav-social-btn", className)}
        aria-label="X (formerly Twitter)"
        {...NEW_TAB}
      >
        <XLogo />
      </a>
      <a
        href={LANDING_EXTERNAL_LINKS.telegram}
        className={cn("marketing-nav-social-btn", className)}
        aria-label="Telegram"
        {...NEW_TAB}
      >
        <TelegramLogo />
      </a>
      <a
        href={LANDING_EXTERNAL_LINKS.dextools}
        className={cn("marketing-nav-social-btn", className)}
        aria-label="DexTools"
        {...NEW_TAB}
      >
        <DextoolsLogo />
      </a>
    </>
  );
}

export function GlobalMarketingNavbar({ variant, appendActions, chrome = "default" }: GlobalMarketingNavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>(LANDING_NAV_SECTIONS[0].href);
  const app = variant === "app";
  const glass = !app && chrome === "glass";

  useEffect(() => {
    if (app) return;
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [app]);

  useEffect(() => {
    if (app) return;

    const sectionEls = LANDING_NAV_SECTIONS.map((s) => document.getElementById(s.href.replace(/^#/, ""))).filter(
      Boolean,
    ) as HTMLElement[];

    if (!sectionEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveHash(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0.12, 0.35, 0.55] },
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [app]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinkClass = cn(
    "marketing-nav-link shrink-0 whitespace-nowrap rounded-full px-2 py-1.5 text-[11px] font-medium md:px-2.5 md:text-[12px] lg:px-3 lg:text-[13px]",
    glass && "text-[var(--text-muted)] hover:text-[var(--text-primary)]",
  );

  const isActive = (href: string) => activeHash === href;

  const renderSectionLink = (
    item: (typeof LANDING_NAV_SECTIONS)[number],
    className: string,
    options?: { onNavigate?: () => void; activeClassName?: string },
  ) => (
    <a
      key={item.href}
      href={item.href}
      className={cn(className, !app && isActive(item.href) && options?.activeClassName)}
      aria-current={!app && isActive(item.href) ? "true" : undefined}
      onClick={(e) => {
        e.preventDefault();
        scrollToLandingSection(item.href);
        options?.onNavigate?.();
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
      <div className="marketing-nav-social-cluster hidden lg:flex" aria-label="Social links">
        <SocialIconLinks />
      </div>
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
      <div className="marketing-nav-social-cluster flex w-full justify-center py-2" aria-label="Social links">
        <SocialIconLinks />
      </div>
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
      )}
    >
      <div
        data-scrolled={!app && scrolled ? "true" : undefined}
        className={cn(landingShell, "marketing-nav-bar relative")}
      >
        <BrandWordmarkLink
          href={app ? ROUTES.home : "#markets"}
          showTitle
          variant="nav"
          priority
          openInNewTab={app}
          className="relative z-[2] shrink-0"
        />

        {!app ? (
          <nav className="marketing-nav-center" aria-label="Page sections">
            {LANDING_NAV_SECTIONS.map((item) =>
              renderSectionLink(item, navLinkClass, { activeClassName: "marketing-nav-link--active" }),
            )}
          </nav>
        ) : null}

        <div className="relative z-[2] ml-auto flex min-w-0 shrink-0 items-center justify-end gap-1 sm:gap-1.5 lg:gap-2">
          {rightActions}
          {appendActions ? (
            <span className="ml-0.5 hidden shrink-0 items-center gap-2 border-l border-white/[0.08] pl-2 sm:flex sm:pl-2.5">
              {appendActions}
            </span>
          ) : null}
          <button
            type="button"
            className="marketing-nav-menu-btn flex size-8 shrink-0 items-center justify-center text-foreground sm:size-10 lg:hidden"
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
          "marketing-nav-drawer max-h-[min(85dvh,32rem)] overflow-y-auto backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className={cn(landingShell, "flex flex-col gap-0.5 py-3")} aria-label="Mobile sections">
          {LANDING_NAV_SECTIONS.map((item) =>
            renderSectionLink(item, "marketing-nav-drawer-link px-3 py-3 text-sm font-medium", {
              activeClassName: "marketing-nav-drawer-link--active",
              onNavigate: () => setOpen(false),
            }),
          )}
          <div className="mt-2 flex flex-col gap-2 border-t border-white/[0.06] pt-3">{mobileRightActions}</div>
        </nav>
      </div>
    </header>
  );
}
