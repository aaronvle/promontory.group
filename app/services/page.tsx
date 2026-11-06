import type { Metadata } from "next";
import CtaBand from "../components/CtaBand";
import PageHeader from "../components/PageHeader";
import { PRACTICES } from "../lib/services";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Four practices. Take one on its own or combine them. Everything is built in your tools and owned by you.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="What we do">
        <p>
          Four practices. Take one on its own or combine them. Everything is
          built in your tools and owned by you.
        </p>
      </PageHeader>

      <div className="mx-auto mt-16 max-w-5xl px-6 sm:mt-20 sm:px-10">
        {PRACTICES.map((practice) => (
          <article
            key={practice.id}
            id={practice.id}
            className="scroll-mt-8 border-t border-[var(--color-foreground)]/15 py-14 sm:py-16"
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                {practice.title}
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-pretty text-base leading-relaxed sm:text-lg">
                  {practice.promise}
                </p>
                <ul className="border-t border-[var(--color-foreground)]/10">
                  {practice.includes.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[var(--color-foreground)]/10 py-3 text-sm leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {practice.note ? (
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {practice.note}
                  </p>
                ) : null}
                {practice.tools ? (
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {practice.tools.join(" · ")}
                  </p>
                ) : null}
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  <span className="font-medium text-[var(--color-foreground)]">
                    Example:{" "}
                  </span>
                  {practice.example}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
