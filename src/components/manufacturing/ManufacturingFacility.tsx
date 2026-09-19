"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import gsap from "gsap";

import { Container } from "@/components/layout/Container";

export function ManufacturingFacility() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(
        "[data-facility-fade]",
      );

      if (!items) return;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-24 md:py-32 lg:py-40"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 xl:gap-28">
          {/* Image */}
          <div
            data-facility-fade
            className="relative aspect-[4/3] overflow-hidden bg-[#172a3a] lg:aspect-[1.08/1]"
          >
            <Image
              src="/images/manufacturing/manufacturingMain.png"
              alt="WBRS Industries manufacturing facility in Jaipur"
              fill
              sizes="(max-width: 1023px) 100vw, 52vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#101c2c]/45 via-transparent to-transparent"
            />

            {/* Image Location */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 md:bottom-7 lg:left-7 lg:translate-x-0">
              <MapPin className="size-4 shrink-0 text-[#f05a18]" />
              <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 sm:text-xs">
                Jaipur, Rajasthan
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <p
              data-facility-fade
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#075a9c]"
            >
              Facility
            </p>

            {/* Section Number */}
            <p
              data-facility-fade
              className="mt-4 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d] sm:text-xs"
            >
              03 / Manufacturing Facility
            </p>

            {/* Heading */}
            <h2
              data-facility-fade
              className="mx-auto mt-5 max-w-2xl font-heading text-[clamp(2.3rem,4.5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#17212b] lg:mx-0"
            >
              Manufacturing from Jaipur, Rajasthan.
            </h2>

            {/* Description */}
            <p
              data-facility-fade
              className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#5f6b75] md:text-lg md:leading-8 lg:mx-0"
            >
              Our manufacturing facility brings fabrication, welding,
              finishing and assembly activities together under one roof,
              supporting the production of transformer tanks and fabricated
              components around customer requirements.
            </p>

            {/* Location */}
            <div
              data-facility-fade
              className="mt-9 border-t border-[#dde2e6] pt-6"
            >
              <div className="flex items-center justify-center gap-4 lg:justify-start">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#eef1f3]">
                  <MapPin className="size-4 text-[#075a9c]" />
                </span>

                <div className="text-left">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d]">
                    Location
                  </p>

                  <p className="mt-1 font-heading text-sm font-semibold text-[#17212b]">
                    Harmada, Sikar Road Near Vishwakarma Industrial Area (VKI Area) Jaipur, Rajasthan – 302013, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ManufacturingFacility;