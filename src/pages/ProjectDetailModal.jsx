import React from "react"; 
import Icon from "../components/Icon";

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600">
              <Icon
                icon={project.categoryIcon}
                width="14"
                className={`text-${project.categoryColor}-500`}
              />
              {project.category}
            </div>
            {project.featured && (
              <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                Featured
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
          >
            <span
              className="iconify text-slate-600"
              data-icon="lucide:x"
              data-width="20"
            ></span>
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-8">
          {/* Title & Description */}
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {project.title}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {project.description}
          </p>

          {/* Preview Image Placeholder */}
          <div className="w-full h-80 bg-slate-50 rounded-2xl border border-slate-200 mb-8 flex items-center justify-center">
            <Icon
              icon={project.previewIcon}
              width="96"
              className="text-slate-300"
            />
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Technologies */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm bg-slate-100 text-slate-700 rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                Project Timeline
              </h3>
              <p className="text-slate-600">{project.timeline || "3 months"}</p>
            </div>

            {/* Role */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                My Role
              </h3>
              <p className="text-slate-600">{project.role || "Full-stack Developer"}</p>
            </div>

            {/* Team Size */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                Team Size
              </h3>
              <p className="text-slate-600">{project.teamSize || "Solo Project"}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.features?.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span
                      className="iconify text-blue-600"
                      data-icon="lucide:check"
                      data-width="12"
                    ></span>
                  </span>
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">
                Challenges & Solutions
              </h3>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <p className="text-slate-600 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200">
            <a
              href={project.liveUrl}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              <span
                className="iconify"
                data-icon="lucide:external-link"
                data-width="18"
              ></span>
              View Live Project
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-900 rounded-full font-medium hover:bg-slate-200 transition-colors"
              >
                <span
                  className="iconify"
                  data-icon="lucide:github"
                  data-width="18"
                ></span>
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetailModal;