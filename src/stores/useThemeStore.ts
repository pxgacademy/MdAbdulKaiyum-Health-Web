import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  initializeTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",

  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("kaiyumHealth-theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
    set({ theme });
  },

  initializeTheme: () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("kaiyumHealth-theme") as Theme;
      const theme = stored ?? "light";
      document.documentElement.setAttribute("data-theme", theme);
      set({ theme });
    }
  },
}));
