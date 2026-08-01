import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero, navigation } from "@/content/site";
import { Container } from "./layout";
import { Action } from "./action";
import { HeroAmbient } from "./hero-ambient";
import { Nav } from "./nav";

export function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const ease = [0.16, 1, 0.3, 1] as const;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 32, mass: 0.35 });
  const bgY = useTransform(smooth, [0, 1], [0, 72]);
  const fgY = useTransform(smooth, [0, 1], [0, -28]);
  const fgOpacity = useTransform(smooth, [0, 0.82, 1], [1, 0.7, 0]);
  const headlineLength = hero.headline?.length ?? 0;

  const line = (i: number) => ({
    initial: reduced ? undefined : { opacity: 0, y: "0.34em" },
    animate: reduced ? undefined : { opacity: 1, y: "0em" },
    transition: { duration: 1.05, delay: 0.16 + i * 0.12, ease },
  });

  return (
    <header ref={ref} className="relative overflow-hidden">
      <HeroAmbient y={reduced ? undefined : bgY} />
      <Container>
        <motion.div
          style={reduced ? undefined : { y: fgY, opacity: fgOpacity }}
          className="relative flex min-h-[100svh] flex-col justify-between pt-7 pb-12 sm:pt-10 sm:pb-20"
        >
          <motion.nav
            initial={reduced ? undefined : { opacity: 0, y: -10 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="flex items-center justify-between text-sm"
          >
            {hero.name ? (
              <a href="#top" className="wordmark font-display text-lg tracking-tight">
                {hero.name}
              </a>
            ) : (
              <span />
            )}
            <Nav items={navigation} />
          </motion.nav>

          <div className="max-w-4xl py-20 sm:py-24 lg:py-28">
            {(hero.eyebrow ?? hero.label) ? (
              <motion.p
                {...line(0)}
                className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground"
              >
                <span className="size-1.5 rounded-full bg-primary" />
                {hero.eyebrow ?? hero.label}
              </motion.p>
            ) : null}

            {hero.headline?.length ? (
              <h1 className="mt-9 font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.95] text-balance-tight">
                {hero.headline.map((text, i) => (
                  <span key={text} className="block overflow-hidden pb-[0.06em]">
                    <motion.span className="block will-change-transform" {...line(i + 1)}>
                      {i === headlineLength - 1 ? (
                        <span className="text-primary">{text}</span>
                      ) : (
                        text
                      )}
                    </motion.span>
                  </span>
                ))}
              </h1>
            ) : null}

            {hero.description ? (
              <motion.p
                {...line(headlineLength + 1)}
                className="mt-9 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {hero.description}
              </motion.p>
            ) : null}

            {hero.primaryCta?.label || hero.secondaryCta?.label ? (
              <motion.div
                {...line(headlineLength + 2)}
                className="mt-12 flex flex-wrap items-center gap-6"
              >
                {hero.primaryCta?.label && hero.primaryCta.href ? (
                  <Action href={hero.primaryCta.href}>{hero.primaryCta.label}</Action>
                ) : null}
                {hero.secondaryCta?.label && hero.secondaryCta.href ? (
                  <a
                    href={hero.secondaryCta.href}
                    className="text-link text-sm text-muted-foreground"
                  >
                    {hero.secondaryCta.label}
                  </a>
                ) : null}
              </motion.div>
            ) : null}
          </div>

          {hero.location || hero.availability ? (
            <motion.div
              {...line(headlineLength + 3)}
              className="flex flex-wrap items-center justify-between gap-6 hairline-top pt-7 text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              {hero.location ? <span>{hero.location}</span> : null}
              {hero.availability ? <span>{hero.availability}</span> : null}
            </motion.div>
          ) : null}
        </motion.div>
      </Container>
    </header>
  );
}
