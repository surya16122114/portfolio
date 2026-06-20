"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CommandPalette } from "@/components/ui/command-palette";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="sr-only">
        <CommandPalette />
      </div>

      <header className="sticky top-0 z-50 flex w-full justify-center px-4 pt-5">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="glass flex w-full max-w-3xl items-center justify-between gap-1 rounded-full p-2 shadow-2xl shadow-black/20"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 pl-2 pr-2 font-display text-base font-bold tracking-tight"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-black text-white">
              S
            </span>
            <span className="hidden sm:block">
              surya<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 text-sm md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 transition-colors",
                  isActive(item.href)
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-1.5">
            <Link
              href="/contact"
              className="hidden rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Let&apos;s talk
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden"
          >
            <div className="glass rounded-3xl p-3 shadow-2xl">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-white/10 text-foreground"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="mt-1 block rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-3 text-center text-base font-medium text-white"
                  >
                    Let&apos;s talk
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
