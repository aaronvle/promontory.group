import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Testimonials from "../components/Testimonials";
import { EXAMPLE_TAG, EXAMPLES } from "../lib/work";

export const metadata: Metadata = {
  title: "Example builds",
  description:
    "Example GTM systems shipped for seed to Series B B2B teams. Client names shared with permission only.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader title="Example builds">
        <p>
          A few systems we&apos;ve shipped for B2B SaaS teams. Client names
          shared with permission only.
        </p>
      </PageHeader>

      <section className="px-6 pt-14 pb-8 sm:px-10 sm:pt-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-px overflow-hidden border border-[var(--color-foreground)]/15 bg-[var(--color-foreground)]/15">
          {EXAMPLES.map((example, i) => (
            <article
              key={example.title}
              className="grid gap-6 bg-[var(--color-background)] p-8 sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-10"
            >
              <span className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.3em] text-[var(--color-muted)]">
                0{i + 1}
              </span>
              <div className="flex flex-col gap-4">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                  {example.title}
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                  {example.summary}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {EXAMPLE_TAG}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  );
}
