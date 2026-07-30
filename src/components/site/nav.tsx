import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Navigation with a gliding indicator. The underline animates between items
 * instead of appearing instantly — one shared element, transform-driven.
 */
export function Nav({
  items,
  className,
}: {
  items: { href: string; label: string }[];
  className?: string;
}) {
  const reduced = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<{ x: number; w: number } | null>(null);
  const [visible, setVisible] = useState(false);

  const move = (el: HTMLElement) => {
    const list = listRef.current;
    if (!list) return;
    const a = el.getBoundingClientRect();
    const b = list.getBoundingClientRect();
    setIndicator({ x: a.left - b.left, w: a.width });
    setVisible(true);
  };

  return (
    <div
      ref={listRef}
      onPointerLeave={() => setVisible(false)}
      className={cn("relative hidden items-center gap-9 sm:flex", className)}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onPointerEnter={(e) => move(e.currentTarget)}
          onFocus={(e) => move(e.currentTarget)}
          className="nav-item text-muted-foreground"
        >
          {item.label}
        </a>
      ))}

      {indicator ? (
        <motion.span
          aria-hidden="true"
          className="nav-indicator"
          initial={false}
          animate={{ x: indicator.x, width: indicator.w, opacity: visible ? 1 : 0 }}
          transition={
            reduced
              ? { duration: 0 }
              : { type: "tween", duration: 0.55, ease: [0.22, 1, 0.36, 1] }
          }
        />
      ) : null}
    </div>
  );
}
