export type ProjectLink = { label: "Live" | "Code" | "Case study"; href: string };

export type Project = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  stack: string[];
  links: ProjectLink[];
  image?: { src: string; alt: string };
  visual?: "kv-lite-diagram" | "gateway-diagram";
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
    slug: "ai-proxy-gateway",
    name: "Secure AI Proxy Gateway",
    role: "Backend Engineer",
    summary:
      "An edge gateway that sits in front of an AI service and rejects excess traffic before it reaches the backend or LLM compute, using a declarative, DB-less Kong setup.",
    stack: ["Kong", "Docker", "FastAPI", "Python"],
    links: [{ label: "Code", href: "https://github.com/OlamideAfunsho/kong-ai-proxy" }],
    visual: "gateway-diagram",
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
