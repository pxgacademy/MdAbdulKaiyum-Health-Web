"use client";
import { useThemeStore } from "@/stores/useThemeStore";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const { theme } = useThemeStore();
  return (
    <section
      className="min-h-screen transition-colors duration-150"
      data-theme={theme}
    >
      {children}
    </section>
  );
}
