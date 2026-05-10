import {
  getLocalizedProduct,
  interpolate,
  translations,
  type Language,
} from "@/lib/i18n";
import type { CartItem, Shop } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

export function normalizeWhatsAppNumber(value?: string | null) {
  return value?.replace(/[^\d]/g, "") ?? "";
}

export function createCheckoutMessage(
  items: CartItem[],
  shopName: string,
  language: Language,
) {
  const t = translations[language];
  const productLines = items.map((item) => {
    const product = getLocalizedProduct(item, language);

    return `* ${product.name} x${item.quantity}`;
  });
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return [
    `${t.checkoutMessageShop}: ${shopName}`,
    "",
    t.checkoutMessageTitle,
    "",
    ...productLines,
    "",
    `Total: ${formatCurrency(total)}`,
    `${t.thanks}`,
  ].join("\n");
}

export function createWhatsAppCheckoutUrl(
  shop: Shop,
  items: CartItem[],
  language: Language,
) {
  const number = normalizeWhatsAppNumber(shop.whatsapp);
  const message = createCheckoutMessage(items, shop.name, language);

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppContactUrl(shop: Shop, language: Language) {
  const number = normalizeWhatsAppNumber(shop.whatsapp);
  const message = interpolate(translations[language].contactMessage, {
    shopName: shop.name,
  });

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
