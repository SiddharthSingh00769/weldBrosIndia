import { ArrowUpRight } from "lucide-react";

import { Container } from "../layout/Container";

const capabilities = [
  {
    number: "01",
    value: "500 kVA–5 MVA",
    label: "Manufacturing Range",
  },
  {
    number: "02",
    value: "OLTC",
    label: "Specialized Expertise",
  },
  {
    number: "03",
    value: "CUSTOM",
    label: "Fabrication Capability",
  },
  {
    number: "04",
    value: "JAIPUR",
    label: "Rajasthan, India",
  },
];

export function CapabilityStrip() {
  return (
    <section className="relative overflow-hidden bg-[#1b2429] text-[#f7f7f5]">
      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Section intro */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 py-8 text-center md:flex-row md:items-end md:py-12 md:text-left">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#7fa9bc]">
              Capability & Trust
            </p>

            <h2 className="mt-3 max-w-xl font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Built around the requirements behind every transformer.
            </h2>
          </div>

          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.15em] text-[#8e999d] md:justify-start">
            <span className="h-px w-8 bg-[#6f8791]" />
            <span>Engineering Capability</span>
          </div>
        </div>

        {/* Capability grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <div
              key={item.number}
              className={[
                "group relative px-3 py-7 text-center sm:py-10 lg:px-8 lg:py-12 lg:text-left",
                index % 2 === 1 ? "border-l border-white/10" : "",
                index >= 2 ? "border-t border-white/10 lg:border-t-0" : "",
                index !== 0 ? "lg:border-l" : "",
              ].join(" ")}
            >
                <div>
                {/* Number */}
                <p className="font-heading text-xs font-medium tracking-[0.15em] text-[#69777c]">
                  {item.number}
                </p>

                {/* Value */}
                <p className="mt-7 font-heading text-[clamp(1.45rem,2.4vw,2rem)] font-semibold leading-none tracking-[-0.025em] text-[#f2f3f1]">
                  {item.value}
                </p>

                {/* Label */}
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#8e999d]">
                  {item.label}
                </p>

                {/* Bottom indicator */}
                <div className="mt-6 flex items-center justify-center gap-2 lg:mt-8 lg:justify-start">
                  <span className="h-px w-7 bg-[#5e7d8b] transition-all duration-500 group-hover:w-12 group-hover:bg-[#9cc5d8]" />

                  <ArrowUpRight className="size-3 text-[#6f858e] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#9cc5d8]" />
                </div>
              </div>

              {/* Hover wash */}
              <div className="pointer-events-none absolute inset-0 -z-0 bg-white/[0.025] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
