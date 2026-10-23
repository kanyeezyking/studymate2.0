import { MATHS_UNITS, questionsForScope } from "@/lib/science/units";

export function ScopeSelect({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <select
      className={className ?? "h-11 rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm text-foreground"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Maths unit or part"
    >
      <option value="all">Mix all maths ({questionsForScope("all", "maths").length})</option>
      {MATHS_UNITS.map((unit) => {
        const whole = questionsForScope(`unit:${unit.id}`, "maths").length;
        return (
          <optgroup key={unit.id} label={unit.title}>
            <option value={`unit:${unit.id}`}>
              Whole {unit.title} ({whole})
            </option>
            {unit.divisions.map((div) => {
              const count = questionsForScope(`div:${div.id}`, "maths").length;
              if (count === 0) return null;
              return (
                <option key={div.id} value={`div:${div.id}`}>
                  {div.short} ({count})
                </option>
              );
            })}
          </optgroup>
        );
      })}
    </select>
  );
}
