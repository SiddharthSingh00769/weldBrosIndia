"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/layout/Container";

const steps = [
  {
    number: "01",
    title: "Requirement Review",
    description:
      "We review the information, drawings and specifications provided with your enquiry.",
  },
  {
    number: "02",
    title: "Technical Discussion",
    description:
      "Where required, our team discusses the configuration and technical details with you.",
  },
  {
    number: "03",
    title: "Quotation",
    description:
      "We prepare a response based on the requirement and agreed specifications.",
  },
];

export function QuoteProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(
        "[data-quote-process]",
      );

      if (!items?.length) return;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#101c2c] py-24 text-white md:py-32 lg:py-36"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div
            data-quote-process
            className="text-center lg:text-left"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7dd3fc]">
              What Happens Next
            </p>

            <p className="mt-4 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
              03 / Process
            </p>

            <h2 className="mx-auto mt-5 max-w-xl font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.045em] lg:mx-0">
              From enquiry to quotation.
            </h2>
          </div>

          <div className="border-t border-white/10">
            {steps.map((step) => (
              <div
                key={step.number}
                data-quote-process
                className="grid gap-4 border-b border-white/10 py-7 text-center md:grid-cols-[70px_0.7fr_1.3fr] md:items-start md:gap-8 md:text-left"
              >
                <span className="font-heading text-xs font-medium tracking-[0.16em] text-[#f05a18]">
                  {step.number}
                </span>

                <h3 className="font-heading text-lg font-semibold tracking-[-0.025em]">
                  {step.title}
                </h3>

                <p className="text-sm leading-6 text-white/55">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default QuoteProcess;