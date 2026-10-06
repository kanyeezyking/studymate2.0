const FORMS = [
  { id: "tp", name: "TP form", rule: "y = a(x − h)² + k" },
  { id: "factor", name: "Factor form", rule: "y = a(x − p)(x − q)" },
  { id: "general", name: "General form", rule: "y = ax² + bx + c" },
] as const;

const ROWS: { feature: string; tp: string; factor: string; general: string }[] = [
  { feature: "Y-int", tp: "(0, ah² + k)", factor: "(0, apq)", general: "(0, c)" },
  {
    feature: "X-int",
    tp: "x = h ± √(−k / a)",
    factor: "x = p, x = q",
    general: "x = (−b ± √Δ) / 2a",
  },
  { feature: "AoS", tp: "x = h", factor: "x = (p + q) / 2", general: "x = −b / 2a" },
  {
    feature: "TP",
    tp: "(h, k)",
    factor: "((p + q) / 2, −a(p − q)² / 4)",
    general: "(−b / 2a, −Δ / 4a)",
  },
  {
    feature: "Min / Max",
    tp: "a > 0 min, a < 0 max",
    factor: "a > 0 min, a < 0 max",
    general: "a > 0 min, a < 0 max",
  },
];

export function FeaturesGrid() {
  return (
    <section className="mt-6">
      <h4 className="text-lg font-bold">Features grid</h4>
      <p className="mt-2 text-sm text-muted">
        Same five features, three forms. These are the formulas as they stand — learn the
        pronumerals, then pick the form that already shows the answer.
      </p>

      <div className="mt-4 hidden overflow-x-auto md:block">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr>
              <th className="border-b border-border px-3 py-3 text-xs font-semibold uppercase tracking-wide text-muted">
                Feature
              </th>
              {FORMS.map((form) => (
                <th key={form.id} className="border-b border-border px-3 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">{form.name}</p>
                  <p className="mt-1 font-mono text-sm font-semibold text-primary">{form.rule}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.feature}>
                <th className="border-b border-border px-3 py-3 font-bold text-foreground">{row.feature}</th>
                <td className="border-b border-border px-3 py-3 font-mono text-sm">{row.tp}</td>
                <td className="border-b border-border px-3 py-3 font-mono text-sm">{row.factor}</td>
                <td className="border-b border-border px-3 py-3 font-mono text-sm">{row.general}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 grid gap-3 md:hidden">
        {FORMS.map((form) => (
          <article
            key={form.id}
            className="rounded-[var(--radius-md)] border border-border bg-surface p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">{form.name}</p>
            <p className="mt-1 font-mono text-sm font-semibold text-primary">{form.rule}</p>
            <dl className="mt-3 space-y-2">
              {ROWS.map((row) => (
                <div
                  key={row.feature}
                  className="flex items-baseline justify-between gap-3 border-t border-border pt-2"
                >
                  <dt className="text-xs font-bold uppercase tracking-wide text-muted">{row.feature}</dt>
                  <dd className="text-right font-mono text-sm">
                    {form.id === "tp" ? row.tp : form.id === "factor" ? row.factor : row.general}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <p className="mt-3 text-xs text-muted">Δ = b² − 4ac. If −k/a is negative, TP form has no real x-intercepts.</p>
    </section>
  );
}
