import { useRef, type PointerEvent } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/site";
import { ArrowUpRight } from "lucide-react";
import { RevealImage } from "./media";

/**
 * Editorial exhibit: an image plate as the hero, with meta that reveals
 * progressively on hover. Pointer lighting is written to CSS custom properties
 * so hovering never re-renders React.
 */

type Layout = {
  /** aspect ratio utility for the plate */
  ratio: string;
  /** extra vertical rhythm above the exhibit */
  lead: string;
  /** where meta sits relative to the plate */
  align: "start" | "end";
  eager?: boolean;
};

const layouts: Layout[] = [
  { ratio: "aspect-[16/9]", lead: "", align: "start", eager: true },
  { ratio: "aspect-[4/5]", lead: "lg:mt-8", align: "start" },
  { ratio: "aspect-[3/4]", lead: "lg:mt-28", align: "end" },
  { ratio: "aspect-[3/2]", lead: "lg:mt-10", align: "start" },
];

export function ProjectExhibit({ project, index }: { project: Project; index: number }) {
  const layout = layouts[index % layouts.length];
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--px", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--py", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  const projectContent = (
    <>
      <div ref={ref} onPointerMove={onMove} className={cn("exhibit-plate", layout.ratio)}>
        <RevealImage
          src={project.image}
          alt={`${project.title} — ${project.summary}`}
          width={1600}
          height={1200}
          loading={layout.eager ? "eager" : "lazy"}
          className="size-full"
          hoverScale="1.045"
        />
        <span aria-hidden="true" className="exhibit-light" />
      </div>

      <div
        className={cn(
          "mt-7 flex flex-col gap-4 sm:mt-9",
          layout.align === "end" && "lg:items-end lg:text-right",
        )}
      >
        <div className="flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="tabular-nums text-primary">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-6 bg-hairline" />
          <span>{project.year}</span>
          <span className="h-px w-6 bg-hairline" />
          <span>{project.role}</span>
        </div>

        <h3 className="exhibit-title font-display text-3xl leading-none sm:text-4xl lg:text-5xl">
          {project.title}
        </h3>

        <div
          className={cn(
            "exhibit-reveal flex flex-col gap-5",
            layout.align === "end" && "lg:items-end",
          )}
        >
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.summary}
          </p>

          <ul className={cn("flex flex-wrap gap-2", layout.align === "end" && "lg:justify-end")}>
            {project.tags.map((tag, i) => (
              <li
                key={tag}
                className="exhibit-tag rounded-full border border-border px-3 py-1 text-xs tracking-wide text-muted-foreground"
                style={{ ["--i" as string]: i }}
              >
                {tag}
              </li>
            ))}
          </ul>

          <span className="exhibit-cta inline-flex items-center gap-2 text-sm font-medium">
            <span className="exhibit-cta-label">{project.ctaLabel}</span>
            {project.href ? (
              <ArrowUpRight className="action-arrow size-4" aria-hidden="true" />
            ) : null}
          </span>
        </div>
      </div>
    </>
  );

  return (
    <article className={cn("exhibit group", layout.lead)}>
      {project.href ? (
        <a
          href={project.href}
          className="block focus-visible:outline-none"
          aria-label={project.ariaLabel}
        >
          {projectContent}
        </a>
      ) : (
        <div>{projectContent}</div>
      )}

      <span className="sr-only">{project.positionLabel}</span>
    </article>
  );
}
