import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChainLink } from "@/public/icons/components/ChainLink";
import { Experience, Project } from "@/app/types/types";
import oxyzon_wallpaper from "@/public/images/oxyzon_wallpaper.png";

const ProjectCard = ({
  project,
  startDate,
  endDate,
  description,
  techStack,
  links,
  projectLink,
  wallpaper,
}: Project) => {
  const buildTechStack = () => {
    return techStack.map((tech, index) => {
      return (
        <li className="mr-1.5 mt-2" key={index}>
          <span className=" flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
            {tech}
          </span>
        </li>
      );
    });
  };

  const buildLinks = () => {
    return links?.map((link, index) => {
      return (
        <li className="mr-4" key={index}>
          <Link
            href={link.url}
            className="relative mt-2 items-baseline inline-flex text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
          >
            <ChainLink />
            <h4 className={`mb-3 text-lg font-semibold`}>{link.name} </h4>
          </Link>
        </li>
      );
    });
  };

  const buildLinesDescription = () => {
    const descriptionArray = description.split(".");

    return descriptionArray.map((line, index) => {
      return (
        <li className="mt-1 text-sm leading-normal flex-wrap" key={index}>
          {line}
        </li>
      );
    });
  };

  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 max-w-2xl">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {startDate} — {endDate}
        <Image
          loading="lazy"
          alt=""
          width="200"
          height="48"
          className="mt-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-transparent hover:border-teal-300 focus-visible:border-teal-300 motion-reduce:transition-none"
          src={wallpaper}
        />
      </header>
      <div className="z-10 col-span-6 ">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <Link
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
              href={projectLink}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <h5 className="inline-block">
                {project}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="20"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </h5>
            </Link>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal flex-wrap">
          <ul>{buildLinesDescription()}</ul>
        </p>
        <ul className="mt-2 flex flex-wrap">{buildLinks()}</ul>
        <ul className="mt-2 flex flex-wrap">{buildTechStack()}</ul>
      </div>
    </div>
  );
};

export default ProjectCard;
