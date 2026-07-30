import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";

/**
 * Buttery scrolling. Lenis drives a single rAF loop and only translates the
 * document — no layout thrash. Anchor links are routed through it so in-page
 * navigation shares the same easing as free scrolling.
 */
export function SmoothScroll() {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      lerp: 0.1,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -24, duration: 1.6 });
      history.replaceState(null, "", href);
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduced]);

  return null;
}
