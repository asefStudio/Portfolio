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
  ctaLabel: string;
  href?: string;
  featured?: boolean;
};

export const profile = {
  name: "[Portfolio Name]",
  role: "[Hero Eyebrow]",
  location: "[Location]",
  availability: "[Availability Note]",
  email: "[Contact Email]",
  headline: ["[Hero Headline]"],
  subline: "[Hero Description]",
  cta: { label: "[Hero Primary Action]", href: "#contact" },
  about: ["[About Story — Part 1]", "[About Story — Part 2]", "[About Story — Part 3]"],
  stats: [
    { value: "[Metric 1]", label: "[Metric 1 Label]" },
    { value: "[Metric 2]", label: "[Metric 2 Label]" },
    { value: "[Metric 3]", label: "[Metric 3 Label]" },
  ],
  socials: [
    { label: "[Social Link 1]", href: "#" },
    { label: "[Social Link 2]", href: "#" },
    { label: "[Social Link 3]", href: "#" },
  ],
};

export const projects: Project[] = [
  {
    slug: "project-01",
    title: "[Project 01 Title]",
    summary: "[Project 01 Summary]",
    role: "[Project 01 Role]",
    year: "[Project 01 Year]",
    tags: ["[Project 01 Tag 1]", "[Project 01 Tag 2]", "[Project 01 Tag 3]"],
    image: atlas,
    ctaLabel: "[Project 01 Case Study Link]",
    featured: true,
  },
  {
    slug: "project-02",
    title: "[Project 02 Title]",
    summary: "[Project 02 Summary]",
    role: "[Project 02 Role]",
    year: "[Project 02 Year]",
    tags: ["[Project 02 Tag 1]", "[Project 02 Tag 2]"],
    image: lumen,
    ctaLabel: "[Project 02 Case Study Link]",
  },
  {
    slug: "project-03",
    title: "[Project 03 Title]",
    summary: "[Project 03 Summary]",
    role: "[Project 03 Role]",
    year: "[Project 03 Year]",
    tags: ["[Project 03 Tag 1]", "[Project 03 Tag 2]"],
    image: north,
    ctaLabel: "[Project 03 Case Study Link]",
  },
  {
    slug: "project-04",
    title: "[Project 04 Title]",
    summary: "[Project 04 Summary]",
    role: "[Project 04 Role]",
    year: "[Project 04 Year]",
    tags: ["[Project 04 Tag 1]", "[Project 04 Tag 2]"],
    image: form,
    ctaLabel: "[Project 04 Case Study Link]",
  },
];

export const designPrinciples = [
  {
    index: "01",
    title: "[Principle 01 Title]",
    body: "[Principle 01 Description]",
  },
  {
    index: "02",
    title: "[Principle 02 Title]",
    body: "[Principle 02 Description]",
  },
  {
    index: "03",
    title: "[Principle 03 Title]",
    body: "[Principle 03 Description]",
  },
  {
    index: "04",
    title: "[Principle 04 Title]",
    body: "[Principle 04 Description]",
  },
];

export const beyondTheScreen = [
  "[Beyond the Screen Item 01]",
  "[Beyond the Screen Item 02]",
  "[Beyond the Screen Item 03]",
  "[Beyond the Screen Item 04]",
  "[Beyond the Screen Item 05]",
  "[Beyond the Screen Item 06]",
  "[Beyond the Screen Item 07]",
  "[Beyond the Screen Item 08]",
];
