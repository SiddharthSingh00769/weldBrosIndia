"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/layout/Container";

const priorities = [
  {
    number: "01",
    title: "Expand Capability",
    description:
      "Continue developing manufacturing capability around evolving customer and transformer requirements.",
  },
  {
    number: "02",
    title: "Build Long-Term Partnerships",
    description:
      "Grow through dependable relationships with customers, suppliers and industry partners.",
  },
  {
    number: "03",
    title: "Keep Moving Forward",
    description:
      "Build on existing experience while continuing to improve processes, products and execution.",
  },
];

export function AboutVision() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(
        "[data-vision-fade]",
      );

      if (!items?.length) return;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
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
      className="relative isolate overflow-hidden bg-[#101c2c] py-24 text-white md:py-32 lg:py-40"
    >
      {/* Technical Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Ambient Blue */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/2 size-[500px] -translate-y-1/2 rounded-full bg-[#075a9c]/10 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Label */}
          <div
            data-vision-fade
            className="text-center lg:text-left"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#7dd3fc]">
              Future Vision
            </p>

            <p className="mt-4 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
              03 / Looking Ahead
            </p>
          </div>

          {/* Main Content */}
          <div>
            <h2
              data-vision-fade
              className="max-w-4xl text-center font-heading text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.94] tracking-[-0.05em] lg:text-left"
            >
              Building the next chapter of WBRS Industries.
            </h2>

            <p
              data-vision-fade
              className="mx-auto mt-7 max-w-2xl text-center text-base leading-7 text-white/65 md:text-lg md:leading-8 lg:mx-0 lg:text-left"
            >
              Our vision is to continue growing with the transformer industry,
              strengthen our manufacturing capabilities and build lasting
              relationships through dependable execution.
            </p>

            {/* Priorities */}
            <div className="mt-12 border-t border-white/10">
              {priorities.map((priority) => (
                <div
                  key={priority.number}
                  data-vision-fade
                  className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[70px_0.7fr_1.3fr] md:items-start md:gap-8"
                >
                  <span className="font-heading text-xs font-medium tracking-[0.16em] text-[#f05a18]">
                    {priority.number}
                  </span>

                  <h3 className="text-center font-heading text-lg font-semibold tracking-[-0.025em] md:text-left">
                    {priority.title}
                  </h3>

                  <p className="text-center text-sm leading-6 text-white/55 md:text-left">
                    {priority.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutVision;