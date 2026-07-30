import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/hero";
import { CursorLight } from "@/components/site/cursor-light";
import { PageAmbient } from "@/components/site/page-ambient";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import {
  SelectedWork,
  DesignPrinciples,
  About,
  BeyondTheScreen,
  Contact,
  Footer,
} from "@/components/site/sections";

const title = "[Portfolio Name] — [Portfolio Discipline]";
const description = "[Portfolio Description]";

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
      <SelectedWork />
      <DesignPrinciples />
      <About />
      <BeyondTheScreen />
      <Contact />
      <Footer />
    </main>
  );
}
