"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/social";

const roles = [
  "Full-Stack Engineer",
  "AI / ML Engineer",
  "Cloud & DevOps",
  "Systems Programmer",
];

function getIcon(icon: string) {
  const cls = "h-[18px] w-[18px]";
  switch (icon) {
    case "github":
      return <Github className={cls} />;
    case "linkedin":
      return <Linkedin className={cls} />;
    case "mail":
      return <Mail className={cls} />;
    case "phone":
      return <Phone className={cls} />;
    default:
      return null;
  }
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2400
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass mb-7 inline-flex items-center gap-2 rounded-full py-1.5 pl-2 pr-3.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to SDE / AI Engineer roles · 2026
          </div>

          <p className="mb-2 text-lg text-muted-foreground">Hi, I&apos;m</p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
            Chinnasurya
            <br />
            <span className="gradient-text">Prasad Vulavala</span>
          </h1>

          <div className="mt-5 flex h-9 items-center gap-3 text-xl font-medium md:text-2xl">
            <span className="font-mono text-primary">&gt;</span>
            <span className="relative inline-flex h-9 items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="whitespace-nowrap text-foreground"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="h-6 w-[2px] animate-pulse bg-primary" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Software engineer specializing in{" "}
            <span className="text-foreground">scalable web apps</span>,{" "}
            <span className="text-foreground">cloud infrastructure</span>, and{" "}
            <span className="text-foreground">applied AI</span>. Ex-Optum
            (UnitedHealth Group) building for 500K+ users — now an AI Software Engineer
            at Humanitarians AI, with an MS in Software Engineering from Northeastern.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/resume.pdf"
              download="Chinnasurya_Prasad_Vulavala_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <div className="ml-1 flex items-center gap-1.5">
              {socialLinks
                .filter((s) => s.icon !== "phone")
                .map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="glass glass-hover grid h-11 w-11 place-items-center rounded-full"
                  >
                    {getIcon(social.icon)}
                  </a>
                ))}
            </div>
          </div>
        </motion.div>

        {/* Right column — profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/25 to-blue-500/25 blur-3xl" />
          <div className="relative animate-float">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-violet-500 via-blue-500 to-fuchsia-500 opacity-50 blur-sm" />
            <div className="glass relative w-72 rounded-[2rem] p-1.5 sm:w-80">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/Chinnasurya_Profile_Pic.jpg"
                  alt="Chinnasurya Prasad Vulavala"
                  width={400}
                  height={500}
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-6 rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 shadow-2xl backdrop-blur-md">
              <p className="text-2xl font-bold leading-none text-white">
                2+<span className="text-violet-400">yrs</span>
              </p>
              <p className="mt-1 text-[11px] text-zinc-400">production eng.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
