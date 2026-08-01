import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/site";
import { ArrowUpRight } from "lucide-react";
import { RevealImage } from "./media";

/**
 * Depth surface: a very subtle 3D translation plus a light source that tracks
 * the pointer. Values are written to CSS custom properties inside a pointer
 * handler — no React state, so hovering never re-renders.
 */
function DepthCard({
  children,
  className,
  intensity = 3,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (event: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", `${(0.5 - py) * intensity}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * intensity}deg`);
    el.style.setProperty("--px", `${px * 100}%`);
    el.style.setProperty("--py", `${py * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn(
        "depth-card group relative overflow-hidden rounded-3xl border border-border",
        className,
      )}
    >
      <span aria-hidden="true" className="depth-card-light" />
      {children}
    </article>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-border px-3 py-1 text-xs tracking-wide text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <DepthCard intensity={2}>
      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[30rem]">
          <RevealImage
            src={project.image}
            alt={`${project.title} — ${project.summary}`}
            width={1600}
            height={1200}
            loading="eager"
            className="absolute inset-0"
            hoverScale="1.03"
          />
        </div>
        <div className="relative flex flex-col justify-between gap-10 p-8 sm:p-10 lg:p-12">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-primary">
              <span>{project.featuredLabel}</span>
              <span className="h-px w-8 bg-primary/50" />
              <span className="text-muted-foreground">{project.year}</span>
            </div>
            <h3 className="mt-6 font-display text-4xl leading-none sm:text-5xl">{project.title}</h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
          </div>
          <div className="space-y-6">
            <Tags tags={project.tags} />
            <div className="flex items-center justify-between hairline-top pt-6 text-sm">
              <span className="text-muted-foreground">{project.role}</span>
              <span className="link-underline inline-flex items-center gap-1.5 font-medium">
                {project.ctaLabel}
                <ArrowUpRight className="action-arrow size-4" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </DepthCard>
  );
}

export function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <DepthCard className={cn("flex flex-col", className)}>
      <div className="aspect-[4/3] overflow-hidden">
        <RevealImage
          src={project.image}
          alt={`${project.title} — ${project.summary}`}
          width={1200}
          height={900}
          className="size-full"
          hoverScale="1.04"
        />
      </div>
      <div className="relative flex flex-1 flex-col gap-5 p-7 sm:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl leading-none sm:text-3xl">{project.title}</h3>
          <span className="text-xs tracking-widest text-muted-foreground">{project.year}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <div className="mt-auto pt-2">
          <Tags tags={project.tags} />
        </div>
      </div>
    </DepthCard>
  );
}
