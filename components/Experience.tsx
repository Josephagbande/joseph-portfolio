"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/data/experience";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="parcours" ref={rootRef} className="flex min-h-screen items-center py-24">
      <div className="mx-auto w-full max-w-4xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Parcours</h2>
        <div className="mt-2 h-1 w-16 rounded bg-emerald-600" />

        <ol className="mt-12 border-l-2 border-emerald-600/30">
          {experiences.map((item) => (
            <li key={item.title} className="timeline-item relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-emerald-600 bg-white dark:bg-black" />
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">{item.date}</p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{item.organization}</p>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{item.description}</p>

              {item.achievements.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  {item.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}