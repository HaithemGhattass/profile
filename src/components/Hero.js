import React from "react";
const Hero = () => {
    return (
                    <section class="flex flex-col items-center text-center mb-32">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8 animate-fade-up">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for new projects
            </div>

            <h1 class="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-slate-900 mb-6 max-w-4xl text-balance animate-fade-up delay-100">
                Crafting digital <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">perfection.</span>
            </h1>

            <p class="text-lg md:text-xl text-slate-500 max-w-xl text-balance mb-10 leading-relaxed animate-fade-up delay-200">
                I'm a Fullstack Engineer obsessed with micro-interactions, clean architecture, and pixel-perfect implementation.
            </p>

            <div class="flex gap-4 animate-fade-up delay-300">
                <button class="group flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-600 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-blue-500/20">
                    <span class="iconify" data-icon="lucide:arrow-down" data-width="18"></span>
                    View Work
                </button>
                <button class="group flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl text-sm font-medium hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
                    <span class="iconify" data-icon="lucide:github" data-width="18"></span>
                    GitHub
                </button>
            </div>
        </section>
    )
}
export default Hero