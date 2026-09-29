import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] text-sm font-semibold transition-[background-color,border-color,color,transform] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border border-primary hover:bg-primary-hover",
        action: "bg-secondary text-secondary-foreground border border-secondary hover:bg-secondary-hover",
        outline:
          "bg-surface-hover text-foreground border border-border hover:bg-primary-hover hover:text-primary-foreground hover:border-primary-hover",
        ghost: "bg-transparent text-muted border border-transparent hover:bg-surface-hover hover:text-foreground",
        danger: "bg-transparent text-danger border border-danger hover:bg-danger hover:text-white",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-6",
        full: "h-12 w-full px-5",
      },
    },
    defaultVariants: { variant: "outline", size: "default" },
  },
);

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
