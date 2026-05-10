import { create } from "zustand";
import type { Language } from "@/lib/i18n";

type LanguageState = {
  language: Language;
  initializeLanguage: () => void;
  setLanguage: (language: Language) => void;
  cycleLanguage: () => void;
};

const storageKey = "shop2link-language";
const languageOrder: Language[] = ["fr", "en", "ar"];

function applyLanguage(language: Language) {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
}

function getSavedLanguage(): Language {
  const savedLanguage = window.localStorage.getItem(storageKey);

  return languageOrder.includes(savedLanguage as Language)
    ? (savedLanguage as Language)
    : "fr";
}

export const useLanguageStore = create<LanguageState>((set, get) => ({
  language: "fr",
  initializeLanguage: () => {
    const language = getSavedLanguage();
    applyLanguage(language);
    set({ language });
  },
  setLanguage: (language) => {
    window.localStorage.setItem(storageKey, language);
    applyLanguage(language);
    set({ language });
  },
  cycleLanguage: () => {
    const currentIndex = languageOrder.indexOf(get().language);
    const nextLanguage = languageOrder[(currentIndex + 1) % languageOrder.length];

    get().setLanguage(nextLanguage);
  }
}));
