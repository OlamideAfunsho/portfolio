import Link from "next/link";
import { FileText, FolderGit2, House, Mail, type LucideIcon } from "lucide-react";
import LagosClock from "./LagosClock";

type NavLink = { label: string; href: string; icon: LucideIcon };

const navLinks: NavLink[] = [
  { label: "Home", href: "/", icon: House },
  { label: "Work", href: "#work", icon: FolderGit2 },
  { label: "Résumé", href: "/olamide-afunsho-cv.pdf", icon: FileText },
  { label: "Email", href: "mailto:abolamide77@gmail.com", icon: Mail },
];

const linkClass =
  "group relative grid size-9 place-items-center rounded-full text-[#3F3F46] transition-colors duration-300 hover:bg-[#EDF2F6] hover:text-[#0F172A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A] sm:size-11";

const tooltipClass =
  "pointer-events-none absolute top-full mt-2 translate-y-1 whitespace-nowrap rounded-md bg-[#0F172A] px-2 py-1 font-sans text-xs text-white opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100";

const Navbar = () => {
  return (
    <header className="flex h-12 items-center justify-between gap-3 sm:h-16 sm:gap-4">
      <Link
        href="/"
        aria-label="Olamide Afunsho, home"
        className="shrink-0 font-script text-lg text-[#0F172A] rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F172A] sm:text-2xl"
      >
        OA
      </Link>

      <nav aria-label="Primary">
        <ul className="flex gap-0.5 rounded-full border border-[#E2E8F0] bg-white/60 p-1 backdrop-blur-md sm:gap-2 sm:p-2">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const content = (
              <>
                <Icon aria-hidden className="size-4 sm:size-5" strokeWidth={1.75} />
                <span className={tooltipClass}>{label}</span>
              </>
            );

            return (
              <li key={label}>
                {href.startsWith("/") || href.startsWith("#") ? (
                  <Link href={href} aria-label={label} className={linkClass}>
                    {content}
                  </Link>
                ) : (
                  <a href={href} aria-label={label} className={linkClass}>
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <LagosClock />
    </header>
  );
};

export default Navbar;
