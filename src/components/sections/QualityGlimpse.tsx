import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "../layout/Container";

const qualityPoints = [
  {
    number: "01",
    title: "Drawing Review",
  },
  {
    number: "02",
    title: "Fabrication Control",
  },
  {
    number: "03",
    title: "Final Inspection",
  },
];

export function QualityGlimpse() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-16 md:py-32 lg:py-40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-24">
          {/* Image */}
          <div className="relative">
            <div data-gsap-image className="group relative aspect-[4/3] overflow-hidden bg-[#2c373e]">
              <Image
                src="/images/quality/inspection.png"
                alt="Quality inspection of a transformer tank"
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172026]/45 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute inset-x-6 bottom-6 text-center sm:inset-x-auto sm:bottom-7 sm:left-7 sm:text-left">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
                  Quality & Engineering
                </p>

                <p className="mt-1 text-sm font-medium text-white sm:text-base">
                  Inspection & Control
                </p>
              </div>
            </div>

            {/* Technical corner */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 hidden size-24 border-b border-l border-[#8f9190] md:block"
            />

            {/* Section number */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 flex size-14 items-center justify-center bg-[#1b2429] text-[10px] font-medium tracking-[0.15em] text-white"
            >
              07
            </div>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-px w-8 bg-[#245a78]" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#245a78]">
                Quality & Engineering
              </p>
            </div>

            <p className="mt-8 font-heading text-xs font-medium uppercase tracking-[0.16em] text-[#8f9190]">
              07 / Quality
            </p>

            <h2 data-gsap="fade-up" className="mt-4 font-heading text-[clamp(2.25rem,4.75vw,4rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#172026]">
              Precision is built
              <br />
              into the process.
            </h2>

            <p className="mx-auto mt-7 max-w-lg text-base leading-7 text-[#647078] md:text-lg md:leading-8 lg:mx-0">
              Quality begins with understanding the requirement and continues
              through fabrication, assembly and final inspection.
            </p>

            {/* Quality points */}
            <div data-gsap-group className="mt-8 grid grid-cols-3 gap-2 lg:mt-10 lg:block lg:border-t lg:border-[#d9ddde]">
              {qualityPoints.map((point) => (
                <div
                  data-gsap-item
                  key={point.number}
                  className="flex min-h-24 flex-col items-center justify-center gap-2 border border-[#d9ddde] bg-white/60 px-2 py-3 text-center lg:min-h-0 lg:flex-row lg:justify-start lg:border-x-0 lg:border-t-0 lg:bg-transparent lg:px-0 lg:py-4 lg:text-left"
                >
                  <span className="font-heading text-[10px] font-medium tracking-[0.16em] text-[#8f9190]">
                    {point.number}
                  </span>

                  <span className="text-xs font-medium leading-4 text-[#2c373e] lg:text-sm lg:leading-normal">
                    {point.title}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/quality"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-medium text-[#172026]"
            >
              <span className="border-b border-[#172026] pb-1">
                Explore Quality
              </span>

              <span className="flex size-10 items-center justify-center border border-[#cbd0d1] transition-all duration-300 group-hover:border-[#245a78] group-hover:bg-[#245a78] group-hover:text-white">
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
