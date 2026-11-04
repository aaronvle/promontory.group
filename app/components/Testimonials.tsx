type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// Hidden until real quotes exist. Do not ship placeholder quotes.
const TESTIMONIALS: Testimonial[] = [];

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28" aria-label="Testimonials">
      <div className="mx-auto grid max-w-5xl gap-12 border-t border-[var(--color-foreground)]/15 pt-16 sm:grid-cols-3 sm:gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <figure key={testimonial.name} className="flex h-full flex-col gap-6">
            <blockquote className="text-sm leading-relaxed text-[var(--color-muted)] italic">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-auto border-t border-[var(--color-foreground)]/10 pt-4">
              <p className="font-[family-name:var(--font-display)] text-sm font-bold">
                {testimonial.name}
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {testimonial.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
