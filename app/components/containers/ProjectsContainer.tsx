import React from "react";
import Projects from "@/app/components/ui/Projects/Projects";
import { Project } from "@/app/types/types";

type Props = {};
// https://twitter.com/PortalsFinance
const ProjectsContainer = (props: Props) => {
  const experiences: Project[] = [
    {
      project: "Oxyzon",
      projectLink: "https://oxyzon.xyz/",
      startDate: "2023",
      endDate: "2023  ",
      description: `Built from A to Z a Web3 platform to provide to communities/influencers a way to create a safe copy trading system for their community `,
      techStack: [
        "NextJs",
        "React",
        "TRPC",
        "Typescript",
        "Solidity",
        "Drizzle ORM",
        "NodeJS",
        "Foundry",
      ],
      links: [{ name: "X", url: "https://twitter.com/Oxyzon_" }],
      wallpaper: require("@/public/images/oxyzon_wallpaper.png"),
    },
    {
      project: "MetiScriptions",
      projectLink: "https://twitter.com",
      startDate: "2023",
      endDate: "2023",
      description: `Marketplace Inscription on Metis L2 - We provided UI to mint , deploy and sell inscriptions `,
      techStack: [
        "NextJs",
        "React",
        "Typescript",
        "Tailwind",
        "Solidity",
        "Hardhat",
        "Golang",
      ],
      wallpaper: require("@/public/images/metiScriptions.png"),
    },
    {
      project: "Portals Finance",
      projectLink: "https://twitter.com/PortalsFinance",
      startDate: "2022",
      endDate: "2022  ",
      description: `R2E in Avalanche ecosystem. Portals Finance was a pvp game where you can buy and sell portals. Each portal is a NFT. The goal was to buy portals to generate $ZAAP. `,
      techStack: [
        "NextJs",
        "React",
        "TRPC",
        "Typescript",
        "Solidity",
        "Hardhat",
      ],
      wallpaper: require("@/public/images/portalsFinance.png"),
    },
  ];
  return <Projects projects={experiences} />;
};

export default ProjectsContainer; /*  */
