import React from "react";
import SkillCard from "./SkillCard";
import { MinusIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";
import { skillData } from "../lib/skillData";

const SkillCards = () => {
  return (
    <div className="grid" id="skills">
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
