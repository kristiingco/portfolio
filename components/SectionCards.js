import React from "react";
import Card from "./Card";

const SectionCards = ({ data }) => {
  return (
    <div className="">
      <div className="flex overflow-x-auto overflow-y-hidden gap-5 p-4 pl-10 justify-start">
        {data.map(({ title, company, duration, description }, idx) => (
          <Card
            key={idx}
            title={title}
            company={company}
            duration={duration}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionCards;
