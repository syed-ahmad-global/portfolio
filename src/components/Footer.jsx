import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import useLocation

import { FaLink, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdCheck, MdOutlineContentCopy } from "react-icons/md";
import { TbCodeAsterisk } from "react-icons/tb";

const Footer = () => {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ahmad53.work@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  return (
    <div className="bg-custom-gray dark:bg-white w-full">
      <div className=" max-w-3xl mx-auto py-8 w-full flex flex-col  justify-end">
        <hr className="w-full border-t border-gray-300/20 dark:border-gray-600 my-4" />
        <div className="w-full flex flex-row justify-between moveUpAni bottom-0 items-center">
          <div className="flex">
            <NavLink
              to="/"
              className="text-xl font-bold text-white dark:text-gray-800"
            >
              <TbCodeAsterisk className="w-7 h-7 sm:w-7 sm:h-7" />
            </NavLink>
          </div>
          <div className="flex flex-row w-32 items-center justify-between">
            <span>
              <a
                href="https://linkedin.com/in/syed-ahmad-global"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 pt-4 dark:text-custom-gray text-custom-white"
              >
                <FaLinkedin className="w-7 h-7 sm:w-7 sm:h-7" />
              </a>
            </span>
            <span>
              <a
                href="https://linktr.ee/syed_ahmad_global"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 pt-4 dark:text-custom-gray text-custom-white"
              >
                <FaLink className="w-7 h-7 sm:w-7 sm:h-7" />
              </a>
            </span>
            <span>
              <div
                className="relative cursor-pointer pt-4"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onFocus={() => setHovered(true)}
                onBlur={() => setHovered(false)}
                tabIndex={0}
              >
                <IoMail className="w-7 h-7 sm:w-7 sm:h-7 dark:text-custom-gray text-custom-white transition-colors duration-200" />
                {hovered && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex space-x-2 bg-white px-3 py-2 rounded shadow-md">
                    <a
                      href="mailto:ahmad53.work@gmail.com"
                      className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                      tabIndex={0}
                    >
                      <FaPaperPlane className="w-5 h-5" />
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="text-gray-600 hover:text-green-500 transition-colors duration-200"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          handleCopyEmail();
                      }}
                      tabIndex={0}
                    >
                      {copied ? (
                        <MdCheck className="w-5 h-5 text-green-500 transition-all duration-200" />
                      ) : (
                        <MdOutlineContentCopy className="w-5 h-5 transition-all duration-200" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
