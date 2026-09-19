"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { Container } from "@/components/layout/Container";

gsap.registerPlugin(ScrollToPlugin);

export function ContactHero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = contentRef.current?.querySelectorAll(
        "[data-contact-hero-fade]",
      );

      if (!items?.length) return;

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

  const scrollToContact = () => {
    const target = document.getElementById("contact-form");

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
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/contact/contact-hero.jpg')] bg-cover bg-center"
      />

      {/* Industrial Tint */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#07111d]/65"
      />

      {/* Ambient Light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 75% 35%,
              rgba(7, 90, 156, 0.22),
              transparent 35%
            )
          `,
        }}
      />

      {/* Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#07111d]/30 via-transparent to-[#07111d]/95"
      />

      {/* Technical Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Large Number */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2vw] top-1/2 hidden -translate-y-1/2 font-heading text-[clamp(18rem,32vw,34rem)] font-semibold leading-none tracking-[-0.09em] text-white/[0.025] lg:block"
      >
        01
      </div>

      {/* Technical Corner */}
      <div
        aria-hidden="true"
        className="absolute right-8 top-32 hidden size-28 border-r border-t border-white/20 lg:block xl:right-12"
      />

      {/* Content */}
      <Container className="relative z-10 flex min-h-[70dvh] w-full flex-col justify-end pb-12 pt-32 lg:min-h-[680px] lg:pb-14">
        <div
          ref={contentRef}
          className="mx-auto w-full max-w-4xl text-center md:mx-0 md:text-left"
        >
          <p
            data-contact-hero-fade
            className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#7dd3fc] sm:text-xs"
          >
            Contact WBRS Industries
          </p>

          <p
            data-contact-hero-fade
            className="mt-5 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-white/45 sm:text-xs"
          >
            01 / Contact
          </p>

          <h1
            data-contact-hero-fade
            className="mt-4 max-w-4xl font-heading text-[clamp(3rem,6vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white drop-shadow-2xl"
          >
            Have a question?
            <br />
            <span className="text-white/85">Let&apos;s talk.</span>
          </h1>

          <p
            data-contact-hero-fade
            className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-200/85 sm:text-base sm:leading-7 md:mx-0 md:text-lg md:leading-8"
          >
            Whether you have a general enquiry or want to discuss a
            requirement, get in touch with the WBRS Industries team.
          </p>

          <button
            type="button"
            onClick={scrollToContact}
            data-contact-hero-fade
            className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#f05a18] px-5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#d94a12] sm:h-13 sm:px-6 sm:text-base"
          >
            Get in Touch
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default ContactHero;