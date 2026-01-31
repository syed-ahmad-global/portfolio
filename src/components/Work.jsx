import React, { useState } from "react";
import TabSelector from "./TabSelector";
import zuzeeeLogo from "../assets/images/zuzeee_logo.webp";
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
                              {/* Work Experience Entry - Zuzeee (Current) */}
                              <li className="relative ml-10 py-4">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                                  href="https://www.linkedin.com/company/zuzeee/posts/?feedView=all"
                                >
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border dark:border-gray-700">
                                    <img
                                      className="aspect-square h-full w-full bg-background object-contain"
                                      alt="Zuzeee"
                                      src={zuzeeeLogo}
                                      loading="lazy"
                                      draggable="false"
                                    />
                                  </span>
                                </a>
                                <div className="flex flex-1 flex-col justify-start gap-1">
                                  <time className="text-xs dark:text-custom-gray text-custom-white">
                                    08/2025 - Present
                                  </time>
                                  <h2 className="font-semibold leading-none dark:text-custom-gray text-custom-white">
                                    Frontend Developer
                                  </h2>
                                  <p className="text-sm dark:text-custom-gray text-custom-white">
                                    Zuzeee
                                  </p>
                                  <ul className="list-disc list-inside dark:text-custom-gray text-custom-white text-sm">
                                    <li>
                                      Designed and developed a responsive web application for managing taxi accounts and bookings.
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
                                  href="https://thetechaxe.com/"
                                >
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border dark:border-gray-700">
                                    <img
                                      className="aspect-square h-full w-full bg-background object-contain"
                                      alt="Services Software House"
                                      src={techXLogo}
                                      loading="lazy"
                                      draggable="false"
                                    />
                                  </span>
                                </a>
                                <div className="flex flex-1 flex-col justify-start gap-1">
                                  <time className="text-xs dark:text-custom-gray text-custom-white">
                                    01/2025 - 04/2025
                                  </time>
                                  <h2 className="font-semibold leading-none dark:text-custom-gray text-custom-white">
                                    Frontend Developer
                                  </h2>
                                  <p className="text-sm dark:text-custom-gray text-custom-white">
                                    The TechAxe
                                  </p>
                                  <ul className="list-disc list-inside dark:text-custom-gray text-custom-white text-sm">
                                    <li>
                                      Developed responsive web applications using React.js, Bootstrap 5, Tailwind CSS, and Material UI.
                                    </li>
                                    <li>
                                      Implemented modern web technologies and best practices to enhance application performance.
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
                                  href="https://medtronix.world/"
                                >
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border dark:border-gray-700">
                                    <img
                                      className="aspect-square h-full w-full object-contain"
                                      alt="Medtronix Systems"
                                      src={medtronixPng}
                                      loading="lazy"
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
                                      Developed and maintained frontend applications using React.js, serving multiple active users.
                                    </li>
                                    <li>
                                      Collaborated with designers to implement pixel-perfect UI/UX designs across multiple projects.
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              {/* Work Experience Entry 4 */}
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
                                      loading="lazy"
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
                                      Assisted in the development of web applications using HTML, CSS, and JavaScript during 4-month internship.
                                    </li>
                                    <li>
                                      Gained hands-on experience with modern web technologies and agile development practices.
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
                                      loading="lazy"
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
                                      loading="lazy"
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
