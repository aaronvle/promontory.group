import Link from "next/link";
import IntroCallLink from "./IntroCallLink";
import NavLinks from "./NavLinks";

export default function SiteHeader() {
  return (
    <header className="border-b border-[var(--color-foreground)]/15 px-6 py-4 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-3">
        <Link
          href="/"
          className="order-1 font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
        >
          Promontory Group
        </Link>
        <div className="order-3 w-full sm:order-2 sm:w-auto">
          <NavLinks label="Primary" />
        </div>
        <IntroCallLink className="order-2 sm:order-3" />
      </div>
    </header>
  );
}
