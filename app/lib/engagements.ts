export type Engagement = {
  id: string;
  title: string;
  summary: string;
  deliverables?: readonly string[];
  note?: string;
  cta: string;
};

export const ENGAGEMENTS: readonly Engagement[] = [
  {
    id: "audit",
    title: "Audit",
    summary:
      "1 to 2 weeks. Find what's broken, what's missing, and what to build first.",
    deliverables: [
      "Scored findings",
      "Prioritized roadmap",
      "ICP + signal hypotheses",
      "Quick wins",
    ],
    cta: "Start with an audit",
  },
  {
    id: "sprint",
    title: "Build Sprint",
    summary:
      "3 to 6 weeks. One system, scoped up front, shipped and documented.",
    cta: "Scope a sprint",
  },
  {
    id: "retainer",
    title: "Retainer",
    summary:
      "Monthly. We run and improve your GTM systems as your fractional RevOps and GTM engineering team.",
    note: "3-month minimum.",
    cta: "Talk retainer",
  },
];

export const PRICING_LINE =
  "Pricing on request. Fixed fees for audits and sprints; flat monthly for retainers. You pay tool costs directly.";

export const PROCESS = [
  {
    title: "Diagnose",
    description: "Audit the data, stack, and motion.",
  },
  {
    title: "Design",
    description: "Pick the signals, scoring, and plays that fit your ICP.",
  },
  {
    title: "Build",
    description: "Ship it in your tools. You own everything.",
  },
  {
    title: "Run",
    description: "Measure, iterate, or hand off with docs and Looms.",
  },
] as const;

export const FAQS = [
  {
    question: "Who is this for?",
    answer:
      "Growing B2B teams that need solid RevOps and GTM engineering foundations: teams with no RevOps owner yet, teams with an admin or junior RevOps person who needs senior guidance, and teams whose leaders want an outside view on stack and plan. Sales-led or product-led adding sales.",
  },
  {
    question: "Do we need Clay or HubSpot already?",
    answer:
      "No. We'll recommend the lightest stack that works; you pay for tools directly.",
  },
  {
    question: "Strategy or builds?",
    answer: "Both, but every engagement ships something that runs.",
  },
  {
    question: "Who owns the work?",
    answer: "You do. Everything lives in your accounts, documented.",
  },
] as const;
