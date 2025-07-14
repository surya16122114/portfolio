"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface BlogMeta {
  slug: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  tags: string[];
}

interface BlogAnimatedSectionProps {
  posts: { meta: BlogMeta; content: string }[];
}

export default function BlogAnimatedSection({ posts }: BlogAnimatedSectionProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Blog</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Insights and tutorials on modern web development and tech trends.
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ meta }) => (
          <motion.div
            key={meta.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/blog/${meta.slug}`}>
              <div className="group rounded-xl border border-muted bg-background shadow-sm hover:shadow-lg transition-all p-6 h-full cursor-pointer">
                <div className="flex flex-wrap gap-2 mb-4">
                  {meta.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {meta.title}
                </h2>
                <p className="text-muted-foreground text-sm mt-2 line-clamp-3">
                  {meta.summary}
                </p>

                <Separator className="my-4" />

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {meta.date}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
} 