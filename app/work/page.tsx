import type { Metadata } from "next";
import CaseStudyCard from "../components/CaseStudyCard";
import PageHeader from "../components/PageHeader";
import Testimonials from "../components/Testimonials";
import { EXAMPLES } from "../lib/work";

export const metadata: Metadata = {
  title: "Example builds",
  description:
    "Example GTM systems shipped for B2B teams. Client names shared with permission only.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader title="Example builds">
        <p>
          A few systems we&apos;ve shipped for B2B SaaS teams. Client names
          shared with permission only.
        </p>
      </PageHeader>

      <section className="px-6 pt-14 pb-8 sm:px-10 sm:pt-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-px overflow-hidden border border-[var(--color-foreground)]/15 bg-[var(--color-foreground)]/15">
          {EXAMPLES.map((example, i) => (
            <CaseStudyCard key={example.slug} study={example} index={i + 1} />
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  );
}
