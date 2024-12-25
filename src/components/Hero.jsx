import React from "react";
import {
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5"; // Import the location icon

function Hero() {
  return (
    <div className="flex flex-col w-full justify-center">
      <h2 className="text-5xl animate-moveUp">Ahmad Shah</h2>
      <h3 className="pt-4 text-2xl text-gray-400 animate-moveUp">
        Software Engineer <br />
        F1 Enthusiast
      </h3>
      <div className="rounded w-40 flex animate-moveUp items-end py-3">
        <IoLocationSharp className="w-6 h-6 sm:w-6 sm:h-6" />
        <p className="ml-2 text-md font-thin inline-block align-bottom text-gray-400">
          Punjab, Pakistan
        </p>
      </div>
      <div className="pt-4 w-full sm:w-70 flex flex-wrap xs:justify-between animate-moveUp items-center">
        <button className="w-32 h-7 flex items-center justify-center space-x-2 border border-[#fafafa] bg-transparent text-[#fafafa] rounded-[7px] hover:border-[#fafafa]">
          <FaFileDownload className="w-4 h-4" />
          <span className="cursor-pointer">Resume</span>
        </button>
        <span className="ml-3">
          <FaLinkedin className="w-7 h-7 sm:w-7 sm:h-7" />
        </span>
        <span className="ml-3">
          <FaTwitterSquare className="w-7 h-7 sm:w-7 sm:h-7" />
        </span>
        <span className="ml-3">
          <FaGithub className="w-7 h-7 sm:w-7 sm:h-7" />
        </span>
      </div>
    </div>
  );
}

export default Hero;
