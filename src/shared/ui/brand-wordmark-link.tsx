"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { BRAND_LOGO_NAV, BRAND_GLYPH_SVG } from "@/shared/constants/brand-logos";
import { ROUTES } from "@/shared/constants/routes";

export type BrandWordmarkLinkProps = {
  href?: string;
  showTitle?: boolean;
  variant?: "default" | "nav";
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  onClick?: () => void;
  openInNewTab?: boolean;
};

export function BrandWordmarkLink({
  href = ROUTES.home,
  showTitle = false,
  variant = "default",
  className,
  imgClassName,
  priority = false,
  onClick,
  openInNewTab = false,
}: BrandWordmarkLinkProps) {
  const [failed, setFailed] = useState(false);
  const nav = variant === "nav";
  const newTab = openInNewTab ? ({ target: "_blank", rel: "noopener noreferrer" } as const) : {};

  if (failed) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn("flex shrink-0 items-center gap-2.5", className)}
        aria-label="Orakly Market home"
        {...newTab}
      >
        <NavGlyphFallback />
        {showTitle ? <BrandTitle nav={nav} /> : null}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group flex shrink-0 items-center transition duration-200 hover:opacity-[0.98]",
        nav ? "gap-3 sm:gap-3.5" : "gap-2.5 sm:gap-3",
        className,
      )}
      aria-label="Orakly Market home"
      {...newTab}
    >
      <span
        className={cn(
          nav &&
            "marketing-brand-mark relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:size-11",
        )}
      >
        {nav ? (
          <span
            className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400/20 via-transparent to-violet-500/15 opacity-80"
            aria-hidden
          />
        ) : null}
        {nav ? (
          <Image
            src={BRAND_LOGO_NAV}
            alt="Orakly"
            width={44}
            height={44}
            unoptimized
            priority={priority}
            className={cn(
              "relative z-[1] h-8 w-8 object-contain object-center sm:h-9 sm:w-9",
              imgClassName,
            )}
            onError={() => setFailed(true)}
          />
        ) : (
          <Image
            src={BRAND_LOGO_NAV}
            alt="Orakly Market"
            width={200}
            height={52}
            unoptimized
            priority={priority}
            className={cn("h-8 w-auto max-w-[120px] object-contain object-left sm:h-9", imgClassName)}
            onError={() => setFailed(true)}
          />
        )}
      </span>
      {showTitle ? <BrandTitle nav={nav} /> : null}
    </Link>
  );
}

function NavGlyphFallback() {
  return (
    <span className="marketing-brand-mark flex size-10 items-center justify-center rounded-xl text-sky-300 sm:size-11">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={BRAND_GLYPH_SVG} alt="" className="size-6 text-sky-300" />
    </span>
  );
}

function BrandTitle({ nav }: { nav: boolean }) {
  if (nav) {
    return (
      <span className="flex min-w-0 flex-col justify-center leading-[1.12]">
        <span className="font-display text-[1.05rem] font-bold tracking-[-0.03em] text-white sm:text-lg">
          Orakly Market
        </span>
        <span className="mt-1 hidden font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:block sm:text-[11px]">
          On-chain predictions
        </span>
      </span>
    );
  }

  return (
    <span className="font-display text-base font-bold text-white">Orakly Market</span>
  );
}
