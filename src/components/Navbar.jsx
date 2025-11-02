import React, { useState, useEffect, useCallback } from "react";
import Headroom from "react-headroom";
import { NavLink, useLocation } from "react-router-dom";

import { FaSun, FaMoon, FaArrowLeft, FaDesktop } from "react-icons/fa";
import { TbCodeAsterisk } from "react-icons/tb";

/**
 * Theme options for the application
 * @readonly
 * @enum {string}
 */
const THEMES = {
  /** Light theme mode */
  LIGHT: 'light',
  /** Dark theme mode */
  DARK: 'dark',
  /** System theme mode (follows OS preference) */
  SYSTEM: 'system'
};

/**
 * Navbar component with theme switching functionality
 * @returns {JSX.Element} The rendered navbar
 */
const Navbar = () => {
  const location = useLocation();
  const isSuccessOrFailurePage = ["/success", "/failure"].includes(location.pathname);

  /**
   * Gets the initial theme from localStorage or defaults to system preference
   * @returns {string} The initial theme value
   */
  const getInitialTheme = useCallback(() => {
    const savedTheme = localStorage.getItem('theme');
    return Object.values(THEMES).includes(savedTheme) ? savedTheme : THEMES.SYSTEM;
  }, []);

  /**
   * Applies the theme to the document element
   * Note: CSS logic is inverted - dark class = light theme, no dark class = dark theme
   * @param {string} themeSetting - The theme to apply
   */
  const applyTheme = useCallback((themeSetting) => {
    const isSystemDark = themeSetting === THEMES.SYSTEM
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : themeSetting === THEMES.DARK;

    document.documentElement.classList.toggle("dark", !isSystemDark);
  }, []);

const [theme, setTheme] = useState(() => getInitialTheme());

// Apply theme on initial mount and handle theme changes
useEffect(() => {
  applyTheme(theme);
  localStorage.setItem('theme', theme);
}, [theme, applyTheme]);

// Listen for system theme changes only when theme is set to 'system'
useEffect(() => {
  if (theme !== THEMES.SYSTEM) return;

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleSystemThemeChange = () => applyTheme(THEMES.SYSTEM);

  mediaQuery.addEventListener('change', handleSystemThemeChange);
  return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
}, [theme, applyTheme]);

/**
 * Cycles through theme states: Light → Dark → System → Light
 */
const cycleTheme = useCallback(() => {
  setTheme(prevTheme => {
    switch (prevTheme) {
      case THEMES.LIGHT: return THEMES.DARK;
      case THEMES.DARK: return THEMES.SYSTEM;
      default: return THEMES.LIGHT;
    }
  });
}, []);

/**
 * Returns the appropriate icon for the current theme
 * @param {string} currentTheme - The current theme value
 * @returns {JSX.Element} The theme icon component
 */
const getThemeIcon = useCallback((currentTheme) => {
  switch (currentTheme) {
    case THEMES.LIGHT: return <FaSun className="w-4 h-4" aria-hidden="true" />;
    case THEMES.DARK: return <FaMoon className="w-4 h-4" aria-hidden="true" />;
    case THEMES.SYSTEM: return <FaDesktop className="w-4 h-4" aria-hidden="true" />;
    default: return <FaDesktop className="w-4 h-4" aria-hidden="true" />;
  }
}, []);

// Common styling for navigation buttons
const navButtonClass = "px-4 py-2 bg-slate-400/20 backdrop-blur-sm border border-white/20 dark:border-gray-800/20 text-white dark:text-gray-800 shadow-sm rounded-md text-sm font-medium transition-all duration-200";

return (
    <Headroom className="w-full">
      <nav className="bg-custom-gray dark:bg-white transition-colors duration-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLink
              to="/"
              className="flex-shrink-0 text-xl font-bold text-white dark:text-gray-800"
            >
              <TbCodeAsterisk className="w-7 h-7" />
            </NavLink>

            <div className="flex items-center space-x-4">
              {!isSuccessOrFailurePage && (
                <>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "hidden" : `${navButtonClass} flex items-center gap-1`
                    }
                  >
                    <FaArrowLeft />
                    Back
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "hidden" : navButtonClass
                    }
                  >
                    Contact Me
                  </NavLink>
                </>
              )}

              <button
                onClick={cycleTheme}
                onKeyDown={(e) => {
                  if (["Enter", " "].includes(e.key)) {
                    e.preventDefault();
                    cycleTheme();
                  }
                }}
                aria-label={`Switch theme. Current theme: ${theme}`}
                className="p-2 bg-slate-400/20 backdrop-blur-sm border border-white/20 dark:border-gray-800/20 text-white dark:text-gray-800 shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
              >
                {getThemeIcon(theme)}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
