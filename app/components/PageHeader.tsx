export default function PageHeader({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="px-6 pt-16 sm:px-10 sm:pt-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <h1
          className="max-w-4xl text-balance font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.25rem)" }}
        >
          {title}
        </h1>
        {children ? (
          <div className="max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            {children}
          </div>
        ) : null}
      </div>
    </header>
  );
}
