"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="accueil" ref={rootRef} className="flex min-h-screen items-center pt-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="hero-anim mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-600/30 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Disponible pour un emploi ou un stage
          </p>

          <h1 className="hero-anim text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Joseph Agbande
          </h1>

          <p className="hero-anim mt-4 text-lg font-medium text-emerald-700 dark:text-emerald-400 sm:text-xl">
            Technicien en génie électrique &amp; énergie renouvelable | Développeur web
          </p>

          <p className="hero-anim mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
            Je transforme les idées en solutions numériques et énergétiques.
          </p>

          <div className="hero-anim mt-8 flex flex-wrap gap-4">
            <a href="#projets" className="rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700">
              Voir mes projets
            </a>
            <a href="#contact" className="rounded-full border border-gray-300 px-6 py-3 font-medium transition hover:border-emerald-600 hover:text-emerald-600 dark:border-gray-700">
              Me contacter
            </a>
            <a href="/cv/joseph-agbande-cv.pdf" download className="rounded-full border border-gray-300 px-6 py-3 font-medium transition hover:border-emerald-600 hover:text-emerald-600 dark:border-gray-700">
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="hero-anim flex justify-center lg:justify-end">
          <div className="relative h-72 w-72 overflow-hidden rounded-full ring-4 ring-emerald-600/20 sm:h-96 sm:w-96">
            <Image
              src="/images/profile.jpg"
              alt="Photo de Joseph Agbande"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 640px) 384px, 288px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}