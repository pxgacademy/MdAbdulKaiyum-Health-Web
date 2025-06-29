"use client";
import { useEffect } from "react";
import { useThemeStore } from "@/stores/useThemeStore";

const ThemeInitializer = () => {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return null;
};

export default ThemeInitializer;
