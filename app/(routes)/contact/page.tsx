"use client";

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { socialLinks } from "@/data/social";

function getIcon(icon: string) {
  const cls = "h-4 w-4";
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
    <>
      <div className="svc-line">
        <span className="nm">egress</span> · external network · <span className="ok">open ●</span>
      </div>
      <h1 className="ptitle">Open a connection</h1>
      <p className="sub">Have a role, project, or idea in mind? Open to SDE / AI engineer roles · 2026.</p>

      <div className="contact-grid">
        <div className="panel">
          <h2 style={{ fontSize: 20 }}>Send a message</h2>
          <p className="sub" style={{ marginBottom: 18 }}>
            Fill this out and I&apos;ll get back to you shortly.
          </p>
          <ContactForm />
        </div>

        <div className="panel" style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>Direct routes</h2>
          <div>
            {socialLinks.map((social) => (
              <div className="crow" key={social.id}>
                <span style={{ color: "var(--vi)" }}>{getIcon(social.icon)}</span>
                <span style={{ minWidth: 76 }}>{social.name.toLowerCase()}</span>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  {social.url.replace(/(mailto:|tel:|https:\/\/(www\.)?)/g, "")}
                </a>
              </div>
            ))}
            <div className="crow">
              <span style={{ color: "var(--vi)" }}>
                <MapPin className="h-4 w-4" />
              </span>
              <span style={{ minWidth: 76 }}>region</span>
              <span className="svc-line" style={{ margin: 0 }}>boston-1 · Boston, Massachusetts</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
