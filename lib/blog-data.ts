import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export type BlogMeta = {
  slug: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  tags: string[];
};

export function getAllBlogSlugs(): string[] {
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith('.md') && !file.startsWith('.'))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getBlogBySlug(slug: string): { meta: BlogMeta; content: string } {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      title: data.title,
      summary: data.summary,
      author: data.author,
      date: data.date,
      tags: data.tags,
    },
    content,
  };
}