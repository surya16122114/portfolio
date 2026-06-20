"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies))
).sort();

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.technologies.includes(activeFilter))
    : projects;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="mb-2 font-mono text-sm text-primary">{"// all work"}</p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Projects
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          A showcase of what I&apos;ve built — across AI, cloud, full-stack, and systems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="my-10 flex flex-wrap justify-center gap-2"
      >
        <FilterPill active={activeFilter === null} onClick={() => setActiveFilter(null)}>
          All
        </FilterPill>
        {allTechnologies.map((tech) => (
          <FilterPill key={tech} active={activeFilter === tech} onClick={() => setActiveFilter(tech)}>
            {tech}
          </FilterPill>
        ))}
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">
          No projects with that technology yet — try another filter.
        </p>
      )}
    </section>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm transition-all",
        active
          ? "border-transparent bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20"
          : "glass glass-hover text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}
