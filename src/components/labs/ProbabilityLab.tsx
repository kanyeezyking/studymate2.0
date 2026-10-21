import { useState } from "react";
import { cn } from "@/lib/utils";

type Mode = "venn" | "table" | "tree";

const MODES: { id: Mode; label: string }[] = [
  { id: "venn", label: "Venn" },
  { id: "table", label: "Two-way table" },
  { id: "tree", label: "Tree" },
];

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

function frac(n: number, d: number): string {
  if (d === 0) return "—";
  const g = gcd(n, d);
  const nn = n / g;
  const dd = d / g;
  return dd === 1 ? String(nn) : `${nn}/${dd}`;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function ProbabilityLab() {
  const [mode, setMode] = useState<Mode>("venn");
  const [aOnly, setAOnly] = useState(9);
  const [both, setBoth] = useState(5);
  const [bOnly, setBOnly] = useState(7);
  const [neither, setNeither] = useState(4);
  const [red, setRed] = useState(4);
  const [blue, setBlue] = useState(3);

  const total = aOnly + both + bOnly + neither;
  const nA = aOnly + both;
  const nB = bOnly + both;
  const union = aOnly + both + bOnly;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {MODES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setMode(item.id)}
            className={cn(
              "h-11 rounded-full border px-4 text-sm font-semibold",
              mode === item.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-bg text-muted",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {mode === "tree" ? (
        <TreeBench red={red} blue={blue} setRed={setRed} setBlue={setBlue} />
      ) : (
        <RegionBench
          mode={mode}
          aOnly={aOnly}
          both={both}
          bOnly={bOnly}
          neither={neither}
          total={total}
          nA={nA}
          nB={nB}
          union={union}
          setAOnly={setAOnly}
          setBoth={setBoth}
          setBOnly={setBOnly}
          setNeither={setNeither}
        />
      )}
    </div>
  );
}

function RegionBench({
  mode,
  aOnly,
  both,
  bOnly,
  neither,
  total,
  nA,
  nB,
  union,
  setAOnly,
  setBoth,
  setBOnly,
  setNeither,
}: {
  mode: "venn" | "table";
  aOnly: number;
  both: number;
  bOnly: number;
  neither: number;
  total: number;
  nA: number;
  nB: number;
  union: number;
  setAOnly: (n: number) => void;
  setBoth: (n: number) => void;
  setBOnly: (n: number) => void;
  setNeither: (n: number) => void;
}) {
  function loadBike() {
    setAOnly(9);
    setBoth(5);
    setBOnly(7);
    setNeither(4);
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div>
        {mode === "venn" ? (
          <Venn aOnly={aOnly} both={both} bOnly={bOnly} neither={neither} />
        ) : (
          <TwoWay aOnly={aOnly} both={both} bOnly={bOnly} neither={neither} nA={nA} nB={nB} total={total} />
        )}
        <p className="mt-3 text-sm text-muted">
          Same four regions either way. n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = {nA} + {nB} − {both} = {union}.
          The four regions add to n(ξ) = {total}.
        </p>
      </div>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={loadBike}
            className="h-11 rounded-full border border-border bg-bg px-4 text-xs font-semibold text-muted"
          >
            Bike & skateboard
          </button>
          <button
            type="button"
            onClick={() => {
              setAOnly(3);
              setBoth(2);
              setBOnly(2);
              setNeither(3);
            }}
            className="h-11 rounded-full border border-border bg-bg px-4 text-xs font-semibold text-muted"
          >
            Evens & factors
          </button>
        </div>
        <Stepper label="A only" value={aOnly} onChange={setAOnly} />
        <Stepper label="Both (A ∩ B)" value={both} onChange={setBoth} />
        <Stepper label="B only" value={bOnly} onChange={setBOnly} />
        <Stepper label="Neither" value={neither} onChange={setNeither} />
        <dl className="grid grid-cols-2 gap-2">
          <Stat label="n(ξ)" value={String(total)} />
          <Stat label="n(A)" value={String(nA)} />
          <Stat label="n(B)" value={String(nB)} />
          <Stat label="n(A ∩ B)" value={String(both)} />
          <Stat label="P(A)" value={frac(nA, total)} />
          <Stat label="P(A ∩ B)" value={frac(both, total)} />
          <Stat label="P(A ∪ B)" value={frac(union, total)} />
          <Stat label="P(neither)" value={frac(neither, total)} />
        </dl>
      </div>
    </div>
  );
}

function Venn({
  aOnly,
  both,
  bOnly,
  neither,
}: {
  aOnly: number;
  both: number;
  bOnly: number;
  neither: number;
}) {
  return (
    <svg viewBox="0 0 420 240" className="w-full rounded-[var(--radius-md)] border border-border bg-bg" role="img" aria-label="Venn diagram of two events">
      <rect x="8" y="8" width="404" height="224" rx="12" fill="none" className="stroke-border" strokeWidth="1.5" />
      <text x="22" y="28" className="fill-muted" fontSize="13" fontFamily="IBM Plex Mono, ui-monospace, monospace">
        ξ
      </text>
      <circle cx="168" cy="124" r="78" fill="color-mix(in oklab, var(--color-primary) 22%, transparent)" stroke="var(--color-primary)" strokeWidth="2" />
      <circle cx="252" cy="124" r="78" fill="color-mix(in oklab, var(--color-secondary) 22%, transparent)" stroke="var(--color-secondary)" strokeWidth="2" />
      <text x="118" y="78" className="fill-primary" fontSize="13" fontWeight="700">
        A
      </text>
      <text x="286" y="78" className="fill-secondary" fontSize="13" fontWeight="700">
        B
      </text>
      <text x="128" y="130" textAnchor="middle" className="fill-foreground" fontSize="20" fontWeight="700" fontFamily="IBM Plex Mono, ui-monospace, monospace">
        {aOnly}
      </text>
      <text x="210" y="130" textAnchor="middle" className="fill-foreground" fontSize="20" fontWeight="700" fontFamily="IBM Plex Mono, ui-monospace, monospace">
        {both}
      </text>
      <text x="292" y="130" textAnchor="middle" className="fill-foreground" fontSize="20" fontWeight="700" fontFamily="IBM Plex Mono, ui-monospace, monospace">
        {bOnly}
      </text>
      <text x="48" y="210" className="fill-foreground" fontSize="16" fontWeight="700" fontFamily="IBM Plex Mono, ui-monospace, monospace">
        {neither}
      </text>
      <text x="78" y="210" className="fill-muted" fontSize="12">
        neither
      </text>
    </svg>
  );
}

function TwoWay({
  aOnly,
  both,
  bOnly,
  neither,
  nA,
  nB,
  total,
}: {
  aOnly: number;
  both: number;
  bOnly: number;
  neither: number;
  nA: number;
  nB: number;
  total: number;
}) {
  const cell = "border border-border px-3 py-3 text-center font-mono text-sm";
  return (
    <div className="overflow-x-auto rounded-[var(--radius-md)] border border-border bg-bg">
      <table className="w-full min-w-[320px] border-collapse">
        <thead>
          <tr>
            <th className={cell} />
            <th className={cell}>B</th>
            <th className={cell}>B′</th>
            <th className={cell}>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={cell}>A</th>
            <td className={cn(cell, "text-primary")}>{both}</td>
            <td className={cell}>{aOnly}</td>
            <td className={cell}>{nA}</td>
          </tr>
          <tr>
            <th className={cell}>A′</th>
            <td className={cell}>{bOnly}</td>
            <td className={cell}>{neither}</td>
            <td className={cell}>{total - nA}</td>
          </tr>
          <tr>
            <th className={cell}>Total</th>
            <td className={cell}>{nB}</td>
            <td className={cell}>{total - nB}</td>
            <td className={cn(cell, "font-bold")}>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function TreeBench({
  red,
  blue,
  setRed,
  setBlue,
}: {
  red: number;
  blue: number;
  setRed: (n: number) => void;
  setBlue: (n: number) => void;
}) {
  const total = red + blue;
  const den = total * (total - 1);
  const rr = red * (red - 1);
  const bb = blue * (blue - 1);
  const rb = red * blue;
  const oneEach = 2 * red * blue;

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <div>
        <p className="text-sm text-muted">
          Two draws without replacement. Multiply along a branch. Add the two mixed branches for one of each colour.
          The second denominator is {total} − 1 = {total - 1}.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Branch
            first="Red"
            firstP={frac(red, total)}
            left="Red again"
            leftP={`${red}/${total} × ${Math.max(red - 1, 0)}/${total - 1} = ${frac(rr, den)}`}
            right="Then blue"
            rightP={`${red}/${total} × ${blue}/${total - 1} = ${frac(rb, den)}`}
          />
          <Branch
            first="Blue"
            firstP={frac(blue, total)}
            left="Then red"
            leftP={`${blue}/${total} × ${red}/${total - 1} = ${frac(rb, den)}`}
            right="Blue again"
            rightP={`${blue}/${total} × ${Math.max(blue - 1, 0)}/${total - 1} = ${frac(bb, den)}`}
          />
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Stat label="P(both red)" value={frac(rr, den)} />
          <Stat label="P(one each)" value={frac(oneEach, den)} />
          <Stat label="P(both blue)" value={frac(bb, den)} />
        </dl>
        <p className="mt-3 text-sm text-muted">
          Check: {frac(rr, den)} + {frac(oneEach, den)} + {frac(bb, den)} = {frac(rr + oneEach + bb, den)}.
        </p>
      </div>
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => {
            setRed(4);
            setBlue(3);
          }}
          className="h-11 rounded-full border border-border bg-bg px-4 text-xs font-semibold text-muted"
        >
          4 red, 3 blue
        </button>
        <Stepper label="Red" value={red} min={1} max={9} onChange={setRed} />
        <Stepper label="Blue" value={blue} min={1} max={9} onChange={setBlue} />
        <p className="text-xs text-muted">Bag size {total}. Do not replace the first counter.</p>
      </div>
    </div>
  );
}

function Branch({
  first,
  firstP,
  left,
  leftP,
  right,
  rightP,
}: {
  first: string;
  firstP: string;
  left: string;
  leftP: string;
  right: string;
  rightP: string;
}) {
  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-bg p-4">
      <p className="text-sm font-bold">
        First {first} <span className="font-mono text-primary">{firstP}</span>
      </p>
      <p className="mt-3 text-sm">
        {left}
        <span className="mt-1 block font-mono text-xs text-primary">{leftP}</span>
      </p>
      <p className="mt-3 text-sm">
        {right}
        <span className="mt-1 block font-mono text-xs text-primary">{rightP}</span>
      </p>
    </div>
  );
}

function Stepper({
  label,
  value,
  onChange,
  min = 0,
  max = 30,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-2">
      <span className="text-sm font-semibold">{label}</span>
      <span className="flex items-center gap-2">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          onClick={() => onChange(clamp(value - 1, min, max))}
          className="inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] border border-border text-lg"
        >
          −
        </button>
        <span className="w-8 text-center font-mono tabular-nums">{value}</span>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          onClick={() => onChange(clamp(value + 1, min, max))}
          className="inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] border border-border text-lg"
        >
          +
        </button>
      </span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-2">
      <dt className="text-xs font-bold uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-0.5 font-mono text-sm">{value}</dd>
    </div>
  );
}
