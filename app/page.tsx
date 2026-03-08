export default function Home() {
  return (
    <main className="relative flex h-dvh flex-col justify-between px-6 py-6 sm:px-10 sm:py-8 overflow-hidden">
      {/* Registration mark — subtle compositional element */}
      <svg
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1" />
        <line x1="300" y1="0" x2="300" y2="600" stroke="currentColor" strokeWidth="0.5" />
        <line x1="0" y1="300" x2="600" y2="300" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Top — Letterhead */}
      <div className="animate-reveal delay-1">
        <p
          className="font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]"
        >
          Promontory Group
        </p>
      </div>

      {/* Center — Hero */}
      <div className="flex flex-col items-center gap-4 text-center animate-reveal delay-2">
        <h1
          className="font-[family-name:var(--font-display)] font-bold uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}
        >
          Promontory
        </h1>
        <p className="text-base sm:text-lg text-[var(--color-muted)]">
          Strategic vantage for go-to-market.
        </p>
      </div>

      {/* Bottom — Footer */}
      <div className="flex items-end justify-between animate-reveal delay-3">
        <a
          href="mailto:hello@promontory.group"
          className="group relative text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
        >
          hello@promontory.group
          <span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
        </a>
        <p className="text-sm text-[var(--color-muted)]">
          GTM Advisory&ensp;·&ensp;2026
        </p>
      </div>
    </main>
  );
}
