import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// PLACEHOLDER copy — confirm the actual engagement flow with Aaron.
const STEPS = [
  {
    title: "Audit",
    description:
      "A structured look at your motion, model, stack, and data. Where revenue leaks, where effort is wasted, what to build first.",
  },
  {
    title: "Design",
    description:
      "The plan: financial model, market map, system architecture, and a sequenced roadmap tied to your stage and runway.",
  },
  {
    title: "Build",
    description:
      "Hands-on implementation — CRM, workflows, enrichment, outbound infrastructure. Shipped, documented, and owned by you.",
  },
  {
    title: "Operate",
    description:
      "Ongoing fractional support: run the system, iterate on experiments, and hand off cleanly as your team grows into it.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="04" title="How we work" />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <li className="flex h-full flex-col gap-4">
                <span className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.3em] text-[var(--color-muted)]">
                  0{i + 1}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
