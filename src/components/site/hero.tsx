import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/content/site";
import { Container } from "./layout";
import { Action } from "./action";
import { HeroAmbient } from "./hero-ambient";
import { Nav } from "./nav";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const ease = [0.16, 1, 0.3, 1] as const;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.4 });
  const bgY = useTransform(smooth, [0, 1], [0, 90]);
  const fgY = useTransform(smooth, [0, 1], [0, -34]);
  const fgOpacity = useTransform(smooth, [0, 0.85], [1, 0.35]);

  const line = (i: number) => ({
    initial: reduced ? undefined : { opacity: 0, y: "0.42em", filter: "blur(10px)" },
    animate: reduced ? undefined : { opacity: 1, y: "0em", filter: "blur(0px)" },
    transition: { duration: 1.25, delay: 0.2 + i * 0.14, ease },
  });

  return (
    <header ref={ref} className="relative overflow-hidden">
      <HeroAmbient y={reduced ? undefined : bgY} />
      <Container>
        <motion.div
          style={reduced ? undefined : { y: fgY, opacity: fgOpacity }}
          className="relative flex min-h-[92svh] flex-col justify-between pt-10 pb-20"
        >
          <motion.nav
            initial={reduced ? undefined : { opacity: 0, y: -8 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="flex items-center justify-between text-sm"
          >
            <a href="#top" className="wordmark font-display text-lg tracking-tight">
              {profile.name}
            </a>
            <Nav items={NAV} />
          </motion.nav>

          <div className="max-w-4xl py-24 sm:py-28">
            <motion.p
              {...line(0)}
              className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              {profile.role}
            </motion.p>

            <h1 className="mt-9 font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.95] text-balance-tight">
              {profile.headline.map((text, i) => (
                <span key={text} className="block overflow-hidden pb-[0.06em]">
                  <motion.span className="block will-change-transform" {...line(i + 1)}>
                    {i === profile.headline.length - 1 ? (
                      <span className="text-primary">{text}</span>
                    ) : (
                      text
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              {...line(profile.headline.length + 1)}
              className="mt-9 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {profile.subline}
            </motion.p>

            <motion.div
              {...line(profile.headline.length + 2)}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              <Action href={profile.cta.href}>{profile.cta.label}</Action>
              <a href="#work" className="text-link text-sm text-muted-foreground">
                Selected work
              </a>
            </motion.div>
          </div>

          <motion.div
            {...line(profile.headline.length + 3)}
            className="flex flex-wrap items-center justify-between gap-6 hairline-top pt-7 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span>{profile.location}</span>
            <span>Two engagements open for 2026</span>

          </motion.div>
        </motion.div>
      </Container>
    </header>
  );
}
