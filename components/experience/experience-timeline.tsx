"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Microscope, Users, HeartHandshake, Check } from "lucide-react";
import { experiences } from "@/data/experience";

function getIcon(type: string | undefined) {
  switch (type) {
    case "research":
      return <Microscope className="h-5 w-5" />;
    case "leadership":
      return <Users className="h-5 w-5" />;
    case "education":
      return <GraduationCap className="h-5 w-5" />;
    case "volunteer":
      return <HeartHandshake className="h-5 w-5" />;
    default:
      return <Briefcase className="h-5 w-5" />;
  }
}

export function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="mb-2 font-mono text-sm text-primary">{"// career"}</p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Experience
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          My journey across enterprise software and teaching.
        </p>
      </motion.div>

      <div className="relative mt-14 pl-8 md:pl-10">
        {/* vertical line */}
        <div className="absolute left-[11px] top-2 h-full w-px bg-gradient-to-b from-primary/60 via-white/15 to-transparent md:left-[15px]" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative mb-8 last:mb-0"
          >
            {/* node */}
            <span className="absolute -left-8 top-5 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/30 md:-left-10">
              <span className="scale-[0.6]">{getIcon(exp.type)}</span>
            </span>

            <div className="glass gradient-border glass-hover rounded-3xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="mt-0.5 text-sm text-primary">{exp.company}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>

              <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {exp.location}
              </p>

              <p className="mt-4 text-sm text-muted-foreground">{exp.description}</p>

              <ul className="mt-4 space-y-2.5">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
