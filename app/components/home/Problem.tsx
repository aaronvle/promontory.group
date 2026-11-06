import Reveal from "../Reveal";

const BULLETS = [
  "Your CRM is messy, half-empty, and nobody trusts the dashboards.",
  "Lifecycle stages and core metrics were never defined, so every team counts differently.",
  "Outbound is manual, or it's volume with no targeting.",
  "There's no senior RevOps owner, or your admin and junior RevOps people need someone to guide them.",
];

export default function Problem() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl border-t border-[var(--color-foreground)]/15 pt-16 sm:pt-20">
        <Reveal>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Promontory builds foundations for scale: senior RevOps judgment
            and hands-on systems that hold as you grow, without the full-time
            hire.
          </p>
          <h2
            className="mt-6 max-w-3xl text-balance font-[family-name:var(--font-display)] font-bold leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Built for where you&apos;re going, not just where you are.
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
      </div>
    </section>
  );
}
