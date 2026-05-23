import Image from "next/image";

import { EXTERNAL_DEXTOOLS_MARK } from "@/shared/constants/external-brand-logos";
import { cn } from "@/lib/utils";

/**
 * DexTools — raw `dextools-logo.png`, no blend/mask (those broke it on dark nav).
 * Small white tile so the cyan hex stays readable.
 */
export function DextoolsLogo({ className }: { className?: string }) {
  return (
    <Image
      src={EXTERNAL_DEXTOOLS_MARK}
      alt=""
      width={20}
      height={20}
      unoptimized
      className={cn("size-5 shrink-0 rounded-[5px] bg-white object-contain p-[2px]", className)}
    />
  );
}
