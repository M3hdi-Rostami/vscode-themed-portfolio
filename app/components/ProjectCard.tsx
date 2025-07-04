import Image from "next/image";
import { Project } from "@/app/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-xl cursor-pointer overflow-hidden relative h-[250px] border border-white/10 bg-[var(--sidebar-bg)] transition-all duration-200 hover:border-[var(--primary-color)] text-inherit no-underline"
    >
      <div className="p-7 flex flex-col justify-between h-full">
        <div className="flex items-center justify-center w-[42px] h-[42px] rounded-lg bg-white/5 border border-white/10 mb-5">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </div>
        <h3 className="text-[1.35rem] font-semibold mb-3 text-[var(--primary-color)]">
          {project.title}
        </h3>
        <p className="text-sm leading-[1.5] text-white/80 mb-4">
          {project.description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
