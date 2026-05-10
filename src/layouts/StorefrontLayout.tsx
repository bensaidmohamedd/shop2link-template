import type { ReactNode } from "react";
import type { Shop } from "@/lib/types";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type StorefrontLayoutProps = {
  shop: Shop;
  children: ReactNode;
};

export function StorefrontLayout({ shop, children }: StorefrontLayoutProps) {
  return (
    <div className="storefront-shell min-h-screen text-foreground">
      <Header shop={shop} />
      <main>{children}</main>
      <Footer shop={shop} />
    </div>
  );
}
