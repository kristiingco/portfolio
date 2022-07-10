import React from "react";
import SectionCards from "./SectionCards";
import { MinusIcon } from "@heroicons/react/solid";

const educationData = [
  {
    title: "Ateneo de Manila University",
    subtitle: "B.S. Computer Science",
    duration: "Aug 2016 - May 2020",
    description:
      "I graduated with Cum Laude honors, my GPA being 3.62. My group thesis on passive haptic learning with morse code was accepted in the the Philippine Computing Science Congress 2020 (PCSC 2020). I also had a leadership position at the Computer Society of the Ateneo (CompSAt) as Vice President of Logistics and Promotions.",
  },
];
const EducationSection = () => {
  return (
    <section>
      <h2 className="text-xl text-cool-green font-semibold ml-10">
        <MinusIcon className="w-5 h-5 inline" />
        education
      </h2>
      <SectionCards data={educationData} />
    </section>
  );
};

export default EducationSection;
