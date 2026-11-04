import Link from "next/link";
import { SYSTEMS } from "../../lib/services";
import Reveal from "../Reveal";

export default function WhatWeBuild() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.25em]">
          What we build
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden border border-[var(--color-foreground)]/15 bg-[var(--color-foreground)]/15 sm:grid-cols-2">
          {SYSTEMS.map((system, i) => (
            <Reveal key={system.id} delay={i * 80} className="h-full">
              <Link
                href={`/services#${system.id}`}
                className="flex h-full flex-col gap-4 bg-[var(--color-background)] p-8 transition-colors hover:bg-[var(--color-foreground)]/5 sm:p-10"
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug tracking-tight">
                  {system.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {system.promise}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
