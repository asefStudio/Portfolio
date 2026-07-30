import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Premium image reveal: the frame settles from 1.02 to 1.00 while fading into
 * focus. Runs once, on load + in view, transform/opacity/filter only.
 */
export function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  width,
  height,
  loading = "lazy",
  hoverScale = "1.03",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  hoverScale?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.complete) setReady(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revealed = ready && inView;

  return (
    <div className={cn("image-frame", className)} style={{ ["--img-hover" as string]: hoverScale }}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        onLoad={() => setReady(true)}
        data-revealed={revealed ? "true" : "false"}
        className={cn("image-reveal size-full object-cover", imgClassName)}
      />
    </div>
  );
}
