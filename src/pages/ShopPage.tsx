import { type CSSProperties, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { ProductsGrid } from "@/components/ProductsGrid";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { StorefrontLayout } from "@/layouts/StorefrontLayout";
import { useShopData } from "@/hooks/useShopData";
import { useCartStore } from "@/store/cartStore";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function ShopPage() {
  const { slug } = useParams<{ slug: string }>();
  const { shop, products, isLoading, error } = useShopData(slug);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart, slug]);

  useEffect(() => {
    if (!shop) {
      return;
    }

    document.title = `${shop.shop_name} | Shop2Link`;
  }, [shop]);

  if (isLoading && !shop) {
    return <ShopPageSkeleton />;
  }

  if (error || !shop) {
    return <NotFoundPage />;
  }

  return (
    <div
      style={
        {
          "--shop-accent":"#ea580c"
          // "--shop-accent": shop.theme_color ?? "#ea580c"
        } as CSSProperties
      }
    >
      <StorefrontLayout shop={shop}>
        <HeroSection shop={shop} products={products} />
        <ProductsGrid products={products} isLoading={isLoading} />
      </StorefrontLayout>
    </div>
  );
}

function ShopPageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-40 border-b bg-[#fffaf2]/80 backdrop-blur dark:bg-slate-900/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          <Skeleton className="h-10 w-24 rounded-full" />
        </div>
      </div>

      <main>
        <section className="container grid gap-10 pb-14 pt-10 lg:grid-cols-2">
          <div className="space-y-5">
            <Skeleton className="h-7 w-36 rounded-full" />
            <Skeleton className="h-12 w-full max-w-xl" />
            <Skeleton className="h-12 w-5/6 max-w-lg" />
            <Skeleton className="h-24 w-full max-w-xl" />
            <div className="flex gap-3">
              <Skeleton className="h-12 w-40 rounded-full" />
              <Skeleton className="h-12 w-36 rounded-full" />
            </div>
          </div>
          <Skeleton className="min-h-[420px] rounded-lg" />
        </section>

        <section className="border-t bg-background py-14">
          <div className="container">
            <div className="mb-8 space-y-3">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-9 w-64" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
