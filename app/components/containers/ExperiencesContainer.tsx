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
      role: "Software Engineer",
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
      role: "Software Engineer",
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
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          EXPERIENCE
        </h2>
      </div>
      <div>
        <ol className="group/list">
          <Experiences experiences={experiences} />
        </ol>
      </div>
    </section>
  );
};

export default ExperiencesContainer;
