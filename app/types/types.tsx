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
