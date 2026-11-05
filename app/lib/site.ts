export const CONTACT_EMAIL = "hello@promontory.group";

/**
 * Every "Book an intro call" button reads this constant.
 * Replace it with a calendar URL when one exists.
 */
export const INTRO_CALL_HREF = `mailto:${CONTACT_EMAIL}`;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export type Logo = {
  name: string;
  logoSrc: string;
  approved: boolean;
};

/** Add a logo only after that company approves it. Unapproved entries stay hidden. */
export const LOGOS: Logo[] = [];

export const LOGO_LINE = "From the people behind these logos";

export const SITE_TITLE =
  "Promontory Group | RevOps and GTM Engineering Foundations for B2B";

export const SITE_DESCRIPTION =
  "RevOps and GTM engineering advisory and fractional agency for growing B2B teams. CRM, data, outbound, and reporting foundations, plus fractional leadership and RevOps mentorship.";
