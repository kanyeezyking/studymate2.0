import { useMemo, useState } from "react";

export function HalfLifeTool() {
  const [initial, setInitial] = useState("100");
  const [half, setHalf] = useState("5730");
  const [time, setTime] = useState("17190");
  const [unit, setUnit] = useState("years");

  const n = useMemo(() => {
    const h = Number(half);
    const t = Number(time);
    if (!h || h <= 0) return 0;
    return t / h;
  }, [half, time]);

  const remaining = useMemo(() => {
    const start = Number(initial);
    if (!Number.isFinite(start)) return 0;
    return start * Math.pow(0.5, n);
  }, [initial, n]);

  const fraction = useMemo(() => Math.pow(0.5, n), [n]);

  return (
    <section className="mt-8">
      <h4 className="text-lg font-bold">Half-life calculator</h4>
      <p className="text-sm text-muted">
        remaining = initial × (1/2)<sup>n</sup> where n is the number of half-lives.
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="text-xs text-muted">
          Starting amount
          <input
            className="mt-1 h-10 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 text-sm text-foreground"
            value={initial}
            onChange={(e) => setInitial(e.target.value)}
          />
        </label>
        <label className="text-xs text-muted">
          Half-life
          <input
            className="mt-1 h-10 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 text-sm text-foreground"
            value={half}
            onChange={(e) => setHalf(e.target.value)}
          />
        </label>
        <label className="text-xs text-muted">
          Elapsed time
          <input
            className="mt-1 h-10 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 text-sm text-foreground"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <label className="text-xs text-muted">
          Unit (label only)
          <input
            className="mt-1 h-10 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 text-sm text-foreground"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
        </label>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <Stat label="Half-lives (n)" value={n.toFixed(2)} />
        <Stat label="Fraction left" value={fraction.toPrecision(3)} />
        <Stat label={`Amount left`} value={`${remaining.toPrecision(4)} (${unit})`} />
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-border bg-surface px-3 py-3">
      <p className="text-xs text-muted">{label}</p>
      <p className="font-mono text-lg font-bold text-primary">{value}</p>
    </div>
  );
}
