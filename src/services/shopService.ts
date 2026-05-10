import type { Product, Shop } from "@/lib/types";
import { getMockProductsForShop, getMockShopBySlug } from "@/services/mockData";
import { isSupabaseConfigured, supabase } from "@/services/supabase";

export async function fetchShopBySlug(slug: string): Promise<Shop | null> {
  // Keep the template demoable before Supabase credentials are configured.
  if (!isSupabaseConfigured || !supabase) {
    return getMockShopBySlug(slug);
  }

  const { data, error } = await supabase
    .from("shops")
    .select("id,shop_name,shop_slug,logo_url,description,phone_number")
    .eq("shop_slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function fetchProductsByShopId(shopId: string): Promise<Product[]> {
  // The same service contract is used for live Supabase data and local mock data.
  if (!isSupabaseConfigured || !supabase) {
    return getMockProductsForShop(shopId);
  }

  const { data, error } = await supabase
    .from("products")
    .select("id,shop_id,product_name,product_description,price,currency,stock,category,image_1,image_2")
    .eq("shop_id", shopId)
    .order("product_name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((product) => ({
    ...(product as Product),
    category: (product as Product).category ?? null
  }));
}
