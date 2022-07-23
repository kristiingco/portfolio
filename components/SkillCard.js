import React from "react";

const SkillCard = ({ name, devIconClass }) => {
  return (
    <div className="flex flex-col items-center bg-light-gray p-5 w-32">
      <i className={`${devIconClass} text-7xl`}></i>

      <span>{name}</span>
    </div>
  );
};

export default SkillCard;
