import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { Container } from "../layout/Container";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#245a78] py-16 text-white sm:py-20 md:py-32 lg:py-36 xl:py-40">
      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
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

      {/* Corner marks */}
      <div
        aria-hidden="true"
        className="absolute right-8 top-8 hidden size-20 border-r border-t border-white/25 lg:block"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-8 hidden size-20 border-b border-l border-white/25 lg:block"
      />

      <Container className="relative z-10">
        {/* Main CTA */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center lg:gap-20 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-28">
          {/* Content */}
          <div className="max-w-4xl text-center lg:text-left">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-px w-8 bg-white/70" />

              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/75 sm:text-xs">
                Start a Project
              </p>
            </div>

            <p className="mt-7 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-white/50 sm:mt-8 sm:text-xs">
              08 / Enquiries
            </p>

            <h2
              data-gsap="fade-up"
              className="mt-4 max-w-4xl font-heading text-[clamp(2.6rem,5.5vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.05em]"
            >
              Have a transformer
              <br />
              tank requirement?
            </h2>

            <p
              data-gsap="fade-up"
              className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-base md:text-lg md:leading-8 lg:mx-0"
            >
              Share your drawings, specifications or project requirements
              with our team. We&apos;ll review the requirement and get back
              to you.
            </p>
          </div>

          {/* Actions */}
          <div className="mx-auto flex w-full max-w-sm flex-col gap-3 sm:max-w-md sm:flex-row lg:mx-0 lg:max-w-none lg:flex-col lg:gap-4">
            <Link
              href="/request-quote"
              className="group inline-flex h-14 w-full items-center justify-center gap-3 bg-white px-6 text-sm font-medium text-[#1b2429] transition-all duration-300 hover:bg-[#f1f3f2] xl:h-15"
            >
              Request a Quote

              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex h-14 w-full items-center justify-center gap-3 border border-white/30 px-6 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10 xl:h-15"
            >
              <Mail className="size-4" />

              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/15 pt-6 text-center text-[10px] uppercase tracking-[0.16em] text-white/50 sm:text-[11px] md:mt-16 md:flex-row md:justify-between md:text-left">
          <span>Transformer Tank Manufacturing</span>

          <span className="flex items-center gap-3">
            <span className="size-1.5 bg-white/50" />

            Jaipur, Rajasthan, India
          </span>
        </div>
      </Container>
    </section>
  );
}