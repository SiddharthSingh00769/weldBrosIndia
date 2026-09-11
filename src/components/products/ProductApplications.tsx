import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    title: "Power & Distribution",
    description:
      "Transformer tank fabrication supporting power and distribution transformer applications.",
  },
  {
    number: "02",
    title: "Industrial",
    description:
      "Fabricated transformer components developed for industrial requirements.",
  },
  {
    number: "03",
    title: "Specialized Applications",
    description:
      "Customer-specific fabrication for applications with defined dimensional and technical requirements.",
  },
];

export function ProductApplications() {
  return (
    <section className="bg-white py-24 md:py-32 lg:py-40">
      <Container>
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#245a78]">
            Applications
          </p>

          <h2 className="mt-4 font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-[#172026]">
            Products designed around
            <br />
            the application.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#647078] md:text-lg md:leading-8">
            The right fabrication starts with understanding where the component
            will operate and what the transformer design requires.
          </p>
        </div>

        {/* Rows */}
        <div className="mt-14 border-t border-[#dde1e2]">
          {applications.map((application) => (
            <div
              key={application.number}
              data-product-application
              className="group grid gap-5 border-b border-[#dde1e2] py-7 transition-colors duration-300 hover:bg-[#f7f7f5] md:grid-cols-[80px_0.8fr_1fr_40px] md:items-center md:px-5"
            >
              <span className="font-heading text-xs font-semibold text-[#8f9190]">
                {application.number}
              </span>

              <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-[#172026]">
                {application.title}
              </h3>

              <p className="max-w-xl text-sm leading-6 text-[#647078]">
                {application.description}
              </p>

              <ArrowUpRight className="hidden size-4 text-[#245a78] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:block" />
            </div>
          ))}
        </div>

        <Link
          href="/applications"
          className="group mt-9 inline-flex items-center gap-3 text-sm font-medium text-[#172026]"
        >
          <span className="border-b border-[#172026] pb-1">
            Explore applications
          </span>

          <span className="flex size-9 items-center justify-center border border-[#cbd0d1] transition-all duration-300 group-hover:border-[#245a78] group-hover:bg-[#245a78] group-hover:text-white">
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </Container>
    </section>
  );
}