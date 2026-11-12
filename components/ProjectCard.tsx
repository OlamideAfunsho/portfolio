import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import KvLiteDiagram from "./KvLiteDiagram";

const ProjectVisual = ({ project }: { project: Project }) => {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
      />
    );
  }

  if (project.visual === "kv-lite-diagram") return <KvLiteDiagram />;

  // Placeholder until the screenshot is ready. Replace before deploying.
  return (
    <div
      aria-hidden
      className="grid h-full w-full place-items-center bg-[#F1F5F9] bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px]"
    >
      <span className="font-display text-3xl text-[#94A3B8]">{project.name}</span>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group flex flex-col">
      <div className="@container relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
        <ProjectVisual project={project} />
      </div>

      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-2xl text-[#0F172A]">{project.name}</h3>
        <p className="text-sm text-[#64748B]">{project.role}</p>
      </div>

      <p className="mt-2 leading-relaxed text-[#475569]">{project.summary}</p>

      <ul aria-label="Tech stack" className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-[#E2E8F0] bg-white px-2.5 py-0.5 font-mono text-[11px] text-[#475569]"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex gap-5">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-sm text-sm font-medium text-[#0F172A] underline decoration-[#CBD5E1] underline-offset-4 transition-colors hover:decoration-[#0F172A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F172A]"
          >
            {link.label}
            <span className="sr-only">: {project.name} (opens in a new tab)</span>
            <ArrowUpRight aria-hidden className="size-3.5" />
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
