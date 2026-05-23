/** Anchor nav — every major band on the marketing landing page. */
export const LANDING_NAV_SECTIONS = [
  { label: "Overview", href: "#markets" },
  { label: "Live markets", href: "#live-markets" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Orakly", href: "#why" },
  { label: "Trust", href: "#trust" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Updates", href: "#early-access" },
] as const;

export function scrollToLandingSection(hash: string) {
  const id = hash.replace(/^#/, "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
