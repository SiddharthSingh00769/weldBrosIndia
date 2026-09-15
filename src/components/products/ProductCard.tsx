"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      data-product-card
      className="group relative overflow-hidden border border-[#dde2e6] bg-white"
    >
      <div
        data-product-image
        className="relative aspect-[4/3] overflow-hidden bg-[#172a3a]"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 48vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />

        {/* Bottom image gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101c2c]/90 via-[#101c2c]/15 to-transparent" />

        {/* Desktop hover overlay */}
        <div className="absolute inset-0 bg-[#101c2c]/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Product number */}
        <div className="absolute left-5 top-5 z-10">
          <span className="font-heading text-xs font-semibold tracking-[0.16em] text-white/70">
            {product.number}
          </span>
        </div>

        {/* Technical corner */}
        <div
          aria-hidden="true"
          className="absolute right-5 top-5 z-10 size-12 border-r border-t border-white/30 transition-all duration-500 group-hover:size-16 group-hover:border-[#f05a18]"
        />

        {/* Desktop hover content */}
        <div className="absolute inset-x-6 bottom-6 z-10 hidden translate-y-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:block">
          <div className="mb-4 h-px w-8 bg-[#f05a18] transition-all duration-500 group-hover:w-12" />

          <p className="max-w-xl text-sm leading-6 text-white/80">
            {product.shortDescription}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
              {product.range}
            </span>

            <ArrowUpRight className="size-4 text-[#f05a18] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>

        {/* Mobile content */}
        <div className="absolute inset-x-5 bottom-5 z-10 md:hidden">
          <div className="mb-3 h-px w-8 bg-[#f05a18]" />

          <h3 className="font-heading text-[clamp(1.4rem,6vw,1.8rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
            {product.name}
          </h3>

          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-white/65">
            {product.range}
          </p>
        </div>
      </div>

      {/* Desktop text area */}
      <div
        data-product-content
        className="hidden px-6 py-6 md:block lg:px-7 lg:py-7"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#075a9c]">
              Product {product.number}
            </p>

            <h3 className="mt-2 font-heading text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1] tracking-[-0.035em] text-[#17212b]">
              {product.name}
            </h3>
          </div>

          <span className="shrink-0 pt-1 text-right font-heading text-[10px] font-medium uppercase tracking-[0.12em] text-[#7b858d]">
            {product.range}
          </span>
        </div>
      </div>
    </article>
  );
}