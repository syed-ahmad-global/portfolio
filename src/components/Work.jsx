import React, { useState } from "react";
import TabSelector from "./TabSelector";
import techXLogo from "../assets/images/tech_axe_logo.webp";
import medtronixPng from "../assets/images/Medtronix.webp";
import servicesGroundPng from "../assets/images/serviceGround.webp";
import universityOfSahiwalLogo from "../assets/images/universityOfSahiwal.webp";
import pgcLogo from "../assets/images/pgcLogo.webp";

const Work = () => {
  const [activeTab, setActiveTab] = useState("work");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col w-full pt-16">
      <div dir="ltr" data-orientation="horizontal">
        {/* Tab Selector */}
        <TabSelector activeTab={activeTab} handleTabChange={handleTabChange} />

        <div className="tab-content">
          {activeTab === "work" && (
            <div
              className="transition-all duration-500 opacity-100 translate-x-0"
              role="tabpanel"
            >
              {/* Work content */}
              {activeTab === "work" && (
                <div
                  className="transition-all duration-500 opacity-100 translate-x-0"
                  role="tabpanel"
                >
                  <div className="mt-2 ">
                    <div className="rounded-xl border dark:border-gray-700 shadow">
                      <div className="p-0">
                        <div className="relative">
                          <div>
                            <ul className="ml-10 border-l dark:border-gray-700">
                              {/* Work Experience Entry 1 */}
                              <li className="relative ml-10 py-4">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                                  href="https://thetechaxe.com/"
                                >
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border dark:border-gray-700">
                                    <img
                                      className="aspect-square h-full w-full bg-background object-contain"
                                      alt="Services Software House"
                                      src={techXLogo}
                                      draggable="false"
                                    />
                                  </span>
                                </a>
                                <div className="flex flex-1 flex-col justify-start gap-1">
                                  <time className="text-xs dark:text-custom-gray text-custom-white">
                                    Jan 2024 - Current
                                  </time>
                                  <h2 className="font-semibold leading-none dark:text-custom-gray text-custom-white">
                                    Frontend Developer
                                  </h2>
                                  <p className="text-sm dark:text-custom-gray text-custom-white">
                                    Tech Axe
                                  </p>
                                  <ul className="list-disc list-inside dark:text-custom-gray text-custom-white text-sm">
                                    <li>
                                      Development of web applications using
                                      ReactJS Bootstrap5 Tailwind CSS Material
                                      UI
                                    </li>
                                    <li>
                                      Implemented latest technologies with web.
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              {/* Work Experience Entry 2 */}
                              <li className="relative ml-10 py-4">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                                  href="https://medtronix.world/"
                                >
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border dark:border-gray-700">
                                    <img
                                      className="aspect-square h-full w-full object-contain"
                                      alt="Medtronix Systems"
                                      src={medtronixPng}
                                      draggable="false"
                                    />
                                  </span>
                                </a>
                                <div className="flex flex-1 flex-col justify-start gap-1">
                                  <time className="text-xs dark:text-custom-gray text-custom-white">
                                    Sep 2022 - Nov 2024
                                  </time>
                                  <h2 className="font-semibold leading-none dark:text-custom-gray text-custom-white">
                                    Frontend Developer
                                  </h2>
                                  <p className="text-sm dark:text-custom-gray text-custom-white">
                                    Medtronix Systems
                                  </p>
                                  <ul className="list-disc list-inside dark:text-custom-gray text-custom-white text-sm">
                                    <li>
                                      Developed and maintained frontend
                                      applications using React.js.
                                    </li>
                                    <li>
                                      Collaborated with designers to implement
                                      UI/UX designs.
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              {/* Work Experience Entry 3 */}
                              <li className="relative ml-10 py-4">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                                  href="https://servicesground.com"
                                >
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border dark:border-gray-700">
                                    <img
                                      className="aspect-square h-full w-full bg-background object-contain"
                                      alt="Services Software House"
                                      src={servicesGroundPng}
                                      draggable="false"
                                    />
                                  </span>
                                </a>
                                <div className="flex flex-1 flex-col justify-start gap-1">
                                  <time className="text-xs dark:text-custom-gray text-custom-white">
                                    Aug 2022 - Dec 2022
                                  </time>
                                  <h2 className="font-semibold leading-none dark:text-custom-gray text-custom-white">
                                    Frontend Developer (Internship)
                                  </h2>
                                  <p className="text-sm dark:text-custom-gray text-custom-white">
                                    Services Ground
                                  </p>
                                  <ul className="list-disc list-inside dark:text-custom-gray text-custom-white text-sm">
                                    <li>
                                      Assisted in the development of web
                                      applications using HTML, CSS, and
                                      JavaScript.
                                    </li>
                                    <li>
                                      Gained hands-on experience with web
                                      technologies.
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "education" && (
            <div
              className="transition-all duration-500 opacity-100 translate-x-0"
              role="tabpanel"
            >
              {/* Education content */}
              {activeTab === "education" && (
                <div
                  className="transition-all duration-500 opacity-100 translate-x-0"
                  role="tabpanel"
                >
                  <div className="mt-2 ring-offset-background">
                    <div className="rounded-xl border dark:border-gray-700 shadow">
                      <div className="p-0">
                        <div className="relative">
                          <div>
                            <ul className="ml-10 border-l dark:border-gray-700">
                              {/* Education Entry 1 */}
                              <li className="relative ml-10 py-4">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                                  href="https://www.uosahiwal.edu.pk"
                                >
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border dark:border-gray-700">
                                    <img
                                      className="aspect-square h-full w-full bg-background object-contain"
                                      alt="University of Sahiwal"
                                      src={universityOfSahiwalLogo}
                                      draggable="false"
                                    />
                                  </span>
                                </a>
                                <div className="flex flex-1 flex-col justify-start gap-1">
                                  <time className="text-xs dark:text-custom-gray text-custom-white">
                                    2020 - 2024
                                  </time>
                                  <h2 className="font-semibold leading-none dark:text-custom-gray text-custom-white">
                                    University of Sahiwal
                                  </h2>
                                  <p className="text-sm dark:text-custom-gray text-custom-white">
                                    Bachelor's in Software Engineering
                                  </p>
                                </div>
                              </li>

                              {/* Education Entry 2 */}
                              <li className="relative ml-10 py-4">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                                  href="https://pgc.edu"
                                >
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border dark:border-gray-700">
                                    <img
                                      className="aspect-square h-full w-full bg-background object-contain"
                                      alt="Punjab Group of Colleges"
                                      src={pgcLogo}
                                      draggable="false"
                                    />
                                  </span>
                                </a>
                                <div className="flex flex-1 flex-col justify-start gap-1">
                                  <time className="text-xs dark:text-custom-gray text-custom-white">
                                    2019 - 2020
                                  </time>
                                  <h2 className="font-semibold leading-none dark:text-custom-gray text-custom-white">
                                    Punjab College Sahiwal
                                  </h2>
                                  <p className="text-sm dark:text-custom-gray text-custom-white">
                                    Intermediate
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
