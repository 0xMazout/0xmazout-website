import React from "react";
import Github from "@/public/logos/Github";
import Linkedin from "@/public/logos/Linkedin";
import Twitter from "@/public/logos/Twitter";

const Socials = () => {
  return (
    <div className="flex gap-5">
      <Github className="fill-slate-500 hover:fill-white w-5 h-5 cursor-pointer" />
      <Linkedin className="fill-slate-500 hover:fill-white w-5 h-5 cursor-pointer" />
      <Twitter className="fill-slate-500 hover:fill-white w-5 h-5 cursor-pointer" />
    </div>
  );
};

export default Socials;
