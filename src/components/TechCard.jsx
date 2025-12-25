import React from "react";
const TechCard = ({ icon, name, category, color = "blue" }) => {
  const bgColor = color === "blue" ? "bg-blue-50" : "bg-slate-50";
  const textColor = color === "blue" ? "text-blue-600" : "text-slate-600";
  
  return (
    <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-center gap-3 hover:border-blue-300 transition-colors cursor-default group">
      <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center ${textColor} group-hover:scale-110 transition-transform`}>
        <span className="iconify" data-icon={icon} data-width="20"></span>
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{name}</div>
        <div className="text-xs text-slate-500">{category}</div>
      </div>
    </div>
  );
};
export default TechCard;