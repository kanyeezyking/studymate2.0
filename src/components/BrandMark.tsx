import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-9 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="9" className="fill-surface" />
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="8.25"
        className="fill-none stroke-border"
        strokeWidth="1.5"
      />
      <path
        d="M8 22.5c3.2-6.4 5.1-9.6 8-13.5 2.9 3.9 4.8 7.1 8 13.5"
        className="fill-none stroke-primary"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="12.2" r="2.1" className="fill-secondary" />
    </svg>
  );
}
