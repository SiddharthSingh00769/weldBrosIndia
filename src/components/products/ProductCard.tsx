"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Clock3 } from "lucide-react";

import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const [activeImage, setActiveImage] = useState(0);

  const isComingSoon = product.comingSoon === true;

  useEffect(() => {
    if (images.length <= 1 || isComingSoon) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [images.length, isComingSoon]);

  /* -------------------------------------------------------------------------- */
  /* Coming Soon Card                                                           */
  /* -------------------------------------------------------------------------- */

  if (isComingSoon) {
    return (
      <article
        data-product-card
        className="group relative overflow-hidden border border-[#cbd3d9] bg-[#101c2c]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#172a3a]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 48vw"
            className="object-cover opacity-75 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-[#101c2c]/45" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#101c2c] via-[#101c2c]/20 to-transparent" />

          {/* Technical Grid */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Number */}
          <div className="absolute left-5 top-5 z-10">
            <span className="font-heading text-xs font-medium tracking-[0.16em] text-white/70">
              {product.number}
            </span>
          </div>

          {/* Coming Soon Label */}
          <div className="absolute right-5 top-5 z-10">
            <div className="inline-flex items-center gap-2 border border-[#f05a18]/60 bg-[#101c2c]/70 px-3 py-2 backdrop-blur-sm">
              <span className="size-1.5 bg-[#f05a18]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
                Coming Soon
              </span>
            </div>
          </div>

          {/* Technical Corner */}
          <div
            aria-hidden="true"
            className="absolute right-5 top-5 z-10 size-10 border-r border-t border-white/30 transition-all duration-500 group-hover:size-14 group-hover:border-[#f05a18]"
          />

          {/* Title */}
          <div className="absolute inset-x-5 bottom-5 z-10 text-center md:text-left">
            <div className="mx-auto mb-3 h-px w-8 bg-[#f05a18] md:mx-0" />

            <h3 className="font-heading text-[clamp(1.4rem,3vw,2rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
              {product.name}
            </h3>

            <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/55">
              {product.range}
            </p>
          </div>
        </div>

        {/* Mobile / Bottom Information */}
        <div className="border-t border-white/10 bg-[#101c2c] px-5 py-5 text-center md:px-6 md:py-6 md:text-left">
          <div className="flex items-start justify-center gap-4 md:justify-start">
            <div className="flex size-10 shrink-0 items-center justify-center border border-[#f05a18]/30 bg-[#f05a18]/10">
              <Clock3 className="size-4 text-[#f05a18]" />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f05a18]">
                In Development
              </p>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Coming soon. Product specifications and availability will be
                announced shortly.
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">
              Future Product
            </span>

            <ArrowUpRight className="size-4 text-[#f05a18]" />
          </div>
        </div>
      </article>
    );
  }

  /* -------------------------------------------------------------------------- */
  /* Standard Product Card                                                      */
  /* -------------------------------------------------------------------------- */

  return (
    <article
      data-product-card
      className="group relative overflow-hidden border border-[#dde2e6] bg-white"
    >
      {/* -------------------------------------------------------------------- */}
      {/* Image                                                                 */}
      {/* -------------------------------------------------------------------- */}

      <div className="relative aspect-[4/3] overflow-hidden bg-[#172a3a]">
        {/* Image Stack */}
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`${product.name} - view ${index + 1}`}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 48vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Default Gradient */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#101c2c]/90 via-[#101c2c]/20 to-transparent" />

        {/* Desktop Hover Overlay */}
        <div className="absolute inset-0 z-[1] bg-[#101c2c]/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Number */}
        <div className="absolute left-5 top-5 z-10">
          <span className="font-heading text-xs font-medium tracking-[0.16em] text-white/70">
            {product.number}
          </span>
        </div>

        {/* Technical Corner */}
        <div
          aria-hidden="true"
          className="absolute right-5 top-5 z-10 size-10 border-r border-t border-white/30 transition-all duration-500 group-hover:size-14 group-hover:border-[#f05a18]"
        />

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-5 right-5 z-10 flex items-center gap-1.5 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-1 transition-all duration-500 ${
                  activeImage === index
                    ? "w-5 bg-[#f05a18]"
                    : "w-1 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* Mobile Title                                                        */}
        {/* Same visual treatment as Manufacturing cards                       */}
        {/* ------------------------------------------------------------------ */}

        <div className="absolute inset-x-5 bottom-5 z-10 text-center transition-all duration-500 md:hidden">
          <div className="mx-auto mb-3 h-px w-8 bg-[#f05a18]" />

          <h3 className="font-heading text-[clamp(1.35rem,6vw,1.8rem)] font-semibold leading-none tracking-[-0.03em] text-white">
            {product.name}
          </h3>

          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-white/65">
            {product.range}
          </p>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Desktop Default Title                                               */}
        {/* ------------------------------------------------------------------ */}

        <div className="absolute inset-x-5 bottom-5 z-10 hidden transition-all duration-500 group-hover:opacity-0 md:block">
          <div className="mb-3 h-px w-8 bg-[#f05a18]" />

          <h3 className="font-heading text-[clamp(1.35rem,2vw,1.7rem)] font-semibold leading-none tracking-[-0.03em] text-white">
            {product.name}
          </h3>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Desktop Hover Content                                               */}
        {/* ------------------------------------------------------------------ */}

        <div className="absolute inset-x-5 bottom-5 z-20 hidden translate-y-5 text-left opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:block">
          <div className="mb-4 h-px w-12 bg-[#f05a18]" />

          <h3 className="font-heading text-xl font-semibold tracking-[-0.025em] text-white">
            {product.name}
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
            {product.shortDescription}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
              {product.range}
            </span>

            <ArrowUpRight className="size-4 text-[#f05a18] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Mobile Description                                                    */}
      {/* Matches ManufacturingProcess card                                    */}
      {/* -------------------------------------------------------------------- */}

      <div className="border-t border-white/10 bg-[#101c2c] px-5 py-5 text-center md:hidden">
        <p className="text-sm leading-6 text-white/65">
          {product.shortDescription}
        </p>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Desktop Product Information                                           */}
      {/* -------------------------------------------------------------------- */}

      <div
        data-product-content
        className="hidden px-6 py-6 lg:px-7 lg:py-7 md:block"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0 text-left">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#075a9c]">
              Product {product.number}
            </p>

            <h3 className="mt-2 font-heading text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1] tracking-[-0.035em] text-[#17212b]">
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

export default ProductCard;