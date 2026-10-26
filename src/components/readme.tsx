import { useMemo, useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  AtSign,
  Braces,
  FolderOpen,
  UserRound,
  Wrench,
} from "lucide-react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import { useEditorTabs } from "./hooks/useEditorTabs";

const quickLinks = [
  {
    label: "Explore Projects",
    filename: "all-projects.ts",
    icon: FolderOpen,
    color: "text-[#0969DA] dark:text-[#9FCAFF]",
    target: "projects",
  },
  {
    label: "About Me",
    filename: "about.ts",
    icon: UserRound,
    color: "text-[#0969DA] dark:text-[#9FCAFF]",
    target: "about",
  },
  // {
  //   label: "Technical Skills",
  //   filename: "skills.json",
  //   icon: Braces,
  //   color: "text-[#0969DA] dark:text-[#9FCAFF]",
  //   target: "skills",
  // },
  {
    label: "Contact Handshake",
    filename: "contact.ts",
    icon: AtSign,
    color: "text-[#0969DA] dark:text-[#9FCAFF]",
    target: "contact",
  },
  {
    label: "Resume.pdf",
    filename: "(PDF)",
    icon: ArrowDownToLine,
    color: "text-[#DC2626] dark:text-[#FFB4AB]",
    target: "resume",
  },
];

export default function Readme() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const matchesSearch =
        !query ||
        [
          project.title,
          project.description,
          project.category,
          ...project.technologies,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const { openFile } = useEditorTabs();

  const openQuickLink = (target: string) => {
    openFile(target);
  };

  return (
    <main className="bg-[#ffffff] dark:bg-[#0E0E0E] flex flex-row flex-1 px-3 gap-3">
      <div className="code-gutter py-3 flex flex-col gap-1.5 pr-3 border-r border-[#333333] dark:border-[#e5e2e1]">
        {Array.from({ length: 35 }, (_, index) => (
          <span
            className="text-[0.75rem] text-[#333333] dark:text-[#8A919D]"
            key={index}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        ))}
      </div>
      <div className="py-3">
        {/* Introduction */}
        <section id="about" className="mb-7">
          <div className="flex flex-wrap items-center gap-2 mb-2!">
            <span className="text-xs text-[#0000FF] dark:text-[#9FCAFF]">
              #
            </span>

            <h1 className="text-[2rem] font-semibold leading-tight tracking-[-1.2px] text-[#1e1e1e] dark:text-[#E5E2E1]">
              Hi, I'm Prashant Rao
            </h1>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CEEAD6] dark:border-[#019ad633] bg-[#E6F4EA] dark:bg-[#019ad633] px-2 py-0.5 text-[0.75rem] text-[#137333] dark:text-[#84CFFF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#137333] dark:bg-[#84CFFF]" />
              open_to_work: true
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 font-medium text-[0.75rem] mb-5.5!">
            <span className="text-[#0000FF] dark:text-[#F4B1EE]">
              type{" "}
              <span className="text-[#16825D] dark:text-[#9FCAFF]">Role </span>
              <span className="text-[#333] dark:text-[#8A919D]">=</span>
            </span>

            <span className="rounded-sm bg-[#F8F9FA] dark:bg-[#202020] border border-[#E1E4E8] dark:border-[#202020] px-1.5 py-0.5 text-[#A31515] dark:text-[#84CFFF]">
              Frontend Developer
            </span>
            <span className="text-[#333] dark:text-[#8A919D]">|</span>
            <span className="rounded-sm bg-[#F8F9FA] dark:bg-[#202020] border border-[#E1E4E8] dark:border-[#202020] px-1.5 py-0.5 text-[#A31515] dark:text-[#84CFFF]">
              React
            </span>
            <span className="text-[#333] dark:text-[#8A919D]">|</span>
            <span className="rounded-sm bg-[#F8F9FA] dark:bg-[#202020] border border-[#E1E4E8] dark:border-[#202020] px-1.5 py-0.5 text-[#A31515] dark:text-[#84CFFF]">
              TypeScript
            </span>
            <span className="text-[#333] dark:text-[#8A919D]">|</span>
            <span className="rounded-sm bg-[#F8F9FA] dark:bg-[#202020] border border-[#E1E4E8] dark:border-[#202020] px-1.5 py-0.5 text-[#A31515] dark:text-[#84CFFF]">
              Angular
            </span>
          </div>

          <p className="mb-2! text-[1rem] leading-6 text-[#333333] dark:text-[#C0C7D3] font-normal">
            I build responsive, accessible, and high-performance web experiences
            with architectural discipline.
          </p>

          <p className="mb-6! text-[0.75rem] leading-[1.7] text-[#555555] dark:text-[#E5E2E1] font-normal">
            Welcome to my interactive development workspace. Navigate files via
            the sidebar explorer or quick shortcuts below to inspect
            implementations, system design choices, and frontend engineering.
          </p>
        </section>

        {/* What you'll find */}
        <section className="mb-6!">
          <h2 className="mb-2! flex items-center gap-2 text-[1.125rem] font-semibold text-[#1e1e1e] dark:text-[#E5E2E1]">
            <span className="font-mono text-xs text-[#0000FF] dark:text-[#9FCAFF]">
              ##
            </span>
            What you'll find here
          </h2>

          <ul className="pl-1 flex flex-col gap-1.5 text-[0.875rem] leading-[1.6] text-[#333333] dark:text-[#C0C7D3]">
            <li className="flex gap-2">
              <span className="text-[#007ACC] dark:text-[#9FCAFF]">›</span>
              <span>
                <strong className="font-medium text-[#1e1e1e] dark:text-[#E5E2E1]">
                  Enterprise UI Development:
                </strong>{" "}
                Responsive web applications, reusable components, and scalable
                frontend architecture.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#007ACC] dark:text-[#9FCAFF]">›</span>
              <span>
                <strong className="font-medium text-[#1e1e1e] dark:text-[#E5E2E1]">
                  Technologies &amp; Systems:
                </strong>{" "}
                React, Angular, TypeScript, JavaScript, Node.js, REST APIs, and
                state management.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#007ACC] dark:text-[#9FCAFF]">›</span>
              <span>
                <strong className="font-medium text-[#1e1e1e] dark:text-[#E5E2E1]">
                  UI Quality &amp; Accessibility:
                </strong>{" "}
                Design systems, responsive layouts, WCAG accessibility, and
                performance optimization.
              </span>
            </li>
          </ul>
        </section>

        {/* Quick links */}
        <section className="mb-6!">
          <h2 className="mb-2! flex items-center gap-2 text-[1.125rem] font-semibold text-[#1e1e1e] dark:text-[#E5E2E1]">
            <span className="font-mono text-xs text-[#0000FF] dark:text-[#9FCAFF]">
              ##
            </span>
            Quick Links
          </h2>

          <nav className="flex flex-wrap gap-1.5" aria-label="Quick links">
            {quickLinks.map((link) => {
              const Icon = link.icon;

              return (
                <button
                  key={link.target}
                  type="button"
                  onClick={() => openQuickLink(link.target)}
                  className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 transition-colors text-[0.75rem] ${
                    link.target === "resume"
                      ? "border-[#FECACA] bg-[#FEF2F2] dark:bg-[#93000A33] dark:border-[#93000A33]"
                      : "border-[#E1E4E8] bg-[#F8F9FA] dark:bg-[#202020] dark:border-[#202020]"
                  }`}
                >
                  <Icon size={11} className={link.color} />
                  <span className={`${link.color}`}>{link.label}</span>
                  <code className="text-[#777777] dark:text-[#8A919D]">
                    {link.filename}
                  </code>
                </button>
              );
            })}
          </nav>
        </section>

        {/* Featured projects */}
        <section id="projects" className="mb-6!">
          <div className="mb-2! flex flex-wrap items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-[1.125rem] font-semibold text-[#1e1e1e] dark:text-[#E5E2E1]">
              <span className="font-mono text-xs text-[#0000FF] dark:text-[#9FCAFF]">
                ##
              </span>
              Featured Projects
            </h2>

            <span className="inline-flex items-center gap-1.5 font-mono text-[0.75rem] text-[#616161] dark:text-[#C0C7D3]">
              <Wrench
                size={12}
                className="text-[#007ACC] dark:text-[#84CFFF]"
              />
              {projects.filter((project) => project.featured).length} Flagship
              Builds Highlighted
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                // <ProjectCard key={project.id} project={project} />
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  demoUrl={project.demoUrl}
                  image={project.image}
                  technologies={project.technologies}
                  category={project.category}
                  filename={project.filename}
                  id={project.id}
                />
              ))}
          </div>
          <div className="mt-6!">
            <button
              type="button"
              onClick={() => openFile("projects")}
              className="inline-flex items-center gap-2 rounded bg-[#007acc] px-3 py-2 text-[0.75rem] font-medium text-white transition-colors hover:bg-[#1688d1]"
            >
              Explore All Projects
              <ArrowRight size={13} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
