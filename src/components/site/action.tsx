import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { useRef, type AnchorHTMLAttributes, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

const actionVariants = cva(
  "action group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary: "action-primary bg-primary px-6 py-3.5 text-primary-foreground",
        ghost: "action-ghost border border-border px-6 py-3.5 text-foreground",
        quiet: "link-underline text-muted-foreground hover:text-foreground",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ActionProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof actionVariants> & { withArrow?: boolean };

export function Action({
  className,
  variant,
  children,
  withArrow = true,
  ...props
}: ActionProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Highlight follows the pointer across the button surface.
  const onMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--px", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--py", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <a
      ref={ref}
      onPointerMove={variant === "quiet" ? undefined : onMove}
      className={cn(actionVariants({ variant }), className)}
      {...props}
    >
      {variant !== "quiet" ? (
        <span aria-hidden="true" className="action-highlight" />
      ) : null}
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {children}
        {withArrow ? (
          <ArrowUpRight className="action-arrow size-4" aria-hidden="true" />
        ) : null}
      </span>
    </a>
  );
}
