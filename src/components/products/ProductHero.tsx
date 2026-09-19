"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

import { Container } from "@/components/layout/Container";

export function ProductsHero() {
  const scrollToProducts = () => {
    const target = document.getElementById("product-range");

    if (!target) {
      return;
    }

    gsap.to(window, {
      duration: 1.4,
      scrollTo: {
        y: target,
        offsetY: 20,
      },
      ease: "power3.inOut",
    });
  };

  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#1b2429] text-[#f7f7f5] lg:min-h-[760px]">
      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Technical field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[42%] border-l border-white/10 lg:block"
      >
        <div className="absolute inset-y-0 left-[20%] border-l border-white/5" />
        <div className="absolute inset-y-0 left-[40%] border-l border-white/5" />
        <div className="absolute inset-y-0 left-[60%] border-l border-white/5" />
        <div className="absolute inset-y-0 left-[80%] border-l border-white/5" />

        <div className="absolute right-16 top-24 h-56 w-56 rounded-full border border-white/10" />
        <div className="absolute right-28 top-36 h-32 w-32 rounded-full border border-white/10" />
      </div>

      <Container className="relative z-10 flex min-h-[680px] flex-col justify-between py-28 lg:min-h-[760px] lg:py-32">
        {/* Top */}
        <div className="flex items-center justify-between">
          <p
            data-product-hero-item
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#7fa8ba] sm:text-xs"
          >
            Products
          </p>

          <p
            data-product-hero-item
            className="font-heading text-[10px] uppercase tracking-[0.16em] text-white/35 sm:text-xs"
          >
            01 / Product Range
          </p>
        </div>

        {/* Main */}
        <div className="grid gap-12 text-center lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-24 lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <p
              data-product-hero-item
              className="mb-5 text-xs uppercase tracking-[0.18em] text-white/45"
            >
              Transformer Components
            </p>

            <h1
              data-product-hero-item
              className="max-w-5xl font-heading text-[clamp(3.2rem,7vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.055em]"
            >
              Engineered
              <br />
              around the
              <br />
              transformer.
            </h1>

            <p
              data-product-hero-item
              className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8 lg:mx-0"
            >
              Transformer tanks and fabricated components manufactured around
              application requirements, customer drawings and project
              specifications.
            </p>

            <div
              data-product-hero-item
              className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={scrollToProducts}
                className="group inline-flex h-13 cursor-pointer items-center justify-center gap-2 bg-[#f7f7f5] px-6 text-sm font-medium text-[#1b2429] transition-colors duration-300 hover:bg-white"
              >
                Explore Products

                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-1" />
              </button>

              <Link
                href="/request-quote"
                className="group inline-flex h-13 items-center justify-center gap-2 border border-white/20 px-6 text-sm font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
              >
                Request a Quote

                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Technical information */}
          <div
            data-product-hero-item
            className="hidden lg:block"
          >
            <div className="border-l border-white/10 pl-8">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                Manufacturing Range
              </p>

              <p className="mt-3 font-heading text-3xl font-semibold tracking-[-0.04em]">
                500 kVA–5 MVA
              </p>

              <div className="mt-6 h-px w-full bg-white/10" />

              <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-white/35">
                <span>Custom Fabrication</span>
                <span>01</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center text-[10px] uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:text-left sm:text-xs">
          <span>Jaipur / Rajasthan / India</span>

          <span>Engineering &amp; Fabrication</span>
        </div>
      </Container>
    </section>
  );
}