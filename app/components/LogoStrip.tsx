import Image from "next/image";
import { LOGO_LINE, LOGOS } from "../lib/site";

export default function LogoStrip() {
  const visible = LOGOS.filter((logo) => logo.approved && logo.logoSrc);
  if (visible.length === 0) return null;

  return (
    <section aria-label={LOGO_LINE} className="px-6 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 py-14 sm:flex-row sm:justify-between">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
          {LOGO_LINE}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {visible.map((logo) => (
            <li key={logo.name}>
              <Image
                src={logo.logoSrc}
                alt={logo.name}
                width={140}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
