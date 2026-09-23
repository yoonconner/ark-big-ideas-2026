import { ChartData } from "@/lib/types";

const NAV = [
  { href: "#opportunities", label: "2030 sizes" },
  { href: "#themes", label: "Themes" },
  { href: "#bitcoin", label: "Bitcoin" },
  { href: "#arkk", label: "ARKK" },
  { href: "#productivity", label: "Productivity" },
];

export function Hero({ data }: { data: ChartData }) {
  return (
    <header className="relative overflow-hidden border-b border-fuchsia-400/15">
      <div className="ark-glow pointer-events-none absolute inset-0" />
      <div className="ark-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-16">
        <nav className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] font-medium tracking-[0.22em] text-fuchsia-300/80 uppercase">
            ARK Invest · Research explainer
          </p>
          <ul className="flex flex-wrap gap-2 text-xs text-violet-200/80">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full border border-fuchsia-400/15 bg-white/3 px-3 py-1.5 transition-colors hover:border-fuchsia-300/40 hover:text-fuchsia-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-w-3xl space-y-5">
          <p className="text-sm text-violet-200/70">As of {data.asOf}</p>
          <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            ARK Big Ideas 2026
            <span className="mt-2 block bg-gradient-to-r from-fuchsia-300 via-violet-200 to-cyan-200 bg-clip-text text-transparent">
              Own What’s Next
            </span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-violet-100/75 sm:text-lg">
            {data.macro.notes}. Five platforms — {data.macro.platforms.join(", ")} —
            frame the 2030 opportunity map below.
          </p>
          <p className="max-w-2xl rounded-xl border border-amber-300/20 bg-amber-300/5 px-4 py-3 text-sm leading-relaxed text-amber-100/80">
            {data.source}. Figures are ARK research estimates, not forecasts you
            should trade on, and nothing here is investment advice.
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {data.macro.platforms.map((platform) => (
            <li
              key={platform}
              className="rounded-full border border-fuchsia-300/20 bg-fuchsia-400/8 px-3 py-1 text-xs font-medium text-fuchsia-100"
            >
              {platform}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
