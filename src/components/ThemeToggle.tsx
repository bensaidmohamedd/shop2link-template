import { Moon, Sun } from "lucide-react";
import { translations } from "@/lib/i18n";
import { useLanguageStore } from "@/store/languageStore";
import { useThemeStore } from "@/store/themeStore";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const language = useLanguageStore((state) => state.language);
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={
        isDark ? translations[language].switchToLight : translations[language].switchToDark
      }
      className="h-11 w-11 rounded-lg border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-orange-50 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
      onClick={toggleTheme}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
