export type ProjectLink = { label: "Live" | "Code" | "Case study"; href: string };

export type Project = {
  slug: string;
  name: string;
  role: string;
  /** One line on what it is and what you did. Outcome first, features second. */
  summary: string;
  stack: string[];
  links: ProjectLink[];
  /** Screenshot in /public/images/work. Leave out to show the placeholder tile. */
  image?: { src: string; alt: string };
  /** Projects without a UI get a custom visual instead of a screenshot. */
  visual?: "kv-lite-diagram";
};

// Order here = order on the page. Move FocusGrid to the top once students are using it.
export const projects: Project[] = [
  {
    slug: "financeflow",
    name: "FinanceFlow",
    role: "Lead Frontend Engineer · team of 3",
    summary:
      "A personal finance platform with real-time budget dashboards and threshold alerts. I led the frontend architecture and the team building it.",
    stack: ["Next.js", "TypeScript", "React Query", "Drizzle ORM", "PostgreSQL", "Chart.js"],
    links: [
      { label: "Live", href: "https://financeflow-nithub.vercel.app/" },
      { label: "Code", href: "https://github.com/abbydave/Budget-Tracker" },
    ],
    image: {
      src: "/images/work/financeflow.png",
      alt: "FinanceFlow dashboard showing income, expenses, balance and monthly budget progress",
    },
  },
  {
    slug: "focusgrid",
    name: "FocusGrid",
    role: "Full-Stack Developer",
    summary:
      "A productivity app for university students: course-organised tasks, a Pomodoro timer and notes in one place, with secure sign-in and real-time sync.",
    stack: ["Next.js", "TypeScript", "Supabase", "Clerk", "shadcn/ui"],
    links: [
      { label: "Live", href: "https://focus-grid-nine.vercel.app/" },
      { label: "Code", href: "https://github.com/OlamideAfunsho/FocusGrid" },
    ],
    image: {
      src: "/images/work/focusgrid.png",
      alt: "FocusGrid dashboard with study stats, a quick-start focus timer and urgent tasks",
    },
  },
  {
    slug: "kv-lite",
    name: "KV-Lite",
    role: "Systems Engineer",
    summary:
      "A crash-safe key-value storage engine in Go, written from scratch with only the standard library: write-ahead log, checksummed records and recovery on startup.",
    stack: ["Go", "WAL", "SSTables", "CRC32"],
    links: [{ label: "Code", href: "https://github.com/OlamideAfunsho/kv-lite" }],
    visual: "kv-lite-diagram",
  },
  {
    slug: "context-flow",
    name: "Context-Flow",
    role: "Full-Stack & AI Engineer",
    summary:
      "An AI text-transformation app. I later moved its prompt pipelines from n8n into native Vercel AI SDK serverless routes to simplify production.",
    stack: ["Next.js", "TypeScript", "Vercel AI SDK", "Gemini"],
    links: [
      { label: "Live", href: "https://context-flow-iota.vercel.app/" },
      { label: "Code", href: "https://github.com/OlamideAfunsho/context-flow" },
    ],
    image: {
      src: "/images/work/context-flow.png",
      alt: "Context-Flow transforming a paragraph of text into a summary with Summarize, Tweet Style and Simplify actions",
    },
  },
];
