"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories } from "@/data/skills";
import { useLanguage } from "./LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const rootRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".skill-card");

      gsap.set(cards, { opacity: 1, y: 0 });

      gsap.from(cards, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 90%",
          once: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="competences" ref={rootRef} className="flex min-h-screen items-center py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.skills.heading}</h2>
        <div className="mt-2 h-1 w-16 rounded bg-emerald-600" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card rounded-2xl border border-gray-200 p-6 transition hover:border-emerald-600 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}