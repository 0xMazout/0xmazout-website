import { StaticImageData } from "next/image";

export type Experience = {
  role: string;
  company: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string[];
  links?: LinkExperience[];
};

export type LinkExperience = {
  name: string;
  url: string;
};

export type Project = {
  project: string;
  projectLink: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string[];
  links?: LinkProject[];
  wallpaper: StaticImageData;
};

export type LinkProject = {
  name: string;
  url: string;
};
