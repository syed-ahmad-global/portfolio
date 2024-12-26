import React from "react";

const TabSelector = ({ activeTab, handleTabChange }) => {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="h-9 items-center justify-center rounded-lg bg-slate-400 p-1 text-muted-foreground mb-2 grid w-full grid-cols-2"
      data-orientation="horizontal"
    >
      <button
        type="button"
        role="tab"
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all border-0 outline-0 ${
          activeTab === "work" ? "bg-gray-900 text-white" : "bg-background"
        }`}
        onClick={() => handleTabChange("work")}
      >
        Work
      </button>
      <button
        type="button"
        role="tab"
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all border-0 outline-0 ${
          activeTab === "education" ? "bg-gray-900 text-white" : "bg-background"
        }`}
        onClick={() => handleTabChange("education")}
      >
        Education
      </button>
    </div>
  );
};

export default TabSelector;
