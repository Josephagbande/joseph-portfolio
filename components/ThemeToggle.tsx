"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Passer au thème clair" : "Passer au thème sombre"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-sm transition hover:border-emerald-600 dark:border-gray-700"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}