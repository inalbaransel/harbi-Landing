"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 flex flex-col justify-center items-center bg-black/5 border border-black/10 backdrop-blur-md rounded-full dark:bg-white/5 dark:border-white/10 opacity-0" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-12 h-12 flex flex-col justify-center items-center bg-black/5 hover:bg-black/10 border border-black/10 backdrop-blur-md rounded-full transition duration-300 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 text-neutral-900 dark:text-white"
      aria-label="Toggle Theme"
    >
      <Icon
        icon="solar:sun-linear"
        width="20"
        height="20"
        className="block dark:hidden"
      />
      <Icon
        icon="solar:moon-linear"
        width="20"
        height="20"
        className="hidden dark:block"
      />
    </button>
  );
}
