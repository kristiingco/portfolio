import React from "react";

const Card = ({ title, subtitle, duration, description }) => {
  return (
    <div className="flex flex-col w-72 shrink-0 shadow-lg rounded-lg shadow-slate-400 p-8">
      <h3 className="text-xl font-semibold leading-snug">{title}</h3>
      <span className="font-semibold">{subtitle}</span>
      <span className="text-sm block">{duration}</span>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default Card;
