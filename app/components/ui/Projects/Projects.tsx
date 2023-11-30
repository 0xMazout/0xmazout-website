import React from "react";
import { Project } from "@/app/types/types";
import ProjectCard from "./ProjectCard";
// import { HorizontalArrow } from "@/public/icons/components/HorizontalArrow";
import HorizontalArrow from "@/public/icons/svg/HorizontalArrow.svg";
type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const buildProjects = () => {
    return projects.map((project, index) => {
      return (
        <li className="mb-12" key={index}>
          <ProjectCard
            project={project.project}
            projectLink={project.projectLink}
            startDate={project.startDate}
            endDate={project.endDate}
            description={project.description}
            techStack={project.techStack}
            links={project.links}
            wallpaper={project.wallpaper}
          />
        </li>
      );
    });
  };

  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="project"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2
          id="project"
          className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
        >
          PROJECT
        </h2>
      </div>
      <div>
        <ol className="group/list">{buildProjects()}</ol>
      </div>
    </section>
  );
};

export default Projects;
