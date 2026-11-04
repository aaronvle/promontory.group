import type { Metadata } from "next";
import IntroCallLink from "../components/IntroCallLink";
import PageHeader from "../components/PageHeader";
import {
  ENGAGEMENTS,
  FAQS,
  PRICING_LINE,
  PROCESS,
} from "../lib/engagements";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "Audits, build sprints, and a monthly retainer for seed to Series B B2B teams. Fixed fees for audits and sprints; flat monthly for retainers.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHeader title="How we work" />

      <section className="px-6 pt-14 sm:px-10 sm:pt-16">
        <div className="mx-auto grid max-w-5xl gap-px overflow-hidden border border-[var(--color-foreground)]/15 bg-[var(--color-foreground)]/15 lg:grid-cols-3">
          {ENGAGEMENTS.map((engagement) => (
            <article
              key={engagement.id}
              id={engagement.id}
              className="flex scroll-mt-8 flex-col gap-6 bg-[var(--color-background)] p-8 sm:p-10"
            >
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                {engagement.title}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {engagement.summary}
              </p>
              {engagement.deliverables ? (
                <ul className="border-t border-[var(--color-foreground)]/10">
                  {engagement.deliverables.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[var(--color-foreground)]/10 py-2.5 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {engagement.note ? (
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {engagement.note}
                </p>
              ) : null}
              <IntroCallLink className="mt-auto self-start">
                {engagement.cta}
              </IntroCallLink>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-5xl text-sm leading-relaxed text-[var(--color-muted)]">
          {PRICING_LINE}
        </p>
      </section>

      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.25em]">
            Process
          </h2>
          <ol className="mt-10 grid list-none gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="flex h-full flex-col gap-4">
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
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 pb-8 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.25em]">
            FAQ
          </h2>
          <div className="mt-8 flex flex-col border-t border-[var(--color-foreground)]/10">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-[var(--color-foreground)]/10"
              >
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 py-5 font-[family-name:var(--font-display)] text-base font-bold tracking-tight [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    className="text-[var(--color-muted)] transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-[var(--color-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
