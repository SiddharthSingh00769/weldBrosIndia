import type { Metadata } from "next";

import { ProductPageAnimations } from "@/components/animations/ProductPageAnimations";
import { ProductsHero } from "@/components/products/ProductHero";
import { ProductRange } from "@/components/products/ProductRange";
import { ProductSpecialization } from "@/components/products/ProductSpecialization";
import { CustomFabrication } from "@/components/products/CustomFabrication";
import { ProductCTA } from "@/components/products/ProductCTA";

export const metadata: Metadata = {
  title: "Transformer Tanks & Components",
  description:
    "Explore transformer tanks and fabricated components from WBRS Industries, including power transformer tanks, OLTC tanks, dry transformer tanks, LT boxes, and HT boxes.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <main>
      <ProductPageAnimations />
      <ProductsHero />
      <ProductRange />
      <ProductSpecialization />
      <CustomFabrication />
      <ProductCTA />
    </main>
  );
}