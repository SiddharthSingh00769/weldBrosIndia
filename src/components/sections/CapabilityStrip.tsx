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
    <section className="relative overflow-hidden bg-[#101c2c] text-white">
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

      {/* Subtle brand-blue wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-[35%] bg-[#075a9c]/[0.06]"
      />

      <Container className="relative z-10">
        {/* Section intro */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 py-8 text-center md:flex-row md:items-end md:py-12 md:text-left">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#7bafcf]">
              Capability & Trust
            </p>

            <h2 className="mt-3 max-w-xl font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Built around the requirements behind every transformer.
            </h2>
          </div>

          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.15em] text-white/45 md:justify-start">
            <span className="h-px w-8 bg-[#7b858d]" />
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
              <div className="relative z-10">
                {/* Number */}
                <p className="font-heading text-xs font-medium tracking-[0.15em] text-white/30">
                  {item.number}
                </p>

                {/* Value */}
                <p className="mt-7 font-heading text-[clamp(1.45rem,2.4vw,2rem)] font-semibold leading-none tracking-[-0.025em] text-white">
                  {item.value}
                </p>

                {/* Label */}
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
                  {item.label}
                </p>

                {/* Bottom indicator */}
                <div className="mt-6 flex items-center justify-center gap-2 lg:mt-8 lg:justify-start">
                  <span className="h-px w-7 bg-[#075a9c] transition-all duration-500 group-hover:w-12 group-hover:bg-[#f05a18]" />

                  <ArrowUpRight className="size-3 text-white/40 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f05a18]" />
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