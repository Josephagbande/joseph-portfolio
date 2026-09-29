"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

const hrefs = ["accueil", "apropos", "competences", "projets", "parcours", "temoignages", "contact"] as const;
const navKeys = ["accueil", "apropos", "competences", "projets", "parcours", "objectifs", "contact"] as const;

export default function Navbar() {
  const { t } = useLanguage();
  const [active, setActive] = useState("accueil");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    hrefs.forEach((href) => {
      const section = document.getElementById(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/70">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Navigation principale"
      >
        <a href="#accueil" className="text-lg font-bold tracking-tight">
          Joseph Agbande
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {hrefs.map((href, i) => (
            <li key={href}>
              <a href={`#${href}`} className={`text-sm transition-colors hover:text-emerald-600 ${active === href ? "font-semibold text-emerald-600" : "text-gray-600 dark:text-gray-300"}`}>
                {t.nav[navKeys[i]]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <a href="#contact" className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-700">
            {t.nav.meContacter}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <span className={`h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/10 bg-white px-6 py-4 dark:border-white/10 dark:bg-black lg:hidden">
          <ul className="flex flex-col gap-4">
            {hrefs.map((href, i) => (
              <li key={href}>
                <a href={`#${href}`} onClick={() => setOpen(false)} className={active === href ? "font-semibold text-emerald-600" : "text-gray-700 dark:text-gray-300"}>
                  {t.nav[navKeys[i]]}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="inline-block rounded-full bg-emerald-600 px-5 py-2 text-sm font-medium text-white">
                {t.nav.meContacter}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}