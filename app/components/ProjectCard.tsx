import Image from "next/image";
import { Project } from "@/app/types";
import Link from "next/link";
import { VscGithub, VscLink } from "react-icons/vsc";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden relative h-[250px] border border-white/10 bg-[var(--sidebar-bg)] transition-all duration-200 hover:border-[var(--primary-color)] text-inherit no-underline"
    >
      <div className="p-7 flex flex-col justify-between h-full">
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 mb-5">
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={32}
              height={32}
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <Link target="_blank" rel="noopener noreferrer" href={project.link} className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[var(--text-color)] hover:bg-[var(--primary-color)]/50 border-[var(--primary-color)]/30" >
              <VscGithub size={32} />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href={project.demoLink} className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[var(--text-color)] hover:bg-[var(--primary-color)]/50 border-[var(--primary-color)]/30" >
              <VscLink size={32} />
            </Link>
          </div>
        </div>
        <h3 className="text-[1.35rem] font-semibold mb-3 text-[var(--primary-color)]">
          {project.title}
        </h3>
        <p className="text-sm leading-[1.5] text-white/80 mb-4">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
