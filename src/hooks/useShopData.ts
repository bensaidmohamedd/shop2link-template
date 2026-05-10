import { useEffect, useState } from "react";
import type { Product, Shop } from "@/lib/types";
import { fetchProductsByShopId, fetchShopBySlug } from "@/services/shopService";

type ShopDataState = {
  shop: Shop | null;
  products: Product[];
  isLoading: boolean;
  error: string | null;
};

export function useShopData(slug?: string) {
  const [state, setState] = useState<ShopDataState>({
    shop: null,
    products: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    async function loadShop() {
      if (!slug) {
        setState({
          shop: null,
          products: [],
          isLoading: false,
          error: "Le slug de la boutique est manquant."
        });
        return;
      }

      setState((current) => ({ ...current, isLoading: true, error: null }));

      try {
        const shop = await fetchShopBySlug(slug);

        if (!shop) {
          throw new Error("Boutique introuvable.");
        }

        const products = await fetchProductsByShopId(shop.id);

        if (isMounted) {
          setState({
            shop,
            products,
            isLoading: false,
            error: null
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            shop: null,
            products: [],
            isLoading: false,
            error:
              error instanceof Error
                ? error.message
                : "Une erreur est survenue pendant le chargement de la boutique."
          });
        }
      }
    }

    loadShop();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return state;
}
