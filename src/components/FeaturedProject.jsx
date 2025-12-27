import React from "react";
import Badge from "./Badge";
const FeaturedProject = () => (
  <div className="group relative md:col-span-2 h-100 bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
    <div className="absolute top-8 left-8 z-10">
      <Badge icon="lucide:layout-template" color="blue">
        Jira service management
      </Badge>
      <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
        Analytics Pro
      </h3>
      <p className="text-slate-500 text-base mt-2 max-w-md">
        A real-time data visualization platform handling millions of events with
        WebSocket integration.
      </p>
    </div>

    <div className="absolute top-40 left-8 right-8 bottom-0 bg-slate-50 rounded-t-xl border-t border-l border-r border-slate-200 shadow-sm overflow-hidden group-hover:-translate-y-2.5 transition-transform duration-500">
      <div className="w-full h-full p-6">
        <div className="flex gap-4 mb-4">
          {["blue", "green", "purple"].map((color, i) => (
            <div
              key={i}
              className="w-1/3 h-24 rounded-lg bg-white border border-slate-100 shadow-sm p-3"
            >
              <div className={`w-8 h-8 rounded bg-${color}-50 mb-2`}></div>
              <div className="w-16 h-2 rounded bg-slate-100"></div>
            </div>
          ))}
        </div>
        <div className="w-full h-64 rounded-lg bg-white border border-slate-100 shadow-sm p-4 flex items-end gap-2">
          {[40, 60, 30, 80, 50].map((height, i) => (
            <div
              key={i}
              className={`w-full h-[${height}%] ${
                height === 80 ? "bg-blue-500" : height >= 50 ? "bg-blue-200" : "bg-blue-100"
              } rounded-sm`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default FeaturedProject;