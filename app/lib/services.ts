export type System = {
  id: string;
  title: string;
  promise: string;
  includes: readonly string[];
  tools: readonly string[];
  example: string;
};

export const SYSTEMS: readonly System[] = [
  {
    id: "outbound",
    title: "Signal-based outbound",
    promise:
      "TAM, ICP scoring, and triggers that put the right accounts in sequence at the right time.",
    includes: [
      "TAM build",
      "ICP + lead scoring",
      "Signal triggers for hiring, funding, job changes, product usage, and events",
      "Sequences + CRM sync",
    ],
    tools: ["Clay", "Smartlead", "HeyReach", "Apollo"],
    example:
      "A scored TAM whose hiring and funding triggers place the right accounts into sequence and sync them back to the CRM.",
  },
  {
    id: "enrichment",
    title: "Enrichment & lead scoring",
    promise:
      "Every lead and account enriched and scored, including custom data you can't buy off the shelf.",
    includes: [
      "Waterfall enrichment",
      "Scoring model",
      "Custom data via APIs and scraping",
    ],
    tools: ["Clay", "APIs", "Apify"],
    example:
      "A waterfall that fills each lead and account, scores it, and writes custom fields back to the CRM.",
  },
  {
    id: "inbound",
    title: "Inbound automation",
    promise:
      "Enrich, score, route, and respond to inbound in minutes, not days.",
    includes: [
      "Form enrichment",
      "Routing rules",
      "Auto-responses",
      "Rep alerts",
    ],
    tools: ["Clay", "HubSpot"],
    example:
      "A new form fill enriched, scored, routed to the right rep, and answered before the lead goes cold.",
  },
  {
    id: "reporting",
    title: "GTM reporting",
    promise:
      "A clean HubSpot data model and pipeline, conversion, and board reporting you can trust.",
    includes: [
      "Data model + lifecycle stages",
      "Pipeline and conversion dashboards",
      "Board metrics",
    ],
    tools: ["HubSpot"],
    example:
      "Pipeline, conversion, and board views rebuilt on lifecycle stages the team actually uses.",
  },
];

export const SERVICES_FOOTNOTE =
  "When no-code runs out, we write the code: Next.js, Supabase, and direct APIs.";
