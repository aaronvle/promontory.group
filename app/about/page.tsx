import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "About Promontory",
  description:
    "Promontory Group is a RevOps and GTM engineering advisory and fractional agency led by Aaron Le.",
};

const SECTIONS = [
  {
    title: "The practice",
    body: "Promontory Group is a RevOps and GTM engineering advisory and fractional agency led by Aaron Le.",
  },
  {
    title: "Career",
    body: "Aaron has spent his career building revenue systems at B2B SaaS companies: Director of RevOps at Rev, VP of RevOps at Kandji and at engine (about $200M ARR), and Head of GTM Engineering at Reforge, where he built signal-based outbound, inbound enrichment, and job-switcher workflows.",
  },
  {
    title: "What we bring",
    body: "We bring that to growing B2B teams, from CRM and reporting foundations to hands-on builds in Clay, HubSpot, Salesforce, and APIs, and we help your team own what we build.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-24 sm:pb-32">
      <PageHeader title="About Promontory" />
      <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-14 px-6 sm:mt-20 sm:px-10">
        {SECTIONS.map((section) => (
          <section
            key={section.title}
            className="max-w-2xl border-t border-[var(--color-foreground)]/15 pt-8"
          >
            <h2 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.25em]">
              {section.title}
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
