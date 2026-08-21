import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const technologies = [
    "Next.js",
    "React",
    "N8N",
    "Laravel",
    "Node.js",
    "Python",
    "Pinecone",
    "MySQL",
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--navy)] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(249,115,96,.22),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(99,102,241,.30),transparent_32%),radial-gradient(circle_at_55%_105%,rgba(25,143,137,.22),transparent_32%)]" />

      <div className="absolute right-[-8%] top-28 hidden h-72 w-72 rounded-full border border-white/10 lg:block" />
      <div className="absolute right-[7%] top-40 hidden h-40 w-40 rounded-full border border-[var(--coral)]/35 lg:block" />

      <div className="section-shell relative z-10 grid min-h-screen items-center gap-14 pt-28 pb-16 lg:grid-cols-[1.1fr_.9fr]">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
            Full Stack Developer · AI Engineer
          </div>

          <p className="eyebrow mt-8 text-white/55">
            Hello, I&apos;m
          </p>

          <h1 className="display-title mt-3 max-w-4xl text-white">
            Bhupesh Nemade
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            I build reliable web products and AI systems with a strong focus
            on clean architecture, useful interfaces, and business-ready
            execution.
          </p>

          {/* Primary actions */}
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="coral">
              <a href="#projects">
                View my work
                <ArrowDown size={17} />
              </a>
            </Button>

            <Button asChild size="lg" variant="secondary">
              <a href={siteConfig.resume}>
                <Download size={17} />
                Resume
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="mt-9 flex flex-wrap items-center gap-3 text-white/65">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm transition hover:bg-white/10 hover:text-white"
            >
              <Github size={16} />
              GitHub
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm transition hover:bg-white/10 hover:text-white"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm transition hover:bg-white/10 hover:text-white"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-end">
          <div className="w-full max-w-xl rounded-[30px] border border-white/15 bg-white/6 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            {/* Heading */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Core Technologies
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Technologies I work with
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
                A practical stack covering modern frontend development,
                backend engineering, AI applications, databases, and
                production-ready systems.
              </p>
            </div>

            {/* Technology grid */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-medium text-white/80 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                >
                  {technology}
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}