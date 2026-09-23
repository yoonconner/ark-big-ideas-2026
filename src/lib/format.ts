/** Compact USD for ARK-scale figures: $34T / $1.4T / $480B. */
export function formatCompactUSD(value: number): string {
  const trillions = value / 1e12;
  if (Math.abs(trillions) >= 0.9) {
    const rounded = Math.round(trillions * 10) / 10;
    if (Number.isInteger(rounded)) return `$${rounded}T`;
    return `$${rounded.toFixed(1)}T`;
  }
  const billions = value / 1e9;
  return `$${Math.round(billions)}B`;
}

export function formatPercent(value: number, digits = 0): string {
  return `${(value * 100).toFixed(digits)}%`;
}

export function formatWeight(value: number): string {
  return `${value.toFixed(2)}%`;
}
