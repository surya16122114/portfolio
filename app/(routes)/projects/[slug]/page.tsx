"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Check } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import { iconMap, accentMap } from "@/components/projects/project-card";

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const slug = params?.slug?.toString() || "";
    const found = projects.find((p) => p.id === slug);
    if (found) setProject(found);
    else router.push("/projects");
  }, [params, router]);

  if (!project) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <p className="animate-pulse text-muted-foreground">Loading project…</p>
      </div>
    );
  }

  const Icon = iconMap[project.icon ?? "web"];
  const accent = accentMap[project.accent ?? "violet"];

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:pt-20">
      <button
        type="button"
        onClick={() => router.push("/projects")}
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </button>

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accent.tile} ${accent.text}`}>
              <Icon className="h-7 w-7" />
            </div>
            {project.badge && (
              <span className={`rounded-full border px-3 py-1 text-xs font-medium ${accent.badge}`}>
                {project.badge}
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>

          {project.architecture && (
            <div className="glass gradient-border mt-8 overflow-hidden rounded-3xl p-3">
              <div className="relative aspect-[820/430] w-full overflow-hidden rounded-2xl bg-white/[0.02]">
                <Image
                  src={project.architecture}
                  alt={`${project.title} architecture diagram`}
                  fill
                  unoptimized
                  className="object-contain p-2"
                />
              </div>
              <p className="px-2 pb-1 pt-2 text-center text-xs text-muted-foreground">
                System architecture
              </p>
            </div>
          )}

          <h2 className="mt-10 text-xl font-semibold">Overview</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {project.longDescription || project.description}
          </p>

          <h2 className="mt-10 text-xl font-semibold">Highlights</h2>
          <ul className="mt-4 space-y-3">
            {project.achievements.map((a, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                <span>{a}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <div className="glass gradient-border rounded-3xl p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Tech stack
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(project.github || project.liveUrl) && (
              <>
                <div className="my-6 h-px bg-white/10" />
                <div className="flex flex-col gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass glass-hover inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium"
                    >
                      <Github className="h-4 w-4" />
                      View source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2.5 text-sm font-medium text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live demo
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
