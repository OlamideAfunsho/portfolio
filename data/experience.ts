export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Backend Engineer Intern",
    company: "Nithub",
    location: "Lagos, Nigeria",
    period: "Nov 2026 – Present",
    points: [],
  },
  {
    role: "Freelance Full-Stack & AI Developer",
    company: "Chetu Pvt Ltd",
    location: "Remote, India",
    period: "May 2026 – Jun 2026",
    points: [
      "Built Context-Flow, an AI text-transformation platform on Next.js and TypeScript, then moved its prompt pipelines from n8n to Vercel AI SDK serverless handlers to cut production overhead.",
      "Built a secure AI proxy gateway: a DB-less Kong gateway in Docker in front of a FastAPI service, rejecting traffic over 5 requests/minute at the edge so it never reaches the backend or LLM.",
    ],
  },
  {
    role: "Frontend Engineer Intern",
    company: "SmartTech",
    location: "Remote, United Kingdom",
    period: "Nov 2025 – Jan 2026",
    points: [
      "Built responsive interfaces and reusable dashboard components with React, Next.js, TypeScript and Tailwind.",
      "Integrated REST APIs, added validated forms and fixed client-side bugs.",
    ],
  },
];