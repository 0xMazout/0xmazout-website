import React from "react";
import Projects from "@/app/components/ui/Projects/Projects";
import { Project } from "@/app/types/types";

type Props = {};

const ProjectsContainer = (props: Props) => {
  const experiences: Project[] = [
    {
      project: "Oxyzon",
      projectLink: "https://oxyzon.xyz/",
      startDate: "2023",
      endDate: "2023  ",
      description: `Built from A to Z a Web3 platform to provide to communties/influencers a way to create a safe copy trading system for their community `,
      techStack: [
        "NextJs",
        "React",
        "TRPC",
        "Typescript",
        "Solidity",
        "Drizzle ORM",
        "NodeJS",
        "MySql",
        "Foundry",
        "Figma",
      ],
      links: [{ name: "X", url: "https://twitter.com/Oxyzon_" }],
      wallpaper: require("@/public/images/oxyzon_wallpaper.png"),
    },
  ];
  return <Projects projects={experiences} />;
};

export default ProjectsContainer; /*  */
