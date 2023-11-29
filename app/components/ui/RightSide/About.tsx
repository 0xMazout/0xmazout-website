import Link from "next/link";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 max-w-2xl"
      id="about"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2
          id="about"
          className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
        >
          ABOUT
        </h2>
      </div>
      <p className="inline text-lg">
        I've spent the last{" "}
        <span className="bg-clip-text bg-gradient-to-r text-xl text-transparent from-lime-600 via-purple-600 to-teal-600 hover:decoration-teal-300 hover:underline underline-offset-4 transition">
          10 years working software engineering
        </span>
        . And I've been fortunate enough to work with some amazing people and
        companies. In 2018 I decided to take a break from the Corporate world
        and now
        {
          <span className="bg-clip-text bg-gradient-to-r text-xl text-transparent from-lime-600 via-purple-600 to-teal-600 hover:decoration-teal-300 hover:underline underline-offset-4 transition">
            {" "}
            focus on Web3 and Blockchain space
          </span>
        }
        . I felt literaly in love with this space. I'm currently member of a
        private group{" "}
        <Link
          className="bg-clip-text font-bold text-xl text-slate-200  hover:decoration-teal-300 hover:underline underline-offset-4 transition"
          href={"https://twitter.com/AltierCapital"}
        >
          Altier Capital
        </Link>{" "}
        where we are building projects together.
      </p>
    </section>
  );
};

export default About;
