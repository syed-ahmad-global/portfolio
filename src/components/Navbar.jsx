import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";

import { FaSun, FaMoon } from "react-icons/fa";
import { TbCodeAsterisk } from "react-icons/tb";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Handle theme toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Headroom className="w-full">
      <nav className="bg-custom-gray dark:bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-xl font-bold text-white dark:text-gray-800"
              >
                <TbCodeAsterisk className="w-7 h-7 sm:w-7 sm:h-7" />
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#contact"
                className="px-4 py-2 bg-slate-400 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white dark:border-gray-800 border-opacity-20 text-white dark:text-gray-800 shadow-sm rounded-md text-sm font-medium"
              >
                Contact Me
              </a>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 bg-slate-400 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white dark:border-gray-800 border-opacity-20 text-gray-800 dark:text-white shadow-sm rounded-full"
              >
                {darkMode ? (
                  <span className="text-white dark:text-gray-800">
                    <FaSun className="w-5 h-5" />
                  </span>
                ) : (
                  <span className="text-white dark:text-gray-800">
                    <FaMoon className="w-5 h-5" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
