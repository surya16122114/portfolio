"use client";

import { motion } from "framer-motion";
import { TechIcon } from "@/components/tech-icon";
import { skills, type SkillCategory } from "@/data/skills";

const allSkills = (Object.keys(skills) as SkillCategory[]).flatMap((c) => skills[c]);

// Split into rows for alternating marquee directions
const rowCount = 3;
const rows = Array.from({ length: rowCount }, (_, r) =>
  allSkills.filter((_, i) => i % rowCount === r)
);

function Pill({ logoKey, name }: { logoKey: string; name: string }) {
  return (
    <span className="glass flex shrink-0 items-center gap-2.5 rounded-full px-4 py-2.5 text-sm">
      <TechIcon logoKey={logoKey} name={name} className="h-5 w-5" />
      <span className="whitespace-nowrap text-foreground/90">{name}</span>
    </span>
  );
}

export function SkillsShowcase() {
  return (
    <section className="overflow-hidden py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-10 max-w-6xl px-6 text-center"
      >
        <p className="mb-2 font-mono text-sm text-primary">{"// toolbox"}</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Technologies I work with
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Languages, frameworks, and tools I reach for across the stack.
        </p>
      </motion.div>

      <div className="marquee-mask flex flex-col gap-3">
        {rows.map((row, r) => {
          const doubled = [...row, ...row];
          return (
            <div key={r} className="marquee-row">
              <div
                className="marquee-track"
                style={{
                  animation: `var(${r % 2 === 0 ? "--animate-marquee" : "--animate-marquee-reverse"})`,
                  animationDuration: `${34 + r * 6}s`,
                }}
              >
                {doubled.map((skill, i) => (
                  <Pill key={`${skill.name}-${i}`} logoKey={skill.logoKey} name={skill.name} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
