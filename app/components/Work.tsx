import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// PLACEHOLDER case studies — every card below is illustrative structure only.
// Replace with real engagements. "XX" metrics are intentionally unfilled so
// nothing fabricated can ship by accident.
const PROJECTS = [
  {
    name: "Signal-Driven Outbound Engine",
    context: "B2B SaaS · Placeholder",
    problem:
      "Placeholder — outbound was manual, untargeted, and unmeasurable.",
    build:
      "Placeholder — signal capture across hiring, funding, and tech-stack changes, feeding enriched, trigger-based sequences with human review.",
    stack: "Clay · HubSpot · Instantly",
    outcome: "XX qualified meetings in the first XX days",
  },
  {
    name: "CRM Foundation Rebuild",
    context: "B2B SaaS · Placeholder",
    problem:
      "Placeholder — the CRM didn't reflect the sales motion; pipeline reporting couldn't be trusted.",
    build:
      "Placeholder — rebuilt object model, lifecycle stages, routing, and reporting around the actual deal cycle.",
    stack: "Salesforce · Marketing automation",
    outcome: "XX% pipeline visibility · forecast the board trusts",
  },
  {
    name: "GTM Plan & Comp Design",
    context: "B2B SaaS · Placeholder",
    problem:
      "Placeholder — no financial model connecting headcount, quota, and pipeline targets.",
    build:
      "Placeholder — GTM financial model, TAM build, and commission plan aligned to the company's stage and motion.",
    stack: "Modeling · TAM · Comp design",
    outcome: "XX-quarter plan adopted by leadership",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="03" title="Selected work" />
        <div className="flex flex-col gap-px overflow-hidden border border-[var(--color-foreground)]/15 bg-[var(--color-foreground)]/15">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name}>
              <article className="grid gap-6 bg-[var(--color-background)] p-8 sm:grid-cols-[1fr_2fr] sm:p-10">
                <div className="flex flex-col gap-3">
                  <span className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.3em] text-[var(--color-muted)]">
                    0{i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {project.context}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    <span className="font-medium text-[var(--color-foreground)]">
                      Problem —{" "}
                    </span>
                    {project.problem}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    <span className="font-medium text-[var(--color-foreground)]">
                      Build —{" "}
                    </span>
                    {project.build}
                  </p>
                  <div className="mt-2 flex flex-wrap items-baseline justify-between gap-3 border-t border-[var(--color-foreground)]/10 pt-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {project.stack}
                    </p>
                    <p className="font-[family-name:var(--font-display)] text-sm font-bold">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
