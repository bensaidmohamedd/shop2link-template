import type { ReactNode } from "react";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { getLocalizedProduct, interpolate, translations } from "@/lib/i18n";
import type { Shop } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { createWhatsAppCheckoutUrl } from "@/lib/whatsapp";
import { useCartStore } from "@/store/cartStore";
import { useLanguageStore } from "@/store/languageStore";

type CartSheetProps = {
  shop: Shop;
  children: ReactNode;
};

export function CartSheet({ shop, children }: CartSheetProps) {
  const items = useCartStore((state) => state.items);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalPrice = useCartStore((state) => state.totalPrice());
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];
  const hasItems = items.length > 0;

  function handleCheckout() {
    if (!hasItems) {
      return;
    }

    window.location.href = createWhatsAppCheckoutUrl(shop, items, language);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col p-0" closeLabel={t.close}>
        <SheetHeader className="border-b px-5 py-5">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[var(--shop-accent)]" />
            {t.yourCart}
          </SheetTitle>
          <SheetDescription>
            {interpolate(t.cartDescription, { shopName: shop.name })}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {hasItems ? (
            <div className="space-y-4">
              {items.map((item) => {
                const localizedProduct = getLocalizedProduct(item, language);

                return (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                      {item.image_url ? (
                        <img
                          src={item.image_url}
                          alt={localizedProduct.name}
                          className="h-full w-full object-cover"
                        />
                      ) : null}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="line-clamp-1 font-semibold">
                            {localizedProduct.name}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {formatCurrency(item.price)}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label={interpolate(t.removeItem, {
                            itemName: localizedProduct.name
                          })}
                          className="rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground shop-focus"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center rounded-full border bg-white p-1 dark:bg-slate-950">
                          <button
                            type="button"
                            aria-label={interpolate(t.decreaseQuantity, {
                              itemName: localizedProduct.name
                            })}
                            className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-muted shop-focus"
                            onClick={() => decrementQuantity(item.id)}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="grid min-w-8 place-items-center text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label={interpolate(t.increaseQuantity, {
                              itemName: localizedProduct.name
                            })}
                            className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-muted shop-focus"
                            onClick={() => incrementQuantity(item.id)}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <p className="font-semibold">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid h-full min-h-80 place-items-center text-center">
              <div className="max-w-xs">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-muted">
                  <ShoppingBag className="h-6 w-6 text-[var(--shop-accent)]" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{t.emptyCartTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {t.emptyCartDescription}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="border-t bg-white px-5 py-5 dark:bg-slate-950">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{t.subtotal}</span>
            <span className="text-lg font-semibold text-foreground">
              {formatCurrency(totalPrice)}
            </span>
          </div>
          <Separator className="my-4" />
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              disabled={!hasItems}
              onClick={clearCart}
            >
              {t.clearCart}
            </Button>
            <Button
              variant="shop"
              className="flex-[1.4]"
              disabled={!hasItems}
              onClick={handleCheckout}
            >
              {t.checkoutWhatsApp}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
