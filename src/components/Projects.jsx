import React from "react";

import ProjectCard from "./ProjectCard";

import projectsData from "../projectsData.json";

import uranusImg from "../assets/images/projects/uranus.jpg";
import navaImg from "../assets/images/projects/nava.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Uranus",
      description:
        "Uranus is fully responsive website. Main theme of this portfolio website of a company.",
      imageSrc: uranusImg,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      sourceLink: "https://github.com/syed-ahmad-global/Uranus",
      websiteLink: "https://uranus1.netlify.app",
    },
    {
      title: "Nava",
      description:
        "Nava is fully responsive website. Main theme of this website is renting, buying and selling of boat.",
      imageSrc: navaImg,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      sourceLink: "https://github.com/syed-ahmad-global/Nava",
      websiteLink: "https://nava1.netlify.app",
    },
  ];

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
