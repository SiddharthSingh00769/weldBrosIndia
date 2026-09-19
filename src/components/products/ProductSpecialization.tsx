import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";

export function ProductSpecialization() {
  return (
    <section className="relative overflow-hidden bg-[#1b2429] py-24 text-[#f7f7f5] md:py-32 lg:py-40">
      <Container>
        <div className="grid items-center gap-12 text-center lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:text-left">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <p
              data-product-specialization-item
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#7fa8ba] sm:text-xs"
            >
              Specialized Capability
            </p>

            <p
              data-product-specialization-item
              className="mt-5 font-heading text-xs uppercase tracking-[0.16em] text-white/35"
            >
              03 / OLTC
            </p>

            <h2
              data-product-specialization-item
              className="mx-auto mt-4 max-w-2xl font-heading text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-[0.93] tracking-[-0.05em] lg:mx-0"
            >
              Built around
              <br />
              OLTC requirements.
            </h2>

            <p
              data-product-specialization-item
              className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/60 md:text-lg md:leading-8 lg:mx-0"
            >
              Specialized transformer tank fabrication for applications where
              the tank geometry, interfaces and fabrication requirements need
              to align precisely with the transformer design.
            </p>

            <Link
              href="/products/oltc-transformer-tanks"
              data-product-specialization-item
              className="group mt-9 inline-flex items-center gap-3 border-b border-white/30 pb-2 text-sm font-medium transition-colors duration-300 hover:border-white"
            >
              Explore OLTC Transformer Tanks

              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 w-full lg:order-2">
            <div
              data-product-specialization-image
              className="relative aspect-[4/3] overflow-hidden bg-[#2c373e]"
            >
              <Image
                src="/images/products/oltc.png"
                alt="OLTC transformer tank"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2429]/50 to-transparent" />

              <div className="absolute bottom-5 left-5 border border-white/20 bg-[#1b2429]/70 px-4 py-3 text-left backdrop-blur-sm">
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/45">
                  Specialization
                </p>

                <p className="mt-1 font-heading text-sm font-semibold">
                  OLTC Transformer Tanks
                </p>
              </div>

              <div className="absolute right-5 top-5 hidden size-16 border-r border-t border-white/30 sm:block" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}