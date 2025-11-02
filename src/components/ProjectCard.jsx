import React from "react";
import { FiGithub, FiGlobe } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="rounded-xl border border-gray-400 bg-card text-card-foreground shadow flex flex-col"
    >
      <div className="flex w-full max-h-[15rem] min-h-[15rem] rounded-xl flex-col space-y-1.5 p-6 pb-2 skeleton relative">
        <img
          className="h-full w-full object-cover rounded-xl"
          alt={project.title}
          src={project.imageSrc}
          loading="lazy"
          draggable="false"
        />
      </div>
      <div className="p-6 pt-0 flex flex-col gap-2">
        <div className="font-bold dark:text-neutral-600 text-neutral-200 mb-2 mt-2">
          {project.title}
        </div>
        <div className="prose max-w-full text-pretty text-xs dark:text-neutral-600 text-neutral-200 dark:prose-invert">
          <p>{project.description}</p>
        </div>
      </div>
      <div className="p-6 pt-0 flex flex-col items-start justify-between gap-4">
        <div className="mt-2 flex flex-wrap gap-1">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-transparent bg-gray-500 text-white px-1 py-0 text-[0.60rem]"
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap items-start gap-1">
          {project.sourceLink ? (
            <a
              target="_blank"
              href={project.sourceLink}
              rel="noopener noreferrer"
            >
              <div className="flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border-transparent bg-white dark:bg-black text-black dark:text-white shadow hover:bg-gray-300 gap-2 px-2 py-1 text-xs">
                <FiGithub className="w-3 h-3" />
                Source
              </div>
            </a>
          ) : null}

          {project.websiteLink ? (
            <a
              target="_blank"
              href={project.websiteLink}
              rel="noopener noreferrer"
            >
              <div className="flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border-transparent bg-white dark:bg-black text-black dark:text-white shadow hover:bg-gray-300 gap-2 px-2 py-1 text-xs">
                <FiGlobe className="w-3 h-3" />
                Website
              </div>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
