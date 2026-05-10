import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLocalizedProduct, translations } from "@/lib/i18n";
import type { Product, Shop } from "@/lib/types";
import { createWhatsAppContactUrl } from "@/lib/whatsapp";
import { useLanguageStore } from "@/store/languageStore";

type HeroSectionProps = {
  shop: Shop;
  products: Product[];
};

export function HeroSection({ shop, products }: HeroSectionProps) {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];
  const heroProducts = products.slice(0, 3);
  const shopDescription =
    shop.id.startsWith("shop_demo") || shop.id.startsWith("mock_")
      ? t.mock.shopDescription
      : shop.description;

  return (
    <section id="top" className="overflow-hidden">
      <div className="container grid gap-10 pb-14 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-20">
        <div className="max-w-2xl">
          <Badge
            variant="shop"
            className="mb-5 gap-1 border-white/50 bg-white/70 backdrop-blur dark:bg-slate-900/70"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {t.curatedStorefront}
          </Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-normal text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            {shop.shop_name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            {shopDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="shop" size="lg">
              <a href="#products">
                {t.browseProducts}
                <ArrowDown className="ml-2 h-4 w-4 rtl:ml-0 rtl:mr-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-orange-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
            >
              <a href={createWhatsAppContactUrl(shop, language)} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
                {t.contactWhatsApp}
              </a>
            </Button>
          </div>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <p className="font-semibold text-slate-950 dark:text-white">{t.fastTitle}</p>
              <p>{t.fastText}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-950 dark:text-white">{t.freshTitle}</p>
              <p>{t.freshText}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-950 dark:text-white">{t.secureTitle}</p>
              <p>{t.secureText}</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] sm:min-h-[500px]">
          <div className="absolute inset-x-8 top-10 h-72 rounded-full bg-[var(--shop-accent)] opacity-15 blur-3xl" />
          <div className="relative grid h-full grid-cols-2 gap-4">
            {heroProducts.map((product, index) => {
              const localizedProduct = getLocalizedProduct(product, language);

              return (
                <div
                  key={product.id}
                  className={[
                    "group overflow-hidden rounded-lg border border-white/70 bg-white shadow-soft transition duration-500 hover:-translate-y-2 dark:border-white/10 dark:bg-slate-900",
                    index === 0 ? "col-span-2 h-64 sm:h-72" : "h-44 sm:h-52"
                  ].join(" ")}
                >
                  <img
                    src={product.image_1 ?? ""}
                    alt={localizedProduct.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              );
            })}
            {heroProducts.length === 0 && (
              <div className="col-span-2 grid h-80 place-items-center rounded-lg border border-dashed bg-white/70 text-sm text-muted-foreground">
                {t.productsPlaceholder}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
