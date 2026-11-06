import Link from "next/link";
import type { ExampleBuild } from "../lib/work";
import { EXAMPLE_TAG } from "../lib/work";

export default function CaseStudyCard({
  study,
  index,
  href,
}: {
  study: ExampleBuild;
  index: number;
  href?: string;
}) {
  const className =
    "grid gap-6 bg-[var(--color-background)] p-8 transition-colors sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-10";
  const body = (
    <>
      <span className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.3em] text-[var(--color-muted)]">
        0{index}
      </span>
      <div className="flex flex-col gap-4">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug tracking-tight sm:text-2xl">
          {study.title}
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          {study.summary}
        </p>
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {EXAMPLE_TAG}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${className} hover:bg-[var(--color-foreground)]/5`}>
        {body}
      </Link>
    );
  }

  return <article className={className}>{body}</article>;
}
