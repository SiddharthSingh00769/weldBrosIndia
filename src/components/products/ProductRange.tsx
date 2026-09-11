import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { products } from "@/data/products";

export function ProductRange() {
  return (
    <section
      id="product-range"
      className="scroll-mt-6 bg-[#f7f7f5] py-24 md:py-32 lg:py-40"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* Intro */}
          <div>
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#245a78]" />

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#245a78]">
                  Product Range
                </p>
              </div>

              <h2 className="mt-5 max-w-md font-heading text-[clamp(2.5rem,5vw,4.2rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-[#172026]">
                Components
                <br />
                made for
                <br />
                performance.
              </h2>

              <p className="mt-6 max-w-sm text-base leading-7 text-[#647078]">
                Explore our core transformer tank and fabrication capabilities,
                developed around project-specific requirements.
              </p>

              <div className="mt-10 hidden border-t border-[#dde1e2] pt-5 lg:block">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#8f9190]">
                  Product Catalogue
                </p>

                <p className="mt-2 font-heading text-2xl font-semibold text-[#172026]">
                  {String(products.length).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group block"
              >
                <article
                  data-product-card
                  className="relative overflow-hidden border border-[#dde1e2] bg-white transition-[border-color,box-shadow] duration-500 hover:border-[#aebfc7] hover:shadow-[0_20px_60px_rgba(23,32,38,0.08)]"
                >
                  <div className="grid md:grid-cols-[1fr_0.9fr]">
                    {/* Image */}
                    <div data-product-image className="relative aspect-[4/3] overflow-hidden bg-[#e9edef] md:aspect-auto md:min-h-[360px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      />

                      {/* Product number */}
                      <div className="absolute left-5 top-5 border border-white/30 bg-[#1b2429]/70 px-3 py-2 backdrop-blur-sm">
                        <span className="font-heading text-xs font-semibold tracking-[0.08em] text-white">
                          {product.number}
                        </span>
                      </div>

                      {/* Image corner detail */}
                      <div className="absolute bottom-5 right-5 hidden size-12 border-b border-r border-white/40 sm:block" />
                    </div>

                    {/* Content */}
                    <div data-product-content className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8f9190]">
                          {product.category}
                        </p>

                        <h3 className="mt-3 font-heading text-3xl font-semibold leading-[1] tracking-[-0.04em] text-[#172026] sm:text-4xl">
                          {product.name}
                        </h3>

                        <p className="mt-5 text-sm leading-6 text-[#647078] sm:text-base sm:leading-7">
                          {product.shortDescription}
                        </p>
                      </div>

                      <div className="mt-8">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {product.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-[#dde1e2] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-[#647078]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Bottom */}
                        <div className="mt-8 flex items-center justify-between border-t border-[#dde1e2] pt-5">
                          <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#172026]">
                            View Product
                          </span>

                          <span className="flex size-10 items-center justify-center border border-[#cbd0d1] transition-all duration-300 group-hover:border-[#245a78] group-hover:bg-[#245a78] group-hover:text-white">
                            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}