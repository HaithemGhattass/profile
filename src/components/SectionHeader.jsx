import React from "react";
const SectionHeader = ({ title, linkText = "View all" }) => (
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
      {title}
    </h2>
    <a
      href="/projects"
      className="text-sm font-medium text-slate-500 hover:text-blue-600 flex items-center gap-1"
    >
      {linkText}{" "}
      <span
        className="iconify"
        data-icon="lucide:arrow-right"
        data-width="14"
      ></span>
    </a>
  </div>
);
export default SectionHeader