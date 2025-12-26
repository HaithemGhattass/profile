import React from "react";
const ProjectCard = ({ project, onClick }) => (
  <div
    onClick={onClick}
    className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer"
  >
    <div className="p-8">
      <div className="flex items-start justify-between mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600">
          <span
            className={`iconify text-${project.categoryColor}-500`}
            data-icon={project.categoryIcon}
            data-width="14"
          ></span>
          {project.category}
        </div>
        {project.featured && (
          <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">
        {project.title}
      </h3>
      <p className="text-slate-500 text-sm mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-slate-50 text-slate-600 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
        View Details
        <span
          className="iconify group-hover:translate-x-1 transition-transform"
          data-icon="lucide:arrow-right"
          data-width="14"
        ></span>
      </div>
    </div>

    <div className="h-48 bg-slate-50 border-t border-slate-200 p-6 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
      <span
        className="iconify text-slate-300"
        data-icon={project.previewIcon}
        data-width="64"
      ></span>
    </div>
  </div>
);
export default ProjectCard;