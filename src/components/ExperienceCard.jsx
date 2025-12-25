import React from "react";
import CodeSnippet from "./CodeSnippet";
const ExperienceCard = () => (
  <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden group h-full">
    <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
    <div className="relative z-10">
      <span
        className="iconify mb-4 opacity-80"
        data-icon="lucide:terminal"
        data-width="24"
      ></span>
      <h3 className="text-xl font-semibold tracking-tight">3+ Years</h3>
      <p className="text-blue-100 text-sm mt-1 mb-4">Professional Experience</p>

      <CodeSnippet />
    </div>
  </div>
);
export default ExperienceCard;