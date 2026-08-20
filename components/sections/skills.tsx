"use client";

import { useMemo, useState } from "react";
import { skills } from "@/lib/portfolio-data";

const categories = ["All", "Frontend", "Backend", "AI", "Data"];

export function Skills() {
  const [category, setCategory] = useState("All");
  const visibleSkills = useMemo(
    () => (category === "All" ? skills : skills.filter((skill) => skill.category === category)),
    [category]
  );

  return (
    <section id="skills" className="bg-[var(--indigo-soft)]">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow text-[var(--indigo)]">Skills</p>
            <h2 className="section-title mt-3 text-[var(--ink)]">A focused stack built around modern product delivery.</h2>
            <p className="mt-5 text-base leading-8 text-[var(--ink-soft)] sm:text-lg">Filter the toolkit by the area you want to evaluate.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold ${
                  category === item ? "bg-[var(--ink)] text-white" : "bg-white text-[var(--ink-soft)]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSkills.map((skill, index) => {
            const background = index % 3 === 0 ? "bg-white" : index % 3 === 1 ? "bg-[var(--coral-soft)]" : "bg-[var(--teal-soft)]";
            return (
              <article key={skill.name} className={`rounded-[26px] border border-transparent p-5 ${background}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-[var(--ink)]">{skill.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--ink-soft)]">{skill.category}</p>
                  </div>
                  <span className="h-3 w-3 rounded-full" style={{ backgroundColor: skill.glow }} aria-hidden="true" />
                </div>
                <div className="mt-5 h-1.5 rounded-full bg-[rgba(25,50,60,.08)]">
                  <div className="h-1.5 rounded-full" style={{ width: `${66 + (index % 4) * 7}%`, backgroundColor: skill.glow }} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
