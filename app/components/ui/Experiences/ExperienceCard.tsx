import React from "react";
import RightCornerArrow from "@/public/icons/rightCornerArrow";
import Link from "next/link";
import ChainLink from "@/public/icons/chainLink";
import { Experience } from "../../../types/types";

const ExperienceCard = ({
  role,
  company,
  startDate,
  endDate,
  description,
  techStack,
  links,
  companyLink,
}: Experience) => {
  const buildTechStack = () => {
    return techStack.map((tech) => {
      return (
        <li className="mr-1.5 mt-2">
          <span className=" flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
            {tech}
          </span>
        </li>
      );
    });
  };

  const buildLinks = () => {
    return links?.map((link) => {
      return (
        <li className="mr-4">
          <Link
            href={link.url}
            className="relative mt-2 inline-flex items-baseline text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
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

    return descriptionArray.map((line) => {
      return <li className="mt-1 text-sm leading-normal flex-wrap">{line}</li>;
    });
  };

  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {" "}
        {startDate} — {endDate}{" "}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <Link
            className="items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
            href={companyLink}
          >
            <div className="inline-flex">
              <h4>{role} - </h4>
              <h4 className="ml-1">{company}</h4>
              <RightCornerArrow />{" "}
            </div>
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-normal flex-wrap">
          {buildLinesDescription()}
        </p>
        <ul className="mt-2 flex flex-wrap">{buildLinks()}</ul>
        <ul className="mt-2 flex flex-wrap">{buildTechStack()}</ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
