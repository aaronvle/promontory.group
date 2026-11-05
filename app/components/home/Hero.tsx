import Link from "next/link";
import IntroCallLink from "../IntroCallLink";
import RegistrationMark from "../RegistrationMark";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-7.5rem)] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center sm:px-10 sm:py-28">
      <RegistrationMark />
      <div className="relative flex max-w-4xl flex-col items-center gap-8 animate-reveal">
        <h1
          className="text-balance font-[family-name:var(--font-display)] font-bold leading-[1.02] tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.25rem)" }}
        >
          RevOps and GTM engineering foundations for growing B2B teams.
        </h1>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          Promontory Group is a RevOps and GTM engineering advisory and
          fractional agency. We build the systems, data, and processes behind
          your pipeline, then help your team own them.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <IntroCallLink />
          <Link
            href="/services"
            className="font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)] underline-offset-4 transition-colors hover:text-[var(--color-foreground)] hover:underline"
          >
            See what we build
          </Link>
        </div>
      </div>
    </section>
  );
}
