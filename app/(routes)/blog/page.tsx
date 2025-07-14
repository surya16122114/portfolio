import Link from "next/link";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blog-data";
import BlogAnimatedSection from "@/components/BlogAnimatedSection";

const slugs = getAllBlogSlugs();
const posts = slugs.map(getBlogBySlug);

export default function BlogPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <BlogAnimatedSection posts={posts} />
      </div>
    </section>
  );
}