import { create } from "zustand";
import type { CartItem, Product } from "@/lib/types";

type CartState = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
  clearCart: () => void;
  totalPrice: () => number;
  totalItems: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1 }]
      };
    });
  },
  removeFromCart: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId)
    }));
  },
  incrementQuantity: (productId) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    }));
  },
  decrementQuantity: (productId) => {
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    }));
  },
  clearCart: () => set({ items: [] }),
  totalPrice: () =>
    get().items.reduce((total, item) => total + item.price * item.quantity, 0),
  totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0)
}));
