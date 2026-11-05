export type Practice = {
  id: string;
  title: string;
  promise: string;
  includes: readonly string[];
  tools?: readonly string[];
  note?: string;
  example: string;
};

export const PRACTICES: readonly Practice[] = [
  {
    id: "revops",
    title: "RevOps foundations",
    promise: "A CRM, data model, and reporting your whole team trusts.",
    includes: [
      "CRM setup and cleanup in HubSpot or Salesforce",
      "Lifecycle stages and pipeline definitions",
      "Metric definitions",
      "Pipeline and conversion reporting",
      "Board metrics",
    ],
    tools: ["HubSpot", "Salesforce"],
    example:
      "A cleaned CRM with documented lifecycle stages and a board metrics dashboard.",
  },
  {
    id: "gtm-engineering",
    title: "GTM engineering",
    promise:
      "The data, signals, and automation that put the right accounts in front of your team at the right time.",
    includes: [
      "Enrichment",
      "Signals for hiring, funding, job changes, product usage, and events",
      "Scoring and routing",
      "Outbound automation",
      "Workflows and integrations",
    ],
    tools: ["Clay", "Smartlead", "HeyReach", "Apollo", "APIs"],
    note: "Covers everything except custom-coded apps.",
    example:
      "A signal-triggered outbound system with scored accounts flowing into sequences and synced to the CRM.",
  },
  {
    id: "leadership",
    title: "Fractional leadership & advisory",
    promise: "Senior RevOps leadership without the full-time hire.",
    includes: [
      "Fractional head of RevOps",
      "GTM planning",
      "Stack reviews",
      "Roadmap and prioritization",
    ],
    example:
      "A GTM plan and stack review with a prioritized 90-day roadmap.",
  },
  {
    id: "mentorship",
    title: "RevOps mentorship",
    promise: "Grow your admin or junior RevOps people into leaders.",
    includes: [
      "1:1 coaching sessions",
      "A skills plan built around their role and your stack",
      "Reviews of their builds and decisions",
      "Guidance on running RevOps as a function (prioritizing requests, working with sales and marketing leaders, reporting to the exec team)",
    ],
    example:
      "A 3-month growth plan with recurring coaching and build reviews.",
  },
];

export const PRACTICES_LINE = "Take one practice or combine them.";
