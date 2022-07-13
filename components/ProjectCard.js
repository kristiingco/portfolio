import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { SocialIcon } from "react-social-icons";

const ProjectCard = ({
  imageUrl,
  title,
  description,
  techStack,
  externalUrl,
  githubUrl,
}) => {
  return (
    <div className="flex flex-col shadow-lg shadow-slate-400 p-5 gap-3 w-80 rounded-xl">
      <Image src={imageUrl} alt={title} width="275" height="150" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
      <div>
        <div className="flex flex-wrap gap-3">
          {techStack.map((item, idx) => {
            return (
              <li
                key={idx}
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
    </div>
  );
};

export default ProjectCard;
