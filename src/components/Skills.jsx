import React from "react";

function Skills() {
  return (
    <div className="mt-8">
      <span className="text-xl sm:text-4xl md:text-4xl lg:text-4xl dark:text-custom-gray text-custom-white font-semibold">
        Skills
      </span>
      <div className="flex flex-wrap pt-4 sm:pt-8 w-full">
        {[
          "JavaScript",
          // "TypeScript",
          "ReactJS",
          // "Redux",
          // "NextJS",
          "Bootstrap5",
          "Tailwind CSS ",
          "Material UI",
          "Git",
          "Github",
          "HTML5",
          "CSS3",
        ].map((skill) => (
          <div
            key={skill}
            className="flex justify-center items-center rounded-[5px] w-fit px-3 py-1 text-xs h-8 ml-1 mb-1 bg-slate-400 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white dark:border-gray-700 border-opacity-20 text-white dark:text-gray-800 font-medium shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
