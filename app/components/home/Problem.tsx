import Reveal from "../Reveal";

const BULLETS = [
  "Your CRM data is half-empty and nobody trusts the dashboards.",
  "Outbound is manual, or it's volume with no targeting.",
  "Hiring, funding, job-change, and product signals are sitting unused.",
];

export default function Problem() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl border-t border-[var(--color-foreground)]/15 pt-16 sm:pt-20">
        <Reveal>
          <h2
            className="max-w-3xl text-balance font-[family-name:var(--font-display)] font-bold leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            You need a GTM engineer. You can&apos;t justify one yet.
          </h2>
        </Reveal>
        <ul className="mt-12 border-t border-[var(--color-foreground)]/10">
          {BULLETS.map((bullet) => (
            <li
              key={bullet}
              className="border-b border-[var(--color-foreground)]/10 py-5 text-base leading-relaxed sm:text-lg"
            >
              {bullet}
            </li>
          ))}
        </ul>
        <Reveal>
          <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Promontory fills that gap: senior RevOps judgment and hands-on
            builds, without the full-time hire.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
