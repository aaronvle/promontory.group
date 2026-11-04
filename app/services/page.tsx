import type { Metadata } from "next";
import CtaBand from "../components/CtaBand";
import PageHeader from "../components/PageHeader";
import { SERVICES_FOOTNOTE, SYSTEMS } from "../lib/services";

export const metadata: Metadata = {
  title: "What we build",
  description:
    "Four systems, built in your tools, owned by you. Signal-based outbound, enrichment, inbound automation, and GTM reporting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="What we build">
        <p>Four systems, built in your tools, owned by you.</p>
      </PageHeader>

      <div className="mx-auto mt-16 max-w-5xl px-6 sm:mt-20 sm:px-10">
        {SYSTEMS.map((system) => (
          <article
            key={system.id}
            id={system.id}
            className="scroll-mt-8 border-t border-[var(--color-foreground)]/15 py-14 sm:py-16"
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                {system.title}
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-pretty text-base leading-relaxed sm:text-lg">
                  {system.promise}
                </p>
                <ul className="border-t border-[var(--color-foreground)]/10">
                  {system.includes.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[var(--color-foreground)]/10 py-3 text-sm leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {system.tools.join(" · ")}
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  <span className="font-medium text-[var(--color-foreground)]">
                    Example —{" "}
                  </span>
                  {system.example}
                </p>
              </div>
            </div>
          </article>
        ))}
        <p className="border-t border-[var(--color-foreground)]/15 py-10 text-sm leading-relaxed text-[var(--color-muted)]">
          {SERVICES_FOOTNOTE}
        </p>
      </div>

      <CtaBand />
    </>
  );
}
