import { useMemo, useState } from "react";

export function SankeyLab() {
  const [input, setInput] = useState(100);
  const [useful, setUseful] = useState(40);

  const waste = Math.max(0, input - useful);
  const eff = input === 0 ? 0 : (useful / input) * 100;
  const usefulH = useMemo(() => (input === 0 ? 0 : (useful / input) * 160), [input, useful]);
  const wasteH = 160 - usefulH;

  function clampUseful(v: number) {
    setUseful(Math.min(input, Math.max(0, v)));
  }

  return (
    <section>
      <p className="text-sm text-muted">
        Arrow width stands for energy. The left bar is input; it splits into useful output and wasted energy.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-[1fr_180px]">
        <svg viewBox="0 0 420 220" className="w-full rounded-[var(--radius-md)] border border-border bg-bg">
          <rect x="24" y="30" width="70" height="160" rx="8" fill="var(--color-primary)" />
          <text x="59" y="20" textAnchor="middle" className="fill-muted" fontSize="11">
            Input {input} J
          </text>
          <path
            d={`M94 30 C 200 30, 220 ${30 + (160 - usefulH) / 2}, 330 ${30 + (160 - usefulH) / 2} L 330 ${30 + (160 - usefulH) / 2 + usefulH} C 220 ${30 + (160 - usefulH) / 2 + usefulH}, 200 190, 94 190 Z`}
            fill="var(--color-secondary)"
            opacity="0.9"
          />
          <rect x="330" y={30 + (160 - usefulH) / 2} width="66" height={Math.max(usefulH, 4)} rx="8" fill="var(--color-secondary)" />
          <text x="363" y="20" textAnchor="middle" className="fill-muted" fontSize="11">
            Useful {useful} J
          </text>
          {waste > 0 && (
            <>
              <path
                d={`M94 190 C 160 190, 170 206, 230 206 L 230 ${206 + Math.max(wasteH * 0.2, 8)} C 160 ${206 + Math.max(wasteH * 0.2, 8)}, 150 190, 94 190 Z`}
                fill="var(--color-warning)"
                opacity="0.85"
              />
              <text x="250" y="214" className="fill-warning" fontSize="11">
                Waste {waste} J
              </text>
            </>
          )}
        </svg>
        <div className="grid gap-3 content-start">
          <label className="text-xs font-semibold text-muted">
            Input energy (J)
            <input
              className="mt-1 h-11 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 text-sm"
              value={input}
              inputMode="numeric"
              onChange={(e) => {
                const v = Number(e.target.value) || 0;
                setInput(v);
                if (useful > v) setUseful(v);
              }}
            />
          </label>
          <label className="text-xs font-semibold text-muted">
            Useful energy (J)
            <input
              className="mt-1 h-11 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 text-sm"
              value={useful}
              inputMode="numeric"
              onChange={(e) => clampUseful(Number(e.target.value) || 0)}
            />
          </label>
          <div className="rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-3">
            <p className="text-[11px] uppercase tracking-wide text-muted">Efficiency</p>
            <p className="font-mono text-2xl font-bold tabular-nums text-primary">{eff.toFixed(1)}%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
