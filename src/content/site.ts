/**
 * Site content. Keep all copy + data here so layout stays presentational.
 * Swap this module for a CMS fetch later without touching components.
 */

import atlas from "@/assets/project-atlas.jpg";
import lumen from "@/assets/project-lumen.jpg";
import north from "@/assets/project-north.jpg";
import form from "@/assets/project-form.jpg";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: string;
  tags: string[];
  image: string;
  href?: string;
  featured?: boolean;
};

export const profile = {
  name: "Elin Marchetti",
  role: "Interface design, practiced slowly",
  location: "Copenhagen — working with teams anywhere",
  email: "hello@elinmarchetti.com",
  headline: ["Software should", "feel obvious", "before it feels new."],
  subline:
    "I design the parts of a product people never comment on — the order of things, the weight of a word, the second something takes to respond.",
  cta: { label: "Start a conversation", href: "#contact" },
  about: [
    "Nine years in fintech, health and developer tools taught me that clarity isn't a style. It's the difference between a person deciding and a person hesitating.",
    "I work in systems — type scales, spacing logic, motion curves — because craft that only survives on one screen isn't craft. It's a mood board.",
    "Most of my job is subtraction. What's left should feel less like a decision someone made and more like the only way it could have been.",
  ],
  stats: [
    { value: "9 yrs", label: "In practice" },
    { value: "40+", label: "Products shipped" },
    { value: "4", label: "Systems authored" },
  ],
  socials: [
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Read.cv", href: "https://read.cv" },
  ],
};


export const projects: Project[] = [
  {
    slug: "atlas",
    title: "Atlas",
    summary:
      "A private banking app rebuilt around a single idea: show people only what they need to decide. Redesigned the information model, motion language and a 200-component system.",
    role: "Lead Product Designer",
    year: "2025",
    tags: ["Fintech", "Design system", "iOS"],
    image: atlas,
    featured: true,
  },
  {
    slug: "lumen",
    title: "Lumen",
    summary: "Analytics surface for a data platform, reduced from 14 screens to 4.",
    role: "Product Design",
    year: "2024",
    tags: ["SaaS", "Data"],
    image: lumen,
  },
  {
    slug: "north",
    title: "North",
    summary: "Hardware companion interface for a studio-grade audio device.",
    role: "Interface & Motion",
    year: "2024",
    tags: ["Hardware", "Motion"],
    image: north,
  },
  {
    slug: "form",
    title: "Form",
    summary: "Editorial identity and type system for an independent design journal.",
    role: "Art Direction",
    year: "2023",
    tags: ["Editorial", "Type"],
    image: form,
  },
];

export const approach = [
  {
    index: "01",
    title: "Start by removing",
    body: "I map the handful of decisions a person actually makes, then delete everything standing between them and the next one.",
  },
  {
    index: "02",
    title: "Design the system, not the screen",
    body: "Tokens, scales, components. If the tenth screen looks worse than the first, the system was decoration.",
  },
  {
    index: "03",
    title: "Details are the argument",
    body: "Typography, spacing, easing. Nobody names them. Everybody feels them when they're wrong.",
  },
  {
    index: "04",
    title: "Finish in production",
    body: "I work inside the codebase with engineers, in their language, so what ships is what was intended.",
  },
];

export const skills = [
  "Product strategy",
  "Interaction design",
  "Design systems",
  "Prototyping",
  "Motion design",
  "Typography",
  "Design engineering",
  "Research",
];

