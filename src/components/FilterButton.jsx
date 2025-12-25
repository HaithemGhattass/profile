import React from "react";
const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
      active
        ? "bg-blue-600 text-white"
        : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300"
    }`}
  >
    {children}
  </button>
);
export default FilterButton;