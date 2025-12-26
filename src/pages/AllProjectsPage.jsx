import { useState } from "react";
import FilterButton from "../components/FilterButton";
import ProjectCard from "../components/ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";



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
    timeline: "6 months",
    role: "Lead Frontend Developer",
    teamSize: "Team of 5",
    features: [
      "Real-time data streaming with WebSocket connections",
      "Interactive charts and visualizations using D3.js",
      "Custom dashboard builder with drag-and-drop",
      "Advanced filtering and data export capabilities",
      "Multi-tenant architecture with role-based access",
    ],
    challenges:
      "The main challenge was optimizing performance for real-time data updates. We implemented virtual scrolling and data chunking to handle millions of data points without compromising user experience. WebSocket reconnection logic was crucial for maintaining stable connections.",
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
    timeline: "4 months",
    role: "Mobile Developer",
    teamSize: "Team of 3",
    features: [
      "Seamless checkout experience with Stripe integration",
      "Product search with filters and recommendations",
      "Push notifications for orders and promotions",
      "Offline mode with local data persistence",
      "Custom animations and gesture controls",
    ],
    challenges:
      "Creating a smooth, native-feeling experience across iOS and Android was challenging. We spent significant time optimizing animations and implementing platform-specific features while maintaining code reusability.",
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