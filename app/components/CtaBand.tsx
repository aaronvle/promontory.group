import IntroCallLink from "./IntroCallLink";

export default function CtaBand({
  title = "Let's build your GTM engine.",
}: {
  title?: string;
}) {
  return (
    <section className="px-6 pb-8 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 border-t border-[var(--color-foreground)]/15 py-20 text-center sm:py-28">
        <h2
          className="max-w-3xl text-balance font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {title}
        </h2>
        <IntroCallLink />
      </div>
    </section>
  );
}
