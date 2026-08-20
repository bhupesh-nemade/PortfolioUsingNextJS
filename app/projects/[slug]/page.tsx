import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, Github } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/portfolio-data";
import { absoluteUrl } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type RouteProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: absoluteUrl(`/projects/${project.slug}`) },
  };
}

export default async function ProjectCaseStudyPage({ params }: RouteProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <section className="section-shell pt-32">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--indigo)]"><ArrowLeft size={16} /> Projects</Link>
        <div className="mt-8 max-w-4xl">
          <p className="eyebrow text-[var(--indigo)]">Case study</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-soft)]">{project.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.demo ? <Button asChild><a href={project.demo}><ExternalLink size={16} /> Live Demo</a></Button> : null}
            {project.github ? <Button asChild variant="ghost"><a href={project.github}><Github size={16} /> GitHub</a></Button> : null}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
          <article className="rich-card p-7 sm:p-9">
            <h2 className="text-2xl font-semibold">Key features</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex gap-2 rounded-2xl bg-[var(--coral-soft)] p-4 text-sm"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--coral)]" />{feature}</div>
              ))}
            </div>
            <h2 className="mt-10 text-2xl font-semibold">Architecture</h2>
            <p className="mt-4 leading-8 text-[var(--ink-soft)]">{project.architecture}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.architectureHighlights.map((highlight) => <div key={highlight} className="rounded-2xl bg-[var(--indigo-soft)] p-4 text-sm font-medium">{highlight}</div>)}
            </div>
            <h2 className="mt-10 text-2xl font-semibold">Engineering challenge</h2>
            <p className="mt-4 leading-8 text-[var(--ink-soft)]">{project.challenges}</p>
          </article>

          <aside className="rounded-[28px] bg-[var(--navy)] p-7 text-white sm:p-8">
            <p className="eyebrow text-white/45">Technology stack</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/7 px-3 py-2 text-sm text-white/80">{tech}</span>)}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
