"use client";

import { useLanguage } from "./LanguageProvider";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="temoignages" className="flex min-h-screen items-center py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.testimonials.heading}</h2>
        <div className="mt-2 h-1 w-16 rounded bg-emerald-600" />
        <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          {t.testimonials.subheading}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.testimonials.goals.map((goal) => (
            <div key={goal.title} className="rounded-2xl border border-gray-200 p-6 transition hover:border-emerald-600 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">{goal.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{goal.text}</p>
            </div>
          ))}
        </div>

        <a href="#contact" className="mt-10 inline-block rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700">
          {t.testimonials.cta}
        </a>
      </div>
    </section>
  );
}