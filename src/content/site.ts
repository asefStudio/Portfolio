/**
 * Site content. Keep all copy + data here so layout stays presentational.
 * Swap this module for a CMS fetch later without touching components.
 */

import kesho from "@/assets/project-kesho.jpg";
import knotmatter from "@/assets/knotmatter.jpg";
import synxly from "@/assets/project-synxly.jpg";
import trace from "@/assets/project-trace.jpg";

export type QuoteBlock = {
  text?: string;
  attribution?: string;
};

export type TimelineItem = {
  label?: string;
  title?: string;
  body?: string;
};

export type CalloutBlock = {
  title?: string;
  body?: string;
  action?: {
    label?: string;
    href?: string;
  };
};

export type NarrativeSection = {
  label?: string;
  headline?: string;
  intro?: string;
  paragraphs?: string[];
  quote?: QuoteBlock;
  highlights?: string[];
  timeline?: TimelineItem[];
  callout?: CalloutBlock;
  media?: {
    src?: string;
    alt?: string;
  };
};

export type HeroContent = Omit<NarrativeSection, "headline"> & {
  name?: string;
  eyebrow?: string;
  headline?: string[];
  description?: string;
  primaryCta?: {
    label?: string;
    href?: string;
  };
  secondaryCta?: {
    label?: string;
    href?: string;
  };
  location?: string;
  availability?: string;
};

export type ContactContent = NarrativeSection & {
  eyebrow?: string;
  email?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: string;
  tags: string[];
  image: string;
  ctaLabel: string;
  featuredLabel: string;
  ariaLabel: string;
  positionLabel: string;
  narrative?: NarrativeSection;
  href?: string;
  featured?: boolean;
};

export const metadata = {
  title: "Asef — Product Designer",
  description:
    "Product designer building thoughtful digital experiences, while exploring the connection between technology, creativity, and physical making.",
  author: "Asef",
};

export const navigation = [
  { href: "#selected-work", label: "Selected work" },
  { href: "#design-principles", label: "Principles" },
  { href: "#about", label: "About" },
  { href: "#beyond-the-screen", label: "Beyond the screen" },
  { href: "#contact", label: "Contact" },
];

export const hero: HeroContent = {
  name: "Asef",
  eyebrow: "Product Designer",
  headline: ["Product designer building", "thoughtful digital experiences,"],
  description:
    "while exploring the connection between technology, creativity, and physical making.",
  primaryCta: { label: "Start a conversation", href: "mailto:asefshahi.design@gmail.com" },
  secondaryCta: { label: "View selected work", href: "#selected-work" },
};

export const selectedWork: NarrativeSection & { eyebrow?: string } = {
  eyebrow: "Selected work",
  headline: "Three products, three kinds of product thinking.",
  intro: "A working web app, an AI operations concept, and a mobile exploration.",
};

export const about: NarrativeSection & {
  eyebrow?: string;
  story?: string[];
  metrics?: { value?: string; label?: string }[];
} = {
  eyebrow: "About",
  headline: "A practice shaped by design, technology, and making.",
  story: [
    "I’m a Product Designer working across design and technology, increasingly focused on exploring product ideas, prototyping them, and turning concepts into working experiences.",
    "I’m interested in more than interfaces: how interactions, technology, visual language, and product decisions work together as a system. New tools and physical making are part of that process — ways to test ideas, learn through experimentation, and keep building.",
  ],
};

export const contact: ContactContent = {
  eyebrow: "Contact",
  headline: "Let’s make something worth making.",
  intro:
    "I’m open to thoughtful digital products, interesting collaborations, and ambitious ideas.",
  email: "asefshahi.design@gmail.com",
};

export const footer: {
  copyrightName: string;
  socials: { label: string; href: string }[];
} = {
  copyrightName: "Asef",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asefshahi" },
    { label: "GitHub", href: "https://github.com/asefStudio" },
  ],
};

export const projects: Project[] = [
  {
    slug: "kesho",
    title: "Kesho",
    summary:
      "An AI stylist and digital wardrobe product for outfit discovery, recommendations, and contextual styling — developed into a working web app.",
    role: "Product Designer",
    year: "Working web app",
    tags: ["AI-assisted styling", "Digital wardrobe", "Contextual recommendations"],
    image: kesho,
    ctaLabel: "Working web app",
    featuredLabel: "Flagship product",
    ariaLabel: "Kesho — AI stylist and digital wardrobe product",
    positionLabel: "Project 01: Kesho",
    narrative: {
      intro: "A broad product idea translated into a coherent working experience.",
      highlights: [
        "AI-assisted personal styling",
        "Digital wardrobe and closet management",
        "Outfit discovery and recommendations",
      ],
      callout: { title: "Current state", body: "Working web-app implementation." },
    },
    featured: true,
  },
  {
    slug: "synxly",
    title: "Synxly",
    summary:
      "A 0 → 1 AI operations concept that starts with a request, then makes plans, knowledge sources, and rules reviewable before activation.",
    role: "Product Designer",
    year: "Product concept",
    tags: ["AI UX", "Intent before configuration", "Reviewable plans"],
    image: synxly,
    ctaLabel: "Product concept",
    featuredLabel: "Systems thinking",
    ariaLabel: "Synxly — AI operations product concept",
    positionLabel: "Project 02: Synxly",
    narrative: {
      intro: "A concept for small hospitality and retail teams, balancing simplicity with agency.",
      highlights: [
        "Natural-language intent as a starting point",
        "Progressive disclosure of system structure",
        "Visible knowledge sources, rules, and human handoff",
      ],
      callout: { title: "Core decision", body: "Intent before configuration." },
    },
  },
  {
    slug: "trace",
    title: "Trace",
    summary:
      "A mobile product concept for rediscovering places, products, media, and experiences from incomplete memories — designed around recognition over exact recall.",
    role: "Product Designer",
    year: "Mobile concept",
    tags: ["Recognition over recall", "Memory cues", "Contextual retrieval"],
    image: trace,
    ctaLabel: "Mobile concept",
    featuredLabel: "Product exploration",
    ariaLabel: "Trace — mobile product concept for incomplete memories",
    positionLabel: "Project 03: Trace",
    narrative: {
      intro:
        "An exploration of product interactions built for fragments, context, and uncertainty.",
      highlights: [
        "Natural-language memory fragments",
        "Editable personal context and memory cues",
        "A personal library that evolves as memory becomes clearer",
      ],
      callout: { title: "Core decision", body: "Recognition over exact recall." },
    },
  },
];

export const designPrinciples: NarrativeSection & {
  eyebrow?: string;
  items?: { index?: string; title?: string; body?: string }[];
} = {
  eyebrow: "Design principles",
  headline: "A practical way of making products.",
  intro: "A few principles that guide the work from first idea to working experience.",
  items: [
    {
      index: "01",
      title: "Clarity before decoration",
      body: "Make a product easier to understand before making it more impressive to look at. Visual decisions should support hierarchy, behavior, and purpose.",
    },
    {
      index: "02",
      title: "Build to understand",
      body: "Ideas become clearer when they are tangible. Prototypes, experiments, and working products are part of the thinking process.",
    },
    {
      index: "03",
      title: "Systems, with room for character",
      body: "Consistency creates trust and scale, but products should not become anonymous. Build coherent systems while preserving what makes an experience recognizable.",
    },
  ],
};

export const beyondTheScreen: NarrativeSection & { eyebrow?: string; items?: string[] } = {
  eyebrow: "Beyond the screen",
  headline: "Some ideas make more sense when they leave the screen.",
  intro:
    "KnotMatter is a physical-product and creative exploration where digital design becomes physical form.",
  paragraphs: [
    "It is a space to explore form and geometry through digital fabrication, materials, and manufacturing constraints — translating designed objects into physical artifacts.",
    "The work keeps product thinking connected to making: learning from what materials and processes make possible.",
  ],
  items: ["Form and geometry", "Digital fabrication", "Materials and manufacturing"],
  callout: {
    action: { label: "Explore KnotMatter", href: "https://top-buttons-013728.framer.app/" },
  },
  media: {
    src: knotmatter,
    alt: "KnotMatter: Designed to Be Kept, a physical-object exploration",
  },
};
