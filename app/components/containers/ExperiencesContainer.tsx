import React from "react";
import ExperienceCard from "@components/ui/Experiences/ExperienceCard";
import Experiences from "@components/ui/Experiences/Experiences";
import { Experience } from "@/app/types/types";
type Props = {};

const ExperiencesContainer = (props: Props) => {
  const experiences: Experience[] = [
    {
      role: "Software Engineer",
      company: "Atos",
      companyLink: "https://atos.net",
      startDate: "2016",
      endDate: "2020",
      description: `Creation of a Web App to manage nuclear trash. Creation of a Tablet app to speed up ground tests of military helicopters. Creation of an automatic app to generate reports for risk management`,
      techStack: [
        "C#",
        "React",
        "Typescript",
        "Javascript",
        "ASP.NET",
        "SQL Server",
        "Git",
        "TFS",
        "Linux",
        "Azure",
        "Jenkins",
      ],
      links: [
        {
          name: "Airbus Helicopters",
          url: "https://www.airbus.com/en/products-services/helicopters",
        },
        {
          name: "CEA",
          url: "https://cadarache.cea.fr",
        },
      ],
    },

    {
      role: "Software Engineer - Apprenticeship",
      company: "Atos",
      companyLink: "https://atos.net",
      startDate: "2014",
      endDate: "2016",
      description: `Creation of a desktop application to manage security of criticals buildings, banks and royal palaces. Upgrade of a private network from Defense Ministry `,
      techStack: [
        "C#",
        "WCF",
        "ASP.NET",
        "SQL Server",
        "Git",
        "TFS",
        "Linux",
        "Jenkins",
      ],
      links: [
        {
          name: "DGA",
          url: "https://www.defense.gouv.fr/dga",
        },
      ],
    },
    {
      role: "Software Engineer - Apprenticeship",
      company: "Atos",
      companyLink: "https://atos.net",
      startDate: "2012",
      endDate: "2014",
      description:
        "Creation of a benchtest for airbus helicopters. Retro engineering of confidential data from aeronautics.",
      techStack: [
        "C#",
        "ASP.NET",
        "SQL Server",
        "Git",
        "TFS",
        "Linux",
        "Jenkins",
      ],
      links: [
        {
          name: "Airbus Helicopters",
          url: "https://www.airbus.com/en/products-services/helicopters",
        },
      ],
    },
  ];
  return (
    <div>
      <ol className="group/list">
        <Experiences experiences={experiences} />
      </ol>
    </div>
  );
};

export default ExperiencesContainer;
