/**
 * Orakly landing copy — rich sections without repeating the same idea three ways.
 */

export const narrativeWarsIntro = {
  headline: "Markets move on narratives before they move on price.",
  body: "Orakly turns live crypto attention into tradable battles between the narratives shaping the market.",
  closer: "Trade narratives before the market fully reacts.",
} as const;

export const narrativeWarsBattles = [
  {
    id: "btc-eth",
    left: "BTC",
    right: "ETH",
    question: "Which ecosystem is leading this cycle?",
    leftAccent: "from-amber-400/25 via-amber-500/10 to-transparent",
    rightAccent: "from-sky-400/25 via-sky-500/10 to-transparent",
    ring: "ring-amber-400/20",
  },
  {
    id: "ai-memes",
    left: "AI Agents",
    right: "Memecoins",
    question: "Where is attention flowing next?",
    leftAccent: "from-violet-400/25 via-violet-500/10 to-transparent",
    rightAccent: "from-fuchsia-400/20 via-rose-500/10 to-transparent",
    ring: "ring-violet-400/20",
  },
  {
    id: "sol-eth",
    left: "Solana",
    right: "Ethereum",
    question: "Which community is gaining momentum?",
    leftAccent: "from-cyan-400/25 via-teal-500/10 to-transparent",
    rightAccent: "from-indigo-400/22 via-violet-500/10 to-transparent",
    ring: "ring-cyan-400/20",
  },
] as const;

export const narrativeMarketShowcases = [
  {
    id: "btc-dominance-narrative",
    slug: "btc-dominance-narrative",
    title: "BTC Dominance Narrative",
    category: "Dominance",
    flow: "Capital rotating into BTC. Phase: Risk-off accumulation cycle.",
    phase: "Risk-off accumulation cycle",
    metrics: [
      { label: "BTC narrative strength", value: "72", signal: "fire", trend: "up" },
      { label: "ETH narrative strength", value: "61", signal: "bolt", trend: "down" },
    ],
  },
  {
    id: "ai-agent-supercycle",
    slug: "ai-agent-supercycle",
    title: "AI Agent Supercycle Narrative",
    category: "Supercycle",
    flow: "Attention shifting toward AI agents. Phase: Early supercycle expansion.",
    phase: "Early supercycle expansion",
    metrics: [
      { label: "AI narrative strength", value: "81", signal: "fire", trend: "up" },
      { label: "Memecoin narrative strength", value: "66", signal: "bolt", trend: "down" },
    ],
  },
  {
    id: "memecoin-attention-cycle",
    slug: "memecoin-attention-cycle",
    title: "Memecoin Attention Cycle",
    category: "Memes",
    flow: "Retail attention re-entering meme cycle. New meme entries rising. Phase: Early expansion phase.",
    phase: "Early expansion phase",
    metrics: [
      { label: "PEPE viral pressure", value: "88", signal: "fire", trend: "up" },
      { label: "DOGE stability", value: "64", signal: "bolt", trend: "flat" },
    ],
  },
  {
    id: "ethereum-utility-narrative",
    slug: "ethereum-utility-narrative",
    title: "Ethereum Utility Narrative",
    category: "Infrastructure",
    flow: "Transitioning into infrastructure narrative. Developer activity steady. Phase: Consolidation to maturity shift.",
    phase: "Consolidation to maturity shift",
    metrics: [
      { label: "ETH narrative strength", value: "64", signal: "bolt", trend: "flat" },
      { label: "ETF narrative influence", value: "76", signal: "fire", trend: "up" },
    ],
  },
  {
    id: "solana-execution-narrative",
    slug: "solana-execution-narrative",
    title: "Solana Execution Narrative",
    category: "Execution",
    flow: "Consumer and app-layer rotation into Solana. App engagement strong. Phase: Growth acceleration cycle.",
    phase: "Growth acceleration cycle",
    metrics: [
      { label: "SOL narrative strength", value: "77", signal: "fire", trend: "up" },
      { label: "Retail activity", value: "74", signal: "fire", trend: "up" },
    ],
  },
  {
    id: "rwa-institutional-narrative",
    slug: "rwa-institutional-narrative",
    title: "RWA Institutional Narrative",
    category: "Institutional",
    flow: "Capital entering real-world asset narrative. Liquidity inflow slow but steady. Phase: Early institutional adoption phase.",
    phase: "Early institutional adoption phase",
    metrics: [
      { label: "RWA narrative strength", value: "69", signal: "bolt", trend: "up" },
      { label: "Institutional flow", value: "71", signal: "fire", trend: "up" },
    ],
  },
] as const;

export const narrativeWarsTrack = [
  { id: "attention", label: "Attention shifts" },
  { id: "momentum", label: "Narrative momentum" },
  { id: "conviction", label: "Community conviction" },
  { id: "sentiment", label: "Market sentiment changes" },
] as const;

export const whyOraklyCells = [
  {
    title: "Live odds, on-chain",
    body: "Live odds update with order flow and settle on-chain. No batch marks.",
  },
  {
    title: "Rules before size",
    body: "Resolution criteria and collateral are visible on every market before you commit capital.",
  },
  {
    title: "Built with the crowd",
    body: "Markets the community proposes, ranks, and earns from. Reputation is on-chain.",
  },
] as const;

export const whyOraklyFeatures = [
  {
    title: "Crypto-native questions",
    detail: "Markets track themes traders already debate on-chain and in feeds.",
  },
  {
    title: "Fast-moving cycles",
    detail: "Short horizons map to contracts built for rotations, not year-long holds.",
  },
  {
    title: "Sentiment in the tape",
    detail: "Odds update as participants trade, not after a manual refresh.",
  },
  {
    title: "Probability discovery",
    detail: "Prices read as live implied probability while markets are open.",
  },
  {
    title: "Transparent participation",
    detail: "Collateral, resolution, and payout logic stay inspectable.",
  },
] as const;

export const whyOraklyBridgeColumns = [
  {
    title: "What traders get",
    lines: [
      "Readable implied probability before each click.",
      "Direct entry and exit while the market is live.",
      "Rules and settlement surfaced up front.",
    ],
  },
  {
    title: "What the platform optimizes for",
    lines: [
      "Context per market: why it exists, what resolves it.",
      "Stablecoin flow for crypto-native participants.",
      "Infrastructure aimed at verifiable outcomes.",
    ],
  },
] as const;

export const tradeBandMetrics = [
  {
    label: "Probability visibility",
    headline: "Read the tape fast",
    fact: "Live prices summarize crowd conviction at a glance.",
  },
  {
    label: "Execution path",
    headline: "Fewer steps to risk-on",
    fact: "Discovery → quote → trade stays linear in-app.",
  },
  {
    label: "Settlement trust",
    headline: "Verify, do not guess",
    fact: "Resolutions tie to rules you can audit.",
  },
] as const;

export const oraklyFramework = [
  {
    k: "Market context first",
    d: "Framing and pricing appear before you commit size.",
  },
  {
    k: "Execution clarity",
    d: "Short trade flow on purpose, with less hesitation at entry.",
  },
  {
    k: "Transparent resolution",
    d: "Outcomes follow published criteria with on-chain finality.",
  },
] as const;

export const howSteps = [
  {
    n: 1,
    title: "Discover",
    body: "Browse markets across crypto, macro, sports, tech, and more.",
    tag: "Browse",
  },
  {
    n: 2,
    title: "Trade",
    body: "Take a side with stablecoin collateral. Reposition or exit while the market is open.",
    tag: "Sides",
  },
  {
    n: 3,
    title: "Settle",
    body: "Winning positions redeem on-chain through published resolution rules.",
    tag: "Finality",
  },
] as const;

export const trustPillars = [
  {
    title: "On-chain settlement",
    body: "Payouts execute through public contracts. Every settlement is traceable.",
  },
  {
    title: "Transparent resolution",
    body: "Criteria are defined up front. No opaque operator can flip an outcome.",
  },
  {
    title: "Stablecoin collateral",
    body: "Sizes, fees, and payouts denominated in familiar stable units.",
  },
  {
    title: "Open market state",
    body: "Fees, funding, status, and depth are inspectable before you trade.",
  },
] as const;

export type RoadmapPhaseStatus = "Shipping" | "Next" | "Planned" | "Vision";

export type RoadmapPhase = {
  id: string;
  phase: string;
  name: string;
  subtitle?: string;
  status: RoadmapPhaseStatus;
  goal?: string;
  features?: readonly string[];
  build?: readonly string[];
  kpi?: string;
};

export const roadmapPhases: readonly RoadmapPhase[] = [
  {
    id: "mvp",
    phase: "Phase 1",
    name: "MVP",
    status: "Shipping",
    goal: "Validate narrative trading.",
    features: [
      "Narrative Wars",
      "Prediction markets",
      "Attention indicators",
    ],
    kpi: "Users repeatedly participate in battles.",
  },
  {
    id: "intelligence",
    phase: "Phase 2",
    name: "Intelligence Layer",
    subtitle: "After traction",
    status: "Next",
    build: [
      "Attention Heatmap",
      "Trending sectors",
      "Narrative flow",
      "Narrative Velocity & momentum scoring",
      "Better analytics, battle insights, and attention charts",
      "Mobile optimization",
    ],
  },
  {
    id: "conviction",
    phase: "Phase 3",
    name: "Conviction Layer",
    status: "Planned",
    build: [
      "Conviction Profiles",
      "Belief tracking",
      "Prediction accuracy",
      "Wallet behavior",
      "Reputation system",
      "Early trend spotters",
      "Leaderboard",
      "Community identity",
    ],
  },
  {
    id: "ai",
    phase: "Phase 4",
    name: "AI Narrative Infrastructure",
    status: "Planned",
    build: [
      "AI Narrative Detection: emerging trends, ecosystem rotations, viral narratives",
      "Auto-generated Narrative Wars",
      "AI summaries",
      "“What changed in this battle?”",
    ],
  },
  {
    id: "platform",
    phase: "Phase 5",
    name: "Platform Expansion",
    status: "Vision",
    build: [
      "API access & narrative data APIs",
      "Embedded widgets for media & trading platforms",
      "Institutional dashboards",
      "AI-agent integrations",
      "Narrative indexes",
    ],
  },
] as const;

/** @deprecated Use `roadmapPhases`. */
export const roadmapQuarters = roadmapPhases.map((p) => ({
  quarter: p.phase,
  status: p.status,
  items: (p.features ?? p.build ?? []).map((line) => ({
    title: line,
    note: p.goal ?? p.kpi ?? p.subtitle ?? "",
  })),
}));

export const faqItems = [
  {
    q: "What is a YES/NO prediction market?",
    a: "A binary contract on a real-world question. YES shares pay out 1 unit if the event resolves true. NO shares pay out 1 unit if it resolves false. The live price reads as the market's implied probability.",
  },
  {
    q: "How does settlement work?",
    a: "Markets settle on-chain with collateral and payouts denominated in stablecoins where applicable, so sizing stays predictable. Supported networks are listed in the app as they go live.",
  },
  {
    q: "How are markets resolved?",
    a: "Every market ships with explicit, published resolution criteria. Outcomes execute through public contracts so payouts stay traceable on-chain.",
  },
  {
    q: "What does it cost to trade?",
    a: "Fee and funding schedules are visible on each market before you size. There is no hidden spread layer above the on-chain quote.",
  },
  {
    q: "Is Orakly available everywhere?",
    a: "Availability varies by jurisdiction and product phase. The app will note any regional restrictions before you sign up or trade.",
  },
  {
    q: "How does the email list work?",
    a: "Leave your email below to receive product and roadmap updates. We use the address only for that purpose. No spam, no resale.",
  },
] as const;

/** @deprecated — kept for imports that still reference vision copy. */
export const visionPoints = whyOraklyCells.map((c) => ({ title: c.title, body: c.body }));
export const visionSpecStrip = [
  { k: "Trade format", v: "Binary shares" },
  { k: "Pricing", v: "Continuous, flow-driven" },
  { k: "Settlement", v: "On-chain, verifiable" },
] as const;
export const communityFeatures = [
  { verb: "Create markets", detail: "Propose contracts the community wants to trade." },
  { verb: "Build reputation", detail: "Accuracy and participation feed public performance signals." },
  { verb: "Compete on leaderboards", detail: "Benchmark conviction against other traders." },
  { verb: "Earn on resolution", detail: "Winning positions settle in stablecoin terms." },
] as const;
export const securityItems = trustPillars.map((p) => ({ title: p.title, body: p.body }));
export const futureRoadmap = roadmapPhases.flatMap((p) =>
  (p.features ?? p.build ?? []).map((line) => ({
    title: line,
    body: p.goal ?? p.kpi ?? p.subtitle ?? "",
    phase: (p.status === "Next" ? "Next" : "Later") as "Next" | "Later",
  })),
);
export const earlyAccessBullets = [
  { title: "Product updates", body: "Roadmap and release notes in your inbox." },
  { title: "No noise", body: "We only message when there is something worth your time." },
] as const;
