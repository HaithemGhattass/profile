import { useState } from "react";
import FilterButton from "../components/FilterButton";
import ProjectCard from "../components/ProjectCard";



// Projects Data
const projectsData = [
  {
    id: 1,
    title: "Analytics Pro",
    category: "SaaS Dashboard",
    categoryIcon: "lucide:layout-template",
    categoryColor: "blue",
    description:
      "A real-time data visualization platform handling millions of events with WebSocket integration.",
    tags: ["React", "TypeScript", "WebSocket", "D3.js"],
    liveUrl: "#",
    githubUrl: "#",
    previewIcon: "lucide:bar-chart-3",
    featured: true,
    filter: "web",
  },
  {
    id: 2,
    title: "E-commerce App",
    category: "React Native",
    categoryIcon: "lucide:smartphone",
    categoryColor: "purple",
    description:
      "Mobile application with complex gesture handling and smooth animations.",
    tags: ["React Native", "Redux", "Stripe", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    previewIcon: "lucide:shopping-bag",
    featured: true,
    filter: "mobile",
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
  },
];
const AllProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

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
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
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