import { useMemo, useState } from "react";
import { PackageSearch, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { Button } from "@/components/ui/button";
import {
  categoryOptions,
  getCategoryLabel,
  normalizeCategoryId,
  translations
} from "@/lib/i18n";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useLanguageStore } from "@/store/languageStore";

type ProductsGridProps = {
  products: Product[];
  isLoading: boolean;
};

const allCategory = "all";

export function ProductsGrid({ products, isLoading }: ProductsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === allCategory) {
      return products;
    }

    return products.filter(
      (product) => normalizeCategoryId(product.category) === selectedCategory
    );
  }, [products, selectedCategory]);

  const hasProducts = products.length > 0;
  const hasFilteredProducts = filteredProducts.length > 0;

  return (
    <section
      id="products"
      className="border-t border-orange-200/70 bg-background/80 py-14 dark:border-white/10 dark:bg-background sm:py-20"
    >
      <div className="container">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--shop-accent)]">
              {t.latestDrop}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-normal text-slate-950 dark:text-white">
              {t.Products}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            {t.productsIntro}
          </p>
        </div>

        {!isLoading ? (
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              <SlidersHorizontal className="h-4 w-4 text-[var(--shop-accent)]" />
              <span>{t.categoryFilterLabel}</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {[allCategory, ...categoryOptions].map((category) => {
                const isSelected = selectedCategory === category;
                const label =
                  category === allCategory
                    ? t.allCategories
                    : getCategoryLabel(category, language);

                return (
                  <Button
                    key={category}
                    type="button"
                    variant={isSelected ? "shop" : "outline"}
                    size="sm"
                    className={cn(
                      "shrink-0",
                      !isSelected &&
                        "border-orange-200 bg-white/80 hover:bg-orange-50 dark:border-white/10 dark:bg-slate-900"
                    )}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {label}
                  </Button>
                );
              })}
            </div>
          </div>
        ) : null}

        {isLoading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : hasProducts && hasFilteredProducts ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="grid min-h-80 place-items-center rounded-lg border border-dashed border-orange-200 bg-white/55 px-6 text-center dark:border-white/10 dark:bg-slate-900/40">
            <div className="max-w-sm">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white shadow-sm dark:bg-slate-900">
                <PackageSearch className="h-6 w-6 text-[var(--shop-accent)]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">
                {hasProducts ? t.noProductsForCategory : t.noProductsYet}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {hasProducts ? t.noProductsCategoryDescription : t.noProductsDescription}
              </p>
              <Button
                type="button"
                variant="shop"
                className="mt-5"
                onClick={() => setSelectedCategory(allCategory)}
              >
                {t.backToShop}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
