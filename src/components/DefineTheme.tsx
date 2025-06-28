"use client";
import { useThemeStore } from "@/stores/useThemeStore";
import { Moon, Sun } from "lucide-react";

const DefineTheme: React.FC = () => {
  const { setTheme, theme } = useThemeStore();

  if (!theme)
    return (
      <div>
        <span>Loading...</span>
      </div>
    );

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default DefineTheme;
