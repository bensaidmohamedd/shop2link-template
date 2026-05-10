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
  product_name: string;
  product_description: string | null;
  price: number;
  currency: string;
  stock: boolean;
  category?: string | null;
  image_1: string | null;
  image_2: string | null;
  product_name_translations?: Partial<
    Record<"fr" | "en" | "ar", string>
  > | null;
  product_description_translations?: Partial<
    Record<"fr" | "en" | "ar", string>
  > | null;
};

export type CartItem = Product & {
  quantity: number;
};
