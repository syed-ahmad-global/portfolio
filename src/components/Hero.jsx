import React, { useState } from "react";
import {
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaLink,
  FaPaperPlane,
} from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { MdOutlineContentCopy, MdCheck } from "react-icons/md";

function Hero() {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ahmad53.work@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="flex flex-col w-full justify-center">
      <h2 className="text-5xl animate-moveUp">Ahmad Shah</h2>
      <h3 className="pt-4 text-2xl text-gray-400 animate-moveUp">
        Software Engineer
      </h3>
      <div className="rounded w-40 flex animate-moveUp items-end py-3">
        <IoLocationSharp className="w-6 h-6 sm:w-6 sm:h-6" />
        <p className="ml-2 text-md font-thin inline-block align-bottom text-gray-400">
          Punjab, Pakistan
        </p>
      </div>
      <div className="w-full sm:w-70 flex flex-wrap xs:justify-between animate-moveUp items-center">
        <div className="pt-4">
          <button className="w-32 h-7 flex items-center justify-center space-x-2 border border-[#fafafa] bg-transparent text-[#fafafa] rounded-[7px] hover:border-[#fafafa]">
            <FaFileDownload className="w-4 h-4" />
            <span className="cursor-pointer">Resume</span>
          </button>
        </div>
        <a
          href="https://linkedin.com/in/syed-ahmad-global"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 pt-4"
        >
          <FaLinkedin className="w-7 h-7 sm:w-7 sm:h-7" />
        </a>
        {/* <a
          href="https://twitter.com/SyedAhmadGlobal"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 pt-4"
        >
          <FaTwitterSquare className="w-7 h-7 sm:w-7 sm:h-7" />
        </a> */}
        {/* <a
          href="https://github.com/syed-ahmad-global"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 pt-4"
        >
          <FaGithub className="w-7 h-7 sm:w-7 sm:h-7" />
        </a> */}
        <a
          href="https://linktr.ee/syed_ahmad_global"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 pt-4"
        >
          <FaLink className="w-7 h-7 sm:w-7 sm:h-7" />
        </a>
        <div
          className="relative ml-3 cursor-pointer pt-4"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          tabIndex={0}
        >
          <IoMail className="w-7 h-7 sm:w-7 sm:h-7 transition-colors duration-200" />
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
                  if (e.key === "Enter" || e.key === " ") handleCopyEmail();
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
      </div>
    </div>
  );
}

export default Hero;
