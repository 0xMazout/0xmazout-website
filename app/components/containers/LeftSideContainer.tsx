import React from "react";
import TitleComponent from "../ui/Header/TitleComponent";
import SubtitleComponent from "../ui/Header/SubtitleComponent";
import DescriptionComponent from "../ui/Header/DescriptionComponent";
import Socials from "../ui/LeftSide/Socials";

type Props = {};

const LeftSideContainer = (props: Props) => {
	return (
		<div>
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
