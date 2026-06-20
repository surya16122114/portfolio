import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsShowcase } from "@/components/home/skills-showcase";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Stats />
      <FeaturedProjects />
      <SkillsShowcase />
    </div>
  );
}
