import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "../layout/Container";
import { TransformerHeroAnimation } from "../animations/TransformerHeroAnimation";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f9] pt-24 pb-16 sm:pt-28 sm:pb-20 xl:min-h-[760px] xl:pt-28 xl:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] bg-[#eef1f3] xl:block"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:gap-54">
          {/* Content */}
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#075a9c]">
              Transformer Tank Manufacturing
            </p>

            <h1 className="mt-4 max-w-[720px] font-heading text-[clamp(2rem,4.75vw,3.75rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[#17212b]">
              Transformer Tanks
              <br />
              Built to Your
              <br />
              Specifications.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#5f6b75] md:text-lg md:leading-8">
              Complete transformer tanks and related components for
              500 kVA to 5 MVA applications, with specialized expertise
              in OLTC transformer tanks.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request-quote"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#f05a18] px-5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#d94a12] sm:h-14 sm:px-6 sm:text-base"
              >
                Request a Quote
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/products"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#dde2e6] bg-transparent px-5 text-sm font-medium text-[#17212b] transition-colors duration-300 hover:border-[#075a9c] hover:bg-[#eef1f3] sm:h-14 sm:px-6 sm:text-base"
              >
                Explore Products
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-9 grid grid-cols-3 border-t border-[#dde2e6] pt-5 sm:mt-11 sm:pt-6">
              {/* Manufacturing Range */}
              <div className="min-w-0 pr-3 sm:pr-5">
                <p className="font-heading text-sm font-semibold leading-tight tracking-[-0.02em] text-[#17212b] sm:text-lg">
                  500 kVA–5 MVA
                </p>

                <p className="mt-1.5 max-w-[90px] text-[9px] font-medium uppercase leading-4 tracking-[0.08em] text-[#5f6b75] sm:max-w-none sm:text-xs sm:tracking-[0.12em]">
                  Manufacturing Range
                </p>
              </div>

              {/* OLTC */}
              <div className="min-w-0 border-l border-[#dde2e6] px-3 sm:px-5">
                <p className="font-heading text-sm font-semibold leading-tight tracking-[-0.02em] text-[#17212b] sm:text-lg">
                  OLTC
                </p>

                <p className="mt-1.5 max-w-[90px] text-[9px] font-medium uppercase leading-4 tracking-[0.08em] text-[#5f6b75] sm:max-w-none sm:text-xs sm:tracking-[0.12em]">
                  Key Specialization
                </p>
              </div>

              {/* Location */}
              <div className="min-w-0 border-l border-[#dde2e6] pl-3 sm:pl-5">
                <p className="font-heading text-sm font-semibold leading-tight tracking-[-0.02em] text-[#17212b] sm:text-lg">
                  Jaipur
                </p>

                <p className="mt-1.5 max-w-[90px] text-[9px] font-medium uppercase leading-4 tracking-[0.08em] text-[#5f6b75] sm:max-w-none sm:text-xs sm:tracking-[0.12em]">
                  Rajasthan, India
                </p>
              </div>
            </div>
          </div>

          {/* Animated engineering visual */}
          <div className="relative w-full">
            <TransformerHeroAnimation />

            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 hidden size-24 border-b border-r border-[#7b858d] xl:block"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}