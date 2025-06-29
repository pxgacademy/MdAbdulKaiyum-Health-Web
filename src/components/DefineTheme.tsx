"use client";

import { useThemeStore } from "@/stores/useThemeStore";
import { Moon, Sun } from "lucide-react";

const DefineTheme = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="p-2 rounded"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default DefineTheme;
