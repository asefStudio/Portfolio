import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Cursor-aware ambient light. A single fixed, compositor-only layer whose
 * radial highlight eases toward the pointer. No React state, no re-renders:
 * the rAF loop writes CSS custom properties directly on the element.
 */
export function CursorLight() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight * 0.32;
    let x = tx;
    let y = ty;
    let target = 0;
    let opacity = 0;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      target = 1;
    };
    const onLeave = () => {
      target = 0;
    };

    const tick = () => {
      // slow, confident easing — never snappy
      x += (tx - x) * 0.045;
      y += (ty - y) * 0.045;
      opacity += (target - opacity) * 0.04;
      el.style.setProperty("--cursor-x", `${x.toFixed(1)}px`);
      el.style.setProperty("--cursor-y", `${y.toFixed(1)}px`);
      el.style.opacity = opacity.toFixed(3);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced]);

  if (reduced) return null;

  return <div ref={ref} aria-hidden="true" className="cursor-light" style={{ opacity: 0 }} />;
}
