"use client";

import { useState } from "react";
import { SysProjectCard } from "@/components/projects/sys-project-card";
import { projects } from "@/data/projects";

const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies))
).sort();

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.technologies.includes(activeFilter))
    : projects;

  return (
    <>
      <div className="svc-line">
        <span className="nm">svc/projects</span> · replicas {filteredProjects.length}/{projects.length} ·{" "}
        <span className="ok">healthy ●</span>
      </div>
      <h1 className="ptitle">All systems</h1>
      <p className="sub">Everything I&apos;ve built — across AI, cloud, full-stack, and systems. Filter by dependency.</p>

      <div className="filters">
        <button className={"fpill" + (activeFilter === null ? " on" : "")} onClick={() => setActiveFilter(null)}>
          all
        </button>
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            className={"fpill" + (activeFilter === tech ? " on" : "")}
            onClick={() => setActiveFilter(activeFilter === tech ? null : tech)}
          >
            {tech.toLowerCase()}
          </button>
        ))}
      </div>

      <div className="grid3">
        {filteredProjects.map((project) => (
          <SysProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="sub" style={{ padding: "40px 0", textAlign: "center" }}>
          zsh: no services match that dependency — try another filter.
        </p>
      )}
    </>
  );
}
