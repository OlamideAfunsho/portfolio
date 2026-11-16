import { experience } from "@/data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-8 border-t border-[#E2E8F0] py-20 sm:py-28"
    >
      <h2 id="experience-heading" className="font-display text-4xl tracking-tight text-[#0F172A] sm:text-5xl">
        Experience
      </h2>

      <ol className="mt-12 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="grid gap-4 py-8 md:grid-cols-[14rem_1fr] md:gap-10">
            <p className="font-mono text-xs text-[#64748B] sm:text-sm">{job.period}</p>

            <div>
              <h3 className="font-display text-2xl text-[#0F172A]">{job.role}</h3>
              <p className="mt-1 text-sm text-[#475569]">
                {job.company} · {job.location}
              </p>

              {job.points.length > 0 && (
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-[#475569]">
                  {job.points.map((point) => (
                    <li key={point} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-[#94A3B8]">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
