export const EXAMPLE_TAG = "B2B SaaS";

export type ExampleBuild = {
  slug: string;
  title: string;
  summary: string;
};

export const EXAMPLES: readonly ExampleBuild[] = [
  {
    slug: "event-attendee-outbound",
    title: "Event-attendee outbound",
    summary:
      "Conference contacts enriched in Clay and pushed into LinkedIn sequences.",
  },
  {
    slug: "custom-product-usage-enrichment",
    title: "Custom product-usage enrichment",
    summary:
      "Usage data built from public sources to score accounts for outbound.",
  },
  {
    slug: "lead-score-based-email-outbound",
    title: "Lead-score-based email outbound",
    summary: "Scored accounts flow automatically into email sequences.",
  },
  {
    slug: "board-ready-pipeline-reporting",
    title: "Board-ready pipeline reporting",
    summary:
      "Conversion and pipeline metrics rebuilt on a clean data model.",
  },
];
