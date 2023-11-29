import React from "react";
import ExperienceCard from "@components/ui/Experiences/ExperienceCard";
import Experiences from "@components/ui/Experiences/Experiences";
import { Experience } from "@/app/types/types";
type Props = {};

const ExperiencesContainer = (props: Props) => {
  const experiences: Experience[] = [
    {
      role: "Co-Founder & CTO",
      company: "Oxyzon",
      companyLink: "https://oxyzon.xyz/",
      startDate: "2023",
      endDate: "2023  ",
      description: `Built from A to Z a Web3 platform to provide to communities/influencers a way to create a safe copy trading system for their community `,
      techStack: [
        "NextJs",
        "React",
        "TRPC",
        "Typescript",
        "Solidity",
        "Git",
        "Drizzle ORM",
        "NodeJS",
        "MySql",
        "Serverless",
        "Foundry",
        "Wallet Connect V2",
        "Figma",
      ],
      links: [{ name: "X", url: "https://twitter.com/Oxyzon_" }],
    },
    {
      role: "Senior Software Engineer",
      company: "Massa Labs",
      companyLink: "https://massa.net/",
      startDate: "2022",
      endDate: "2023  ",
      description: `Part of the Innovation Team, Worked on multiple projects to find utility of Massa Blockchain in the real world. Worked on the Massa Web, Massa Wallet, Massa Explorer, Massa Station`,
      techStack: [
        "NextJs",
        "React",
        "Typescript",
        "Assembly Script",
        "Git",
        "WASM",
        "Golang",
        "NodeJS",
        "MySql",
      ],
      links: [],
    },
    {
      role: "Freelance Software Engineer",
      company: "Web3 Teams",
      companyLink: "https://www.linkedin.com/in/lucas-fabre-info/",
      startDate: "2020",
      endDate: "2023  ",
      description: `Multiple missions for Web 3 Teams. Participation in Dapps, Smart Contracts, NFTs, DAOs, Web3 integrations`,
      techStack: [
        "NextJs",
        "React",
        "Typescript",
        "Solidity",
        "Git",
        "NodeJS",
        "NestJs",
        "GraphQL",
        "Ether.js",
        "WalletConnect V1",
        "Wagmi",
        "Foundry",
        "Prisma",
        "Figma",
      ],
      links: [],
    },
    {
      role: "Software Fullstack Engineer",
      company: "Optimum Automotive",
      companyLink: "https://www.optimum-automotive.com/index.php?lang=fr",
      startDate: "2020",
      endDate: "2021  ",
      description: `Participation in the development of a Geolocalisation app for car fleets focused on frontend with React Typescript. Worked specificaly on the Map and the Geolocalisation features`,
      techStack: [
        "C#",
        "React",
        "Typescript",
        "SQL Server",
        "Git",
        "TFS",
        "Azure",
        "Github",
      ],
      links: [],
    },
    {
      role: "Software Fullstack Engineer",
      company: "Atos",
      companyLink: "https://atos.net",
      startDate: "2016",
      endDate: "2020",
      description: `Creation of a Web App to manage nuclear trash. Creation of a Tablet app to speed up ground tests of military helicopters. Creation of an automatic app to generate reports for risk management`,
      techStack: [
        "C#",
        "React",
        "Typescript",
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
      role: "Software Fullstack Engineer",
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
      role: "Software Fullstack Engineer",
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
  return <Experiences experiences={experiences} />;
};

export default ExperiencesContainer;
