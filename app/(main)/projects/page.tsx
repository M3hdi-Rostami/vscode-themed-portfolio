import { ProjectCard } from "@/app/components";
import { projects } from "@/app/data/projects";
function Projects() {
  return (
    <div className="h-full overflow-x-hidden overflow-y-auto w-[calc(100%_-48px)] md:w-full p-6 md:p-16 content">
      <h1 className="text-2xl font-bold text-[var(--primary-color)] mb-4 tracking-[-0.03em] leading-[1.2]">
        My Projects
      </h1>
      <p className="text-base font-normal text-white/70 mb-12 max-w-[600px] leading-[1.6]">
        Here&apos;s a collection of my recent work. These projects showcase my
        skills in web development, design, and problem-solving.
      </p>

      <div className="my-8 grid gap-6 grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
