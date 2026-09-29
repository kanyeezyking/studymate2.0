import type { ReactNode } from "react";
import { useMemo, useState } from "react";

export function EnergyTools({ mode = "all" }: { mode?: "all" | "efficiency" }) {
  const [mass, setMass] = useState("5");
  const [height, setHeight] = useState("2");
  const [g, setG] = useState("10");
  const [speed, setSpeed] = useState("4");
  const [force, setForce] = useState("1000");
  const [dist, setDist] = useState("50");
  const [useful, setUseful] = useState("10");
  const [input, setInput] = useState("100");

  const gpe = useMemo(() => n(mass) * n(g) * n(height), [mass, g, height]);
  const ke = useMemo(() => 0.5 * n(mass) * n(speed) ** 2, [mass, speed]);
  const work = useMemo(() => n(force) * n(dist), [force, dist]);
  const eff = useMemo(() => (n(input) === 0 ? 0 : (n(useful) / n(input)) * 100), [useful, input]);
  const waste = useMemo(() => n(input) - n(useful), [input, useful]);

  return (
    <section className="mt-8">
      <h4 className="text-lg font-bold">{mode === "efficiency" ? "Efficiency calculator" : "Formula calculator"}</h4>
      <p className="text-sm text-muted">Numbers match the class worksheets. Use g = 10 unless a question says 9.81.</p>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {(mode === "all" || mode === "efficiency") && (
          <Card title="Efficiency">
            <Field label="Useful energy (J)" value={useful} onChange={setUseful} />
            <Field label="Input energy (J)" value={input} onChange={setInput} />
            <Result label="Efficiency" value={`${eff.toFixed(1)}%`} />
            <Result label="Wasted" value={`${waste} J`} />
          </Card>
        )}
        {mode === "all" && (
          <>
            <Card title="GPE = mgh">
              <Field label="Mass (kg)" value={mass} onChange={setMass} />
              <Field label="g (N/kg)" value={g} onChange={setG} />
              <Field label="Height (m)" value={height} onChange={setHeight} />
              <Result label="Ep" value={`${gpe.toFixed(2)} J`} />
            </Card>
            <Card title="KE = ½mv²">
              <Field label="Mass (kg)" value={mass} onChange={setMass} />
              <Field label="Speed (m/s)" value={speed} onChange={setSpeed} />
              <Result label="Ek" value={`${ke.toFixed(2)} J`} />
            </Card>
            <Card title="Work = F × s">
              <Field label="Force (N)" value={force} onChange={setForce} />
              <Field label="Distance (m)" value={dist} onChange={setDist} />
              <Result label="W" value={`${work.toFixed(2)} J`} />
            </Card>
          </>
        )}
      </div>
    </section>
  );
}

function n(v: string) {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-surface p-4">
      <p className="mb-3 font-bold">{title}</p>
      {children}
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="mb-2 block text-xs text-muted">
      {label}
      <input
        className="mt-1 h-10 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 text-sm text-foreground"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputMode="decimal"
      />
    </label>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <p className="mt-2 text-sm">
      <span className="text-muted">{label}: </span>
      <span className="font-mono font-bold text-primary">{value}</span>
    </p>
  );
}
