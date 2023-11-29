import React from "react";
import About from "@components/ui/RightSide/About";
import ExperiencesContainer from "./ExperiencesContainer";
import ProjectsContainer from "./ProjectsContainer";

type Props = {};

const RightSideContainer = (props: Props) => {
  return (
    <div className="mt-10">
      <About /> <ExperiencesContainer /> <ProjectsContainer />
    </div>
  );
};

export default RightSideContainer;
