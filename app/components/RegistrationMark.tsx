export default function RegistrationMark() {
  return (
    <svg
      className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
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
  );
}
