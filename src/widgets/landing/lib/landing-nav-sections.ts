/** Anchor nav — every major band on the marketing landing page. */
export const LANDING_NAV_SECTIONS = [
  { label: "Overview", href: "#markets" },
  { label: "Narrative Wars", href: "#narrative-wars" },
  { label: "Market", href: "#live-markets" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Orakly", href: "#why" },
  { label: "Roadmap", href: "#roadmap" },
] as const;

export function scrollToLandingSection(hash: string) {
  const id = hash.replace(/^#/, "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
