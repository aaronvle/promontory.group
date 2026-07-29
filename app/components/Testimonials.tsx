import Reveal from "./Reveal";

// PLACEHOLDER — quote slots for champions at Seam, Ito.ai, and OpenLoop.
// Do NOT ship real names with placeholder quotes; swap both together.
const TESTIMONIALS = [
  {
    quote:
      "Placeholder — testimonial pending. A short, specific quote about the outcome of working together.",
    name: "Champion name",
    role: "Title, Seam",
  },
  {
    quote:
      "Placeholder — testimonial pending. A short, specific quote about the outcome of working together.",
    name: "Champion name",
    role: "Title, Ito.ai",
  },
  {
    quote:
      "Placeholder — testimonial pending. A short, specific quote about the outcome of working together.",
    name: "Champion name",
    role: "Title, OpenLoop",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl border-t border-[var(--color-foreground)]/15 pt-16">
        <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.role} delay={i * 100}>
              <figure className="flex h-full flex-col gap-6">
                <span
                  className="font-[family-name:var(--font-display)] text-4xl leading-none text-[var(--color-foreground)]/20"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="text-sm leading-relaxed text-[var(--color-muted)] italic">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto border-t border-[var(--color-foreground)]/10 pt-4">
                  <p className="font-[family-name:var(--font-display)] text-sm font-bold">
                    {t.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
