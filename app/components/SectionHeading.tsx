export default function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex items-baseline gap-4 border-t border-[var(--color-foreground)]/15 pt-6 sm:mb-16">
      <span className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.3em] text-[var(--color-muted)]">
        {number}
      </span>
      <h2 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.25em]">
        {title}
      </h2>
    </div>
  );
}
