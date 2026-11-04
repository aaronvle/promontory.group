import { INTRO_CALL_HREF } from "../lib/site";

const SOLID =
  "inline-flex items-center justify-center border border-[var(--color-foreground)] px-5 py-3 text-center font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.22em] transition-colors hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]";

const TEXT =
  "inline-flex items-center justify-center font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)] underline-offset-4 transition-colors hover:text-[var(--color-foreground)] hover:underline";

export default function IntroCallLink({
  children = "Book an intro call",
  variant = "solid",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: "solid" | "text";
  className?: string;
}) {
  return (
    <a
      href={INTRO_CALL_HREF}
      className={`${variant === "solid" ? SOLID : TEXT} ${className}`}
    >
      {children}
    </a>
  );
}
