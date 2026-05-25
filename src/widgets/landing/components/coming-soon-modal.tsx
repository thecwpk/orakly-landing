"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Rocket, Sparkles, X } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ComingSoonContextValue = {
  open: (feature?: string) => void;
  close: () => void;
};

const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);

export function ComingSoonProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [feature, setFeature] = useState<string | null>(null);

  const open = useCallback((name?: string) => {
    setFeature(name ?? null);
    setVisible(true);
  }, []);

  const close = useCallback(() => setVisible(false), []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [visible, close]);

  return (
    <ComingSoonContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {visible ? (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
          >
            <button
              type="button"
              className="absolute inset-0 bg-[#050810]/80 backdrop-blur-md"
              aria-label="Close"
              onClick={close}
            />
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className={cn(
                "coming-soon-panel relative w-full max-w-md overflow-hidden rounded-2xl",
                "border border-sky-400/25 bg-gradient-to-b from-[hsl(228_32%_16%)] to-[hsl(225_36%_10%)]",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_32px_80px_-24px_rgba(0,0,0,0.85),0_0_60px_-20px_rgba(56,189,248,0.35)]",
              )}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,rgba(56,189,248,0.22),transparent_70%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-violet-500/20 blur-3xl"
                aria-hidden
              />

              <button
                type="button"
                onClick={close}
                className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close dialog"
              >
                <X className="size-4" />
              </button>

              <div className="relative px-6 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-500/20 to-emerald-500/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                  <Rocket className="size-7 text-sky-300" aria-hidden />
                </div>

                <p className="mt-5 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-400/80">
                  <Sparkles className="mr-1.5 inline size-3 -translate-y-px" aria-hidden />
                  Launching soon
                </p>

                <h2 id="coming-soon-title" className="mt-2 text-center font-display text-2xl font-bold tracking-tight text-white">
                  Coming soon
                </h2>

                <p className="mt-3 text-center text-sm leading-relaxed text-slate-400">
                  {feature ? (
                    <>
                      <span className="font-medium text-slate-200">{feature}</span> is in final polish. On-chain
                      markets and the full trading app ship in the next release.
                    </>
                  ) : (
                    <>
                      We&apos;re finishing the on-chain trading experience: wallet connect, live markets, and
                      settlement. Stay on the list for the launch note.
                    </>
                  )}
                </p>

                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
                  <Link
                    href="#early-access"
                    onClick={close}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-[hsl(228_45%_8%)] shadow-[0_0_28px_-6px_rgba(56,189,248,0.5)] transition hover:brightness-110"
                  >
                    Get launch updates
                    <ArrowRight className="size-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={close}
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                  >
                    Keep browsing
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ComingSoonContext.Provider>
  );
}

export function useComingSoon() {
  const ctx = useContext(ComingSoonContext);
  if (!ctx) throw new Error("useComingSoon must be used within ComingSoonProvider");
  return ctx;
}
