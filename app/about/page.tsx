import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "About Promontory",
  description:
    "Promontory Group is a GTM engineering practice led by Aaron Le, building revenue systems for earlier-stage B2B teams.",
};

export default function AboutPage() {
  return (
    <div className="pb-24 sm:pb-32">
      <PageHeader title="About Promontory">
        <p>
          Promontory Group is a GTM engineering practice led by Aaron Le. Aaron
          has spent his career building revenue systems at B2B SaaS companies:
          Director of RevOps at Rev, VP of RevOps at Kandji and at engine (about
          $200M ARR), and Head of GTM Engineering at Reforge, where he built
          signal-based outbound, inbound enrichment, and job-switcher workflows.
          We bring that to earlier-stage teams, hands-on in Clay, HubSpot, APIs,
          and code.
        </p>
      </PageHeader>
    </div>
  );
}
