import React, { useEffect } from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { SocialIcon } from "react-social-icons";
import { v4 as uuidv4 } from "uuid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const scrollVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const ProjectCard = ({
  imageUrl,
  title,
  description,
  techStack,
  externalUrl,
  githubUrl,
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={scrollVariant}
      initial="hidden"
      animate={control}
      whileHover={{
        scale: 1.1,
      }}
      className="flex flex-col shadow-lg shadow-slate-400 p-5 gap-3 w-80 rounded-xl"
    >
      <Image
        src={imageUrl}
        alt={title}
        width="275"
        height="150"
        className="object-cover"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
      <div>
        <div className="flex flex-wrap gap-3">
          {techStack.map((item) => {
            return (
              <li
                key={uuidv4()}
                className="text-sm bg-cool-green text-white px-3 py-1 rounded-full list-none"
              >
                {item}
              </li>
            );
          })}
        </div>
      </div>
      {externalUrl && githubUrl && (
        <div className="flex items-center justify-end">
          <a href={externalUrl} target="_blank" rel="noreferrer">
            <ExternalLinkIcon className="w-6 h-6 text-cool-green" />
          </a>

          <SocialIcon
            url={githubUrl}
            target={"_blank"}
            fgColor="#169492"
            bgColor="none"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
