import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// PLACEHOLDER copy throughout — replace with Aaron's actual POV from the interview.
export default function PointOfView() {
  return (
    <section id="pov" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="01" title="Point of view" />
        <Reveal>
          <p
            className="max-w-3xl font-[family-name:var(--font-display)] font-bold leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)" }}
          >
            Strategy without build ships decks. Build without strategy ships
            spam. Early-stage GTM needs both in one head.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <Reveal>
            <p className="text-base leading-relaxed text-[var(--color-muted)]">
              Most early-stage companies bolt tools onto a motion that
              isn&apos;t proven yet — a CRM configured for a playbook that
              doesn&apos;t exist, outbound volume before signal, dashboards
              before definitions. The result is expensive noise.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-[var(--color-muted)]">
              Promontory works the other way: get the model, the market, and
              the motion right first — then engineer the system around it, so
              every tool, workflow, and dollar maps to how you actually sell.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
