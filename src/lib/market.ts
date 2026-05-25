export type ShowcaseMarket = {
  id: string;
  slug: string;
  title: string;
  category: string;
  volumeUsd: number;
  liquidityUsd: number;
  probability: number;
  closesAt: string;
  status: string;
};

export type NarrativeMarketMetric = {
  label: string;
  value: string;
  signal: "fire" | "bolt";
  trend: "up" | "down" | "flat";
  trendNote?: string;
};

export type NarrativeMarketShowcase = {
  id: string;
  slug: string;
  title: string;
  category: string;
  flow: string;
  phase: string;
  metrics: readonly NarrativeMarketMetric[];
};
