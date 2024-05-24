import React from "react";
import ContactForm from "@/public/logos/ContactForm";
import Link from "next/link";

type Props = {};

const DescriptionComponent = (props: Props) => {
  return (
    <div>
      <p className="mt-4 max-w-xs leading-normal">
        I build result oriented and high quality products focusing on Web 3
      </p>

      <Link
        href={"https://forms.gle/MWEmqTEWH7ZstZrSA"}
        className="mt-4 flex gap-2 group"
      >
        <p className="text-xl text-slate-300 group-hover:text-white">
          {" "}
          Hire me{" "}
        </p>
        <ContactForm className="fill-slate-500 group-hover:fill-white w-8 h-8 cursor-pointer" />
      </Link>
    </div>
  );
};

export default DescriptionComponent;
