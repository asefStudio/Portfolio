import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/hero";
import { CursorLight } from "@/components/site/cursor-light";
import { PageAmbient } from "@/components/site/page-ambient";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { Work, About, Approach, Contact, Footer } from "@/components/site/sections";

const title = "Elin Marchetti — Product & Interface Designer";
const description =
  "Portfolio of Elin Marchetti, a product and interface designer turning complex software into calm, precise experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="top">
      <SmoothScroll />
      <PageAmbient />
      <CursorLight />
      <Hero />
      <Work />
      <About />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
