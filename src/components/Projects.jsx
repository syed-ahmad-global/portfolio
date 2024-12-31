import React from "react";

import ProjectCard from "./ProjectCard";

import projectsData from "../projectsData.json";

const Projects = () => {
  return (
    <div className="w-full mt-10 flex flex-col">
      <span className="text-xl sm:text-4xl md:text-4xl lg:text-4xl dark:text-custom-gray text-custom-white font-semibold">
        Projects
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
