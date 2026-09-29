"use client";

import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="apropos" className="flex min-h-screen items-center py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.about.heading}</h2>
        <div className="mt-2 h-1 w-16 rounded bg-emerald-600" />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {t.about.domains.map((d) => (
              <li key={d.title} className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 dark:border-gray-800">
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-400">{d.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{d.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}