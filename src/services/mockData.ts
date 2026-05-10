import type { Product, Shop } from "@/lib/types";
import { titleFromSlug } from "@/lib/utils";

const demoShop: Shop = {
  id: "shop_demo_001",
  shop_name: "Shop2Link Demo",
  shop_slug: "shop2link-demo",
  logo_url: "https://shop2llink.web.app/assets/img/logofinal.png",
  description:
    "Des essentiels premium pour les créateurs modernes, avec commande rapide sur WhatsApp et expérience mobile fluide.",
  phone_number: "+227 87145144",
};

const demoProducts: Product[] = [
  {
    id: "prod_001",
    shop_id: demoShop.id,
    name: "Sweat Aero Knit",
    price: 5800,
    category: "mode-accessoires",
    image_url:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    description:
      "Molleton épais et doux, coupe structurée et finitions nettes.",
    name_translations: {
      en: "Aero Knit Hoodie",
      ar: "هودي Aero Knit",
    },
    description_translations: {
      en: "Soft heavyweight fleece with a structured silhouette and clean finish.",
      ar: "قماش قطني ثقيل وناعم بقصة منظمة ولمسات نظيفة.",
    },
    in_stock: true,
  },
  {
    id: "prod_002",
    shop_id: demoShop.id,
    name: "Sac bandoulière Orbit",
    price: 6400,
    category: "mode-accessoires",
    image_url:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    description:
      "Format compact du quotidien avec texture résistante et détails premium.",
    name_translations: {
      en: "Orbit Crossbody Bag",
      ar: "حقيبة Orbit",
    },
    description_translations: {
      en: "Compact daily carry with a resistant texture and premium details.",
      ar: "حقيبة يومية صغيرة بملمس مقاوم وتفاصيل فاخرة.",
    },
    in_stock: true,
  },
  {
    id: "prod_003",
    shop_id: demoShop.id,
    name: "Sneakers Studio Runner",
    price: 12800,
    category: "sport",
    image_url:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    description:
      "Amorti léger et lignes modernes pour bouger toute la journée.",
    name_translations: {
      en: "Studio Runner Sneakers",
      ar: "حذاء Studio Runner",
    },
    description_translations: {
      en: "Light cushioning and modern lines made for all-day movement.",
      ar: "توسيد خفيف وخطوط عصرية للحركة طوال اليوم.",
    },
    in_stock: true,
  },
  {
    id: "prod_004",
    shop_id: demoShop.id,
    name: "Sac week-end Minimal",
    price: 14600,
    category: "mode-accessoires",
    image_url:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    description: "Sac de voyage élégant, volume généreux et doublure douce.",
    name_translations: {
      en: "Minimal Weekender Bag",
      ar: "حقيبة سفر Minimal",
    },
    description_translations: {
      en: "A polished travel bag with generous volume and a soft lining.",
      ar: "حقيبة سفر أنيقة بمساحة واسعة وبطانة ناعمة.",
    },
    in_stock: true,
  },
  {
    id: "prod_005",
    shop_id: demoShop.id,
    name: "T-shirt coton Luxe",
    price: 4200,
    category: "mode-accessoires",
    image_url:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    description:
      "T-shirt du quotidien en coton dense, coupe souple et raffinée.",
    name_translations: {
      en: "Luxe Cotton Tee",
      ar: "تيشيرت قطن Luxe",
    },
    description_translations: {
      en: "A refined everyday tee cut from dense cotton with a relaxed drape.",
      ar: "تيشيرت يومي أنيق من قطن كثيف بقصة مريحة.",
    },
    in_stock: true,
  },
  {
    id: "prod_006",
    shop_id: demoShop.id,
    name: "Gourde acier mat",
    price: 3800,
    category: "maison",
    image_url:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
    description:
      "Acier isotherme double paroi dans une silhouette minimaliste.",
    name_translations: {
      en: "Matte Steel Bottle",
      ar: "قارورة فولاذ مطفي",
    },
    description_translations: {
      en: "Double-wall insulated steel in a minimalist silhouette.",
      ar: "فولاذ معزول بجدار مزدوج بتصميم بسيط.",
    },
    in_stock: false,
  },
];

export function getMockShopBySlug(slug: string): Shop {
  if (slug === demoShop.shop_slug) {
    return demoShop;
  }

  return {
    ...demoShop,
    id: `mock_${slug}`,
    shop_slug: slug,
    shop_name: titleFromSlug(slug) || demoShop.shop_name,
  };
}

export function getMockProductsForShop(shopId: string): Product[] {
  return demoProducts.map((product) => ({
    ...product,
    id: `${shopId}_${product.id}`,
    shop_id: shopId,
  }));
}
