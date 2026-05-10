import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ShopPage } from "@/pages/ShopPage";
import { useLanguageStore } from "@/store/languageStore";
import { useThemeStore } from "@/store/themeStore";

export default function App() {
  const initializeLanguage = useLanguageStore((state) => state.initializeLanguage);
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeLanguage();
    initializeTheme();
  }, [initializeLanguage, initializeTheme]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/demo-store" replace />} />
      <Route path="/:slug" element={<ShopPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
