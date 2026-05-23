import Image from "next/image";

import { EXTERNAL_DEXTOOLS_MARK } from "@/shared/constants/external-brand-logos";
import { cn } from "@/lib/utils";

/**
 * DexTools — softened for dark UI: low-saturation, whitish read on nav/footer.
 */
export function DextoolsLogo({ className }: { className?: string }) {
  return (
    <Image
      src={EXTERNAL_DEXTOOLS_MARK}
      alt=""
      width={20}
      height={20}
      unoptimized
      className={cn(
        "size-[1.125rem] shrink-0 rounded-[4px] bg-white/[0.08] object-contain p-[1px] opacity-[0.82] saturate-[0.22] brightness-[1.15] transition-[opacity,filter] duration-200 group-hover:opacity-95 group-hover:saturate-[0.32] sm:size-5 sm:rounded-[5px] sm:p-[2px]",
        className,
      )}
    />
  );
}
