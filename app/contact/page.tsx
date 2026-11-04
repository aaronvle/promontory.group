import type { Metadata } from "next";
import IntroCallLink from "../components/IntroCallLink";
import { CONTACT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're selling and who to. We reply within two business days.",
};

export default function ContactPage() {
  return (
    <section className="flex min-h-[calc(100svh-12rem)] flex-col items-center justify-center px-6 py-24 text-center sm:px-10 sm:py-32">
      <div className="flex max-w-3xl flex-col items-center gap-8">
        <h1
          className="text-balance font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
        >
          Let&apos;s build your GTM engine.
        </h1>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          Tell us what you&apos;re selling and who to. We reply within two
          business days.
        </p>
        <div className="flex flex-col items-center gap-5">
          <IntroCallLink />
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
