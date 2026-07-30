import { motion, useReducedMotion, type MotionValue } from "framer-motion";

/**
 * Ambient hero backdrop: slow drifting light orbs, a gradient mesh and a
 * static grain overlay with a very slow opacity breath. Purely presentational.
 * All motion is transform/opacity only to stay on the compositor.
 */
export function HeroAmbient({ y }: { y?: MotionValue<number> }) {
  const reduced = useReducedMotion();
  const ease = [0.45, 0, 0.55, 1] as const;

  const drift = (
    x: number[],
    yv: number[],
    s: number[],
    duration: number,
  ) =>
    reduced
      ? {}
      : {
          animate: { x, y: yv, scale: s },
          transition: { duration, repeat: Infinity, repeatType: "mirror" as const, ease },
        };

  return (
    <motion.div
      aria-hidden="true"
      style={y ? { y } : undefined}
      className="pointer-events-none absolute inset-x-0 -top-24 h-[54rem] overflow-hidden"
    >
      <div className="glow-field absolute inset-0 opacity-90" />

      <motion.div
        className="ambient-orb absolute left-[8%] top-[6%] size-[34rem] opacity-[0.55]"
        style={{ background: "var(--orb-primary)" }}
        {...drift([0, 60, -30], [0, 40, 10], [1, 1.08, 0.98], 38)}
      />
      <motion.div
        className="ambient-orb absolute right-[4%] top-[18%] size-[30rem] opacity-40"
        style={{ background: "var(--orb-cool)" }}
        {...drift([0, -50, 20], [0, -30, 25], [1, 1.06, 1.02], 46)}
      />
      <motion.div
        className="ambient-orb absolute left-[38%] top-[42%] size-[26rem] opacity-30"
        style={{ background: "var(--orb-soft)" }}
        {...drift([0, 30, -40], [0, -25, 15], [1, 1.1, 1], 54)}
      />

      <motion.div
        className="mesh-veil absolute inset-0"
        {...(reduced
          ? {}
          : {
              animate: { opacity: [0.32, 0.5, 0.32] },
              transition: { duration: 24, repeat: Infinity, ease },
            })}
      />

      <motion.div
        className="grain-layer absolute inset-0"
        {...(reduced
          ? {}
          : {
              animate: { opacity: [0.035, 0.055, 0.035] },
              transition: { duration: 9, repeat: Infinity, ease },
            })}
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </motion.div>
  );
}
