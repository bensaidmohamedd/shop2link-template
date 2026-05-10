import { Facebook, Globe2,  Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { translations } from "@/lib/i18n";
import type { Shop } from "@/lib/types";
import { useLanguageStore } from "@/store/languageStore";

type FooterProps = {
  shop: Shop;
};

export function Footer({ shop }: FooterProps) {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];
  // const socialLinks = [
  //   { label: "Instagram", href: "#", icon: Instagram },
  //   { label: "Facebook", href: "#", icon: Facebook },
  //   { label: t.website, href: "#", icon: Globe2 }
  // ];

  return (
    <footer className="border-t border-orange-200/70 bg-[#fffaf2]/80 py-8 dark:border-white/10 dark:bg-slate-900/60">
      <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-950 dark:text-white">
            {shop.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Copyright {new Date().getFullYear()} Shop2Link. {t.copyright}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* {socialLinks.map(({ label, href, icon: Icon }) => (
            <Button key={label} asChild variant="outline" size="icon" aria-label={label}>
              <a href={href}>
                <Icon className="h-4 w-4" />
              </a>
            </Button>
          ))} */}
          <Button asChild variant="shop">
            <a
              href="https://shop2llink.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe2 className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
              {t.createYourShop}
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
