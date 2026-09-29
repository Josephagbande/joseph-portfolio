"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-xs font-semibold transition-all duration-200 hover:border-emerald-600 active:scale-90 dark:border-gray-700"
    >
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}