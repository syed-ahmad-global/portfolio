import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";
import { NavLink, useLocation } from "react-router-dom";

import { FaSun, FaMoon, FaArrowLeft } from "react-icons/fa";
import { TbCodeAsterisk } from "react-icons/tb";

const Navbar = () => {
  const location = useLocation();
  const isSuccessOrFailurePage =
    location.pathname === "/success" || location.pathname === "/failure";

  // Initialize theme from localStorage or system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Use system preference as default and save it
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem('theme', systemPrefersDark ? 'dark' : 'light');
    return systemPrefersDark;
  };

  const [darkMode, setDarkMode] = useState(() => {
    const initialTheme = getInitialTheme();
    // Apply theme immediately during initialization
    if (initialTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return initialTheme;
  });

  // Handle theme toggle and save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const handleSystemThemeChange = (e) => {
      const currentTheme = localStorage.getItem('theme');
      // Only update if current theme matches the old system preference
      const wasFollowingSystem = currentTheme === 'dark' && !e.matches ||
                                currentTheme === 'light' && e.matches;

      if (wasFollowingSystem) {
        setDarkMode(e.matches);
        localStorage.setItem('theme', e.matches ? 'dark' : 'light');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  return (
    <Headroom className="w-full">
      <nav className="bg-custom-gray dark:bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <NavLink
                to="/"
                className="text-xl font-bold text-white dark:text-gray-800"
              >
                <TbCodeAsterisk className="w-7 h-7 sm:w-7 sm:h-7" />
              </NavLink>
            </div>

            <div className="flex items-center space-x-4">
              {/* Conditionally render the Contact button using NavLink */}
              {!isSuccessOrFailurePage && (
                <>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "hidden"
                        : "px-4 py-2 bg-slate-400 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white dark:border-gray-800 border-opacity-20 text-white dark:text-gray-800 shadow-sm rounded-md text-sm font-medium flex items-center gap-1"
                    }
                  >
                    <FaArrowLeft />
                    Back
                  </NavLink>
                  <NavLink
                    to="/contact" // Specify the target path to navigate to
                    className={({ isActive }) =>
                      isActive
                        ? "hidden"
                        : "px-4 py-2 bg-slate-400 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white dark:border-gray-800 border-opacity-20 text-white dark:text-gray-800 shadow-sm rounded-md text-sm font-medium"
                    }
                  >
                    Contact Me
                  </NavLink>
                </>
              )}

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setDarkMode(!darkMode);
                  }
                }}
                aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
                className="p-2 bg-slate-400 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white dark:border-gray-800 border-opacity-20 text-gray-800 dark:text-white shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
              >
                <span className="text-white dark:text-gray-800">
                  {darkMode ? (
                    <FaSun className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <FaMoon className="w-4 h-4" aria-hidden="true" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
