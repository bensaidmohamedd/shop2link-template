import { MessageCircle, ShoppingCart } from "lucide-react";
import { CartSheet } from "@/components/CartSheet";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { interpolate, translations } from "@/lib/i18n";
import type { Shop } from "@/lib/types";
import { createWhatsAppContactUrl } from "@/lib/whatsapp";
import { useCartStore } from "@/store/cartStore";
import { useLanguageStore } from "@/store/languageStore";

type HeaderProps = {
  shop: Shop;
};

export function Header({ shop }: HeaderProps) {
  const totalItems = useCartStore((state) => state.totalItems());
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];

  return (
    <header className="sticky top-0 z-40 border-b border-orange-200/70 bg-[#fffaf2]/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/85">
      <div className="container flex h-16 items-center justify-between gap-3">
        <a href="#top" className="flex min-w-0 items-center gap-3 shop-focus">
          <div className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-lg bg-slate-950 text-sm font-bold text-white shadow-sm">
            {shop.logo_url ? (
              <img
                src={shop.logo_url}
                alt={`${shop.shop_name} logo`}
                className="h-full w-full object-cover"
              />
            ) : (
              shop.shop_name.charAt(0)
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold leading-tight text-slate-950 dark:text-white">
              {shop.shop_name}
            </p>
            <p className="hidden text-xs text-muted-foreground sm:block">
              {t.poweredBy}
            </p>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden border-slate-200 bg-white/80 sm:inline-flex dark:border-white/10 dark:bg-slate-900"
          >
            <a
              href={createWhatsAppContactUrl(shop, language)}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
              {t.contactWhatsApp}
            </a>
          </Button>

          <LanguageToggle />
          <ThemeToggle />

          <CartSheet shop={shop}>
            <Button
              variant="outline"
              size="icon"
              aria-label={interpolate(t.cartButton, {
                count: totalItems,
                plural: language !== "ar" && totalItems > 1 ? "s" : ""
              })}
              className="relative h-11 w-11 rounded-lg border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-orange-50 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-orange-600 px-1 text-[11px] font-bold leading-none text-white shadow-sm ring-2 ring-white dark:ring-slate-900 rtl:-left-1 rtl:right-auto">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            </Button>
          </CartSheet>
        </div>
      </div>
    </header>
  );
}
