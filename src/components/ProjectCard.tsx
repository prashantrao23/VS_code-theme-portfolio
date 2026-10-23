import "./ProjectCard.scss";
import tsIcn from "../assets/ts-icn.svg";
import tsIcnDark from "../assets/ts-icn-dark.svg";

interface ProjectCardProps {
  id: number;
  filename: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  image: string;
}

function ProjectCard({
  title,
  description,
  demoUrl,
  image,
  technologies,
  category,
  filename,
}: ProjectCardProps) {
  return (
    <div className="project-card rounded-sm border border-[#E1E4E8] dark:border-[#1B1B1C]">
      <div className="project-card__header bg-[#F8F9FA] dark:bg-[#0E0E0E] flex items-center justify-between px-3 py-1">
        <h2 className="project-card__title text-[#001080] dark:text-[#E5E2E1] flex items-center">
          <img src={tsIcn} alt="TypeScript Logo" />
          {filename}
        </h2>
        <span className="project-card__language bg-[#EBF5FB] dark:bg-[#353535] text-[#0366D6] dark:text-[#84CFFF] border-[#BEE3F8] dark:border-[#353535] rounded-sm px-1.5 py-1">
          {category}
        </span>
      </div>
      <div className="project-card__image h-44 overflow-hidden">
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="project-card__content p-3">
        <h2 className="project-card__title-main text-[#1F2328] dark:text-[#E5E2E1] ">
          {title}
        </h2>
        <p className="project-card__description text-[#57606A] dark:text-[#C0C7D3]">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3! ">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-[#F3F4F6] dark:bg-[#353535] border-[#E5E7EB] dark:border-[#353535] rounded-sm px-2 py-1 text-[#24292F] dark:text-[#D1E4FF] text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-[#F0F0F0] dark:border-[#1B1B1C]">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0969DA] dark:text-[#C0C7D3] hover:underline text-xs font-medium"
          >
            &#60; &#62; repo
          </a>
          <button className="bg-[#007ACC] text-[#ffffff] py-1 px-3 rounded-sm text-xs font-medium border-none">
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
