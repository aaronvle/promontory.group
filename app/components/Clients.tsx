import Reveal from "./Reveal";

// Names stay empty until each company grants permission to be shown.
// An empty list hides the strip; the heading is kept for when logos are approved.
const CLIENTS: string[] = [];

export default function Clients() {
  if (CLIENTS.length === 0) {
    return null;
  }

  return (
    <section className="px-6 sm:px-10">
      <Reveal>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 border-t border-[var(--color-foreground)]/15 py-14 sm:flex-row sm:justify-between sm:gap-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Trusted by teams at
          </p>
          <ul className="flex flex-wrap items-baseline justify-center gap-x-10 gap-y-3">
            {CLIENTS.map((name) => (
              <li
                key={name}
                className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
