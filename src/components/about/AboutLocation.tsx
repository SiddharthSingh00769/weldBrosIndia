"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/layout/Container";

export function AboutLocation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(
        "[data-location-fade]",
      );

      if (!items?.length) return;

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
            data-location-fade
            className="relative aspect-[4/3] overflow-hidden bg-[#172a3a] lg:aspect-[1.08/1]"
          >
            <Image
              src="/images/about/about-location.jpg"
              alt="WBRS Industries facility in Jaipur, Rajasthan"
              fill
              sizes="(max-width: 1023px) 100vw, 52vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#101c2c]/60 via-transparent to-transparent"
            />

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 md:bottom-7 lg:left-7 lg:translate-x-0">
              <MapPin className="size-4 shrink-0 text-[#f05a18]" />

              <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 sm:text-xs">
                Jaipur, Rajasthan
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <p
              data-location-fade
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#075a9c]"
            >
              Location
            </p>

            <p
              data-location-fade
              className="mt-4 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d]"
            >
              04 / Jaipur
            </p>

            <h2
              data-location-fade
              className="mx-auto mt-5 max-w-2xl font-heading text-[clamp(2.3rem,4.5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#17212b] lg:mx-0"
            >
              From Jaipur, Rajasthan.
            </h2>

            <p
              data-location-fade
              className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#5f6b75] md:text-lg md:leading-8 lg:mx-0"
            >
              WBRS Industries is based in Jaipur, Rajasthan, with its
              manufacturing operations focused on transformer tanks and
              fabricated components.
            </p>

            {/* Address */}
            <div
              data-location-fade
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
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>

            {/* Map Link */}
            <div data-location-fade className="mt-7">
              <a
                href="https://maps.app.goo.gl/oj8MaSQFeUWpt1jK6"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#075a9c] transition-colors duration-300 hover:text-[#f05a18]"
              >
                View location on Google Maps
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutLocation;