import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Deliverables below reflect Aaron's actual service scope.
// Descriptions are PLACEHOLDER copy — tighten with his voice.
const SERVICES = [
  {
    title: "GTM Strategy & Fractional RevOps",
    description:
      "Executive-level revenue operations without the executive hire. The thinking layer: plan, model, and design the sales-led motion.",
    items: [
      "GTM financial modeling & annual planning",
      "Commission & compensation plan design",
      "TAM building & market mapping",
      "Tool selection & stack architecture",
      "Team design & hiring support",
      "Sales-led GTM advisory",
    ],
  },
  {
    title: "RevOps Foundations",
    description:
      "Hands-on execution across sales and marketing operations. The infrastructure layer: a CRM and process built around how you actually sell.",
    items: [
      "CRM implementation & administration",
      "Lifecycle & funnel architecture",
      "Lead routing & process design",
      "Reporting & dashboards",
      "Sales & marketing ops execution",
    ],
  },
  {
    title: "GTM Engineering",
    description:
      "Automated systems that find, enrich, and reach your market. The growth layer: signals in, qualified conversations out.",
    items: [
      "Automated enrichment pipelines",
      "Automated inbound handling",
      "Signal capture, storage & trigger events",
      "Human-in-the-loop & automated outreach",
      "Outbound experimentation process",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="02" title="Services" />
        <div className="grid gap-px overflow-hidden border border-[var(--color-foreground)]/15 bg-[var(--color-foreground)]/15 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 100} className="h-full">
              <article className="flex h-full flex-col gap-6 bg-[var(--color-background)] p-8 sm:p-10">
                <span className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.3em] text-[var(--color-muted)]">
                  0{i + 1}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {service.description}
                </p>
                <ul className="mt-auto flex flex-col gap-2 border-t border-[var(--color-foreground)]/10 pt-6">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
