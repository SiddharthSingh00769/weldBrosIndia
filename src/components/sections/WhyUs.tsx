import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

import { Container } from "../layout/Container";

const reasons = [
  {
    number: "01",
    title: "Built to Drawing",
    description:
      "Fabrication aligned with customer drawings, dimensions and application requirements.",
  },
  {
    number: "02",
    title: "Fabrication Expertise",
    description:
      "Focused experience in welded transformer tank and fabricated component assemblies.",
  },
  {
    number: "03",
    title: "Application Focused",
    description:
      "Manufacturing approach shaped around the requirements of each transformer application.",
  },
  {
    number: "04",
    title: "Quality Driven",
    description:
      "Attention to fabrication quality, dimensional accuracy and finished assembly.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-[#1b2429] py-16 text-[#f7f7f5] md:py-32 lg:py-40">
      {/* Background technical geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-[45%] opacity-20"
      >
        <div className="absolute right-[15%] top-0 h-full w-px bg-[#879297]" />

        <div className="absolute right-[30%] top-0 h-full w-px bg-[#879297]" />

        <div className="absolute right-[45%] top-0 h-full w-px bg-[#879297]" />

        <div className="absolute right-0 top-[25%] h-px w-full bg-[#879297]" />

        <div className="absolute right-0 top-[50%] h-px w-full bg-[#879297]" />

        <div className="absolute right-0 top-[75%] h-px w-full bg-[#879297]" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-px w-8 bg-[#8eb8ca]" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8eb8ca]">
                Why Us
              </p>
            </div>

            <p className="mt-8 font-heading text-xs font-medium uppercase tracking-[0.16em] text-[#68757a]">
              06 / Our Approach
            </p>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="mx-auto max-w-3xl font-heading text-[clamp(2.25rem,4.75vw,4.25rem)] font-semibold leading-[0.96] tracking-[-0.045em] lg:mx-0">
              Built around the details that matter.
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#a9b0b3] md:text-lg md:leading-8 lg:mx-0">
              A focused approach to transformer tank fabrication, from
              understanding the requirement to delivering the finished
              assembly.
            </p>
          </div>
        </div>

        {/* Reasons */}
        <div data-gsap-group className="mt-12 grid grid-cols-2 gap-3 md:mt-20 md:block md:border-t md:border-white/10">
          {reasons.map((reason) => (
            <div
              data-gsap-item
              key={reason.number}
              className="group grid min-h-52 content-start gap-3 border border-white/10 bg-white/[0.035] p-4 text-left transition-colors duration-300 hover:bg-white/[0.07] md:min-h-0 md:grid-cols-[80px_1fr_1fr] md:gap-5 md:border-x-0 md:border-t-0 md:bg-transparent md:px-0 md:py-10"
            >
              {/* Number */}
              <div>
                <span className="font-heading text-xs font-medium tracking-[0.16em] text-[#657277]">
                  {reason.number}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="font-heading text-lg font-semibold leading-[1.04] tracking-[-0.025em] text-[#f1f2f0] transition-transform duration-500 group-hover:translate-x-1 md:text-3xl md:group-hover:translate-x-2">
                  {reason.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex items-start justify-between gap-8">
                <p className="max-w-md text-[12px] leading-5 text-[#929da1] md:text-base md:leading-7">
                  {reason.description}
                </p>

                <div className="hidden size-10 shrink-0 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-[#8eb8ca] group-hover:bg-[#8eb8ca] group-hover:text-[#172026] sm:flex">
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#69767b]">
            <Plus className="size-3" />
            <span>Precision / Reliability / Partnership</span>
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-3 text-sm font-medium text-[#f1f2f0]"
          >
            <span className="border-b border-white/50 pb-1 transition-colors group-hover:border-white">
              Learn more about us
            </span>

            <span className="flex size-9 items-center justify-center border border-white/15 transition-all duration-300 group-hover:border-[#8eb8ca] group-hover:bg-[#8eb8ca] group-hover:text-[#172026]">
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
