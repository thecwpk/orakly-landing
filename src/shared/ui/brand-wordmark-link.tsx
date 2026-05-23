"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { BRAND_LOGO_NAV } from "@/shared/constants/brand-logos";
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

/** Transparent mark for dark nav — no frame, SVG only. */
function NavBrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={cn("size-9 shrink-0 sm:size-10", className)}
    >
      <defs>
        <linearGradient id="orakly-mark-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="11.5" stroke="url(#orakly-mark-grad)" strokeWidth="2.25" />
      <circle cx="22.4" cy="9.6" r="2.35" fill="#38bdf8" />
    </svg>
  );
}

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

  if (failed && !nav) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn("flex shrink-0 items-center gap-2.5", className)}
        aria-label="Orakly Market home"
        {...newTab}
      >
        <span className="font-display text-base font-bold text-white">Orakly Market</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group flex shrink-0 items-center transition duration-200 hover:opacity-[0.98]",
        nav ? "min-w-0 gap-2.5 sm:gap-3" : "gap-2.5 sm:gap-3",
        className,
      )}
      aria-label="Orakly Market home"
      {...newTab}
    >
      {nav ? (
        <NavBrandMark />
      ) : (
        <Image
          src={BRAND_LOGO_NAV}
          alt=""
          width={200}
          height={52}
          unoptimized
          priority={priority}
          className={cn("h-8 w-auto max-w-[120px] object-contain object-left sm:h-9", imgClassName)}
          onError={() => setFailed(true)}
        />
      )}
      {showTitle ? <BrandTitle nav={nav} /> : null}
    </Link>
  );
}

function BrandTitle({ nav }: { nav: boolean }) {
  if (nav) {
    return (
      <span className="truncate font-display text-[0.95rem] font-bold tracking-[-0.03em] text-white sm:text-[1.05rem] lg:text-lg">
        Orakly Market
      </span>
    );
  }

  return (
    <span className="font-display text-base font-bold text-white">Orakly Market</span>
  );
}
