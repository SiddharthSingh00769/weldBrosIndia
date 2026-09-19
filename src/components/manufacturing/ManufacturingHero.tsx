"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { Container } from "@/components/layout/Container";

gsap.registerPlugin(ScrollToPlugin);

export function ManufacturingHero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = contentRef.current?.querySelectorAll(
        "[data-hero-fade]",
      );

      if (!items) return;

      gsap.set(items, {
        opacity: 0,
        y: 30,
      });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.2,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  const scrollToProcess = () => {
    const target = document.getElementById("manufacturing-process");

    if (!target) return;

    gsap.to(window, {
      duration: 1.1,
      scrollTo: {
        y: target,
        offsetY: 20,
      },
      ease: "power3.inOut",
    });
  };

  return (
    <section className="relative isolate h-[100dvh] min-h-[640px] overflow-hidden bg-[#07111d] text-white lg:h-[100dvh] lg:min-h-[720px] lg:max-h-[900px]">
      {/* Background Image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-[1.03] bg-[url('/images/manufacturing/manufacturing-hero.jpg')] bg-cover bg-center"
      />

      {/* Dark Industrial Tint */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#07111d]/45"
      />

      {/* Blue Ambient Light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 78% 35%,
              rgba(7, 90, 156, 0.24),
              transparent 34%
            ),
            radial-gradient(
              circle at 15% 70%,
              rgba(7, 90, 156, 0.12),
              transparent 32%
            )
          `,
        }}
      />

      {/* Cinematic Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#07111d]/35 via-transparent to-[#07111d]/95"
      />

      {/* Side Vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,17,29,0.72) 0%, rgba(7,17,29,0.08) 42%, rgba(7,17,29,0.28) 100%)",
        }}
      />

      {/* Technical Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Large Technical Number */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2vw] top-1/2 hidden -translate-y-1/2 font-heading text-[clamp(18rem,32vw,34rem)] font-semibold leading-none tracking-[-0.09em] text-white/[0.025] lg:block"
      >
        01
      </div>

      {/* Technical Corners */}
      <div
        aria-hidden="true"
        className="absolute right-8 top-32 hidden size-28 border-r border-t border-white/20 lg:block xl:right-12"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-10 left-8 hidden size-20 border-b border-l border-white/20 lg:block xl:left-12"
      />

      {/* Technical Horizontal Line */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-[42%] hidden border-t border-white/[0.07] lg:block"
      />

      {/* Small Technical Mark */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-8 hidden items-center gap-3 lg:flex xl:right-12"
      >
        <span className="h-px w-8 bg-[#f05a18]" />
        <span className="font-heading text-[10px] uppercase tracking-[0.18em] text-white/35">
          WBRS / MFG
        </span>
      </div>

      {/* Content */}
      <Container
        className="
          relative z-10 flex h-full w-full flex-col
          justify-center
          pt-24 pb-8
          sm:pt-28 sm:pb-10
          lg:justify-end lg:pb-12
          xl:pb-14
        "
      >
        <div
          ref={contentRef}
          className="mx-auto w-full max-w-4xl text-center md:mx-0 md:text-left"
        >
          {/* Eyebrow */}
          <p
            data-hero-fade
            className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7dd3fc] sm:text-xs"
          >
            Manufacturing
          </p>

          {/* Section Number */}
          <p
            data-hero-fade
            className="mt-5 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-white/45 sm:text-xs"
          >
            01 / Fabrication
          </p>

          {/* Heading */}
          <h1
            data-hero-fade
            className="mt-4 max-w-4xl font-heading text-[clamp(3rem,6vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white drop-shadow-2xl"
          >
            Built with precision.
            <br />
            <span className="text-white/85">
              Fabricated for the requirement.
            </span>
          </h1>

          {/* Description */}
          <p
            data-hero-fade
            className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-200/85 sm:text-base sm:leading-7 md:mx-0 md:text-lg md:leading-8"
          >
            A manufacturing process built around fabrication, welding,
            finishing and assembly for transformer tanks and related
            components.
          </p>

          {/* CTA Buttons */}
          <div
            data-hero-fade
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start"
          >
            <button
              type="button"
              onClick={scrollToProcess}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#f05a18] px-5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#d94a12] sm:h-13 sm:px-6 sm:text-base"
            >
              Explore Our Process
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-1" />
            </button>

            <Link
              href="/request-quote"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-5 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/50 hover:bg-white/15 sm:h-13 sm:px-6 sm:text-base"
            >
              Request a Quote
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ManufacturingHero;