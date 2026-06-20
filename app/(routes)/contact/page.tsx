"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { socialLinks } from "@/data/social";

function getIcon(icon: string) {
  const cls = "h-5 w-5";
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

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="mb-2 font-mono text-sm text-primary">{"// contact"}</p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          Get in touch
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Have a role, project, or idea in mind? I&apos;d love to hear from you.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass gradient-border rounded-3xl p-6 md:p-8"
        >
          <h2 className="text-lg font-semibold">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill this out and I&apos;ll get back to you shortly.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover flex items-center gap-4 rounded-2xl p-4"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500/25 to-blue-500/25 text-primary">
                {getIcon(social.icon)}
              </span>
              <span>
                <span className="block font-medium">{social.name}</span>
                <span className="block text-sm text-muted-foreground">
                  {social.url.replace(/(mailto:|tel:|https:\/\/(www\.)?)/g, "")}
                </span>
              </span>
            </motion.a>
          ))}

          <div className="glass mt-auto flex items-center gap-4 rounded-2xl p-4">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500/25 to-blue-500/25 text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-medium">Based in</span>
              <span className="block text-sm text-muted-foreground">Boston, Massachusetts</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
