import type { Product } from "@/lib/types";

export type Language = "fr" | "en" | "ar";

export type CategoryId =
  | "mode-accessoires"
  | "gaming"
  | "electronique"
  | "beaute-sante"
  | "maison"
  | "sport"
  | "alimentation"
  | "parfumerie"
  | "automobile"
  | "cadeaux"
  | "autre";

export const languageOptions: Array<{
  value: Language;
  label: string;
  shortLabel: string;
}> = [
  { value: "fr", label: "Français", shortLabel: "FR" },
  { value: "en", label: "English", shortLabel: "EN" },
  { value: "ar", label: "العربية", shortLabel: "AR" },
];

export const categoryOptions: CategoryId[] = [
  "mode-accessoires",
  "gaming",
  "electronique",
  "beaute-sante",
  "maison",
  "sport",
  "alimentation",
  "parfumerie",
  "automobile",
  "cadeaux",
  "autre",
];

export const translations = {
  fr: {
    poweredBy: "Propulsé par Shop2Link",
    createYourShop: "Créez votre propre boutique",
    thanks: "Merci !",
    contactWhatsApp: "WhatsApp",
    switchToLight: "Passer en mode clair",
    switchToDark: "Passer en mode sombre",
    changeLanguage: "Changer la langue",
    selectLanguage: "Sélectionner une langue",
    cartButton: "Ouvrir le panier avec {count} article{plural}",
    curatedStorefront: "Boutique sélectionnée",
    browseProducts: "Voir les produits",
    fastTitle: "Rapide",
    fastText: "Commande par WhatsApp",
    freshTitle: "Simple",
    freshText: "Commande en un clic",
    secureTitle: "Fiable",
    secureText: "100 % sécurisé",
    productsPlaceholder: "Les produits apparaîtront ici",
    latestDrop: "Nouvelle collection",
    Products: "Nos Produits",
    productsIntro:
      "Parcourez le catalogue, ajoutez vos favoris au panier, puis finalisez la commande sur WhatsApp.",
    allCategories: "Tous",
    categoryFilterLabel: "Filtrer par catégorie",
    noProductsYet: "Aucun produit pour le moment",
    noProductsForCategory: "Aucun produit dans cette catégorie",
    noProductsDescription:
      "Ce marchand n'a pas encore publié de produits. Revenez bientôt ou contactez-le directement.",
    noProductsCategoryDescription:
      "Essayez une autre catégorie ou revenez à tous les produits.",
    backToShop: "Retour à la boutique",
    inStock: "En stock",
    soldOut: "Épuisé",
    addToCart: "Ajouter au panier",
    unavailable: "Indisponible",
    yourCart: "Votre panier",
    cartDescription:
      "Vérifiez votre commande avant de la finaliser avec {shopName}.",
    removeItem: "Retirer {itemName}",
    decreaseQuantity: "Diminuer la quantité de {itemName}",
    increaseQuantity: "Augmenter la quantité de {itemName}",
    emptyCartTitle: "Votre panier est vide",
    emptyCartDescription:
      "Ajoutez un produit et le message de commande WhatsApp sera préparé automatiquement.",
    subtotal: "Sous-total",
    clearCart: "Vider",
    checkoutWhatsApp: "Commander sur WhatsApp",
    close: "Fermer",
    copyright: "Tous droits réservés.",
    website: "Site web",
    shopNotFound: "Boutique introuvable",
    shopNotFoundDescription:
      "La boutique que vous recherchez est indisponible ou n'a pas encore été publiée.",
    openDemoShop: "Ouvrir la boutique démo",
    missingSlug: "Le slug de la boutique est manquant.",
    loadingError:
      "Une erreur est survenue pendant le chargement de la boutique.",
    checkoutMessageTitle: "Bonjour, je souhaite passer cette commande :",
    checkoutMessageShop: "Boutique",
    contactMessage: "Bonjour {shopName}, j'ai une question sur vos produits.",
    categories: {
      "mode-accessoires": "Mode et accessoires",
      gaming: "Gaming",
      electronique: "Électronique",
      "beaute-sante": "Beauté et santé",
      maison: "Maison",
      sport: "Sport",
      alimentation: "Alimentation",
      parfumerie: "Parfumerie",
      automobile: "Automobile",
      cadeaux: "Cadeaux",
      autre: "Autre",
    },
    mock: {
      shopDescription:
        "Tout ce dont vous avez besoin pour vendre en ligne, avec commande rapide sur WhatsApp et une expérience mobile fluide.",
      product1Name: "Sweat Aero Knit",
      product1Description:
        "Molleton épais et doux, coupe structurée et finitions nettes.",
      product2Name: "Sac bandoulière Orbit",
      product2Description:
        "Format compact du quotidien avec texture résistante et détails premium.",
      product3Name: "Sneakers Studio Runner",
      product3Description:
        "Amorti léger et lignes modernes pour bouger toute la journée.",
      product4Name: "Sac week-end Minimal",
      product4Description:
        "Sac de voyage élégant, volume généreux et doublure douce.",
      product5Name: "T-shirt coton Luxe",
      product5Description:
        "T-shirt du quotidien en coton dense, coupe souple et raffinée.",
      product6Name: "Gourde acier mat",
      product6Description:
        "Acier isotherme double paroi dans une silhouette minimaliste.",
    },
  },
  en: {
    poweredBy: "Powered by Shop2Link",
    createYourShop: "Create your own shop",
    thanks: "Thank you !",
    contactWhatsApp: "WhatsApp",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    changeLanguage: "Change language",
    selectLanguage: "Select language",
    cartButton: "Open cart with {count} item{plural}",
    curatedStorefront: "Curated storefront",
    browseProducts: "Browse products",
    fastTitle: "Fast",
    fastText: "WhatsApp ordering",
    freshTitle: "Simple",
    freshText: "One-click ordering",
    secureTitle: "Reliable",
    secureText: "100% secure",
    productsPlaceholder: "Products will appear here",
    latestDrop: "Latest drop",
    Products: "Our products",
    productsIntro:
      "Browse the catalog, add favorites to your cart, then complete the order on WhatsApp.",
    allCategories: "All",
    categoryFilterLabel: "Filter by category",
    noProductsYet: "No products yet",
    noProductsForCategory: "No products in this category",
    noProductsDescription:
      "This merchant has not published products yet. Check back soon or contact them directly.",
    noProductsCategoryDescription:
      "Try another category or return to all products.",
    backToShop: "Back to shop",
    inStock: "In stock",
    soldOut: "Sold out",
    addToCart: "Add to cart",
    unavailable: "Unavailable",
    yourCart: "Your cart",
    cartDescription: "Review your order before checking out with {shopName}.",
    removeItem: "Remove {itemName}",
    decreaseQuantity: "Decrease quantity for {itemName}",
    increaseQuantity: "Increase quantity for {itemName}",
    emptyCartTitle: "Your cart is empty",
    emptyCartDescription:
      "Add a product and the WhatsApp order message will be prepared automatically.",
    subtotal: "Subtotal",
    clearCart: "Clear",
    checkoutWhatsApp: "Checkout on WhatsApp",
    close: "Close",
    copyright: "All rights reserved.",
    website: "Website",
    shopNotFound: "Shop not found",
    shopNotFoundDescription:
      "The storefront you are looking for is unavailable or has not been published.",
    openDemoShop: "Open demo shop",
    missingSlug: "Shop slug is missing.",
    loadingError: "Something went wrong while loading the shop.",
    checkoutMessageTitle: "Hello, I want to order:",
    checkoutMessageShop: "Shop",
    contactMessage: "Hello {shopName}, I have a question about your products.",
    categories: {
      "mode-accessoires": "Fashion and accessories",
      gaming: "Gaming",
      electronique: "Electronics",
      "beaute-sante": "Beauty and health",
      maison: "Home",
      sport: "Sport",
      alimentation: "Food",
      parfumerie: "Perfume",
      automobile: "Automotive",
      cadeaux: "Gifts",
      autre: "Other",
    },
    mock: {
      shopDescription:
        "Everything you need to sell online, with fast WhatsApp ordering and a smooth mobile experience.",
      product1Name: "Aero Knit Hoodie",
      product1Description:
        "Soft heavyweight fleece with a structured silhouette and clean finish.",
      product2Name: "Orbit Crossbody Bag",
      product2Description:
        "Compact daily carry with a resistant texture and premium details.",
      product3Name: "Studio Runner Sneakers",
      product3Description:
        "Light cushioning and modern lines made for all-day movement.",
      product4Name: "Minimal Weekender Bag",
      product4Description:
        "A polished travel bag with generous volume and a soft lining.",
      product5Name: "Luxe Cotton Tee",
      product5Description:
        "A refined everyday tee cut from dense cotton with a relaxed drape.",
      product6Name: "Matte Steel Bottle",
      product6Description:
        "Double-wall insulated steel in a minimalist silhouette.",
    },
  },
  ar: {
    poweredBy: "مدعوم من Shop2Link",
    createYourShop: "أنشئ متجرك الخاص",
    thanks: "شكراً ²!",
    contactWhatsApp: "واتساب",
    switchToLight: "التبديل إلى الوضع الفاتح",
    switchToDark: "التبديل إلى الوضع الداكن",
    changeLanguage: "تغيير اللغة",
    selectLanguage: "اختر اللغة",
    cartButton: "فتح السلة وبها {count} منتج",
    curatedStorefront: "متجر مختار",
    browseProducts: "تصفح المنتجات",
    fastTitle: "سريع",
    fastText: "الطلب عبر واتساب",
    freshTitle: "بسيط",
    freshText: "طلب بنقرة واحدة",
    secureTitle: "موثوق",
    secureText: "100٪ آمن",
    productsPlaceholder: "ستظهر المنتجات هنا",
    latestDrop: "أحدث المنتجات",
    Products: "منتجاتنا",
    productsIntro:
      "تصفح الكتالوج، أضف مفضلاتك إلى السلة، ثم أكمل الطلب على واتساب.",
    allCategories: "الكل",
    categoryFilterLabel: "تصفية حسب الفئة",
    noProductsYet: "لا توجد منتجات حالياً",
    noProductsForCategory: "لا توجد منتجات في هذه الفئة",
    noProductsDescription:
      "لم ينشر هذا التاجر أي منتجات بعد. عد لاحقاً أو تواصل معه مباشرة.",
    noProductsCategoryDescription: "جرّب فئة أخرى أو ارجع إلى كل المنتجات.",
    backToShop: "العودة إلى المتجر",
    inStock: "متوفر",
    soldOut: "نفد المخزون",
    addToCart: "أضف إلى السلة",
    unavailable: "غير متاح",
    yourCart: "سلتك",
    cartDescription: "راجع طلبك قبل إرساله إلى {shopName}.",
    removeItem: "حذف {itemName}",
    decreaseQuantity: "تقليل كمية {itemName}",
    increaseQuantity: "زيادة كمية {itemName}",
    emptyCartTitle: "سلتك فارغة",
    emptyCartDescription:
      "أضف منتجاً وسيتم تجهيز رسالة الطلب على واتساب تلقائياً.",
    subtotal: "المجموع الفرعي",
    clearCart: "تفريغ",
    checkoutWhatsApp: "الطلب عبر واتساب",
    close: "إغلاق",
    copyright: "جميع الحقوق محفوظة.",
    website: "الموقع",
    shopNotFound: "المتجر غير موجود",
    shopNotFoundDescription:
      "المتجر الذي تبحث عنه غير متاح أو لم يتم نشره بعد.",
    openDemoShop: "فتح المتجر التجريبي",
    missingSlug: "رابط المتجر مفقود.",
    loadingError: "حدث خطأ أثناء تحميل المتجر.",
    checkoutMessageTitle: "مرحباً، أريد طلب:",
    checkoutMessageShop: "المتجر",
    contactMessage: "مرحباً {shopName}، لدي سؤال حول منتجاتكم.",
    categories: {
      "mode-accessoires": "الموضة والإكسسوارات",
      gaming: "الألعاب",
      electronique: "الإلكترونيات",
      "beaute-sante": "الجمال والصحة",
      maison: "المنزل",
      sport: "الرياضة",
      alimentation: "الأغذية",
      parfumerie: "العطور",
      automobile: "السيارات",
      cadeaux: "الهدايا",
      autre: "أخرى",
    },
    mock: {
      shopDescription:
        "كل ما تحتاجه للبيع عبر الإنترنت، مع طلب سريع على واتساب وتجربة سلسة على الهاتف المحمول",
      product1Name: "هودي Aero Knit",
      product1Description: "قماش قطني ثقيل وناعم بقصة منظمة ولمسات نظيفة.",
      product2Name: "حقيبة Orbit",
      product2Description: "حقيبة يومية صغيرة بملمس مقاوم وتفاصيل فاخرة.",
      product3Name: "حذاء Studio Runner",
      product3Description: "توسيد خفيف وخطوط عصرية للحركة طوال اليوم.",
      product4Name: "حقيبة سفر Minimal",
      product4Description: "حقيبة سفر أنيقة بمساحة واسعة وبطانة ناعمة.",
      product5Name: "تيشيرت قطن Luxe",
      product5Description: "تيشيرت يومي أنيق من قطن كثيف بقصة مريحة.",
      product6Name: "قارورة فولاذ مطفي",
      product6Description: "فولاذ معزول بجدار مزدوج بتصميم بسيط.",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.fr;

export function interpolate(
  template: string,
  values: Record<string, string | number>,
) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.split(`{${key}}`).join(String(value)),
    template,
  );
}

export function getCategoryLabel(
  category: string | null | undefined,
  language: Language,
) {
  if (!category) {
    return translations[language].allCategories;
  }

  const normalizedCategory = normalizeCategoryId(category);
  const knownCategory =
    translations[language].categories[
      normalizedCategory as keyof typeof translations.fr.categories
    ];

  return knownCategory ?? category;
}

export function normalizeCategoryId(category: string | null | undefined) {
  if (!category) {
    return "";
  }

  const normalizedInput = category.trim().toLowerCase();
  const directMatch = categoryOptions.find(
    (option) => option === normalizedInput,
  );

  if (directMatch) {
    return directMatch;
  }

  const labelMatch = categoryOptions.find((option) =>
    (Object.keys(translations) as Language[]).some(
      (language) =>
        translations[language].categories[option].toLowerCase() ===
        normalizedInput,
    ),
  );

  return labelMatch ?? category;
}

export function getLocalizedProduct(product: Product, language: Language) {
  return {
    name: product.name_translations?.[language] ?? product.name,
    description:
      product.description_translations?.[language] ?? product.description,
    category: getCategoryLabel(product.category, language),
  };
}
