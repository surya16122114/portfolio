"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/social";

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

const quickLinks = [
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-16">
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="gradient-border glass relative overflow-hidden rounded-[2rem] px-8 py-12 text-center"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        </div>
        <p className="font-mono text-sm text-primary">{"// say hello"}</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          Let&apos;s build something great
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Open to SDE / AI Engineer roles and interesting collaborations.
        </p>
        <Link
          href="/contact"
          className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-90"
        >
          Get in touch
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>

      {/* Bottom bar */}
      <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
        <div className="text-center md:text-left">
          <Link href="/" className="font-display text-lg font-bold">
            Chinnasurya Prasad<span className="text-primary">.</span>
          </Link>
          <p className="mt-1 text-sm text-muted-foreground">
            Software Engineer · Boston, MA
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {quickLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="glass glass-hover grid h-10 w-10 place-items-center rounded-full"
            >
              {getIcon(social.icon)}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Chinnasurya Prasad Vulavala. Built with Next.js, Tailwind &amp; Framer Motion.
      </p>
    </footer>
  );
}
