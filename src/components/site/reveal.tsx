import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Reveal timings intentionally differ per intent so successive sections never
 * feel mechanically identical.
 */
const TIMING = {
  default: { duration: 0.9, y: 24, ease: [0.22, 1, 0.36, 1] },
  calm: { duration: 1.15, y: 18, ease: [0.16, 1, 0.3, 1] },
  swift: { duration: 0.7, y: 28, ease: [0.25, 1, 0.32, 1] },
  soft: { duration: 1.4, y: 12, ease: [0.16, 1, 0.3, 1] },
} as const;

export type RevealVariant = keyof typeof TIMING;

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "default",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}) {
  const reduced = useReducedMotion();
  const t = TIMING[variant];

  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : { opacity: 0, y: t.y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: t.duration, delay, ease: t.ease }}
    >
      {children}
    </motion.div>
  );
}

/** Thin separator that softly fades into view while scrolling. */
export function Divider({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={cn("divider-line", className)}
      initial={reduced ? undefined : { opacity: 0, scaleX: 0.92 }}
      whileInView={reduced ? undefined : { opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  variant = "calm",
}: {
  label?: string;
  title?: string;
  description?: string;
  className?: string;
  variant?: RevealVariant;
}) {
  if (!label && !title && !description) return null;

  return (
    <Reveal variant={variant} className={cn("max-w-2xl", className)}>
      {label ? (
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">{label}</p>
      ) : null}
      {title ? (
        <h2 className="mt-5 font-display text-4xl leading-[1.05] text-balance-tight sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
