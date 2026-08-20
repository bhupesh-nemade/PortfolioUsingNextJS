import { Github, Linkedin, Mail } from "lucide-react";
import { navItems } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      <div className="section-shell py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xl font-semibold">Bhupesh Nemade</p>
            <p className="mt-2 text-sm text-white/55">Full Stack Developer · AI Engineer</p>
          </div>
          <div className="flex gap-2">
            {[
              { href: siteConfig.github, icon: Github, label: "GitHub" },
              { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"} aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/80">
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-6">
          {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm text-white/55">{item.label}</a>)}
        </div>
        <p className="mt-8 text-xs text-white/35">© {new Date().getFullYear()} Bhupesh Nemade. Built with Next.js.</p>
      </div>
    </footer>
  );
}
