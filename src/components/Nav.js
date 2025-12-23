import React from "react";
const Nav = () => {
  return (
    <nav class="fixed top-0 w-full z-50 px-6 py-6 transition-all duration-300">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="#"
          class="text-lg font-semibold tracking-tight flex items-center gap-2 group"
        >
          <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
            <span
              class="iconify"
              data-icon="lucide:code-2"
              data-width="18"
            ></span>
          </div>
          <span class="text-slate-900">Haithem.dev</span>
        </a>

        <div class="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md border border-slate-200/50 p-1.5 rounded-full shadow-sm">
          <a
            href="#work"
            class="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white rounded-full transition-all"
          >
            Work
          </a>
          <a
            href="#stack"
            class="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white rounded-full transition-all"
          >
            Stack
          </a>
          <a
            href="#about"
            class="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-white rounded-full transition-all"
          >
            About
          </a>
        </div>

        <a
          href="mailto:hello@Haithem.dev"
          class="hidden md:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-300"
        >
          <span>Contact</span>
          <span
            class="iconify"
            data-icon="lucide:arrow-right"
            data-width="16"
          ></span>
        </a>

        <button class="md:hidden text-slate-900">
          <span class="iconify" data-icon="lucide:menu" data-width="24"></span>
        </button>
      </div>
    </nav>
  );
};
export default Nav