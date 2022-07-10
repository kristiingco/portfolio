import React from "react";
import SectionCards from "./SectionCards";
import { MinusIcon } from "@heroicons/react/solid";

const experienceData = [
  {
    title: "Software Quality Operations Associate",
    company: "Waymo (via ICONMA)",
    duration: "Nov 2021 - Present",
    description:
      "I analyze an average of over 100 test scenarios a day for software operating on autonomus vehicles. I also test internal triaging tools and provide feedback for workflows and documentation.",
  },
  {
    title: "Software Engineer Intern",
    company: "Freelancer.com",
    duration: "Jun 2019 - Jul 2019",
    description:
      "I participated in the SDLC and partook in Scrum meetings to learn as I gained experience in working on the company's products and services. I was part of the team in charge of reengineering the static website into a dynamic web application using Angular, and I was also able to work on the company's internal component library.",
  },
];
const ExperienceSection = () => {
  return (
    <section>
      <h2 className="text-xl text-cool-green font-semibold ml-10">
        <MinusIcon className="w-5 h-5 inline" />
        experience
      </h2>
      <SectionCards data={experienceData} />
    </section>
  );
};

export default ExperienceSection;
