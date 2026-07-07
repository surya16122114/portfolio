# Chinnasurya Prasad — Portfolio

A modern, dark, HeroUI-style personal portfolio built with Next.js 15, Tailwind CSS v4, and Framer Motion — glassmorphism, animated gradients, a live skills marquee, count-up stats, and per-project architecture diagrams.

🔗 **Live:** [chinnasuryaprasad-portfolio-website.vercel.app](https://chinnasuryaprasad-portfolio-website.vercel.app/)

## ✨ Highlights

- **HeroUI-inspired dark theme** — violet → blue → fuchsia gradients, glassmorphic surfaces, ambient glows + grid backdrop
- **Animated throughout** — animated gradient name, rotating role, scroll-reveals, count-up stats, mouse-follow spotlight cards, infinite skills marquee
- **Projects** — each with a hand-built **architecture diagram** and a detail page (overview, highlights, tech stack)
- **Floating glass navbar** with `⌘K` command palette
- Fully responsive, accessible, SEO metadata, and Vercel Analytics / Speed Insights

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router) · React 19
- **Styling:** Tailwind CSS v4 (CSS-first `@theme`) · shadcn/ui primitives
- **Animation:** Framer Motion
- **Fonts:** Inter, Satoshi (display), JetBrains Mono
- **Icons:** Lucide
- **Deploy:** Vercel

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## 📁 Structure

```
app/                 # App Router pages (home, about, experience, projects, contact)
components/          # layout, home sections, project card, experience timeline, ui/
data/                # projects, experience, education, skills, social (single source of truth)
public/images/       # profile + per-project architecture.svg diagrams
```

To update content, edit the files in `data/` — projects, experience, education, skills, and social links are all data-driven.

## 📫 Contact

- **Email:** chinnasuryaprasad2001@gmail.com
- **LinkedIn:** [chinnasurya-prasad-vulavala](https://www.linkedin.com/in/chinnasurya-prasad-vulavala-119b5816b/)
- **GitHub:** [@surya16122114](https://github.com/surya16122114)
