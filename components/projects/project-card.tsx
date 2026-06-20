"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
  Cloud,
  Cpu,
  Globe,
  Clapperboard,
  Mic,
  ShieldCheck,
  MessagesSquare,
  Database,
  Server,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectAccent, ProjectIcon } from "@/data/projects";

export const iconMap: Record<ProjectIcon, LucideIcon> = {
  ai: Sparkles,
  cloud: Cloud,
  os: Cpu,
  web: Globe,
  movie: Clapperboard,
  mic: Mic,
  shield: ShieldCheck,
  chat: MessagesSquare,
  database: Database,
  server: Server,
};

export const accentMap: Record<ProjectAccent, { tile: string; text: string; badge: string }> = {
  violet: { tile: "from-violet-500/30 to-blue-500/30", text: "text-violet-300", badge: "text-violet-300 bg-violet-500/10 border-violet-500/20" },
  blue: { tile: "from-blue-500/30 to-cyan-500/30", text: "text-blue-300", badge: "text-blue-300 bg-blue-500/10 border-blue-500/20" },
  fuchsia: { tile: "from-fuchsia-500/30 to-pink-500/30", text: "text-fuchsia-300", badge: "text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/20" },
  emerald: { tile: "from-emerald-500/30 to-teal-500/30", text: "text-emerald-300", badge: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  amber: { tile: "from-amber-500/30 to-orange-500/30", text: "text-amber-300", badge: "text-amber-300 bg-amber-500/10 border-amber-500/20" },
  cyan: { tile: "from-cyan-500/30 to-sky-500/30", text: "text-cyan-300", badge: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
};

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = iconMap[project.icon ?? "web"];
  const accent = accentMap[project.accent ?? "violet"];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.07 * index }}
      className="group gradient-border glass glass-hover relative flex h-full flex-col overflow-hidden rounded-3xl p-6"
    >
      {/* mouse-follow spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), color-mix(in oklab, var(--primary) 16%, transparent), transparent 60%)",
        }}
      />

      {project.architecture && (
        <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/7] overflow-hidden rounded-t-3xl border-b border-white/10 bg-white/[0.02]">
          <Image
            src={project.architecture}
            alt={`${project.title} architecture diagram`}
            fill
            unoptimized
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        </div>
      )}

      <div className="relative flex items-start justify-between">
        <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${accent.tile} ${accent.text}`}>
          <Icon className="h-[22px] w-[22px]" />
        </div>
        {project.badge && (
          <span className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${accent.badge}`}>
            {project.badge}
          </span>
        )}
      </div>

      <h3 className="relative mt-5 text-xl font-semibold">{project.title}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-foreground/80"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="rounded-md border border-white/10 px-2 py-1 text-xs text-muted-foreground">
            +{project.technologies.length - 5}
          </span>
        )}
      </div>

      <div className="relative mt-6 flex items-center gap-4 border-t border-white/5 pt-4">
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
        >
          View details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <div className="ml-auto flex items-center gap-3 text-muted-foreground">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="transition-colors hover:text-foreground">
              <Github className="h-[18px] w-[18px]" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="transition-colors hover:text-foreground">
              <ExternalLink className="h-[18px] w-[18px]" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
