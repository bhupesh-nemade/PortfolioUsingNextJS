"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/portfolio-data";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const scrollPosition = window.scrollY + 140;

      let currentSection = navItems[0]?.href ?? "#home";

      for (const item of navItems) {
        const section = document.querySelector(
          item.href
        ) as HTMLElement | null;

        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          currentSection = item.href;
        }
      }

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  const onHero = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        onHero
          ? "bg-[var(--navy)]/90 backdrop-blur-sm"
          : "bg-[#f7f4ee]/95 shadow-[0_10px_35px_rgba(25,50,60,0.08)] backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <span
            className={`grid h-10 w-10 place-items-center rounded-2xl text-sm font-bold text-white shadow-lg ${
              onHero
                ? "bg-white/10 ring-1 ring-white/15"
                : "bg-[var(--navy)]"
            }`}
          >
            BN
          </span>

          <span className="hidden sm:block">
            <span
              className={`block text-sm font-semibold ${
                onHero ? "text-white" : "text-[var(--ink)]"
              }`}
            >
              Bhupesh Nemade
            </span>

            <span
              className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${
                onHero
                  ? "text-[#ff9c8c]"
                  : "text-[var(--indigo)]"
              }`}
            >
              Full Stack · AI
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const isActive = active === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  onHero
                    ? isActive
                      ? "bg-white/10 text-white ring-1 ring-white/15"
                      : "text-white hover:bg-white/10 hover:text-white"
                    : isActive
                      ? "bg-[var(--ink)] text-white"
                      : "text-[#486581] hover:bg-black/5 hover:text-[var(--ink)]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href={`mailto:${siteConfig.email}`}
          className="hidden rounded-full bg-[var(--coral)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Let&apos;s talk
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={`grid h-10 w-10 place-items-center rounded-xl border md:hidden ${
            onHero
              ? "border-white/15 bg-white/10 text-white"
              : "border-[var(--line)] bg-white text-[var(--ink)]"
          }`}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div
          className={`border-t px-5 py-4 md:hidden ${
            onHero
              ? "border-white/10 bg-[var(--navy)]"
              : "border-[var(--line)] bg-[var(--cream)]"
          }`}
        >
          <nav
            className="grid gap-1"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    onHero
                      ? isActive
                        ? "bg-white/10 text-white"
                        : "text-white hover:bg-white/10 hover:text-white"
                      : isActive
                        ? "bg-[var(--ink)] text-white"
                        : "text-[var(--ink-soft)] hover:bg-black/5 hover:text-[var(--ink)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}