import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export type LightMode = "spectrum" | "reflection" | "refraction" | "colour";

const MODES: { id: LightMode; label: string }[] = [
  { id: "spectrum", label: "Spectrum" },
  { id: "reflection", label: "Reflection" },
  { id: "refraction", label: "Refraction" },
  { id: "colour", label: "Colour" },
];

const BANDS = [
  {
    id: "radio",
    label: "Radio",
    cls: "bg-em-radio",
    uses: "Longest wavelength. Radio, TV, some mobiles. Passes through the body with little absorption.",
  },
  {
    id: "micro",
    label: "Microwave",
    cls: "bg-em-micro",
    uses: "Heat food by vibrating water molecules. Radar and satellite links. Short beams diffract very little.",
  },
  {
    id: "ir",
    label: "Infrared",
    cls: "bg-em-ir",
    uses: "Heat, remotes, thermal cameras. All objects emit IR — hotter objects emit more.",
  },
  {
    id: "vis",
    label: "Visible",
    cls: "bg-[linear-gradient(90deg,#ef4444,#f59e0b,#22c55e,#3b82f6,#8b5cf6)]",
    uses: "The only EM radiation human eyes detect (~390–780 nm). Red sits next to IR; violet next to UV.",
  },
  {
    id: "uv",
    label: "UV",
    cls: "bg-em-uv",
    uses: "Vitamin D, fluorescence, security inks. Overexposure: sunburn, ageing, skin cancer.",
  },
  {
    id: "x",
    label: "X-ray",
    cls: "bg-em-x",
    uses: "Bone and security imaging from an X-ray tube. Lead shielding for radiographers.",
  },
  {
    id: "gamma",
    label: "Gamma",
    cls: "bg-em-gamma",
    uses: "From radioactive nuclei. Tracers, sterilising, radiotherapy. Shortest λ, highest energy.",
  },
] as const;

const MEDIA = [
  { id: "air", n: 1.0, label: "Air 1.00" },
  { id: "water", n: 1.33, label: "Water 1.33" },
  { id: "glass", n: 1.5, label: "Glass 1.50" },
  { id: "diamond", n: 2.42, label: "Diamond 2.42" },
] as const;

export function LightLab({ initial = "spectrum" }: { initial?: LightMode }) {
  const [mode, setMode] = useState<LightMode>(initial);
  return (
    <section className="mt-2">
      <div className="flex flex-wrap gap-2">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setMode(m.id)}
            className={cn(
              "h-10 rounded-full border px-4 text-xs font-semibold",
              mode === m.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-bg text-muted hover:text-foreground",
            )}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div className="fade-in mt-5">
        {mode === "spectrum" && <SpectrumBench />}
        {mode === "reflection" && <ReflectionBench />}
        {mode === "refraction" && <RefractionBench />}
        {mode === "colour" && <ColourBench />}
      </div>
    </section>
  );
}

function SpectrumBench() {
  const [id, setId] = useState<(typeof BANDS)[number]["id"]>("vis");
  const [nm, setNm] = useState(550);
  const band = BANDS.find((b) => b.id === id)!;
  const rgb = wavelengthToCss(nm);
  const period = 10 + (nm - 380) / 18;

  return (
    <div>
      <p className="text-sm text-muted">
        Tap a band. Energy and hazard increase to the right. Drag the visible-light slider to see wavelength, colour and wave shape.
      </p>
      <div className="mt-3 flex overflow-hidden rounded-[var(--radius-md)] border border-border">
        {BANDS.map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={() => setId(b.id)}
            className={cn(
              "h-16 min-w-0 flex-1 px-1 text-[10px] font-bold text-foreground sm:text-xs",
              b.cls,
              id === b.id && "ring-2 ring-inset ring-foreground",
            )}
          >
            {b.label}
          </button>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wide text-muted">
        <span>Long λ · low f · lower energy</span>
        <span>Short λ · high f · higher energy</span>
      </div>
      <p className="mt-3 rounded-[var(--radius-sm)] border border-border bg-bg p-4 text-sm">{band.uses}</p>

      <div className="mt-5 rounded-[var(--radius-md)] border border-border bg-bg p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold">Visible wavelength</p>
          <p className="font-mono text-sm tabular-nums text-primary">{nm} nm</p>
        </div>
        <input
          type="range"
          min={390}
          max={700}
          value={nm}
          onChange={(e) => {
            const v = Number(e.target.value);
            setNm(v);
            setId("vis");
          }}
          className="mt-3 w-full accent-primary"
          aria-label="Visible wavelength in nanometres"
        />
        <div className="mt-3 overflow-hidden rounded-[var(--radius-sm)] border border-border">
          <svg viewBox="0 0 420 80" className="h-24 w-full" aria-hidden="true">
            <rect width="420" height="80" className="fill-surface" />
            <g className="wave-drift">
              <WavePath period={period} color={rgb} />
              <g transform="translate(48,0)">
                <WavePath period={period} color={rgb} />
              </g>
            </g>
          </svg>
        </div>
        <p className="mt-3 text-sm text-muted">
          Red photons have less energy than violet. In a prism, red is bent least and violet most — that is dispersion.
        </p>
      </div>
    </div>
  );
}

function WavePath({ period, color }: { period: number; color: string }) {
  const d = useMemo(() => {
    const pts: string[] = [];
    for (let x = 0; x <= 468; x += 2) {
      const y = 40 + 26 * Math.sin((x / period) * Math.PI * 2);
      pts.push(`${x === 0 ? "M" : "L"}${x} ${y.toFixed(2)}`);
    }
    return pts.join(" ");
  }, [period]);
  return <path d={d} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" />;
}

function ReflectionBench() {
  const [iDeg, setIDeg] = useState(42);
  const i = (iDeg * Math.PI) / 180;
  const ox = 200;
  const oy = 188;
  const len = 150;
  const ix = ox - Math.sin(i) * len;
  const iy = oy - Math.cos(i) * len;
  const rx = ox + Math.sin(i) * len;
  const ry = oy - Math.cos(i) * len;

  return (
    <div>
      <p className="text-sm text-muted">
        Angles are measured from the normal, not the mirror. Drag the slider — i always equals r.
      </p>
      <svg viewBox="0 0 400 240" className="mt-3 w-full overflow-visible rounded-[var(--radius-md)] border border-border bg-bg">
        <rect x="24" y="188" width="352" height="10" rx="2" className="fill-surface-hover stroke-border" />
        <text x="200" y="228" textAnchor="middle" className="fill-muted" fontSize="11">
          Plane mirror
        </text>
        <line x1="200" y1="36" x2="200" y2="188" className="stroke-muted" strokeDasharray="4 5" strokeWidth="1.5" />
        <text x="208" y="50" className="fill-muted" fontSize="11">
          Normal
        </text>
        <line x1={ix} y1={iy} x2={ox} y2={oy} stroke="var(--color-primary)" strokeWidth="3" />
        <polygon points={arrowHead(ix, iy, ox, oy)} fill="var(--color-primary)" />
        <line x1={ox} y1={oy} x2={rx} y2={ry} stroke="var(--color-secondary)" strokeWidth="3" />
        <polygon points={arrowHead(ox, oy, rx, ry)} fill="var(--color-secondary)" />
        <Arc cx={ox} cy={oy} r={42} start={-Math.PI / 2} sweep={-i} color="var(--color-primary)" />
        <Arc cx={ox} cy={oy} r={42} start={-Math.PI / 2} sweep={i} color="var(--color-secondary)" />
        <text x={ox - 58} y={oy - 58} fill="var(--color-primary)" fontSize="13" fontWeight="700">
          i {iDeg}°
        </text>
        <text x={ox + 28} y={oy - 58} fill="var(--color-secondary)" fontSize="13" fontWeight="700">
          r {iDeg}°
        </text>
      </svg>
      <label className="mt-4 block text-xs font-semibold text-muted">
        Angle of incidence
        <input
          type="range"
          min={8}
          max={80}
          value={iDeg}
          onChange={(e) => setIDeg(Number(e.target.value))}
          className="mt-2 w-full accent-primary"
        />
      </label>
      <p className="mt-3 rounded-[var(--radius-sm)] border border-border bg-bg px-4 py-3 font-mono text-sm text-primary">
        i = r = {iDeg}°
      </p>
    </div>
  );
}

function RefractionBench() {
  const [from, setFrom] = useState<(typeof MEDIA)[number]["id"]>("air");
  const [to, setTo] = useState<(typeof MEDIA)[number]["id"]>("glass");
  const [iDeg, setIDeg] = useState(35);
  const n1 = MEDIA.find((m) => m.id === from)!.n;
  const n2 = MEDIA.find((m) => m.id === to)!.n;
  const i = (iDeg * Math.PI) / 180;
  const arg = (n1 / n2) * Math.sin(i);
  const tir = arg > 1;
  const r = tir ? i : Math.asin(Math.min(1, arg));
  const rDeg = Math.round((r * 180) / Math.PI);
  const crit = n1 > n2 ? Math.round((Math.asin(n2 / n1) * 180) / Math.PI) : null;
  const ox = 200;
  const oy = 120;
  const len = 108;
  const ix = ox - Math.sin(i) * len;
  const iy = oy - Math.cos(i) * len;
  const tx = tir ? ox + Math.sin(i) * len : ox + Math.sin(r) * len;
  const ty = tir ? oy - Math.cos(i) * len : oy + Math.cos(r) * len;

  return (
    <div>
      <p className="text-sm text-muted">
        Light bends towards the normal when it slows (into a denser medium) and away when it speeds up.
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <Select label="From" value={from} onChange={setFrom} />
        <Select label="Into" value={to} onChange={setTo} />
      </div>
      <svg viewBox="0 0 400 240" className="mt-3 w-full rounded-[var(--radius-md)] border border-border">
        <rect width="400" height="120" className="fill-surface" />
        <rect y="120" width="400" height="120" className="fill-surface-hover" />
        <text x="12" y="20" className="fill-muted" fontSize="11">
          n = {n1.toFixed(2)}
        </text>
        <text x="12" y="228" className="fill-muted" fontSize="11">
          n = {n2.toFixed(2)}
        </text>
        <line x1="200" y1="16" x2="200" y2="224" className="stroke-muted" strokeDasharray="4 5" strokeWidth="1.5" />
        <line x1={ix} y1={iy} x2={ox} y2={oy} stroke="var(--color-primary)" strokeWidth="3" />
        <line
          x1={ox}
          y1={oy}
          x2={tx}
          y2={ty}
          stroke={tir ? "var(--color-warning)" : "var(--color-secondary)"}
          strokeWidth="3"
        />
        <text x="208" y="36" className="fill-muted" fontSize="11">
          Normal
        </text>
      </svg>
      <label className="mt-4 block text-xs font-semibold text-muted">
        Angle of incidence {iDeg}°
        <input
          type="range"
          min={1}
          max={85}
          value={iDeg}
          onChange={(e) => setIDeg(Number(e.target.value))}
          className="mt-2 w-full accent-primary"
        />
      </label>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <Fact label="i" value={`${iDeg}°`} />
        <Fact label={tir ? "TIR" : "r"} value={tir ? "reflects" : `${rDeg}°`} />
        <Fact label="Critical angle" value={crit === null ? "n/a (n1 ≤ n2)" : `${crit}°`} />
      </div>
      {tir ? (
        <p className="mt-3 rounded-[var(--radius-sm)] border border-warning/40 bg-warning/10 px-4 py-3 text-sm text-warning">
          Total internal reflection — i is greater than the critical angle, so the ray cannot leave the denser medium.
        </p>
      ) : (
        <p className="mt-3 text-sm text-muted">
          Snell: n₁ sin i = n₂ sin r. Optical fibres and periscope prisms use TIR.
        </p>
      )}
    </div>
  );
}

function ColourBench() {
  const [r, setR] = useState(255);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);
  const [reflects, setReflects] = useState({ r: true, g: false, b: false });
  const mix = `rgb(${r} ${g} ${b})`;
  const object = `rgb(${reflects.r ? 220 : 18} ${reflects.g ? 220 : 18} ${reflects.b ? 220 : 18})`;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-[var(--radius-md)] border border-border bg-bg p-4">
        <p className="font-semibold">Additive mixing (lights)</p>
        <p className="mt-1 text-sm text-muted">Red + green + blue lights make white. This is how screens work.</p>
        <div className="mt-4 h-28 rounded-[var(--radius-sm)] border border-border" style={{ background: mix }} />
        <Slider label="Red" value={r} onChange={setR} />
        <Slider label="Green" value={g} onChange={setG} />
        <Slider label="Blue" value={b} onChange={setB} />
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            { label: "Yellow", rr: 255, gg: 255, bb: 0 },
            { label: "Cyan", rr: 0, gg: 255, bb: 255 },
            { label: "Magenta", rr: 255, gg: 0, bb: 255 },
            { label: "White", rr: 255, gg: 255, bb: 255 },
          ].map((p) => (
            <button
              key={p.label}
              type="button"
              className="h-9 rounded-full border border-border px-3 text-xs font-semibold hover:border-primary"
              onClick={() => {
                setR(p.rr);
                setG(p.gg);
                setB(p.bb);
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-[var(--radius-md)] border border-border bg-bg p-4">
        <p className="font-semibold">Object colour (white light)</p>
        <p className="mt-1 text-sm text-muted">
          A red object reflects red and absorbs the rest. Tick the wavelengths this surface reflects.
        </p>
        <div className="mt-4 h-28 rounded-[var(--radius-sm)] border border-border" style={{ background: object }} />
        <div className="mt-4 grid gap-2">
          {(["r", "g", "b"] as const).map((k) => (
            <label key={k} className="flex h-11 items-center gap-3 rounded-[var(--radius-sm)] border border-border px-3 text-sm">
              <input
                type="checkbox"
                checked={reflects[k]}
                onChange={() => setReflects((s) => ({ ...s, [k]: !s[k] }))}
                className="size-4 accent-primary"
              />
              Reflects {k === "r" ? "red" : k === "g" ? "green" : "blue"}
            </label>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">
          White reflects all three. Black absorbs all three. Filters work by subtracting (absorbing) colours from white light.
        </p>
      </div>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
}: {
  label: string;
  value: (typeof MEDIA)[number]["id"];
  onChange: (v: (typeof MEDIA)[number]["id"]) => void;
}) {
  return (
    <label className="text-xs font-semibold text-muted">
      {label}
      <select
        className="mt-1 h-11 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 text-sm text-foreground"
        value={value}
        onChange={(e) => onChange(e.target.value as (typeof MEDIA)[number]["id"])}
      >
        {MEDIA.map((m) => (
          <option key={m.id} value={m.id}>
            {m.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Slider({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) {
  return (
    <label className="mt-3 block text-xs font-semibold text-muted">
      {label} {value}
      <input
        type="range"
        min={0}
        max={255}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-primary"
      />
    </label>
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

function Arc({
  cx,
  cy,
  r,
  start,
  sweep,
  color,
}: {
  cx: number;
  cy: number;
  r: number;
  start: number;
  sweep: number;
  color: string;
}) {
  const x1 = cx + r * Math.cos(start);
  const y1 = cy + r * Math.sin(start);
  const x2 = cx + r * Math.cos(start + sweep);
  const y2 = cy + r * Math.sin(start + sweep);
  const large = Math.abs(sweep) > Math.PI ? 1 : 0;
  const sweepFlag = sweep > 0 ? 1 : 0;
  return (
    <path
      d={`M ${x1} ${y1} A ${r} ${r} 0 ${large} ${sweepFlag} ${x2} ${y2}`}
      fill="none"
      stroke={color}
      strokeWidth="2"
    />
  );
}

function arrowHead(x1: number, y1: number, x2: number, y2: number) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const s = 8;
  const ax = x2 - Math.cos(angle) * 4;
  const ay = y2 - Math.sin(angle) * 4;
  const p1 = `${ax + Math.cos(angle + 2.5) * s},${ay + Math.sin(angle + 2.5) * s}`;
  const p2 = `${x2},${y2}`;
  const p3 = `${ax + Math.cos(angle - 2.5) * s},${ay + Math.sin(angle - 2.5) * s}`;
  return `${p1} ${p2} ${p3}`;
}

function wavelengthToCss(nm: number) {
  let r = 0;
  let g = 0;
  let b = 0;
  if (nm >= 380 && nm < 440) {
    r = -(nm - 440) / 60;
    b = 1;
  } else if (nm >= 440 && nm < 490) {
    g = (nm - 440) / 50;
    b = 1;
  } else if (nm >= 490 && nm < 510) {
    g = 1;
    b = -(nm - 510) / 20;
  } else if (nm >= 510 && nm < 580) {
    r = (nm - 510) / 70;
    g = 1;
  } else if (nm >= 580 && nm < 645) {
    r = 1;
    g = -(nm - 645) / 65;
  } else if (nm >= 645 && nm <= 780) {
    r = 1;
  }
  let factor = 1;
  if (nm >= 380 && nm < 420) factor = 0.3 + (0.7 * (nm - 380)) / 40;
  else if (nm > 700 && nm <= 780) factor = 0.3 + (0.7 * (780 - nm)) / 80;
  const to = (v: number) => Math.round(Math.min(1, Math.max(0, v)) * factor * 255);
  return `rgb(${to(r)} ${to(g)} ${to(b)})`;
}
