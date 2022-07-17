import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

const SectionCards = ({ data }) => {
  return (
    <div className="">
      <div className="flex overflow-x-auto overflow-y-hidden gap-5 p-4 pl-10 pb-10 justify-start">
        {data.map(({ title, subtitle, duration, description }) => (
          <Card
            key={uuidv4()}
            title={title}
            subtitle={subtitle}
            duration={duration}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionCards;
