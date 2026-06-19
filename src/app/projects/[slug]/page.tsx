import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, TrendingUp, Clock, ArrowUpRight, Star } from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/content/projects";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project | Sridhar Kannusamy" };
  return {
    title: `${project.title} | Case Study — Sridhar Kannusamy`,
    description: project.description,
    openGraph: { title: project.title, description: project.description, type: "article" },
  };
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = PROJECTS.filter(
    (p) => p.slug !== slug && p.category.some((c) => project.category.includes(c))
  ).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="relative z-10 section-padding pt-32 pb-24">
        <div className="mx-auto max-w-4xl">
          {/* Back */}
          <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Hero */}
          <div className={cn("relative mb-12 overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br p-12 text-center", project.gradient)}>
            {project.featured && (
              <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                <Star className="h-3 w-3 fill-primary" />
                Featured Project
              </div>
            )}
            <p className="text-xs font-medium uppercase tracking-widest text-white/50 mb-2">{project.industry}</p>
            <h1 className="font-heading text-3xl font-bold tracking-tighter text-white md:text-4xl">{project.title}</h1>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-success/15 border border-success/20 px-6 py-2.5">
              <TrendingUp className="h-5 w-5 text-success" />
              <span className="font-heading text-lg font-bold text-success">{project.keyMetric.value} {project.keyMetric.label}</span>
            </div>
          </div>

          {/* Meta */}
          <div className="mb-10 flex flex-wrap gap-6 rounded-2xl border border-white/8 bg-white/3 p-6">
            {[
              { label: "Client", value: project.client },
              { label: "Industry", value: project.industry },
              { label: "Duration", value: project.duration },
              { label: "Year", value: project.year.toString() },
              { label: "Status", value: project.status.charAt(0).toUpperCase() + project.status.slice(1) },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30">{label}</p>
                <p className="mt-1 text-sm font-medium text-white">{value}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mb-10 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium text-primary/80">{tag}</span>
            ))}
          </div>

          {/* Full breakdown */}
          <div className="space-y-10">
            {[
              { label: "Challenge", content: project.challenge, color: "border-danger/20 bg-danger/5" },
              { label: "Strategy", content: project.strategy, color: "border-primary/20 bg-primary/5" },
              { label: "Execution", content: project.execution, color: "border-primary-light/20 bg-primary-light/5" },
            ].map(({ label, content, color }) => (
              <div key={label} className={cn("rounded-2xl border p-6 md:p-8", color)}>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/40">{label}</p>
                <p className="text-base leading-relaxed text-white/70">{content}</p>
              </div>
            ))}

            {/* Results */}
            <div className="rounded-2xl border border-success/20 bg-success/5 p-6 md:p-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-success">Results</p>
              <ul className="space-y-3">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-base text-white/70">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/3 p-8">
              <blockquote className="text-base italic leading-relaxed text-white/65">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                  {project.testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{project.testimonial.author}</p>
                  <p className="text-xs text-white/40">{project.testimonial.role}</p>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <p className="font-heading text-xl font-bold text-white">Want Results Like These?</p>
            <p className="mt-2 text-sm text-white/55">Let&apos;s build a growth system for your business.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button asChild className="bg-success hover:bg-success/90 glow-green">
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp Me
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>

          {/* Related */}
          {relatedProjects.length > 0 && (
            <div className="mt-16">
              <p className="mb-6 font-heading text-lg font-bold text-white">Related Projects</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedProjects.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`}
                    className="group rounded-xl border border-white/8 bg-white/3 p-5 transition-all hover:border-primary/20">
                    <p className="font-heading font-bold text-white group-hover:text-primary transition-colors line-clamp-2">{p.title}</p>
                    <p className="mt-1 text-xs text-white/40">{p.client} · {p.duration}</p>
                    <div className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-success">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {p.keyMetric.value} {p.keyMetric.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
