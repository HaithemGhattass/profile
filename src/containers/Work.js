import React from "react";
const Work = () => {
  return (
    <section id="work" class="mb-32 scroll-mt-28">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-900">
          Selected Work
        </h2>
        <a
          href="#"
          class="text-sm font-medium text-slate-500 hover:text-blue-600 flex items-center gap-1"
        >
          View all{" "}
          <span
            class="iconify"
            data-icon="lucide:arrow-right"
            data-width="14"
          ></span>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="group relative md:col-span-2 h-[400px] bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
          <div class="absolute top-8 left-8 z-10">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur border border-slate-200 text-xs font-medium text-slate-600 mb-3">
              <span
                class="iconify text-blue-500"
                data-icon="lucide:layout-template"
                data-width="14"
              ></span>
              SaaS Dashboard
            </div>
            <h3 class="text-3xl font-semibold tracking-tight text-slate-900">
              Analytics Pro
            </h3>
            <p class="text-slate-500 text-base mt-2 max-w-md">
              A real-time data visualization platform handling millions of
              events with WebSocket integration.
            </p>
          </div>

          <div class="absolute top-40 left-8 right-8 bottom-0 bg-slate-50 rounded-t-xl border-t border-l border-r border-slate-200 shadow-sm overflow-hidden group-hover:translate-y-[-10px] transition-transform duration-500">
            <div class="w-full h-full p-6">
              <div class="flex gap-4 mb-4">
                <div class="w-1/3 h-24 rounded-lg bg-white border border-slate-100 shadow-sm p-3">
                  <div class="w-8 h-8 rounded bg-blue-50 mb-2"></div>
                  <div class="w-16 h-2 rounded bg-slate-100"></div>
                </div>
                <div class="w-1/3 h-24 rounded-lg bg-white border border-slate-100 shadow-sm p-3">
                  <div class="w-8 h-8 rounded bg-green-50 mb-2"></div>
                  <div class="w-16 h-2 rounded bg-slate-100"></div>
                </div>
                <div class="w-1/3 h-24 rounded-lg bg-white border border-slate-100 shadow-sm p-3">
                  <div class="w-8 h-8 rounded bg-purple-50 mb-2"></div>
                  <div class="w-16 h-2 rounded bg-slate-100"></div>
                </div>
              </div>
              <div class="w-full h-64 rounded-lg bg-white border border-slate-100 shadow-sm p-4 flex items-end gap-2">
                <div class="w-full h-[40%] bg-blue-100 rounded-sm"></div>
                <div class="w-full h-[60%] bg-blue-200 rounded-sm"></div>
                <div class="w-full h-[30%] bg-blue-100 rounded-sm"></div>
                <div class="w-full h-[80%] bg-blue-500 rounded-sm"></div>
                <div class="w-full h-[50%] bg-blue-200 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="group h-[350px] bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden relative hover:border-blue-200 hover:shadow-md transition-all duration-300">
          <div class="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <span
              class="iconify w-64 h-64 text-slate-400"
              data-icon="lucide:shopping-bag"
            ></span>
          </div>
          <div class="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 mb-3">
                <span
                  class="iconify text-purple-500"
                  data-icon="lucide:smartphone"
                  data-width="14"
                ></span>
                React Native
              </div>
              <h3 class="text-2xl font-semibold tracking-tight text-slate-900">
                E-commerce App
              </h3>
              <p class="text-slate-500 text-sm mt-2">
                Mobile application with complex gesture handling.
              </p>
            </div>
          </div>
          <div class="absolute right-0 bottom-0 w-2/3 h-3/4 bg-white rounded-tl-2xl border-t border-l border-slate-200 shadow-sm translate-y-4 translate-x-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 p-4">
            <div class="w-full h-8 rounded-full bg-slate-50 mb-4 flex items-center px-3">
              <div class="w-4 h-4 rounded-full bg-slate-200"></div>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="h-20 bg-slate-50 rounded-lg"></div>
              <div class="h-20 bg-slate-50 rounded-lg"></div>
              <div class="h-20 bg-slate-50 rounded-lg"></div>
              <div class="h-20 bg-slate-50 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div class="group h-[350px] bg-white rounded-3xl border border-slate-200 overflow-hidden relative hover:border-blue-200 hover:shadow-md transition-all duration-300">
          <div class="p-8">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-3">
              <span
                class="iconify text-orange-500"
                data-icon="lucide:figma"
                data-width="14"
              ></span>
              Design System
            </div>
            <h3 class="text-2xl font-semibold tracking-tight text-slate-900">
              Flux UI Kit
            </h3>
            <p class="text-slate-500 text-sm mt-2">
              A comprehensive component library for enterprise apps.
            </p>
          </div>
          <div class="absolute left-8 right-8 bottom-8 h-40 flex gap-3">
            <div class="flex-1 flex flex-col gap-3 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
              <div class="h-10 rounded-lg bg-blue-600 shadow-lg shadow-blue-500/20"></div>
              <div class="h-10 rounded-lg bg-slate-100 border border-slate-200"></div>
              <div class="h-10 rounded-lg bg-white border border-slate-200 border-dashed"></div>
            </div>
            <div class="flex-1 flex flex-col gap-3 group-hover:-translate-y-4 transition-transform duration-500 delay-100">
              <div class="h-full rounded-lg bg-slate-900"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work