import React from "react";
import ProjectCard from "./ProjectCard";
import { MinusIcon } from "@heroicons/react/solid";

const projectData = [
  {
    imageUrl: "/static/forward.png",
    title: "Forward",
    description: `A full-stack web application that is meant to emulate an entertainment database. The web app allows a user to log in and register, to search through the provided library of items, and to bookmark such items.`,
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "Framer Motion",
    ],
    externalUrl: "https://forward-entertainment.vercel.app/login",
    githubUrl: "https://github.com/kristiingco/forward",
  },
  {
    imageUrl: "/static/coffee-finder.png",
    title: "Coffee Finder",
    description:
      "A web application for finding coffee stores through the Geolocation API. The web app also includes an upvoting feature.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Airtable"],
    externalUrl: "https://coffee-finder-delta.vercel.app/",
    githubUrl: "https://github.com/kristiingco/coffee-finder",
  },
  {
    imageUrl: "/static/planets.png",
    title: "Planets Fact Website",
    description:
      "A web application that allows one to view information and statistics regarding planets in the solar system.",
    techStack: ["React", "SCSS", "Framer Motion"],
    externalUrl: "https://kristiingco-planets-fact-site.netlify.app",
    githubUrl: "https://github.com/kristiingco/planets-fact-site",
  },
  {
    imageUrl: "/static/talab.png",
    title: "TALAB Enlistment Portal",
    description:
      "A website for the students and faculty of Ateneo de Manila University to enlist in seminars and workshops that discuss societal issues. The website allows thousands of authorized users to enlist at a time.",
    techStack: ["HTML/CSS", "Laravel", "PHP", "Javascript", "MySQL"],
  },
];
const ProjectCards = () => {
  return (
    <div>
      <h2 className="text-xl text-cool-green font-semibold ml-10 mb-5">
        <MinusIcon className="w-5 h-5 inline" />
        projects
      </h2>
      <div className="flex flex-col gap-10 items-center">
        {projectData.map(
          (
            { imageUrl, title, description, techStack, externalUrl, githubUrl },
            idx
          ) => {
            return (
              <ProjectCard
                key={idx}
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
