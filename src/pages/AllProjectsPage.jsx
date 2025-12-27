import { useState } from "react";
import FilterButton from "../components/FilterButton";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import jctLogo from '../components/icons/jctlogo.svg';



// Projects Data
const projectsData = [
  {
    id: 1,
    title: "Comment Toolkit for Jira",
    category: "Jira Plugin",
    categoryIcon: "lucide:layout-template",
    categoryColor: "blue",
    description:
      "organize and label Jira comments, leverage advanced filtering options and use JQL search to quickly find issues based on comment labels",
    tags: ["React", "TypeScript", "Forge", "SQL"],
    liveUrl: "https://marketplace.atlassian.com/apps/1235579/comment-toolkit-for-jira",
    // githubUrl: "#",
    previewIcon:  jctLogo,
    featured: true,
    filter: "web",
    timeline: "6 months",
    role: "Lead FullStack Engineer",
    teamSize: "Team of 2",
    features: [
      "Structured Comment Labeling",
      "Centralized Label Governance",
      "Comment-Level Filtering",
      "Issue-Level Filtering via JQL",
      "Automation & Workflow Integration",
    ],
    challenges:
      "The main challenge was introducing semantic structure into Jira’s untyped comment system without impacting existing comment data or user workflows. This required preventing uncontrolled label creation, enforcing role-based permissions, and designing a scalable taxonomy model using label groups with project-level assignment. Additional complexity came from maintaining backward compatibility with legacy global labels, supporting non-destructive label lifecycle operations (archiving vs deletion), and enabling efficient comment-level filtering and JQL querying. The system also had to emit reliable webhook events to integrate with Jira Automation, transforming comment metadata into deterministic workflow triggers while preserving performance and data integrity at scale.",
  },
  {
    id: 2,
    title: "Morph for Confluence",
    category: "Confluence Plugin",
    categoryIcon: "lucide:smartphone",
    categoryColor: "purple",
    description:
      "Morph automatically transforms unstructured text into clear, well-organized pages while giving users full preview and control over the final result.",
    tags: ["React", "Forge", "Redux", "Python"],
    liveUrl: "https://marketplace.atlassian.com/apps/1235238/morph-ai-powered-content-formatting-for-confluence",
    // githubUrl: "#",
    previewIcon: "lucide:shopping-bag",
    featured: true,
    filter: "web",
    timeline: "6 months",
    role: "Lead FullStack Engineer",
    teamSize: "Team of 4",
    features: [
      "AI-powered page formatting with one-click transformation",
      "Generates structured, readable layouts from raw text and unformatted content",
      "Preview-based workflow with side-by-side comparison before applying changes",
      "Interactive prompting and retry mechanism to refine AI-generated results",
      "Dedicated Rovo Agent for using Morph on Live Docs",
    ],
    challenges:
      "The main challenge was transforming unstructured Confluence content into consistent, well-organized page structures while preserving context and page integrity. This required aligning AI-generated layouts with strict macro compatibility constraints, supporting partial and full-page transformations, and providing safe preview, retry, and rollback flows. Additional complexity came from handling insufficient context gracefully, maintaining deterministic user control over AI output, and ensuring seamless integration across classic pages and Live Docs without impacting performance or user trust.",
  },
  {
    id: 3,
    title: "Flux UI Kit",
    category: "Design System",
    categoryIcon: "lucide:figma",
    categoryColor: "orange",
    description:
      "A comprehensive component library for enterprise applications.",
    tags: ["React", "Storybook", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    previewIcon: "lucide:palette",
    featured: true,
    filter: "web",
    timeline: "8 months",
    role: "Design System Lead",
    teamSize: "Team of 4",
    features: [
      "50+ fully accessible React components",
      "Comprehensive Storybook documentation",
      "Dark mode support out of the box",
      "Customizable theme system",
      "TypeScript definitions for all components",
    ],
    challenges:
      "Balancing flexibility with consistency was key. We created a token-based design system that allows customization while ensuring components remain visually cohesive across different implementations.",
  },
  {
    id: 4,
    title: "Task Manager Pro",
    category: "Productivity",
    categoryIcon: "lucide:check-square",
    categoryColor: "green",
    description:
      "Full-stack task management application with team collaboration features.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
    previewIcon: "lucide:list-checks",
    featured: false,
    filter: "web",
    timeline: "5 months",
    role: "Full-stack Developer",
    teamSize: "Solo Project",
    features: [
      "Kanban and list views for task organization",
      "Real-time collaboration with team members",
      "Project templates and recurring tasks",
      "Time tracking and productivity analytics",
      "Email notifications and reminders",
    ],
    challenges:
      "Implementing real-time collaboration without overwhelming the database was tricky. We used optimistic updates and careful state management to create a responsive experience.",
  },
  {
    id: 5,
    title: "Weather App",
    category: "Mobile App",
    categoryIcon: "lucide:cloud",
    categoryColor: "blue",
    description:
      "Beautiful weather application with location-based forecasts and radar maps.",
    tags: ["React Native", "OpenWeather API", "Maps"],
    liveUrl: "#",
    githubUrl: "#",
    previewIcon: "lucide:sun",
    featured: false,
    filter: "mobile",
    timeline: "2 months",
    role: "Mobile Developer",
    teamSize: "Solo Project",
    features: [
      "7-day weather forecast with hourly details",
      "Interactive radar maps and animations",
      "Location-based weather alerts",
      "Beautiful weather visualizations",
      "Widget support for home screen",
    ],
    challenges:
      "Integrating mapping libraries while keeping the app performant on older devices required careful optimization and lazy loading strategies.",
  },
  {
    id: 6,
    title: "Portfolio Generator",
    category: "SaaS",
    categoryIcon: "lucide:layout-template",
    categoryColor: "purple",
    description:
      "No-code portfolio builder with customizable themes and deployment.",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    previewIcon: "lucide:layout-grid",
    featured: false,
    filter: "web",
    timeline: "4 months",
    role: "Full-stack Developer",
    teamSize: "Team of 2",
    features: [
      "Drag-and-drop page builder",
      "15+ professional themes",
      "Custom domain support",
      "Built-in analytics dashboard",
      "SEO optimization tools",
    ],
    challenges:
      "Building a flexible page builder that outputs clean, performant code required careful architecture planning and extensive testing across different use cases.",
  },
  {
    id: 7,
    title: "Fitness Tracker",
    category: "Health & Fitness",
    categoryIcon: "lucide:activity",
    categoryColor: "red",
    description:
      "Track workouts, nutrition, and progress with detailed analytics.",
    tags: ["React Native", "HealthKit", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    previewIcon: "lucide:heart-pulse",
    featured: false,
    filter: "mobile",
    timeline: "3 months",
    role: "Mobile Developer",
    teamSize: "Solo Project",
    features: [
      "Workout logging with exercise library",
      "Nutrition tracking with barcode scanner",
      "Progress photos and measurements",
      "Apple Health and Google Fit integration",
      "Personalized workout recommendations",
    ],
    challenges:
      "Integrating with native health APIs while maintaining cross-platform compatibility was complex, requiring platform-specific modules and careful data synchronization.",
  },
  {
    id: 8,
    title: "Blog Platform",
    category: "Content Management",
    categoryIcon: "lucide:file-text",
    categoryColor: "blue",
    description:
      "Modern blogging platform with markdown support and SEO optimization.",
    tags: ["Next.js", "MDX", "Vercel", "Analytics"],
    liveUrl: "#",
    githubUrl: "#",
    previewIcon: "lucide:newspaper",
    featured: false,
    filter: "web",
    timeline: "3 months",
    role: "Full-stack Developer",
    teamSize: "Solo Project",
    features: [
      "Markdown and MDX content support",
      "Built-in SEO optimization",
      "Comment system with moderation",
      "RSS feed generation",
      "Analytics and engagement metrics",
    ],
    challenges:
      "Creating a fast, SEO-friendly platform while supporting rich content required careful use of Next.js static generation and incremental static regeneration.",
  },
  {
    id: 9,
    title: "Recipe Finder",
    category: "Food & Drink",
    categoryIcon: "lucide:chef-hat",
    categoryColor: "orange",
    description:
      "Discover and save recipes with ingredient-based search and meal planning.",
    tags: ["React", "Spoonacular API", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    previewIcon: "lucide:utensils",
    featured: false,
    filter: "web",
    timeline: "2 months",
    role: "Frontend Developer",
    teamSize: "Solo Project",
    features: [
      "Search by ingredients you have",
      "Save favorite recipes",
      "Generate shopping lists",
      "Nutritional information display",
      "Weekly meal planner",
    ],
    challenges:
      "Managing API rate limits while providing a smooth user experience required implementing smart caching strategies and request batching.",
  },
];

const AllProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.filter === activeFilter);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors"
          >
            <span
              className="iconify"
              data-icon="lucide:arrow-left"
              data-width="20"
            ></span>
            <span className="font-medium">Back to Home</span>
          </a>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">
              {filteredProjects.length} Projects
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            All Projects
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            A collection of web and mobile applications I've built over the
            years. Each project represents a unique challenge and learning
            experience.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <span
              className="iconify text-slate-300 mb-4"
              data-icon="lucide:folder-open"
              data-width="64"
            ></span>
            <p className="text-slate-500">No projects found in this category.</p>
          </div>
        )}
      </main>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-24 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500">
            © 2025 Haithem Dev. Built with{" "}
            <span className="text-blue-600">Tailwind</span> &{" "}
            <span className="text-blue-600">Code</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};


export default AllProjectsPage;