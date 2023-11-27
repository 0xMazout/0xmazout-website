import React from "react";
import { Experience } from "@/app/types/types";
import ExperienceCard from "./ExperienceCard";
type Props = {
  experiences: Experience[];
};

const Experiences = ({ experiences }: Props) => {
  const buildExperiences = () => {
    return experiences.map((experience) => {
      return (
        <li className="mb-12">
          <ExperienceCard
            role={experience.role}
            company={experience.company}
            companyLink={experience.companyLink}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
            techStack={experience.techStack}
            links={experience.links}
          />
        </li>
      );
    });
  };

  return <div>{buildExperiences()}</div>;
};

export default Experiences;
