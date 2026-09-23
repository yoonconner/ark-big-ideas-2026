export type OpportunityBar = {
  id: string;
  theme: string;
  metric: string;
  valueUSD: number;
  pageHint?: number;
  detail?: string;
};

export type ThemeCard = {
  id: string;
  title: string;
  oneLiner: string;
  tickers: string[];
};

export type PenetrationScenario = {
  name: string;
  digitalGold: number;
  impactUSD: number;
};

export type Bitcoin2030 = {
  digitalAssetsTotalUSD: number;
  bitcoinShare: number;
  bitcoinMarketCapUSD: number;
  smartContractsUSD: number;
  digitalGoldTAMUSD: number;
  penetrationScenarios: PenetrationScenario[];
};

export type ArkkHolding = {
  symbol: string;
  name: string;
  weightPct: number;
  mapsTo: string[];
};

export type ProductivityScenario = {
  label: string;
  workerProductivityGainUSD: number;
  globalImpactHint?: string;
};

export type BroaderOpportunity = {
  label: string;
  value: number;
};

export type ChartData = {
  source: string;
  pdf: string;
  asOf: string;
  macro: {
    title: string;
    notes: string;
    platforms: string[];
    productivityScenariosUSD: ProductivityScenario[];
    broaderOpportunityUSD: BroaderOpportunity[];
  };
  opportunityBars2030USD: OpportunityBar[];
  bitcoin2030: Bitcoin2030;
  arkkHoldingsSep22_2026: {
    note: string;
    top: ArkkHolding[];
  };
  themeCards: ThemeCard[];
};
