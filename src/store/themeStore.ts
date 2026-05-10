import { create } from "zustand";

type ThemeMode = "light" | "dark";

type ThemeState = {
  theme: ThemeMode;
  initializeTheme: () => void;
  toggleTheme: () => void;
};

const storageKey = "shop2link-theme";

function applyTheme(theme: ThemeMode) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function getSavedTheme(): ThemeMode {
  const savedTheme = window.localStorage.getItem(storageKey);

  return savedTheme === "dark" ? "dark" : "light";
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",
  initializeTheme: () => {
    const theme = getSavedTheme();
    applyTheme(theme);
    set({ theme });
  },
  toggleTheme: () => {
    const nextTheme = get().theme === "light" ? "dark" : "light";
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
    set({ theme: nextTheme });
  }
}));
