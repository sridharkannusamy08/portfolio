import type { Metadata } from "next";
import { getAllBlogPosts, getAllBlogCategories } from "@/lib/blog";
import { BlogClient } from "./blog-client";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Marketing Insights — Growth Strategies, SEO & Advertising | Sridhar Kannusamy",
  description:
    "Real marketing strategies, case studies, and growth insights from a Performance Marketing Specialist who manages ₹7L+ in ad spend and has achieved 20X ROAS.",
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllBlogPosts(),
    getAllBlogCategories(),
  ]);

  return (
    <>
      <Navbar />
      <main className="relative z-10 section-padding pt-32 pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Marketing Insights
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tighter text-white md:text-6xl">
              Growth Strategies &{" "}
              <span className="gradient-text">Real Results</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/50">
              No recycled tips. Every article is based on real campaigns, real
              clients, and real money on the line.
            </p>
          </div>

          <BlogClient posts={posts} categories={categories} />
        </div>
      </main>
      <Footer />
    </>
  );
}
