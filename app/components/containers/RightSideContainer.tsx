import React from "react";
import About from "@components/ui/RightSide/About";
import ExperiencesContainer from "./ExperiencesContainer";

type Props = {};

const RightSideContainer = (props: Props) => {
  return (
    <div className="mt-10">
      <About /> <ExperiencesContainer /> Projects
    </div>
  );
};

export default RightSideContainer;
