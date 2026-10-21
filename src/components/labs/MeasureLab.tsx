import { useState } from "react";
import { cn } from "@/lib/utils";

type Mode = "area" | "solid" | "accuracy";
type Solid = "cube" | "cylinder" | "cone" | "sphere" | "pyramid";

const MODES: { id: Mode; label: string }[] = [
  { id: "area", label: "Composite area" },
  { id: "solid", label: "Solids" },
  { id: "accuracy", label: "Accuracy" },
];

function n(v: string) {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
}

function round(v: number, d = 2) {
  if (!Number.isFinite(v)) return "—";
  return (Math.round(v * 10 ** d) / 10 ** d).toFixed(d);
}

export function MeasureLab() {
  const [mode, setMode] = useState<Mode>("area");
  const [length, setLength] = useState("15");
  const [width, setWidth] = useState("10");
  const [radius, setRadius] = useState("5");
  const [solid, setSolid] = useState<Solid>("cylinder");
  const [a, setA] = useState("5");
  const [b, setB] = useState("10");
  const [c, setC] = useState("0");
  const [actual, setActual] = useState("200");
  const [measured, setMeasured] = useState("220");
  const [nearest, setNearest] = useState("14");
  const [unit, setUnit] = useState("1");

  const L = Math.max(0, n(length));
  const W = Math.max(0, n(width));
  const R = Math.max(0, n(radius));
  const area = L * W + 0.5 * Math.PI * R * R;

  return (
    <section>
      <p className="text-sm text-muted">
        The formulas stay fixed. Change the lengths and read the number for this shape. Round once, at the end.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {MODES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setMode(item.id)}
            className={cn(
              "h-10 rounded-full border px-4 text-xs font-bold",
              mode === item.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-bg text-muted",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {mode === "area" && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_240px]">
          <svg viewBox="0 0 320 180" className="w-full rounded-[var(--radius-md)] border border-border bg-bg" role="img" aria-label="Rectangle with a semicircle on the short end">
            <rect x="30" y="40" width="180" height="100" fill="color-mix(in oklab, var(--color-primary) 25%, transparent)" stroke="var(--color-primary)" />
            <path d="M210 40 A50 50 0 0 1 210 140" fill="color-mix(in oklab, var(--color-secondary) 25%, transparent)" stroke="var(--color-secondary)" />
            <text x="110" y="96" textAnchor="middle" className="fill-foreground" fontSize="13">
              {L} × {W}
            </text>
            <text x="250" y="96" textAnchor="middle" className="fill-foreground" fontSize="12">
              r {R}
            </text>
          </svg>
          <div className="grid content-start gap-3">
            <Field label="Length" value={length} onChange={setLength} />
            <Field label="Width" value={width} onChange={setWidth} />
            <Field label="Semicircle radius" value={radius} onChange={setRadius} />
            <Formula name="Area" formula="A = lw + ½πr²" value={`${round(area)} square units`} />
          </div>
        </div>
      )}

      {mode === "solid" && <Solids solid={solid} setSolid={setSolid} a={a} setA={setA} b={b} setB={setB} c={c} setC={setC} />}

      {mode === "accuracy" && (
        <Accuracy
          actual={actual}
          measured={measured}
          nearest={nearest}
          unit={unit}
          setActual={setActual}
          setMeasured={setMeasured}
          setNearest={setNearest}
          setUnit={setUnit}
        />
      )}
    </section>
  );
}

function Solids({
  solid,
  setSolid,
  a,
  setA,
  b,
  setB,
  c,
  setC,
}: {
  solid: Solid;
  setSolid: (s: Solid) => void;
  a: string;
  setA: (v: string) => void;
  b: string;
  setB: (v: string) => void;
  c: string;
  setC: (v: string) => void;
}) {
  const side = Math.max(0, n(a));
  const r = Math.max(0, n(a));
  const h = Math.max(0, n(b));
  const slantIn = Math.max(0, n(c));
  const slant = solid === "cone" ? (slantIn > 0 ? slantIn : Math.sqrt(r * r + h * h)) : 0;
  let sa = 0;
  let vol = 0;
  let saFormula = "";
  let volFormula = "";
  if (solid === "cube") {
    sa = 6 * side * side;
    vol = side ** 3;
    saFormula = "SA = 6a²";
    volFormula = "V = a³";
  } else if (solid === "cylinder") {
    sa = 2 * Math.PI * r * r + 2 * Math.PI * r * h;
    vol = Math.PI * r * r * h;
    saFormula = "SA = 2πr² + 2πrh";
    volFormula = "V = πr²h";
  } else if (solid === "cone") {
    sa = Math.PI * r * r + Math.PI * r * slant;
    vol = (1 / 3) * Math.PI * r * r * h;
    saFormula = "SA = πr² + πrl";
    volFormula = "V = ⅓πr²h";
  } else if (solid === "sphere") {
    sa = 4 * Math.PI * r * r;
    vol = (4 / 3) * Math.PI * r ** 3;
    saFormula = "SA = 4πr²";
    volFormula = "V = ⁴⁄₃πr³";
  } else {
    const face = Math.sqrt(h * h + (side / 2) ** 2);
    sa = side * side + 2 * side * face;
    vol = (1 / 3) * side * side * h;
    saFormula = "SA = a² + 2aℓ";
    volFormula = "V = ⅓a²h";
  }

  return (
    <div className="mt-4 grid gap-4 lg:grid-cols-[220px_1fr]">
      <div className="flex flex-col gap-2">
        {(
          [
            ["cube", "Cube"],
            ["cylinder", "Cylinder"],
            ["cone", "Cone"],
            ["sphere", "Sphere"],
            ["pyramid", "Square pyramid"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setSolid(id)}
            className={cn(
              "h-11 rounded-[var(--radius-sm)] border px-3 text-left text-sm font-semibold",
              solid === id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-bg text-muted",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="grid content-start gap-3">
        {solid === "cube" && <Field label="Side a" value={a} onChange={setA} />}
        {solid === "pyramid" && (
          <>
            <Field label="Base edge a" value={a} onChange={setA} />
            <Field label="Vertical height h" value={b} onChange={setB} />
          </>
        )}
        {(solid === "cylinder" || solid === "cone") && (
          <>
            <Field label="Radius r" value={a} onChange={setA} />
            <Field label="Vertical height h" value={b} onChange={setB} />
          </>
        )}
        {solid === "cone" && <Field label="Slant l (0 uses √(r² + h²))" value={c} onChange={setC} />}
        {solid === "sphere" && <Field label="Radius r" value={a} onChange={setA} />}
        <Formula name="Surface area" formula={saFormula} value={round(sa)} />
        <Formula name="Volume" formula={volFormula} value={round(vol)} />
        {solid === "cone" && <p className="text-xs text-muted">Slant used: {round(slant)}. Curved area alone is πrl.</p>}
        {solid === "pyramid" && <p className="text-xs text-muted">ℓ is the face slant to the middle of a base edge, √(h² + (a/2)²).</p>}
      </div>
    </div>
  );
}

function Accuracy({
  actual,
  measured,
  nearest,
  unit,
  setActual,
  setMeasured,
  setNearest,
  setUnit,
}: {
  actual: string;
  measured: string;
  nearest: string;
  unit: string;
  setActual: (v: string) => void;
  setMeasured: (v: string) => void;
  setNearest: (v: string) => void;
  setUnit: (v: string) => void;
}) {
  const act = n(actual);
  const meas = n(measured);
  const err = act === 0 ? 0 : (Math.abs(meas - act) / Math.abs(act)) * 100;
  const half = Math.abs(n(unit)) / 2;
  const mid = n(nearest);
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <div className="grid content-start gap-3">
        <Field label="Actual value" value={actual} onChange={setActual} />
        <Field label="Measured value" value={measured} onChange={setMeasured} />
        <Formula name="Percentage error" formula="|measured − actual| / actual × 100" value={`${round(err, 1)}%`} />
        <p className="text-xs text-muted">Accuracy, the way the sheet frames it: {round(100 - err, 1)}%.</p>
      </div>
      <div className="grid content-start gap-3">
        <Field label="Recorded measurement" value={nearest} onChange={setNearest} />
        <Field label="Rounded to the nearest" value={unit} onChange={setUnit} />
        <Formula
          name="Limits of accuracy"
          formula="recorded ± half the unit"
          value={`${round(mid - half, 3)} to ${round(mid + half, 3)}`}
        />
      </div>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block text-xs font-semibold text-muted">
      {label}
      <input
        className="mt-1 h-11 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 text-sm text-foreground"
        value={value}
        inputMode="decimal"
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

function Formula({ name, formula, value }: { name: string; formula: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-3">
      <p className="text-xs font-bold uppercase tracking-wide text-muted">{name}</p>
      <p className="font-mono text-sm text-primary">{formula}</p>
      <p className="mt-1 font-mono text-base">{value}</p>
    </div>
  );
}
