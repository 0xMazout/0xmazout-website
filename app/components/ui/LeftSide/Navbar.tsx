"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/app/utils/utils";

type Props = {};

const Navbar = (props: Props) => {
  const [activeSection, setActiveSection] = useState("about");

  const handleIntersection = (entries: any[], observer: any) => {
    entries.forEach(
      (entry: {
        isIntersecting: any;
        target: { id: React.SetStateAction<string> };
      }) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      },
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.5,
    });

    const sections = ["about", "experience", "project"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <ul className="mt-16 w-max">
      <li>
        <a
          className={"group flex items-center py-3"}
          href="#about"
          onClick={() => setActiveSection("about")}
        >
          <span
            className={cn(
              "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none",
              activeSection == "about" && "w-16 bg-slate-200",
            )}
          ></span>
          <span
            className={cn(
              "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200",
              activeSection == "about" && " text-slate-200",
            )}
          >
            About
          </span>
        </a>
      </li>
      <li>
        <a
          className={`group flex items-center py-3`}
          href="#experience"
          onClick={() => setActiveSection("experience")}
        >
          <span
            className={cn(
              "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none",
              activeSection == "experience" && "w-16 bg-slate-200",
            )}
          ></span>
          <span
            className={cn(
              "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200",
              activeSection == "experience" && " text-slate-200",
            )}
          >
            Experience
          </span>
        </a>
      </li>
      <li>
        <a
          className={`group flex items-center py-3 `}
          href="#project"
          onClick={() => setActiveSection("projects")}
        >
          <span
            className={cn(
              "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none",
              activeSection == "project" && "w-16 bg-slate-200",
            )}
          ></span>
          <span
            className={cn(
              "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200",
              activeSection == "project" && " text-slate-200",
            )}
          >
            Project
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
