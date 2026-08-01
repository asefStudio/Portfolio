import {
  about,
  beyondTheScreen,
  contact,
  designPrinciples,
  footer,
  projects,
  selectedWork,
} from "@/content/site";
import { Section } from "./layout";
import { Reveal, SectionHeader, Divider } from "./reveal";
import { ProjectExhibit } from "./project-gallery";
import { Action } from "./action";
import { RevealImage } from "./media";

const revealVariants = ["soft", "calm", "swift", "default"] as const;

export function SelectedWork() {
  return (
    <Section id="selected-work">
      <SectionHeader
        label={selectedWork.eyebrow ?? selectedWork.label}
        title={selectedWork.headline}
        description={selectedWork.intro}
      />

      <div className="mt-20 grid grid-cols-1 gap-y-24 sm:mt-28 sm:gap-y-32 lg:grid-cols-12 lg:gap-x-10">
        {projects.map((project, i) => (
          <Reveal
            key={project.slug}
            variant={revealVariants[i % revealVariants.length]}
            delay={0.04 + (i % 2) * 0.08}
            className={
              i === 0
                ? "lg:col-span-12"
                : i % 3 === 1
                  ? "lg:col-span-6 lg:col-start-1"
                  : i % 3 === 2
                    ? "lg:col-span-5 lg:col-start-8"
                    : "lg:col-span-8 lg:col-start-3"
            }
          >
            <ProjectExhibit project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
        <SectionHeader label={about.eyebrow} title={about.headline} variant="soft" />
        <div>
          <Reveal variant="calm" delay={0.08}>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {about.story?.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          {about.metrics?.length ? (
            <Reveal variant="swift" delay={0.18}>
              <Divider className="mt-12" />
              <dl className="mt-8 grid grid-cols-3 gap-6">
                {about.metrics.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-3xl leading-none sm:text-4xl">{stat.value}</dd>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </dl>
            </Reveal>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

export function DesignPrinciples() {
  return (
    <Section id="design-principles">
      <SectionHeader
        label={designPrinciples.eyebrow ?? designPrinciples.label}
        title={designPrinciples.headline}
        description={designPrinciples.intro}
      />
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:mt-24 sm:grid-cols-2">
        {designPrinciples.items?.map((item, i) => (
          <Reveal key={item.index} variant="calm" delay={i * 0.09}>
            <div className="approach-tile group h-full bg-background p-9 sm:p-12">
              <span className="font-display text-sm tabular-nums text-primary">{item.index}</span>
              <h3 className="mt-7 text-xl font-medium tracking-[-0.015em] sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-[1.7] text-muted-foreground sm:text-base">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function BeyondTheScreen() {
  return (
    <Section id="beyond-the-screen">
      <SectionHeader
        label={beyondTheScreen.eyebrow ?? beyondTheScreen.label}
        title={beyondTheScreen.headline}
        description={beyondTheScreen.intro}
      />
      <Reveal variant="swift" delay={0.14}>
        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          {beyondTheScreen.media?.src ? (
            <div className="aspect-[3/2] overflow-hidden rounded-3xl bg-secondary">
              <RevealImage
                src={beyondTheScreen.media.src}
                alt={beyondTheScreen.media.alt ?? ""}
                width={1600}
                height={1067}
                className="size-full"
                hoverScale="1.02"
              />
            </div>
          ) : null}

          <div>
            {beyondTheScreen.paragraphs?.length ? (
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {beyondTheScreen.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            ) : null}

            {beyondTheScreen.items?.length ? (
              <ul className="mt-8 flex flex-wrap gap-3">
                {beyondTheScreen.items.map((item) => (
                  <li
                    key={item}
                    className="chip rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {beyondTheScreen.callout?.action?.label && beyondTheScreen.callout.action.href ? (
              <div className="mt-10">
                <Action
                  href={beyondTheScreen.callout.action.href}
                  variant="quiet"
                  target="_blank"
                  rel="noreferrer"
                >
                  {beyondTheScreen.callout.action.label}
                </Action>
              </div>
            ) : null}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="glow-field pointer-events-none absolute inset-x-0 bottom-0 h-[30rem] rotate-180" />
      <div className="relative max-w-3xl">
        <SectionHeader
          label={contact.eyebrow ?? contact.label}
          title={contact.headline}
          variant="soft"
        />
        <Reveal variant="calm" delay={0.14}>
          {contact.intro ? (
            <p className="mt-6 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
              {contact.intro}
            </p>
          ) : null}
          {contact.email ? (
            <div className="mt-12">
              <Action href={`mailto:${contact.email}`}>{contact.email}</Action>
            </div>
          ) : null}
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="relative">
      <Divider />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>
          © {new Date().getFullYear()} {footer.copyrightName}
        </p>
        {footer.socials.length ? (
          <ul className="flex flex-wrap gap-6">
            {footer.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer" className="text-link">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </footer>
  );
}
