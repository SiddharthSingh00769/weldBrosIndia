import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "../layout/Container";

export function ManufacturingGlimpse() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-16 md:py-32 lg:py-40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          {/* Content */}
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-px w-8 bg-[#245a78]" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#245a78]">
                Manufacturing
              </p>
            </div>

            <p className="mt-8 font-heading text-xs font-medium uppercase tracking-[0.16em] text-[#8f9190]">
              04 / Facility & Fabrication
            </p>

            <h2 data-gsap="fade-up" className="mt-4 font-heading text-[clamp(1.9rem,4.25vw,3.85rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#172026]">
              Fabrication built
              <br />
              around precision.
            </h2>

            <p data-gsap="fade-up" className="mx-auto mt-7 max-w-md text-base leading-7 text-[#647078] md:text-lg md:leading-8 lg:mx-0">
              From fabricated steel to finished transformer tanks, every
              assembly is built around the requirements of the application.
            </p>

            <Link
              href="/manufacturing"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-medium text-[#172026]"
            >
              <span className="border-b border-[#172026] pb-1">
                Explore Manufacturing
              </span>

              <span className="flex size-10 items-center justify-center border border-[#cbd0d1] transition-all duration-300 group-hover:border-[#245a78] group-hover:bg-[#245a78] group-hover:text-white">
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div data-gsap-image className="group relative aspect-[16/10] overflow-hidden bg-[#2c373e]">
              <Image
                src="/images/manufacturing/facility.png"
                alt="Transformer tank manufacturing facility"
                fill
                sizes="(max-width: 1023px) 100vw, 65vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
              />

              {/* Image contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172026]/55 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-center sm:inset-x-7 sm:bottom-7 sm:justify-between">
                <div className="w-full text-center sm:w-auto sm:text-left">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
                    Manufacturing Facility
                  </p>

                  <p className="mt-1 text-sm font-medium text-white sm:text-base">
                    Transformer Tank Fabrication
                  </p>
                </div>

                <div className="hidden size-10 items-center justify-center border border-white/30 text-white sm:flex">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>
            </div>

            {/* Technical corner */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 hidden size-24 border-b border-r border-[#8f9190] md:block"
            />

            {/* Image number */}
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-3 flex size-14 items-center justify-center bg-[#1b2429] text-[10px] font-medium tracking-[0.15em] text-white"
            >
              04
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
