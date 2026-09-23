/** Opportunity bar id → theme card id (from report linkage, not invented TAMs). */
export const OPPORTUNITY_TO_THEME: Record<string, string> = {
  "robotaxi-ev": "av",
  "digital-assets": "bitcoin",
  automation: "robotics",
  tokenized: "tokenized",
  "ai-agents-commerce": "ai-consumer-os",
  "power-capex": "energy",
  "ai-infra": "ai-infra",
  "ai-agent-software": "ai-consumer-os",
  "autonomous-delivery": "logistics",
  "satellite-connectivity": "rockets",
};

export const THEME_TO_OPPORTUNITY: Record<string, string> = {
  av: "robotaxi-ev",
  bitcoin: "digital-assets",
  robotics: "automation",
  tokenized: "tokenized",
  "ai-consumer-os": "ai-agents-commerce",
  energy: "power-capex",
  "ai-infra": "ai-infra",
  logistics: "autonomous-delivery",
  rockets: "satellite-connectivity",
};

export const SHORT_OPPORTUNITY_LABEL: Record<string, string> = {
  "robotaxi-ev": "Robotaxis",
  "digital-assets": "Digital assets",
  automation: "Automation",
  tokenized: "Tokenized RWAs",
  "ai-agents-commerce": "AI-agent commerce",
  "power-capex": "Power capex",
  "ai-infra": "AI infrastructure",
  "ai-agent-software": "AI agent software",
  "autonomous-delivery": "Autonomous delivery",
  "satellite-connectivity": "Satellite connectivity",
};

export const BAR_COLORS = [
  "#f0abfc",
  "#e879f9",
  "#d946ef",
  "#c026d3",
  "#a855f7",
  "#8b5cf6",
  "#7c3aed",
  "#6366f1",
  "#818cf8",
  "#a78bfa",
];

export const THEME_ACCENT: Record<string, string> = {
  "ai-infra": "#818cf8",
  "ai-consumer-os": "#e879f9",
  "ai-productivity": "#c084fc",
  bitcoin: "#fbbf24",
  tokenized: "#22d3ee",
  multiomics: "#34d399",
  rockets: "#fb7185",
  robotics: "#a78bfa",
  energy: "#f59e0b",
  av: "#f0abfc",
  logistics: "#67e8f9",
};
