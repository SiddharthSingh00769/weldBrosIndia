import { Container } from "@/components/layout/Container";
import { products } from "@/data/products";

import { ProductCard } from "./ProductCard";

export function ProductRange() {
  return (
    <section
      id="product-range"
      className="bg-[#f7f8f9] py-24 md:py-32 lg:py-40"
    >
      <Container>
        {/* Section heading */}
        <div className="grid gap-8 border-b border-[#dde2e6] pb-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:pb-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#075a9c]">
              Product Range
            </p>

            <p className="mt-4 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d]">
              02 / Products
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-heading text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#17212b]">
              Transformer tanks and fabricated components for varied
              applications.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5f6b75] md:text-lg md:leading-8">
              Explore our range of fabricated transformer products,
              manufactured around capacity requirements and application needs.
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}