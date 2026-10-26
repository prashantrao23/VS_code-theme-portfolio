import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import { useEffect, useRef, useState } from "react";
import "./Projects.scss";

const categories = [
  { label: "All", count: 6 },
  { label: "React", count: 4 },
  { label: "Next.js", count: 1 },
  { label: "Full Stack", count: 1 },
  { label: "UI Experiments", count: 1 },
];

export function CategoryFilter() {
  const [active, setActive] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const container = containerRef.current;
    const button = buttonRefs.current.get(active);

    if (!container || !button) return;

    const updateIndicator = () => {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      container.style.setProperty(
        "--indicator-x",
        `${buttonRect.left - containerRect.left}px`,
      );

      container.style.setProperty("--indicator-width", `${buttonRect.width}px`);
    };

    updateIndicator();

    const observer = new ResizeObserver(updateIndicator);
    observer.observe(container);

    return () => observer.disconnect();
  }, [active]);

  return (
    <div
      ref={containerRef}
      className="category-filter border border-[#d4d4d4] dark:border-[#8A919D] bg-[#ececec] dark:bg-[#0E0E0E]"
      role="group"
      aria-label="Filter projects"
    >
      {categories.map(({ label, count }) => (
        <button
          key={label}
          ref={(element) => {
            if (element) {
              buttonRefs.current.set(label, element);
            } else {
              buttonRefs.current.delete(label);
            }
          }}
          type="button"
          className={`category-filter__button text-[#444444] dark:text-[#C0C7D3] ${
            active === label ? "is-active" : ""
          }`}
          aria-pressed={active === label}
          onClick={() => setActive(label)}
        >
          {label} ({count})
        </button>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <>
      <div className="projects-header bg-[#F3F3F3] dark:bg-[#2A2A2A] px-4 py-2 border-b border-[#D4D4D4] dark:border-[#2A2A2A]">
        <h2 className="text-sm font-semibold text-[#1E1E1E] dark:text-[#E5E2E1] mb-2!">
          Projects{" "}
          <span className="text-xs font text-[#007ACC] dark:text-[#9FCAFF] bg-[#E4E6F1] dark:bg-[#353535] rounded-full px-2 py-1">
            {projects.length} total
          </span>
        </h2>
        <CategoryFilter />
      </div>
      <div className="projects bg-[#ffffff] dark:bg-[#131313] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {projects.map((project: any) => (
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
    </>
  );
}

export default Projects;
