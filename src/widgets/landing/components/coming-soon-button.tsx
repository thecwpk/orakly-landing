"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useComingSoon } from "@/widgets/landing/components/coming-soon-modal";

type ComingSoonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  /** Shown in modal body, e.g. "Launch app" or "Explore markets". */
  featureLabel?: string;
};

/** Opens styled coming-soon modal; keeps button label unchanged. */
export function ComingSoonButton({
  children,
  className,
  featureLabel,
  onClick,
  ...props
}: ComingSoonButtonProps) {
  const { open } = useComingSoon();

  return (
    <button
      type="button"
      className={cn(className)}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) open(featureLabel ?? (typeof children === "string" ? children : undefined));
      }}
      {...props}
    >
      {children}
    </button>
  );
}
