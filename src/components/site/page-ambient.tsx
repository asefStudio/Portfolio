import { motion, useReducedMotion } from "framer-motion";

/**
 * Site-wide atmosphere: an almost invisible animated grain and an extremely
 * slow moving gradient. Fixed layer, opacity/transform only.
 */
export function PageAmbient() {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden="true" className="page-ambient">
      <motion.div
        className="page-ambient-gradient"
        {...(reduced
          ? {}
          : {
              animate: { x: ["-3%", "3%", "-3%"], y: ["-2%", "2%", "-2%"] },
              transition: {
                duration: 90,
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1],
              },
            })}
      />
      <motion.div
        className="page-ambient-grain"
        {...(reduced
          ? {}
          : {
              animate: { opacity: [0.022, 0.034, 0.022] },
              transition: { duration: 14, repeat: Infinity, ease: [0.45, 0, 0.55, 1] },
            })}
      />
    </div>
  );
}
