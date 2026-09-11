import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

import { Container } from "../layout/Container";

const applications = [
  {
    number: "01",
    title: "Power & Distribution",
    description:
      "Transformer tank solutions for power and distribution applications.",
    image: "/images/applications/power-distribution.jpg",
  },
  {
    number: "02",
    title: "Industrial",
    description:
      "Fabricated transformer enclosures for demanding industrial requirements.",
    image: "/images/applications/industrial.jpg",
  },
  {
    number: "03",
    title: "Specialized Applications",
    description:
      "Application-specific fabrication developed around customer requirements.",
    image: "/images/applications/specialized.jpg",
  },
];

export function ApplicationsGlimpse() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-32 lg:py-40">
      <Container>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-px w-8 bg-[#245a78]" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#245a78]">
                Applications
              </p>
            </div>

            <p className="mt-7 font-heading text-xs font-medium uppercase tracking-[0.16em] text-[#8f9190]">
              05 / Where We Fit
            </p>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="mx-auto max-w-3xl font-heading text-[clamp(2.5rem,5vw,4.25rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#172026] lg:mx-0">
              Built for the applications that power industry.
            </h2>

            <div className="mt-7 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end md:text-left">
              <p className="max-w-xl text-base leading-7 text-[#647078] md:text-lg md:leading-8">
                Fabrication capabilities designed around the requirements of
                transformer applications across power, distribution and
                industry.
              </p>

              <Link
                href="/applications"
                className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-[#172026]"
              >
                <span className="border-b border-[#172026] pb-1">
                  Explore Applications
                </span>

                <span className="flex size-10 items-center justify-center border border-[#cbd0d1] transition-all duration-300 group-hover:border-[#245a78] group-hover:bg-[#245a78] group-hover:text-white">
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Application list */}
        <div data-gsap-group className="mt-16 border-t border-[#d9ddde] md:mt-20">
          {applications.map((application) => (
            <Link
              data-gsap-item
              key={application.number}
              href="/applications"
              className="group relative grid gap-5 border-b border-[#d9ddde] py-7 text-center md:grid-cols-[70px_1fr_280px_80px] md:items-center md:py-8 md:text-left lg:grid-cols-[80px_1fr_360px_80px]"
            >
              {/* Number */}
              <div>
                <span className="font-heading text-xs font-medium tracking-[0.16em] text-[#8f9190]">
                  {application.number}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="font-heading text-2xl font-semibold tracking-[-0.025em] text-[#172026] transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                  {application.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mx-auto max-w-sm text-sm leading-6 text-[#647078] md:mx-0">
                {application.description}
              </p>

              {/* Arrow */}
              <div className="mx-auto flex size-11 items-center justify-center border border-[#d9ddde] transition-all duration-500 group-hover:border-[#245a78] group-hover:bg-[#245a78] group-hover:text-white md:mx-0">
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              {/* Hover image */}
              <div className="pointer-events-none absolute bottom-full left-[18%] z-20 hidden w-[280px] translate-y-5 overflow-hidden bg-[#2c373e] opacity-0 shadow-2xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 lg:block">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={application.image}
                    alt=""
                    fill
                    sizes="280px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#172026]/20" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex items-center justify-center gap-4 text-center text-xs uppercase tracking-[0.16em] text-[#8f9190] lg:justify-start lg:text-left">
          <Plus className="size-3" />
          <span>Application-specific fabrication</span>
        </div>
      </Container>
    </section>
  );
}
