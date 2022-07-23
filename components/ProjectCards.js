import React from "react";
import ProjectCard from "./ProjectCard";
import { MinusIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";
import { projectData } from "../lib/projectData";

const ProjectCards = () => {
  return (
    <div className="mt-5" id="projects">
      <h2 className="text-xl text-cool-green font-semibold ml-10 mb-5">
        <MinusIcon className="w-5 h-5 inline" />
        projects
      </h2>
      <div className="flex flex-col gap-10 items-center">
        {projectData.map(
          ({
            imageUrl,
            title,
            description,
            techStack,
            externalUrl,
            githubUrl,
          }) => {
            return (
              <ProjectCard
                key={uuidv4()}
                imageUrl={imageUrl}
                title={title}
                description={description}
                techStack={techStack}
                externalUrl={externalUrl}
                githubUrl={githubUrl}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProjectCards;
