import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-[var(--shadow-border)] md:p-7",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PanelTitle({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-6">
      {kicker ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{kicker}</p>
      ) : null}
      <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground">{title}</h2>
      {description ? <p className="mt-2 max-w-2xl text-sm text-muted">{description}</p> : null}
    </header>
  );
}
