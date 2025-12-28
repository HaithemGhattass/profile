import React from "react";
import TechCard from "../components/TechCard";

const techStackData = [
  { icon: "lucide:atom", name: "React", category: "Framework", color: "blue" },
  { icon: "lucide:file-code", name: "TypeScript", category: "Language", color: "blue" },
  { icon: "lucide:zap", name: "Next.js", category: "Fullstack", color: "blue" },
  { icon: "lucide:palette", name: "Tailwind", category: "Styling", color: "blue" },
  { icon: "lucide:server", name: "Node.js", category: "Backend", color: "slate" },
  { icon: "lucide:database", name: "Postgres", category: "Database", color: "slate" },
  { icon: "lucide:figma", name: "Figma", category: "Design", color: "slate" },
  { icon: "lucide:git-branch", name: "Git", category: "Version Control", color: "slate" },
];

const Stack = () => {
  return (
    <section id="experience" className="mb-32 scroll-mt-28">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">
        Experience
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techStackData.map((tech, index) => (
          <TechCard
            key={index}
            icon={tech.icon}
            name={tech.name}
            category={tech.category}
            color={tech.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Stack