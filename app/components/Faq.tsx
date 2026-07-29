import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// PLACEHOLDER copy — confirm answers (engagement shape, tools, fit) with Aaron.
const FAQS = [
  {
    question: "Who is Promontory a fit for?",
    answer:
      "Placeholder — VC-backed, USA-based, sales-led B2B SaaS companies at the early stage: roughly pre-seed through Series B, before a full RevOps team makes sense.",
  },
  {
    question: "How do engagements work?",
    answer:
      "Placeholder — typically a fractional retainer for ongoing RevOps leadership, or a fixed-scope project (CRM foundation, outbound system, GTM plan). Most engagements start with an audit.",
  },
  {
    question: "What tools do you work with?",
    answer:
      "Placeholder — HubSpot and Salesforce on the CRM side; Clay and modern enrichment, sequencing, and signal tooling on the GTM engineering side. Tool selection is part of the work — we fit the stack to the motion, not the reverse.",
  },
  {
    question: "Who is this not for?",
    answer:
      "Placeholder — teams looking for volume outbound without strategy, product-led companies without a sales motion, or organizations that want a report instead of a working system.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading number="06" title="FAQ" />
        <Reveal>
          <div className="flex flex-col border-t border-[var(--color-foreground)]/10">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-[var(--color-foreground)]/10"
              >
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 py-5 font-[family-name:var(--font-display)] text-base font-bold tracking-tight [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    className="text-[var(--color-muted)] transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-[var(--color-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
