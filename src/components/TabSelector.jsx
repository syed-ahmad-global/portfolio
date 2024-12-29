import React from "react";

const TabSelector = ({ activeTab, handleTabChange }) => {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="h-9 items-center justify-center rounded-lg bg-slate-400 p-1 mb-2 grid w-full grid-cols-2 dark:bg-gray-800"
      data-orientation="horizontal"
    >
      <button
        type="button"
        role="tab"
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all border-0 outline-0 ${
          activeTab === "work"
            ? "bg-gray-900 text-white dark:bg-gray-300 dark:text-gray-900"
            : " text-gray-700 dark:text-gray-300"
        }`}
        onClick={() => handleTabChange("work")}
      >
        Work
      </button>
      <button
        type="button"
        role="tab"
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all border-0 outline-0 ${
          activeTab === "education"
            ? "bg-gray-900 text-white dark:bg-gray-300 dark:text-gray-900"
            : "text-gray-700 dark:text-gray-300"
        }`}
        onClick={() => handleTabChange("education")}
      >
        Education
      </button>
    </div>
  );
};

export default TabSelector;
