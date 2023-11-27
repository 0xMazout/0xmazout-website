import React from "react";
import TitleComponent from "@components/ui/Header/TitleComponent";
import SubtitleComponent from "@components/ui/Header/SubtitleComponent";
import DescriptionComponent from "@components/ui/Header/DescriptionComponent";
import Socials from "@components/ui/LeftSide/Socials";
import Navbar from "../ui/LeftSide/Navbar";

type Props = {};

const LeftSideContainer = (props: Props) => {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="lg:sticky h-full">
        <TitleComponent />
        <SubtitleComponent />
        <DescriptionComponent />
        <Navbar />
      </div>
      <div className="lg:sticky mt-10">
        <Socials />
      </div>
    </div>
  );
};

export default LeftSideContainer;
