import { Plus, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLocalizedProduct, translations } from "@/lib/i18n";
import type { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useLanguageStore } from "@/store/languageStore";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];
  const localizedProduct = getLocalizedProduct(product, language);

  return (
    <Card className="group overflow-hidden border-orange-200/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-slate-900">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={localizedProduct.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="grid h-full place-items-center text-muted-foreground">
            <ShoppingCart className="h-8 w-8" />
          </div>
        )}
        <div className="absolute left-4 top-4 rtl:left-auto rtl:right-4">
          <Badge variant={product.in_stock ? "shop" : "secondary"}>
            {product.in_stock ? t.inStock : t.soldOut}
          </Badge>
        </div>
      </div>

      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="line-clamp-1 text-lg font-semibold tracking-normal text-slate-950 dark:text-white">
              {localizedProduct.name}
            </h3>
            <p className="mt-2 line-clamp-2 min-h-11 text-sm leading-6 text-muted-foreground">
              {localizedProduct.description}
            </p>
          </div>
          <p className="shrink-0 text-lg font-semibold text-slate-950 dark:text-white">
            {formatCurrency(product.price)}
          </p>
        </div>

        <Button
          variant="shop"
          className="mt-5 w-full"
          disabled={!product.in_stock}
          onClick={() => addToCart(product)}
        >
          <Plus className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
          {product.in_stock ? t.addToCart : t.unavailable}
        </Button>
      </CardContent>
    </Card>
  );
}
