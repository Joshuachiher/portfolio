"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark =
      savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    if (shouldUseDark) {
      html.classList.add("dark");
      setIsDark(true);
    } else {
      html.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  function toggleTheme() {
    const html = document.documentElement;

    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded transition-colors duration-300 ${
        isDark
          ? "bg-gray-800 text-white hover:bg-gray-700"
          : "bg-gray-200 text-black hover:bg-gray-300"
      }`}
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
