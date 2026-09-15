import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "../layout/Container";
import { ElectricityAnimation } from "../animations/ElectricityAnimation";

export function Hero() {
  return (
    <section className="group relative isolate flex min-h-[680px] items-end overflow-hidden bg-[#07111d] py-24 sm:min-h-[760px] sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-[-3%] -z-20 bg-cover bg-[62%_center] transition-transform duration-[14000ms] ease-out group-hover:scale-[1.04] motion-safe:animate-[hero-drift_18s_ease-in-out_infinite_alternate]"
        style={{ backgroundImage: "url('/images/transformer-hero-cinematic.png')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_44%,rgba(7,22,35,0.2),rgba(3,10,18,0.82)_78%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06111c]/92 via-[#06111c]/48 to-[#06111c]/10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#06111c]/30 via-transparent to-[#06111c]/90" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-30 mix-blend-screen motion-safe:animate-[light-sweep_9s_ease-in-out_infinite]" style={{ background: "linear-gradient(112deg, transparent 32%, rgba(125,211,252,0.18) 42%, transparent 52%)" }} />
      <ElectricityAnimation />

      <Container className="relative z-10 w-full">
        <div className="flex max-w-xl flex-col items-start text-left pb-2 sm:pb-4">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#7dd3fc]">
            Transformer Tank Manufacturing
          </p>
          <h1 className="mt-5 font-heading text-[clamp(2.6rem,7vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white drop-shadow-2xl">
            Transformer Tanks
            <br />
            <span className="text-white/90">Built to Your</span>
            <br />
            Specifications.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-200/90 md:text-lg md:leading-8">
            Complete transformer tanks and related components for 500 kVA to 5 MVA applications, with specialized expertise in OLTC transformer tanks.
          </p>

          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link href="/request-quote" className="group inline-flex h-13 items-center justify-center gap-2 rounded-md bg-[#f05a18] px-6 text-sm font-medium text-white shadow-[0_0_28px_rgba(240,90,24,0.28)] transition-colors duration-300 hover:bg-[#ff6b27] sm:text-base">
              Request a Quote
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link href="/products" className="group inline-flex h-13 items-center justify-center gap-2 rounded-md border border-white/35 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/60 hover:bg-white/20 sm:text-base">
              Explore Products
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid w-full max-w-xl grid-cols-3 border-t border-white/20 pt-5 text-left sm:mt-16 sm:pt-6">
            <div className="min-w-0 pr-3 sm:pr-5">
              <p className="font-heading text-sm font-semibold text-white sm:text-lg">500 kVA–5 MVA</p>
              <p className="mt-1.5 text-[9px] font-medium uppercase leading-4 tracking-[0.1em] text-slate-300 sm:text-xs">Manufacturing Range</p>
            </div>
            <div className="min-w-0 border-l border-white/20 px-3 sm:px-5">
              <p className="font-heading text-sm font-semibold text-white sm:text-lg">OLTC</p>
              <p className="mt-1.5 text-[9px] font-medium uppercase leading-4 tracking-[0.1em] text-slate-300 sm:text-xs">Key Specialization</p>
            </div>
            <div className="min-w-0 border-l border-white/20 pl-3 sm:pl-5">
              <p className="font-heading text-sm font-semibold text-white sm:text-lg">Jaipur</p>
              <p className="mt-1.5 text-[9px] font-medium uppercase leading-4 tracking-[0.1em] text-slate-300 sm:text-xs">Rajasthan, India</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
