import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="px-6 pt-20 pb-8 sm:px-10 sm:pt-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex flex-col items-center gap-8 border-t border-[var(--color-foreground)]/15 py-20 text-center sm:py-28">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Contact
            </p>
            {/* PLACEHOLDER copy — refine closing line */}
            <h2
              className="max-w-3xl font-[family-name:var(--font-display)] font-bold uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              Build the system
            </h2>
            <a
              href="mailto:hello@promontory.group"
              className="border border-[var(--color-foreground)] px-8 py-4 font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.25em] transition-colors hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
            >
              hello@promontory.group
            </a>
          </div>
        </Reveal>

        {/* Footer */}
        <div className="flex items-end justify-between border-t border-[var(--color-foreground)]/15 pt-6">
          <p className="font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Promontory Group
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            GTM Advisory&ensp;·&ensp;2026
          </p>
        </div>
      </div>
    </section>
  );
}
