import { profile, projects, approach, skills } from "@/content/site";
import { Section } from "./layout";
import { Reveal, SectionHeader, Divider } from "./reveal";
import { ProjectExhibit } from "./project-gallery";
import { Action } from "./action";

const revealVariants = ["soft", "calm", "swift", "default"] as const;

export function Work() {
  return (
    <Section id="work">
      <SectionHeader
        label="Selected work"
        title="Four things I'd show you in person."
        description="Long engagements where the design decided how the product actually behaves — not how it looks in a deck."
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
            <ProjectExhibit project={project} index={i} total={projects.length} />
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
        <SectionHeader label="The short version" title="Clarity is the whole job." variant="soft" />
        <div>
          <Reveal variant="calm" delay={0.08}>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal variant="swift" delay={0.18}>
            <Divider className="mt-12" />
            <dl className="mt-8 grid grid-cols-3 gap-6">
              {profile.stats.map((stat) => (
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
        </div>
      </div>
    </Section>
  );
}

export function Approach() {
  return (
    <Section id="approach">
      <SectionHeader
        label="How I work"
        title="Four rules I don't negotiate."
        description="They hold whether the engagement is six weeks or two years."
      />
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:mt-24 sm:grid-cols-2">
        {approach.map((item, i) => (
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
      <Reveal variant="swift" delay={0.14}>
        <ul className="mt-14 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="chip rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>

    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="glow-field pointer-events-none absolute inset-x-0 bottom-0 h-[30rem] rotate-180" />
      <div className="relative max-w-3xl">
        <SectionHeader label="Say hello" title="Tell me where it's stuck." variant="soft" />
        <Reveal variant="calm" delay={0.14}>
          <p className="mt-6 max-w-xl text-base leading-[1.75] text-muted-foreground sm:text-lg">
            I take on a small number of projects each year, usually because the problem is
            interesting rather than because the timing is. One honest paragraph is enough to start.
          </p>
          <div className="mt-12">
            <Action href={`mailto:${profile.email}`}>{profile.email}</Action>
          </div>
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
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap gap-6">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
