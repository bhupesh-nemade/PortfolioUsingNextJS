import { BrainCircuit, Code2, Database, Layers3 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/lib/portfolio-data";

const strengths = [
  [BrainCircuit, "AI systems", "RAG pipelines, memory, agent workflows, evaluation, and practical AI integrations."],
  [Code2, "Full stack", "Modern frontend development paired with APIs, authentication, databases, and deployment."],
  [Database, "Data foundations", "Relational data, vector search, persistence, retrieval, and workflow-focused models."],
  [Layers3, "Product delivery", "I care about usability, validation, maintainability, and the details that make software feel complete."],
] as const;

export function About() {
  return (
    <section id="about" className="bg-[var(--cream)]">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="A developer who connects product thinking with engineering depth."
          description="I enjoy turning a rough requirement into a clear user flow, a reliable backend, and an interface that is easy to understand and operate."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map(([Icon, title, text], index) => (
              <article key={title} className={`rounded-[28px] p-6 ${index % 2 === 0 ? "bg-white" : "bg-[var(--teal-soft)]"}`}>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--indigo-soft)] text-[var(--indigo)]"><Icon size={22} /></div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">{text}</p>
              </article>
            ))}
          </div>

          <aside className="rounded-[32px] bg-[var(--ink)] p-7 text-white sm:p-9">
            <p className="eyebrow text-white/45">Snapshot</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white/7 p-5">
                  <p className="text-3xl font-semibold">{stat.value}{stat.suffix}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-3xl bg-[var(--coral)] p-5">
              <p className="eyebrow text-white/70">Working style</p>
              <p className="mt-3 text-base leading-7 text-white/90">Structured, curious, documentation-friendly, and focused on shipping work that can actually be maintained.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
