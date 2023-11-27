import React from "react";
import TitleComponent from "@components/ui/Header/TitleComponent";
import SubtitleComponent from "@components/ui/Header/SubtitleComponent";
import DescriptionComponent from "@components/ui/Header/DescriptionComponent";
import Socials from "@components/ui/LeftSide/Socials";

type Props = {};

const LeftSideContainer = (props: Props) => {
  return (
    <div className="sticky">
      <TitleComponent />
      <SubtitleComponent />
      <DescriptionComponent />

      <div className="mt-10">
        <Socials />
      </div>
    </div>
  );
};

export default LeftSideContainer;
