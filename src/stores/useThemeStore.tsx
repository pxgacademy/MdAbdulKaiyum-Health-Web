import { create } from "zustand";

type ThemeState = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme:
    typeof window !== "undefined"
      ? localStorage.getItem("kaiyumHealth-theme") || "light"
      : "light",
  setTheme: (theme: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("kaiyumHealth-theme", theme);
    }
    set({ theme });
  },
}));
