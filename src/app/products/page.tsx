import { ProductPageAnimations } from "@/components/animations/ProductPageAnimations";
import { ProductsHero } from "@/components/products/ProductHero";
import { ProductRange } from "@/components/products/ProductRange";
import { ProductSpecialization } from "@/components/products/ProductSpecialization";
import { ProductApplications } from "@/components/products/ProductApplications";
import { CustomFabrication } from "@/components/products/CustomFabrication";
import { ProductCTA } from "@/components/products/ProductCTA";

export default function ProductsPage() {
  return (
    <main>
      <ProductPageAnimations />

      <ProductsHero />
      <ProductRange />
      <ProductSpecialization />
      <ProductApplications />
      <CustomFabrication />
      <ProductCTA />
    </main>
  );
}