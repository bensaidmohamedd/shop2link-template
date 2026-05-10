import { Link } from "react-router-dom";
import { Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { translations } from "@/lib/i18n";
import { useLanguageStore } from "@/store/languageStore";

export function NotFoundPage() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];

  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div className="max-w-md">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-white shadow-sm">
          <Store className="h-7 w-7 text-slate-900" />
        </div>
        <h1 className="mt-6 text-3xl font-semibold tracking-normal text-slate-950 dark:text-white">
          {t.shopNotFound}
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {t.shopNotFoundDescription}
        </p>
        <Button asChild className="mt-6">
          <Link to="/shop/demo-store">{t.openDemoShop}</Link>
        </Button>
      </div>
    </main>
  );
}
