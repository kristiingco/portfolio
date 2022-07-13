import React, { useEffect } from "react";
import SectionCards from "./SectionCards";
import { MinusIcon } from "@heroicons/react/solid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const scrollVariant = {
  visible: { x: 0 },
  hidden: { x: "calc(100vw - 100px)" },
};

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
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.section
      ref={ref}
      variants={scrollVariant}
      initial="hidden"
      animate={control}
    >
      <h2 className="text-xl text-cool-green font-semibold ml-10">
        <MinusIcon className="w-5 h-5 inline" />
        education
      </h2>
      <SectionCards data={educationData} />
    </motion.section>
  );
};

export default EducationSection;
