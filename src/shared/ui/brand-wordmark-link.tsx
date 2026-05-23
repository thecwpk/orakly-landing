"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
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
  onClick,
  openInNewTab = false,
}: BrandWordmarkLinkProps) {
  const nav = variant === "nav";
  const newTab = openInNewTab ? ({ target: "_blank", rel: "noopener noreferrer" } as const) : {};

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group flex shrink-0 items-center transition duration-200 hover:opacity-[0.98]",
        nav && "marketing-nav-wordmark",
        !nav && "items-center gap-2 min-[400px]:gap-2.5 sm:gap-3",
        className,
      )}
      aria-label="Orakly Market home"
      {...newTab}
    >
      <span className={cn("marketing-nav-orakly-slot", imgClassName)} aria-hidden />
      {showTitle ? <BrandTitle nav={nav} /> : null}
    </Link>
  );
}

function BrandTitle({ nav }: { nav: boolean }) {
  if (nav) {
    return (
      <span className="truncate font-display font-bold tracking-[-0.03em] text-white">
        Orakly
        <span className="hidden min-[400px]:inline text-white"> Market</span>
      </span>
    );
  }

  return (
    <span className="font-display text-base font-bold text-white">Orakly Market</span>
  );
}
