import { formatCompactUSD } from "@/lib/format";

export type BarItem = {
  id: string;
  label: string;
  value: number;
  href?: string;
  active?: boolean;
  color: string;
  tooltip?: string[];
};

export function HorizontalBars({
  items,
  formatValue = formatCompactUSD,
  ariaLabel,
}: {
  items: BarItem[];
  formatValue?: (value: number) => string;
  ariaLabel: string;
}) {
  const max = Math.max(...items.map((item) => item.value), 1);

  return (
    <ul className="space-y-2.5" aria-label={ariaLabel}>
      {items.map((item) => {
        const widthPct = Math.max(4, (item.value / max) * 100);
        const inner = (
          <>
            <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
              <span className="min-w-0 truncate font-medium text-fuchsia-50">
                {item.label}
              </span>
              <span className="shrink-0 font-mono text-xs text-fuchsia-100">
                {formatValue(item.value)}
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full transition-[width] duration-500"
                style={{ width: `${widthPct}%`, background: item.color }}
              />
            </div>
            {item.tooltip?.length ? (
              <p className="pointer-events-none absolute bottom-full left-0 z-20 mb-2 hidden max-w-xs rounded-lg border border-fuchsia-400/25 bg-[#101628] px-3 py-2 text-xs text-violet-100 shadow-xl group-hover:block">
                {item.tooltip.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            ) : null}
          </>
        );

        const className = [
          "group relative block w-full rounded-xl px-1 py-1.5 text-left transition-colors",
          item.active ? "bg-fuchsia-400/10" : "hover:bg-white/3",
        ].join(" ");

        return (
          <li key={item.id}>
            {item.href ? (
              <a href={item.href} className={className}>
                {inner}
              </a>
            ) : (
              <div className={className}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
