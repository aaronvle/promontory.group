import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// PLACEHOLDER copy — rewrite from Aaron's interview answers.
// Name rendering ("Aaron Le" vs. full name) still to be confirmed.
export default function About() {
  return (
    <section id="about" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="05" title="About" />
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <div className="flex flex-col gap-2">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                Aaron Le
              </h3>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Founder, Promontory Group
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex max-w-2xl flex-col gap-5 text-base leading-relaxed text-[var(--color-muted)]">
              <p>
                Placeholder — Promontory Group is led by Aaron Le, an operator
                who has built revenue systems inside and alongside early-stage
                B2B SaaS companies including Seam, Truemed, Ito.ai, and
                OpenLoop.
              </p>
              <p>
                Placeholder — career arc, in-house roles, and the path to
                consulting go here: the specific experience that makes the
                strategy credible and the builds fast.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
