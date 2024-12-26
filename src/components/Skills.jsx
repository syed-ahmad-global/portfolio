import React from "react";

function Skills() {
  return (
    <div className="mt-8">
      <span className="text-xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold ">
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
            className="flex justify-center items-center rounded-[5px] w-fit px-3 py-1 text-xs h-8 ml-1 mb-1 bg-slate-400 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white border-opacity-20 text-white shadow-sm"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
