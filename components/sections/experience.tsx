import { CheckCircle2 } from "lucide-react";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="bg-[var(--cream)]">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow text-[var(--indigo)]">Experience</p>
          <h2 className="section-title mt-3 text-[var(--ink)]">A practical track record across product, backend, and AI work.</h2>
          <p className="mt-5 text-base leading-8 text-[var(--ink-soft)] sm:text-lg">The goal has stayed consistent: ship useful software, understand the system end to end, and improve the workflow around it.</p>
        </div>

        <div className="mt-10 space-y-5">
          {experience.map((item, index) => (
            <article key={`${item.company}-${item.role}`} className="grid gap-6 rounded-[30px] bg-white p-6 shadow-[0_18px_55px_rgba(28,47,58,0.08)] sm:p-8 lg:grid-cols-[180px_1fr_190px]">
              <div>
                <p className="text-sm font-semibold text-[var(--indigo)]">{item.period}</p>
                <p className="mt-2 text-sm font-medium text-[var(--ink-soft)]">{item.company}</p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl text-sm font-bold ${index % 2 === 0 ? "bg-[var(--coral-soft)] text-[var(--coral)]" : "bg-[var(--teal-soft)] text-[var(--teal)]"}`}>{item.logo}</span>
                  <h3 className="text-xl font-semibold text-[var(--ink)]">{item.role}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">{item.detail}</p>
                <div className="mt-4 grid gap-2">
                  {item.achievements.map((achievement) => (
                    <div key={achievement} className="flex gap-2 text-sm leading-6 text-[var(--ink-soft)]">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--teal)]" size={16} />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-[var(--navy)] p-5 text-white">
                <p className="eyebrow text-white/45">Impact</p>
                <p className="mt-4 text-3xl font-semibold">{item.impact.value}{item.impact.suffix}</p>
                <p className="mt-2 text-sm text-white/60">{item.impact.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
