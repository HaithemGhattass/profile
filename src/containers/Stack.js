import React from "react";
const Stack  = () => {
    return (
                <section id="stack" class="mb-32 scroll-mt-28">
            <h2 class="text-2xl font-semibold tracking-tight text-slate-900 mb-8">Tech Stack</h2>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="p-4 bg-white rounded-2xl border border-slate-200 flex items-center gap-3 hover:border-blue-300 transition-colors cursor-default group">
                    <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <span class="iconify" data-icon="lucide:atom" data-width="20"></span>
                    </div>
                    <div>
                        <div class="text-sm font-semibold text-slate-900">React</div>
                        <div class="text-xs text-slate-500">Framework</div>
                    </div>
                </div>

                <div class="p-4 bg-white rounded-2xl border border-slate-200 flex items-center gap-3 hover:border-blue-300 transition-colors cursor-default group">
                    <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <span class="iconify" data-icon="lucide:file-code" data-width="20"></span>
                    </div>
                    <div>
                        <div class="text-sm font-semibold text-slate-900">TypeScript</div>
                        <div class="text-xs text-slate-500">Language</div>
                    </div>
                </div>

                <div class="p-4 bg-white rounded-2xl border border-slate-200 flex items-center gap-3 hover:border-blue-300 transition-colors cursor-default group">
                    <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <span class="iconify" data-icon="lucide:zap" data-width="20"></span>
                    </div>
                    <div>
                        <div class="text-sm font-semibold text-slate-900">Next.js</div>
                        <div class="text-xs text-slate-500">Fullstack</div>
                    </div>
                </div>

                <div class="p-4 bg-white rounded-2xl border border-slate-200 flex items-center gap-3 hover:border-blue-300 transition-colors cursor-default group">
                    <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <span class="iconify" data-icon="lucide:palette" data-width="20"></span>
                    </div>
                    <div>
                        <div class="text-sm font-semibold text-slate-900">Tailwind</div>
                        <div class="text-xs text-slate-500">Styling</div>
                    </div>
                </div>

                <div class="p-4 bg-white rounded-2xl border border-slate-200 flex items-center gap-3 hover:border-blue-300 transition-colors cursor-default group">
                    <div class="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
                        <span class="iconify" data-icon="lucide:server" data-width="20"></span>
                    </div>
                    <div>
                        <div class="text-sm font-semibold text-slate-900">Node.js</div>
                        <div class="text-xs text-slate-500">Backend</div>
                    </div>
                </div>

                <div class="p-4 bg-white rounded-2xl border border-slate-200 flex items-center gap-3 hover:border-blue-300 transition-colors cursor-default group">
                    <div class="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
                        <span class="iconify" data-icon="lucide:database" data-width="20"></span>
                    </div>
                    <div>
                        <div class="text-sm font-semibold text-slate-900">Postgres</div>
                        <div class="text-xs text-slate-500">Database</div>
                    </div>
                </div>

                <div class="p-4 bg-white rounded-2xl border border-slate-200 flex items-center gap-3 hover:border-blue-300 transition-colors cursor-default group">
                    <div class="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
                        <span class="iconify" data-icon="lucide:figma" data-width="20"></span>
                    </div>
                    <div>
                        <div class="text-sm font-semibold text-slate-900">Figma</div>
                        <div class="text-xs text-slate-500">Design</div>
                    </div>
                </div>

                <div class="p-4 bg-white rounded-2xl border border-slate-200 flex items-center gap-3 hover:border-blue-300 transition-colors cursor-default group">
                    <div class="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
                        <span class="iconify" data-icon="lucide:git-branch" data-width="20"></span>
                    </div>
                    <div>
                        <div class="text-sm font-semibold text-slate-900">Git</div>
                        <div class="text-xs text-slate-500">Version Control</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Stack