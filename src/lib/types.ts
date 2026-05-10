export type Shop = {
  id: string;
  shop_name: string;
  shop_slug: string;
  logo_url: string | null;
  description: string | null;
  phone_number: string | null;
};

export type Product = {
  id: string;
  shop_id: string;
  name: string;
  price: number;
  image_url: string | null;
  description: string | null;
  in_stock: boolean;
  category?: string | null;
  name_translations?: Partial<Record<"fr" | "en" | "ar", string>> | null;
  description_translations?: Partial<Record<"fr" | "en" | "ar", string>> | null;
};

export type CartItem = Product & {
  quantity: number;
};
