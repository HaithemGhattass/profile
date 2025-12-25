import React from "react";
const EcommerceProject = () => (
  <div className="group h-87.5 bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden relative hover:border-blue-200 hover:shadow-md transition-all duration-300">
    <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
      <span
        className="iconify w-64 h-64 text-slate-400"
        data-icon="lucide:shopping-bag"
      ></span>
    </div>
    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 mb-3">
          <span
            className="iconify text-purple-500"
            data-icon="lucide:smartphone"
            data-width="14"
          ></span>
          React Native
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          E-commerce App
        </h3>
        <p className="text-slate-500 text-sm mt-2">
          Mobile application with complex gesture handling.
        </p>
      </div>
    </div>
    <div className="absolute right-0 bottom-0 w-2/3 h-3/4 bg-white rounded-tl-2xl border-t border-l border-slate-200 shadow-sm translate-y-4 translate-x-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 p-4">
      <div className="w-full h-8 rounded-full bg-slate-50 mb-4 flex items-center px-3">
        <div className="w-4 h-4 rounded-full bg-slate-200"></div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-20 bg-slate-50 rounded-lg"></div>
        ))}
      </div>
    </div>
  </div>
);
export default EcommerceProject;