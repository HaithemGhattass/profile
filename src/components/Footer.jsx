import React from "react";
const Footer = () => {
  return (
    <footer className="mt-24 border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-sm text-slate-500 font-medium">
        © 2025 Haithem Dev. Built with <span className="text-blue-600">Tailwind</span>{" "}
        &amp; <span className="text-blue-600">Code</span>.
      </div>
      <div className="flex gap-6">
        <a
          href="#"
          className="text-slate-400 hover:text-slate-900 transition-colors"
        >
          <span
            className="iconify"
            data-icon="lucide:twitter"
            data-width="20"
          ></span>
        </a>
        <a
          href="#"
          className="text-slate-400 hover:text-slate-900 transition-colors"
        >
          <span
            className="iconify"
            data-icon="lucide:linkedin"
            data-width="20"
          ></span>
        </a>
        <a
          href="#"
          className="text-slate-400 hover:text-slate-900 transition-colors"
        >
          <span
            className="iconify"
            data-icon="lucide:github"
            data-width="20"
          ></span>
        </a>
      </div>
    </footer>
  );
};
export default Footer