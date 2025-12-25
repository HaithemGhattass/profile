import React from "react";
const DesignSystemProject = () => (
  <div className="group h-87.5 bg-white rounded-3xl border border-slate-200 overflow-hidden relative hover:border-blue-200 hover:shadow-md transition-all duration-300">
    <div className="p-8">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-3">
        <span
          className="iconify text-orange-500"
          data-icon="lucide:figma"
          data-width="14"
        ></span>
        Design System
      </div>
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
        Flux UI Kit
      </h3>
      <p className="text-slate-500 text-sm mt-2">
        A comprehensive component library for enterprise apps.
      </p>
    </div>
    <div className="absolute left-8 right-8 bottom-8 h-40 flex gap-3">
      <div className="flex-1 flex flex-col gap-3 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
        <div className="h-10 rounded-lg bg-blue-600 shadow-lg shadow-blue-500/20"></div>
        <div className="h-10 rounded-lg bg-slate-100 border border-slate-200"></div>
        <div className="h-10 rounded-lg bg-white border border-slate-200 border-dashed"></div>
      </div>
      <div className="flex-1 flex flex-col gap-3 group-hover:-translate-y-4 transition-transform duration-500 delay-100">
        <div className="h-full rounded-lg bg-slate-900"></div>
      </div>
    </div>
  </div>
);
export default DesignSystemProject;