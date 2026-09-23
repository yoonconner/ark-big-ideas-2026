type Slice = {
  name: string;
  value: number;
  color: string;
  note?: string;
};

export function Donut({
  slices,
  centerLabel,
  centerValue,
}: {
  slices: Slice[];
  centerLabel: string;
  centerValue: string;
}) {
  const total = slices.reduce((sum, slice) => sum + slice.value, 0);
  const cx = 120;
  const cy = 120;
  const radius = 74;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="relative mx-auto h-64 w-64">
      <svg viewBox="0 0 240 240" className="h-full w-full" role="img" aria-label={centerLabel}>
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="rgba(192,132,252,0.12)"
          strokeWidth="22"
        />
        {slices.map((slice) => {
          const length = total === 0 ? 0 : (slice.value / total) * circumference;
          const dashOffset = -offset;
          offset += length;
          return (
            <circle
              key={slice.name}
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke={slice.color}
              strokeWidth="22"
              strokeDasharray={`${length} ${circumference - length}`}
              strokeDashoffset={dashOffset}
              transform={`rotate(-90 ${cx} ${cy})`}
            >
              <title>
                {slice.name}: {slice.note ?? ""}
              </title>
            </circle>
          );
        })}
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-[11px] tracking-wide text-violet-200/70 uppercase">
          {centerLabel}
        </p>
        <p className="text-2xl font-semibold text-fuchsia-50">{centerValue}</p>
      </div>
    </div>
  );
}
