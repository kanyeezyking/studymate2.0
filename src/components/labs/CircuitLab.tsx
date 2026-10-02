import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const R = 6;

export function CircuitLab() {
  const [mode, setMode] = useState<"series" | "parallel">("series");
  const [bulbs, setBulbs] = useState(2);
  const [volts, setVolts] = useState(12);
  const n = bulbs;

  const result = useMemo(() => {
    if (mode === "series") {
      const totalR = n * R;
      const I = volts / totalR;
      return {
        I: I,
        Ibranch: Array.from({ length: n }, () => I),
        Vbulb: Array.from({ length: n }, () => I * R),
        totalR,
      };
    }
    const Ibranch = volts / R;
    return {
      I: Ibranch * n,
      Ibranch: Array.from({ length: n }, () => Ibranch),
      Vbulb: Array.from({ length: n }, () => volts),
      totalR: R / n,
    };
  }, [mode, n, volts]);

  return (
    <section>
      <p className="text-sm text-muted">
        Each lamp is modelled as 6 Ω. Watch how current and voltage split when you change the layout.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {(["series", "parallel"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={cn(
              "h-10 rounded-full border px-4 text-xs font-semibold capitalize",
              mode === m
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-bg text-muted",
            )}
          >
            {m}
          </button>
        ))}
      </div>
      <label className="mt-4 block text-xs font-semibold text-muted">
        Battery {volts} V
        <input
          type="range"
          min={3}
          max={24}
          value={volts}
          onChange={(e) => setVolts(Number(e.target.value))}
          className="mt-2 w-full accent-primary"
        />
      </label>
      <label className="mt-3 block text-xs font-semibold text-muted">
        Lamps {n}
        <input
          type="range"
          min={1}
          max={4}
          value={n}
          onChange={(e) => setBulbs(Number(e.target.value))}
          className="mt-2 w-full accent-primary"
        />
      </label>

      <svg viewBox="0 0 420 220" className="mt-4 w-full rounded-[var(--radius-md)] border border-border bg-bg">
        <rect x="28" y="88" width="22" height="44" className="fill-surface-hover stroke-primary" />
        <text x="39" y="80" textAnchor="middle" className="fill-muted" fontSize="10">
          {volts} V
        </text>
        {mode === "series" ? <SeriesSvg n={n} glow={result.I} /> : <ParallelSvg n={n} glow={result.Ibranch[0] ?? 0} />}
      </svg>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <Fact label="Supply current" value={`${result.I.toFixed(2)} A`} />
        <Fact label="Voltage on each lamp" value={`${result.Vbulb[0]?.toFixed(2)} V`} />
        <Fact label="Total resistance" value={`${result.totalR.toFixed(2)} Ω`} />
      </div>
      <p className="mt-3 text-sm text-muted">
        {mode === "series"
          ? "Series: one path, so current is the same everywhere and the battery voltage is shared."
          : "Parallel: each branch gets the full battery voltage. Current splits, then adds back at the supply."}
      </p>
    </section>
  );
}

function SeriesSvg({ n, glow }: { n: number; glow: number }) {
  const start = 70;
  const end = 380;
  const gap = (end - start) / (n + 1);
  const opacity = Math.min(1, glow / 1.2);
  return (
    <g>
      <path d="M50 110 H380 V150 H50 Z" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" />
      {Array.from({ length: n }).map((_, i) => {
        const x = start + gap * (i + 1);
        return <Lamp key={i} x={x} y={110} on={opacity} label={`L${i + 1}`} />;
      })}
    </g>
  );
}

function ParallelSvg({ n, glow }: { n: number; glow: number }) {
  const top = 56;
  const bot = 164;
  const span = bot - top;
  const opacity = Math.min(1, glow / 2);
  return (
    <g>
      <path d="M50 110 H90" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" />
      <path d="M370 110 H390 V150 H50 V110" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" />
      <line x1="90" y1={top} x2="90" y2={bot} stroke="var(--color-primary)" strokeWidth="2.5" />
      <line x1="370" y1={top} x2="370" y2={bot} stroke="var(--color-primary)" strokeWidth="2.5" />
      {Array.from({ length: n }).map((_, i) => {
        const y = n === 1 ? 110 : top + (span * i) / (n - 1);
        return (
          <g key={i}>
            <line x1="90" y1={y} x2="370" y2={y} stroke="var(--color-primary)" strokeWidth="2.5" />
            <Lamp x={230} y={y} on={opacity} label={`L${i + 1}`} />
          </g>
        );
      })}
    </g>
  );
}

function Lamp({ x, y, on, label }: { x: number; y: number; on: number; label: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="12" fill={`color-mix(in oklab, var(--color-warning) ${Math.round(on * 80)}%, var(--color-surface))`} stroke="var(--color-warning)" strokeWidth="2" />
      <text x={x} y={y + 28} textAnchor="middle" className="fill-muted" fontSize="10">
        {label}
      </text>
    </g>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-3">
      <p className="text-[11px] uppercase tracking-wide text-muted">{label}</p>
      <p className="font-mono text-lg font-bold tabular-nums text-primary">{value}</p>
    </div>
  );
}
