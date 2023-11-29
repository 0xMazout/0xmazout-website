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
      <div className="mt-12">
        <a
          className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
          aria-label="View Full Resume"
          href="/resume.pdf"
        >
          <span className="inline-flex items-center">
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Archive projects
            </span>
            <span className="whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
