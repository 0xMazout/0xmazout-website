import Link from "next/link";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 max-w-2xl">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2
          id="about"
          className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
        >
          ABOUT
        </h2>
      </div>
      <p>
        I've spent the last 10 years working software engineering. And I've been
        fortunate enough to work with some amazing people and companies. In 2018
        I decided to take a break from the corporate world and focus on Web3 and
        Blockchain Environment. I felt literaly in love with this space.
      </p>
    </section>
  );
};

export default About;
