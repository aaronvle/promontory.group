import { CONTACT_EMAIL } from "../lib/site";
import NavLinks from "./NavLinks";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-foreground)]/15 px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.22em]">
            Promontory Group · GTM Engineering
          </p>
          <p className="text-sm text-[var(--color-muted)]">© 2026</p>
        </div>
        <NavLinks label="Footer" />
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
