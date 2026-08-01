import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/hero";
import { CursorLight } from "@/components/site/cursor-light";
import { PageAmbient } from "@/components/site/page-ambient";
import { SmoothScroll } from "@/components/site/smooth-scroll";
import { metadata } from "@/content/site";
import {
  SelectedWork,
  DesignPrinciples,
  About,
  BeyondTheScreen,
  Contact,
  Footer,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: metadata.title },
      { name: "description", content: metadata.description },
      { property: "og:title", content: metadata.title },
      { property: "og:description", content: metadata.description },
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
