// components/layout/footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Copyright, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/social";

export function Footer() {
  // Get icon component for social links
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "mail":
        return <Mail className="h-5 w-5" />;
      case "phone":
        return <Phone className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full pt-8 pb-4 border-t bg-background/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container px-4 md:px-6 mx-auto"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Chinnasurya Prasad Vulavala</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Full Stack Developer & Machine Learning Enthusiast based in Boston,
              specialized in creating modern web applications.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Resume <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.id}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full bg-muted/50 hover:bg-primary/10"
                >
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {getIconComponent(social.icon)}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Keyboard Shortcuts */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Keyboard Shortcuts</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 bg-muted border rounded text-[10px] font-mono">⌘</kbd>
                  <kbd className="px-2 py-1 bg-muted border rounded text-[10px] font-mono">K</kbd>
                </div>
                <span>Search</span>
              </div>
              {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 bg-muted border rounded text-[10px] font-mono">T</kbd>
                </div>
                <span>Toggle theme</span>
              </div> */}
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 border-t pt-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Copyright className="mr-1 h-3.5 w-3.5" />
              <span>{new Date().getFullYear()} Chinnasurya Prasad Vulavala. All rights reserved.</span>
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-1.5">
              <span>Built with</span>
              <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>using Next.js & Tailwind</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}