import React from "react";
const Badge = ({ icon, color = "blue", children }) => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur border border-slate-200 text-xs font-medium text-slate-600 mb-3">
    <span
      className={`iconify text-${color}-500`}
      data-icon={icon}
      data-width="14"
    ></span>
    {children}
  </div>
);
export default Badge;