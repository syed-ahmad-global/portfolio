import React, { useState } from "react";
import TabSelector from "./TabSelector";
import medtronixPng from "../assets/images/Medtronix.png";
import servicesGroundPng from "../assets/images/serviceGround.png";
import universityOfSahiwalLogo from "../assets/images/universityOfSahiwal.png";
import pgcLogo from "../assets/images/pgcLogo.png";

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
                  <div className="mt-2 ring-offset-background">
                    <div className="rounded-xl border bg-card text-card-foreground shadow">
                      <div className="p-0">
                        <div className="relative">
                          <div>
                            <ul className="ml-10 border-l">
                              {/* Work Experience Entry 1 */}
                              <li className="relative ml-10 py-4">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                                  href="https://medtronix.world/"
                                >
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                                    <img
                                      className="aspect-square h-full w-full bg-background object-contain"
                                      alt="Medtronix Systems"
                                      src={medtronixPng}
                                    />
                                  </span>
                                </a>
                                <div className="flex flex-1 flex-col justify-start gap-1">
                                  <time className="text-xs text-muted-foreground">
                                    Sep 2022 - Nov 2024
                                  </time>
                                  <h2 className="font-semibold leading-none">
                                    Frontend Developer
                                  </h2>
                                  <p className="text-sm text-muted-foreground">
                                    Medtronix Systems
                                  </p>
                                  <ul className="list-disc list-inside text-muted-foreground text-sm">
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

                              {/* Work Experience Entry 2 */}
                              <li className="relative ml-10 py-4">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                                  href="https://servicesground.com"
                                >
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                                    <img
                                      className="aspect-square h-full w-full bg-background object-contain"
                                      alt="Services Software House"
                                      src={servicesGroundPng}
                                    />
                                  </span>
                                </a>
                                <div className="flex flex-1 flex-col justify-start gap-1">
                                  <time className="text-xs text-muted-foreground">
                                    Aug 2022 - Dec 2022
                                  </time>
                                  <h2 className="font-semibold leading-none">
                                    Frontend Developer (Internship)
                                  </h2>
                                  <p className="text-sm text-muted-foreground">
                                    Services Ground
                                  </p>
                                  <ul className="list-disc list-inside text-muted-foreground text-sm">
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
                    <div className="rounded-xl border bg-card text-card-foreground shadow">
                      <div className="p-0">
                        <div className="relative">
                          <div>
                            <ul className="ml-10 border-l">
                              {/* Education Entry 1 */}
                              <li className="relative ml-10 py-4">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
                                  href="https://www.uosahiwal.edu.pk"
                                >
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                                    <img
                                      className="aspect-square h-full w-full bg-background object-contain"
                                      alt="University of Sahiwal"
                                      src={universityOfSahiwalLogo}
                                    />
                                  </span>
                                </a>
                                <div className="flex flex-1 flex-col justify-start gap-1">
                                  <time className="text-xs text-muted-foreground">
                                    2020 - 2024
                                  </time>
                                  <h2 className="font-semibold leading-none">
                                    University of Sahiwal
                                  </h2>
                                  <p className="text-sm text-muted-foreground">
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
                                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                                    <img
                                      className="aspect-square h-full w-full bg-background object-contain"
                                      alt="Punjab Group of Colleges"
                                      src={pgcLogo}
                                    />
                                  </span>
                                </a>
                                <div className="flex flex-1 flex-col justify-start gap-1">
                                  <time className="text-xs text-muted-foreground">
                                    2019 - 2020
                                  </time>
                                  <h2 className="font-semibold leading-none">
                                    Punjab College Sahiwal
                                  </h2>
                                  <p className="text-sm text-muted-foreground">
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
