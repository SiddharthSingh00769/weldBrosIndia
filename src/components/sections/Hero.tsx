"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

import { Container } from "../layout/Container";

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = contentRef.current;

      if (!content) return;

      const items = content.querySelectorAll("[data-hero-fade]");

      gsap.set(items, {
        opacity: 0,
        y: 35,
      });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.25,
        clearProps: "transform,opacity",
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#07111d] text-white lg:min-h-[720px] lg:max-h-[900px]">
      {/* Background Video */}
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover object-center sm:object-center lg:object-cover"
      >
        <source
          src="/images/brand/finalHeroVideo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Base Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-black/30"
      />

      {/* Cinematic Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/10 to-[#07111d]/85"
      />

      {/* Bottom Content */}
      <Container className="relative z-10 flex min-h-[100svh] w-full flex-col justify-end pb-8 pt-28 sm:pb-10 sm:pt-32 lg:min-h-0 lg:pb-12 xl:pb-14">
        <div
          ref={contentRef}
          className="mx-auto w-full max-w-4xl text-center"
        >
          {/* Eyebrow */}
          <p
            data-hero-fade
            className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7dd3fc] sm:text-xs"
          >
            Transformer Tank Manufacturing
          </p>

          {/* Heading */}
          <h1
            data-hero-fade
            className="mt-4 font-heading text-[clamp(2.6rem,6vw,5.75rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white drop-shadow-2xl"
          >
            Transformer Tanks
            <br />
            <span className="text-white/90">Built to Your</span>
            <br />
            Specifications.
          </h1>

          {/* Description */}
          <p
            data-hero-fade
            className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-200/90 sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8"
          >
            Complete transformer tanks and related components for 500 kVA to
            5 MVA applications, with specialized expertise in OLTC transformer
            tanks.
          </p>

          {/* CTA Buttons */}
          <div
            data-hero-fade
            className="mt-7 flex w-full flex-col justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row"
          >
            <Link
              href="/request-quote"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#f05a18] px-5 text-sm font-medium text-white shadow-[0_0_28px_rgba(240,90,24,0.28)] transition-colors duration-300 hover:bg-[#d94a12] sm:h-13 sm:px-6 sm:text-base"
            >
              Request a Quote
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/products"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/60 hover:bg-white/15 sm:h-13 sm:px-6 sm:text-base"
            >
              Explore Products
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Stats */}
          <div
            data-hero-fade
            className="mx-auto mt-8 grid max-w-2xl grid-cols-3 border-t border-white/20 pt-4 text-center sm:mt-10 sm:pt-5"
          >
            {/* Manufacturing Range */}
            <div className="min-w-0 pr-3 sm:pr-5">
              <p className="font-heading text-xs font-semibold text-white sm:text-lg">
                500 kVA–5 MVA
              </p>
              <p className="mt-1 text-[8px] font-medium uppercase leading-4 tracking-[0.08em] text-slate-300 sm:text-xs sm:tracking-[0.1em]">
                Manufacturing Range
              </p>
            </div>

            {/* Specialization */}
            <div className="min-w-0 border-l border-white/20 px-3 sm:px-5">
              <p className="font-heading text-xs font-semibold text-white sm:text-lg">
                OLTC
              </p>
              <p className="mt-1 text-[8px] font-medium uppercase leading-4 tracking-[0.08em] text-slate-300 sm:text-xs sm:tracking-[0.1em]">
                Key Specialization
              </p>
            </div>

            {/* Location */}
            <div className="min-w-0 border-l border-white/20 pl-3 sm:pl-5">
              <p className="font-heading text-xs font-semibold text-white sm:text-lg">
                Jaipur
              </p>
              <p className="mt-1 text-[8px] font-medium uppercase leading-4 tracking-[0.08em] text-slate-300 sm:text-xs sm:tracking-[0.1em]">
                Rajasthan, India
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;