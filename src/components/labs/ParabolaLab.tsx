import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type FormId = "tp" | "factor" | "general";

const FORMS: { id: FormId; label: string }[] = [
  { id: "tp", label: "TP form" },
  { id: "factor", label: "Factor form" },
  { id: "general", label: "General form" },
];

const PRESETS: { name: string; form: FormId; a: number; h: number; k: number; p: number; q: number }[] = [
  { name: "(x − 4)² + 1", form: "tp", a: 1, h: 4, k: 1, p: 4, q: 4 },
  { name: "−(x − 1)² + 6", form: "tp", a: -1, h: 1, k: 6, p: 1, q: 1 },
  { name: "(x − 1)(x − 5)", form: "factor", a: 1, h: 3, k: -4, p: 1, q: 5 },
  { name: "x² − 6x + 8", form: "general", a: 1, h: -6, k: 8, p: 2, q: 4 },
  { name: "(x − 3)² − 16", form: "tp", a: 1, h: 3, k: -16, p: -1, q: 7 },
  { name: "−2(x − 1)(x − 6)", form: "factor", a: -2, h: 3.5, k: 12.5, p: 1, q: 6 },
];

type Model = {
  a: number;
  h: number;
  k: number;
  b: number;
  c: number;
  p: number;
  q: number;
  disc: number;
  roots: number;
};

function fmt(n: number, d = 2) {
  if (!Number.isFinite(n)) return "—";
  const v = Math.round(n * 10 ** d) / 10 ** d;
  return Object.is(v, -0) ? "0" : String(v);
}

function signed(n: number, d = 2) {
  const v = Math.round(n * 10 ** d) / 10 ** d;
  if (v === 0) return "+ 0";
  return v > 0 ? `+ ${v}` : `− ${Math.abs(v)}`;
}

function derive(form: FormId, a0: number, h: number, k: number, p: number, q: number): Model {
  const a = a0 === 0 ? 1 : a0;
  if (form === "tp") {
    const b = -2 * a * h;
    const c = a * h * h + k;
    const inner = -k / a;
    const root = inner > 0 ? Math.sqrt(inner) : 0;
    const disc = b * b - 4 * a * c;
    return {
      a,
      h,
      k,
      b,
      c,
      p: inner > 0 ? h - root : inner === 0 ? h : NaN,
      q: inner > 0 ? h + root : inner === 0 ? h : NaN,
      disc,
      roots: inner > 0 ? 2 : inner === 0 ? 1 : 0,
    };
  }
  if (form === "factor") {
    const H = (p + q) / 2;
    const K = a * (H - p) * (H - q);
    const b = a * (-p - q);
    const c = a * p * q;
    const disc = b * b - 4 * a * c;
    return { a, h: H, k: K, b, c, p, q, disc, roots: p === q ? 1 : 2 };
  }
  const b = h;
  const c = k;
  const H = -b / (2 * a);
  const K = a * H * H + b * H + c;
  const disc = b * b - 4 * a * c;
  const sqrtD = disc > 0 ? Math.sqrt(disc) : 0;
  return {
    a,
    h: H,
    k: K,
    b,
    c,
    p: disc > 0 ? (-b - sqrtD) / (2 * a) : disc === 0 ? H : NaN,
    q: disc > 0 ? (-b + sqrtD) / (2 * a) : disc === 0 ? H : NaN,
    disc,
    roots: disc > 0 ? 2 : disc === 0 ? 1 : 0,
  };
}

export function ParabolaLab() {
  const [form, setForm] = useState<FormId>("tp");
  const [a, setA] = useState(1);
  const [h, setH] = useState(2);
  const [k, setK] = useState(-3);
  const [p, setP] = useState(-1);
  const [q, setQ] = useState(5);

  const model = useMemo(() => derive(form, a, h, k, p, q), [form, a, h, k, p, q]);

  function loadPreset(preset: (typeof PRESETS)[number]) {
    setForm(preset.form);
    setA(preset.a);
    setP(preset.p);
    setQ(preset.q);
    setH(preset.h);
    setK(preset.k);
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
      <div>
        <p className="font-mono text-sm text-primary">
          {equation(form, form === "general" ? model : { ...model, a, h, k, p, q })}
        </p>
        <p className="mt-1 text-sm text-muted">Drag the sliders and watch intercepts, axis and turning point move.</p>
        <ParabolaSvg model={model} />
        <div className="mt-3 flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => loadPreset(preset)}
              className="h-9 rounded-full border border-border bg-bg px-3 text-xs font-semibold text-muted hover:text-foreground"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1">
          {FORMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (item.id === form) return;
                if (item.id === "tp") {
                  setA(model.a);
                  setH(model.h);
                  setK(model.k);
                } else if (item.id === "factor") {
                  setA(model.a);
                  setP(Number.isFinite(model.p) ? model.p : -2);
                  setQ(Number.isFinite(model.q) ? model.q : 2);
                } else {
                  setA(model.a);
                  setH(model.b);
                  setK(model.c);
                }
                setForm(item.id);
              }}
              className={cn(
                "h-9 flex-1 rounded-full border px-2 text-xs font-semibold",
                form === item.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-bg text-muted",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <Slider label="a" value={a} min={-3} max={3} step={0.5} onChange={(v) => setA(v === 0 ? 1 : v)} />
        {form === "tp" && (
          <>
            <Slider label="h" value={h} min={-6} max={6} step={0.5} onChange={setH} />
            <Slider label="k" value={k} min={-10} max={10} step={0.5} onChange={setK} />
          </>
        )}
        {form === "factor" && (
          <>
            <Slider label="p (root)" value={p} min={-6} max={6} step={0.5} onChange={setP} />
            <Slider label="q (root)" value={q} min={-6} max={6} step={0.5} onChange={setQ} />
          </>
        )}
        {form === "general" && (
          <>
            <Slider label="b" value={h} min={-10} max={10} step={0.5} onChange={setH} />
            <Slider label="c" value={k} min={-12} max={12} step={0.5} onChange={setK} />
          </>
        )}
        <FeatureList model={model} />
      </div>
    </div>
  );
}

function FeatureList({ model }: { model: Model }) {
  const items = [
    { label: "Y-int", value: `(0, ${fmt(model.c)})` },
    { label: "X-int", value: rootText(model) },
    { label: "AoS", value: `x = ${fmt(model.h)}` },
    { label: "TP", value: `(${fmt(model.h)}, ${fmt(model.k)})` },
    { label: "Min/max", value: model.a > 0 ? "minimum" : "maximum" },
  ];
  return (
    <dl className="grid grid-cols-2 gap-2">
      {items.map((item) => (
        <div key={item.label} className="rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-2">
          <dt className="text-xs font-bold uppercase tracking-wide text-muted">{item.label}</dt>
          <dd className="mt-0.5 font-mono text-sm">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function rootText(model: Model) {
  if (model.roots === 0) return "none";
  if (model.roots === 1) return `(${fmt(model.h)}, 0) touch`;
  return `(${fmt(model.p)}, 0), (${fmt(model.q)}, 0)`;
}

function equation(form: FormId, m: Model) {
  if (form === "tp") return `y = ${tpString(m)}`;
  if (form === "factor") return `y = ${factorString(m)}`;
  return `y = ${generalString(m)}`;
}

function tpString(m: Model) {
  const coef = m.a === 1 ? "" : m.a === -1 ? "−" : `${fmt(m.a)}`;
  const inner = m.h === 0 ? "x" : `x ${signed(-m.h)}`.replace("+ -", "− ");
  return `${coef}(${inner})² ${signed(m.k)}`;
}

function factorString(m: Model) {
  const coef = m.a === 1 ? "" : m.a === -1 ? "−" : `${fmt(m.a)}`;
  const left = m.p === 0 ? "x" : `(x ${signed(-m.p)})`;
  const right = m.q === 0 ? "x" : `(x ${signed(-m.q)})`;
  return `${coef}${left}${right}`;
}

function generalString(m: Model) {
  const ax = m.a === 1 ? "x²" : m.a === -1 ? "−x²" : `${fmt(m.a)}x²`;
  const bx = m.b === 0 ? "" : m.b === 1 ? " + x" : m.b === -1 ? " − x" : ` ${signed(m.b)}x`;
  const c = m.c === 0 ? "" : ` ${signed(m.c)}`;
  return `${ax}${bx}${c}`;
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-xs font-semibold">
        <span>{label}</span>
        <span className="font-mono tabular-nums text-primary">{fmt(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-primary"
      />
    </label>
  );
}

function ParabolaSvg({ model }: { model: Model }) {
  const W = 400;
  const H = 280;
  const xmin = -8;
  const xmax = 8;
  const ymin = -12;
  const ymax = 14;
  const sx = (x: number) => ((x - xmin) / (xmax - xmin)) * (W - 24) + 12;
  const sy = (y: number) => H - 16 - ((y - ymin) / (ymax - ymin)) * (H - 28);

  const pts: string[] = [];
  for (let i = 0; i <= 160; i++) {
    const x = xmin + (i / 160) * (xmax - xmin);
    const y = model.a * x * x + model.b * x + model.c;
    if (y < ymin - 4 || y > ymax + 4) {
      pts.push("");
      continue;
    }
    pts.push(`${sx(x)},${sy(y)}`);
  }
  const d = pts
    .reduce<{ parts: string[]; prev: boolean }>(
      (acc, p) => {
        if (!p) return { parts: acc.parts, prev: false };
        acc.parts.push(`${acc.prev ? "L" : "M"} ${p}`);
        return { parts: acc.parts, prev: true };
      },
      { parts: [], prev: false },
    )
    .parts.join(" ");

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="mt-3 w-full rounded-[var(--radius-md)] border border-border bg-bg"
      role="img"
      aria-label="Parabola graph"
    >
      <line x1={12} y1={sy(0)} x2={W - 12} y2={sy(0)} className="stroke-border" strokeWidth="1.5" />
      <line x1={sx(0)} y1={12} x2={sx(0)} y2={H - 12} className="stroke-border" strokeWidth="1.5" />
      <line
        x1={sx(model.h)}
        y1={12}
        x2={sx(model.h)}
        y2={H - 12}
        className="stroke-secondary"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
      <path d={d} className="fill-none stroke-primary" strokeWidth="2.4" />
      <circle cx={sx(model.h)} cy={sy(model.k)} r="5" className="fill-secondary" />
      <circle cx={sx(0)} cy={sy(model.c)} r="4" className="fill-primary" />
      {model.roots > 0 && Number.isFinite(model.p) && (
        <circle cx={sx(model.p)} cy={sy(0)} r="4" className="fill-warning" />
      )}
      {model.roots === 2 && Number.isFinite(model.q) && (
        <circle cx={sx(model.q)} cy={sy(0)} r="4" className="fill-warning" />
      )}
      <text x={sx(model.h) + 8} y={sy(model.k) - 8} className="fill-secondary text-xs font-bold">
        TP
      </text>
    </svg>
  );
}
