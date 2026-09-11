import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";

export function ProductCTA() {
  return (
    <section className="bg-[#245a78] py-20 text-white md:py-28 lg:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              data-product-cta
              className="text-xs uppercase tracking-[0.2em] text-white/60"
            >
              Have a requirement?
            </p>

            <h2
              data-product-cta
              className="mt-4 max-w-3xl font-heading text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[0.94] tracking-[-0.05em]"
            >
              Let&apos;s build around your specification.
            </h2>
          </div>

          <Link
            href="/request-quote"
            data-product-cta
            className="group inline-flex h-14 shrink-0 items-center justify-center gap-3 bg-white px-7 text-sm font-medium text-[#1b2429] transition-colors duration-300 hover:bg-[#f1f3f2]"
          >
            Send Your Requirement

            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}