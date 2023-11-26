import Link from "next/link";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <h2 className="lg:hidden">About</h2>
      <p>
        Text of my <Link href={""}> about </Link> section. About
      </p>
    </div>
  );
};

export default About;
