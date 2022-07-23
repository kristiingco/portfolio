import React from "react";
import SkillCard from "./SkillCard";
import { MinusIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";

const skillData = [
  {
    name: "Javascript",
    devIconClass: "devicon-javascript-plain colored",
  },
  {
    name: "React",
    devIconClass: "devicon-react-original colored",
  },
  {
    name: "Next.js",
    devIconClass: "devicon-nextjs-original colored",
  },
  {
    name: "HTML5",
    devIconClass: "devicon-html5-plain colored",
  },
  {
    name: "CSS3",
    devIconClass: "devicon-css3-plain colored",
  },
  {
    name: "Sass",
    devIconClass: "devicon-sass-original colored",
  },
  {
    name: "Tailwind CSS",
    devIconClass: "devicon-tailwindcss-plain colored",
  },
  {
    name: "Github",
    devIconClass: "devicon-github-original colored",
  },
  {
    name: "Firebase",
    devIconClass: "devicon-firebase-plain colored",
  },
];
const SkillCards = () => {
  return (
    <div className="grid">
      <h2 className="text-xl text-cool-green font-semibold ml-10 mb-5">
        <MinusIcon className="w-5 h-5 inline" />
        skills
      </h2>
      <div className="grid grid-cols-2  place-content-center gap-10 my-0 mx-auto">
        {skillData.map(({ name, devIconClass }) => {
          return (
            <SkillCard key={uuidv4()} name={name} devIconClass={devIconClass} />
          );
        })}
      </div>
    </div>
  );
};

export default SkillCards;
