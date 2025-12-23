import React from "react";
const About = () => {
  return (
    <section id="about" className="scroll-mt-28">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
              <span
                className="iconify text-slate-300"
                data-icon="lucide:user"
                data-width="32"
              ></span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Haithem Developer
              </h3>
              <p className="text-slate-500 text-sm">San Francisco, CA</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            I have over 5 years of experience building digital products. My
            journey started with a love for design, which naturally evolved into
            fullstack engineering. I believe the best applications are those that
            feel invisible—where the user interface anticipates needs before
            they arise.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Currently, I'm focused on building accessible, high-performance web
            applications using the modern React ecosystem. When I'm not coding,
            you can find me hiking or contributing to open source.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden group h-full">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
            <div className="relative z-10">
              <span
                className="iconify mb-4 opacity-80"
                data-icon="lucide:terminal"
                data-width="24"
              ></span>
              <h3 className="text-xl font-semibold tracking-tight">3+ Years</h3>
              <p className="text-blue-100 text-sm mt-1 mb-4">
                Professional Experience
              </p>

              <div className="bg-blue-800/50 rounded-lg p-3 font-mono text-xs text-blue-100 border border-blue-500/30">
                <div className="flex gap-2">
                  <span className="text-blue-300">const</span>
                  <span className="text-white">dev</span>
                  <span className="text-blue-300">=</span>
                  <span className="text-white">{"{"}</span>
                </div>
                <div className="pl-4">
                  level: <span className="text-green-300">'Senior'</span>,
                </div>
                <div className="pl-4">
                  passion: <span className="text-green-300">true</span>
                </div>
                <div>
                  <span className="text-white">{"}"}</span>;
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 flex items-center justify-between group hover:border-blue-300 transition-colors">
            <div>
              <div className="text-sm font-medium text-slate-900">Contact</div>
              <div className="text-xs text-slate-500 mt-0.5">hello@Haithem.dev</div>
            </div>
            <a
              href="mailto:hello@Haithem.dev"
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all"
            >
              <span
                className="iconify"
                data-icon="lucide:arrow-up-right"
                data-width="18"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
