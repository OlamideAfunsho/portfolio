import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-8 py-20 sm:py-28">
      <div className="flex items-end justify-between gap-4 border-b border-[#E2E8F0] pb-6">
        <h2 id="work-heading" className="font-display text-4xl tracking-tight text-[#0F172A] sm:text-5xl">
          Selected work
        </h2>
        <p className="font-mono text-xs text-[#64748B] sm:text-sm">
          {String(projects.length).padStart(2, "0")} projects
        </p>
      </div>

      <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
