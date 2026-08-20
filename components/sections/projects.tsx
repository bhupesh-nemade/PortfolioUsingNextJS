"use client";

import { ExternalLink, Github, Layers3, X } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/portfolio-data";
import type { Project } from "@/types/portfolio";

const accents = [
  "bg-[var(--navy)] text-white",
  "bg-[var(--coral)] text-white",
  "bg-[var(--teal)] text-white",
  "bg-[var(--indigo)] text-white",
  "bg-[#7c5c3b] text-white",
];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-[var(--navy)] text-white">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow text-white/45">Selected projects</p>
          <h2 className="section-title mt-3 text-white">Work that shows how I think, build, and solve problems.</h2>
          <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">Each project has a clear purpose, a defined technical architecture, and an engineering challenge behind it.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.slug} className="overflow-hidden rounded-[30px] border border-white/10 bg-white/6">
              <div className={`flex items-center justify-between px-6 py-5 ${accents[index % accents.length]}`}>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><Layers3 size={22} /></div>
                <span className="rounded-full bg-white/12 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">Project {String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((tech) => <span key={tech} className="pill border-white/10 bg-white/5 text-white/75">{tech}</span>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button type="button" onClick={() => setSelected(project)} className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[var(--ink)]">View More Information</button>
                  {project.github ? <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-sm font-semibold text-white/85"><Github size={15} /> GitHub</a> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-[rgba(10,20,30,.72)] p-4">
          <div className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[32px] bg-[var(--cream)] p-6 text-[var(--ink)] shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="eyebrow text-[var(--indigo)]">Case study</p>
                <h3 className="mt-2 text-3xl font-semibold">{selected.title}</h3>
              </div>
              <button type="button" aria-label="Close project details" onClick={() => setSelected(null)} className="grid h-10 w-10 place-items-center rounded-full bg-[var(--ink)] text-white"><X size={17} /></button>
            </div>
            <p className="mt-5 text-base leading-8 text-[var(--ink-soft)]">{selected.summary}</p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div>
                <h4 className="text-lg font-semibold">Architecture</h4>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{selected.architecture}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {selected.architectureHighlights.map((item) => <div key={item} className="rounded-2xl bg-white p-4 text-sm font-medium">{item}</div>)}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold">What I focused on</h4>
                <div className="mt-4 space-y-2">
                  {selected.features.map((item) => <div key={item} className="rounded-2xl bg-[var(--coral-soft)] px-4 py-3 text-sm text-[var(--ink)]">{item}</div>)}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-[var(--indigo-soft)] p-5">
              <p className="text-sm font-semibold">Engineering challenge</p>
              <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">{selected.challenges}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {selected.demo ? <a href={selected.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--indigo)] px-4 py-2.5 text-sm font-semibold text-white"><ExternalLink size={15} /> Live Demo</a> : null}
              {selected.github ? <a href={selected.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2.5 text-sm font-semibold text-white"><Github size={15} /> GitHub</a> : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
