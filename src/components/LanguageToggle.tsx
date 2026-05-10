import { Check, Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { languageOptions, translations } from "@/lib/i18n";
import { useLanguageStore } from "@/store/languageStore";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const currentLanguage = languageOptions.find((option) => option.value === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={translations[language].changeLanguage}
          title={currentLanguage?.label}
          className="h-11 w-14 gap-1 rounded-lg border-slate-200 bg-white px-2 text-slate-900 shadow-sm hover:bg-orange-50 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
        >
          <Languages className="h-4 w-4" />
          <span className="text-[10px] font-bold">{currentLanguage?.shortLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{translations[language].selectLanguage}</DropdownMenuLabel>
        {languageOptions.map((option) => {
          const isSelected = option.value === language;

          return (
            <DropdownMenuItem
              key={option.value}
              className="gap-2"
              onSelect={() => setLanguage(option.value)}
            >
              <span className="grid h-5 w-7 place-items-center rounded bg-muted text-[10px] font-bold">
                {option.shortLabel}
              </span>
              <span className="flex-1">{option.label}</span>
              {isSelected ? <Check className="h-4 w-4 text-[var(--shop-accent)]" /> : null}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
