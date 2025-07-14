import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { marked } from "marked";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import "@/styles/mdx.css";
import { StarsCanvas } from "@/components/star-background";


interface FrontMatter {
  title: string;
  summary: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(dir);
  return files
    .filter((file) => file.endsWith('.md') && !file.startsWith('.'))
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const filePath = path.join(process.cwd(), "content/blog", `${resolvedParams.slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);
  const meta = data as FrontMatter;

  return (
    <div className="relative min-h-screen pb-24">
      <StarsCanvas />
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-0 pt-24">
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {meta.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-2">
            {meta.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
            {meta.summary}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {meta.date}
            </span>
          </div>
        </div>
        <div className="bg-background/60 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 prose prose-invert">
          <article dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </div>
      </div>
    </div>
  );
}