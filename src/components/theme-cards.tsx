import { THEME_ACCENT } from "@/lib/theme-map";
import { ChartData } from "@/lib/types";

export function ThemeCards({ data }: { data: ChartData }) {
  return (
    <section id="themes" className="scroll-mt-8">
      <div className="mb-6">
        <p className="text-[11px] font-medium tracking-[0.2em] text-fuchsia-300/75 uppercase">
          Eleven Big Ideas
        </p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
          Theme cards
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-violet-200/65">
          Open a card for ARK’s one-liner and the linked tickers from the
          research pack.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.themeCards.map((card) => {
          const accent = THEME_ACCENT[card.id] ?? "#e879f9";
          return (
            <details
              key={card.id}
              id={`theme-${card.id}`}
              className="group scroll-mt-24 rounded-2xl border border-fuchsia-400/12 bg-[#0c1020]/80 open:border-fuchsia-300/40 open:bg-[#17102c]"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 p-4 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-2">
                  <span
                    className="size-2.5 rounded-full"
                    style={{ background: accent }}
                    aria-hidden
                  />
                  <span className="text-[15px] font-semibold text-fuchsia-50">
                    {card.title}
                  </span>
                </span>
                <span className="text-fuchsia-200/70 transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-sm leading-relaxed text-violet-100/80">
                  {card.oneLiner}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {card.tickers.map((ticker) => (
                    <span
                      key={ticker}
                      className="rounded-md border border-fuchsia-300/20 bg-fuchsia-400/10 px-2 py-0.5 font-mono text-[11px] text-fuchsia-100"
                    >
                      {ticker}
                    </span>
                  ))}
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
