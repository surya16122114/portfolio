"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/about", label: "about" },
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export function SysNav() {
  const pathname = usePathname();

  return (
    <div className="snav">
      <div className="nav-in">
        <Link href="/" className="logo" style={{ textDecoration: "none" }}>
          surya<span className="st">.sys</span>
        </Link>
        <div className="nav-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={pathname.startsWith(l.href) ? "on" : ""}>
              {l.label}
            </Link>
          ))}
          <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noopener">
            resume ↓
          </a>
          <span className="health">
            <span className="pdot" />
            healthy
          </span>
        </div>
      </div>
    </div>
  );
}
