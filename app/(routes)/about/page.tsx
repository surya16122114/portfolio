"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import { education } from "@/data/education";
import { skills, type SkillCategory } from "@/data/skills";
import { TechIcon } from "@/components/tech-icon";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:pt-20">
      <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center">
        <p className="mb-2 font-mono text-sm text-primary">{"// about me"}</p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Backend-focused engineer who likes hard systems
        </h1>
      </motion.div>

      {/* Intro */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-12 grid items-center gap-8 md:grid-cols-[200px_1fr]"
      >
        <div className="mx-auto">
          <div className="relative h-44 w-44">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-violet-500 to-blue-500 opacity-50 blur" />
            <div className="glass relative h-full w-full overflow-hidden rounded-3xl p-1.5">
              <Image
                src="/images/Chinnasurya_Profile_Pic.jpg"
                alt="Chinnasurya Prasad Vulavala"
                width={176}
                height={176}
                className="h-full w-full rounded-[1.2rem] object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div className="space-y-4 text-muted-foreground">
          <p>
            I&apos;m <span className="text-foreground">Chinnasurya Prasad Vulavala</span> — a software
            engineer who enjoys building scalable distributed systems, microservices, and
            cloud-native applications, from resilient backend APIs to infrastructure on AWS.
          </p>
          <p>
            I spent two years at <span className="text-foreground">UnitedHealth Group</span>{" "}
            shipping enterprise health-tech for 500,000+ users — secure microservices in Java/Spring
            Boot, Kafka event-driven messaging, and React frontends. I recently earned my{" "}
            <span className="text-foreground">M.S. in Computer Software Engineering at Northeastern</span>{" "}
            (GPA 3.79), where I also TA&apos;d 150+ students in object-oriented programming.
          </p>
          <p>
            I&apos;m now an <span className="text-foreground">AI Software Engineer at Humanitarians AI</span>,
            building a production RAG + Mixture-of-Experts education platform integrated into Canvas.
            I&apos;m deep in <span className="text-foreground">distributed systems, cloud infrastructure,
            and applied GenAI</span> — and I care about clean code, system design, and performance.
          </p>
          <div className="flex flex-wrap gap-4 pt-1 text-sm">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> Boston, MA</span>
            <span className="inline-flex items-center gap-1.5"><Briefcase className="h-4 w-4 text-primary" /> Open to 2026 SWE roles</span>
          </div>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }} className="mt-16">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <GraduationCap className="h-6 w-6 text-primary" /> Education
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {education.map((edu) => (
            <div key={edu.id} className="glass gradient-border rounded-3xl p-6">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
              <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                <span>{edu.startDate} – {edu.endDate}</span>
                <span>{edu.location}</span>
              </div>
              {edu.gpa && (
                <span className="mt-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  GPA {edu.gpa}
                </span>
              )}
              {edu.description && (
                <p className="mt-3 text-sm text-muted-foreground">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="mt-16">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {(Object.keys(skills) as SkillCategory[]).map((category) => (
            <div key={category} className="glass rounded-3xl p-6">
              <h3 className="mb-4 font-mono text-sm text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills[category].map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/85"
                  >
                    <TechIcon logoKey={skill.logoKey} name={skill.name} className="h-4 w-4" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
