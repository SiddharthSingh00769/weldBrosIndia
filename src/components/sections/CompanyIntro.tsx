import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Container } from "../layout/Container";

const capabilities = [
  "Transformer tank fabrication",
  "OLTC transformer tank expertise",
  "Customer-specific fabrication",
  "Drawing-based manufacturing",
];

export function CompanyIntro() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] max-md:bg-[#f0f4f5] py-16 sm:py-20 md:py-32 lg:py-40">
      {/* Subtle technical background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[42%] opacity-40 sm:block"
      >
        <div className="absolute right-0 top-0 h-full w-px bg-[#dde1e2]" />

        <div className="absolute right-[12%] top-0 h-full w-px bg-[#e5e7e7]" />

        <div className="absolute right-[24%] top-0 h-full w-px bg-[#e5e7e7]" />

        <div className="absolute right-[36%] top-0 h-full w-px bg-[#e5e7e7]" />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-10 sm:gap-12 md:gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Left */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              <span className="h-px w-6 bg-primary sm:w-8" />

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.2em]">
                Who We Are
              </p>
            </div>

            <p className="mt-5 font-heading text-[10px] font-medium uppercase tracking-[0.12em] text-[#8f9190] sm:mt-8 sm:text-sm sm:tracking-[0.14em]">
              01 / Engineering & Fabrication
            </p>
          </div>

          {/* Right */}
          <div className="mx-auto w-full max-w-4xl text-center lg:mx-0 lg:text-left">
            <h2
              data-gsap="fade-up"
              className="max-w-4xl font-heading text-[clamp(2rem,8vw,3.85rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#172026]"
            >
              Engineering transformer tanks around your requirements.
            </h2>

            <p
              data-gsap="fade-up"
              className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#647078] sm:mt-8 sm:text-base sm:leading-7 md:text-xl md:leading-8 lg:mx-0"
            >
              We manufacture transformer tanks and related fabricated
              components for power and industrial applications, with a focus
              on precision fabrication, application-specific requirements,
              and customer drawings.
            </p>

            {/* Capabilities */}
            <div
              data-gsap-group
              className="mt-8 grid grid-cols-1 gap-2 sm:mt-10 sm:grid-cols-2 sm:gap-3 lg:mt-12 lg:gap-0 lg:border-t lg:border-[#d9ddde]"
            >
              {capabilities.map((capability, index) => (
                <div
                  data-gsap-item
                  key={capability}
                  className="group flex min-h-0 items-center gap-3 border border-[#d9ddde] bg-white/70 px-4 py-3.5 text-left transition-colors duration-300 hover:border-[#9db9c7] hover:bg-[#edf3f5] sm:px-4 sm:py-4 lg:min-h-0 lg:border-x-0 lg:border-t-0 lg:bg-transparent lg:px-0 lg:py-5 lg:pr-8"
                >
                  {/* Number */}
                  <span className="w-5 shrink-0 font-heading text-[10px] font-semibold text-[#8f9190] sm:text-xs">
                    0{index + 1}
                  </span>

                  {/* Check */}
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e5eff3] sm:size-7 lg:size-auto lg:bg-transparent">
                    <Check className="size-3.5 text-primary sm:size-4" />
                  </span>

                  {/* Text */}
                  <span className="text-xs font-medium leading-5 text-[#2c373e] sm:text-sm">
                    {capability}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#172026] sm:mt-10"
            >
              <span className="border-b border-[#172026] pb-1">
                More about the company
              </span>

              <span className="flex size-9 items-center justify-center border border-[#cbd0d1] transition-all duration-300 group-hover:border-[#245a78] group-hover:bg-[#245a78] group-hover:text-white">
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}