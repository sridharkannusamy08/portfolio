import type { Metadata } from "next";
import { PROJECTS, getAllCategories } from "@/content/projects";
import { ProjectsClient } from "./projects-client";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Projects & Case Studies — Growth Marketing Results | Sridhar Kannusamy",
  description:
    "Browse real client projects with measurable results — from 20X ROAS performance campaigns to SEO recovery for UK brands. Filter by service, industry, or search by result.",
};

export default function ProjectsPage() {
  const categories = getAllCategories();

  return (
    <>
      <Navbar />
      <main className="relative z-10 section-padding pt-32 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Portfolio
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tighter text-white md:text-6xl">
              Projects &{" "}
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/50">
              Every project here represents real budgets, real clients, and real
              measurable results — not design mockups or theoretical campaigns.
            </p>
          </div>

          <ProjectsClient projects={PROJECTS} categories={categories} />
        </div>
      </main>
      <Footer />
    </>
  );
}
