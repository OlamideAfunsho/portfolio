import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-1 flex-col justify-center py-16 text-[#0F172A]"
    >
      <p className="text-[#52525B] motion-safe:animate-fade-up">Hey there,</p>

      <h1
        id="hero-heading"
        className="mt-3 font-display text-[2.6rem] leading-[1.05] tracking-tight motion-safe:animate-fade-up motion-safe:[animation-delay:80ms] sm:text-7xl"
      >
        I&apos;m Olamide Afunsho.
      </h1>

      <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#475569] motion-safe:animate-fade-up motion-safe:[animation-delay:160ms] sm:text-xl">
        Full-stack engineer building fast, reliable web products with Next.js and TypeScript.
      </p>

      <div className="mt-8 flex flex-wrap gap-3 motion-safe:animate-fade-up motion-safe:[animation-delay:240ms]">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1E293B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
        >
          View work
          <ArrowDown aria-hidden className="size-4" />
        </a>
        <a
          href="/olamide-afunsho-cv.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-medium text-[#0F172A] transition-colors hover:bg-[#F1F5F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
        >
          Résumé
          <ArrowUpRight aria-hidden className="size-4" />
        </a>
      </div>

      <p className="mt-10 flex items-center gap-2 text-sm text-[#64748B] motion-safe:animate-fade-up motion-safe:[animation-delay:320ms]">
        <span aria-hidden className="relative flex size-2">
          <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping motion-safe:[animation-duration:2s]" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500 motion-safe:animate-breathe" />
        </span>
        Based in Lagos · Open to full-stack and frontend roles
      </p>
    </section>
  );
};

export default Hero;
