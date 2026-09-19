"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import { Container } from "@/components/layout/Container";

const processes = [
  {
    number: "01",
    title: "Sheet Cutting",
    description:
      "Sheet Cutting is the first step in manufacturing transformer tanks, where large metal plates are sliced into precise sizes using heavy cutting machinery. This prepares the flat steel pieces needed to build the outer walls, frame, and covers of the transformer enclosures.",
    image: "/images/manufacturing/sheetCutting.png",
    images: ["/images/manufacturing/sheetCutting.png", "/images/manufacturing/sheetCutting1.png"]
  },
  {
    number: "02",
    title: "Power Press",
    description:
      "Power Press is a heavy manufacturing process where industrial press machines use high force to bend, punch, or shape the cut metal sheets. It creates exact holes, curves, and structural forms needed for assembling transformer tank components like brackets, covers, and panels.",
    image: "/images/manufacturing/powerPress.png",

  },
  {
    number: "03",
    title: "Bending and Folding",
    description:
      "Bending and Folding is the step where flat metal sheets are shaped into precise angles and sides using heavy bending machines. This transforms flat steel into the 3D walls, corners, and structural panels needed to assemble the transformer tank.",
    image: "/images/manufacturing/Bending.png",
  },
  {
    number: "04",
    title: "Welding",
    description:
      "**Welding** is the stage where skilled workers permanently join the bent steel plates, frames, and fittings together using intense heat. This creates a strong, leak-proof structure that ensures the transformer tank can safely hold insulating oil without any spills or cracks.",
    image: "/images/manufacturing/welding1.png",
    images: ["/images/manufacturing/welding1.png", "/images/manufacturing/welding2.png"],
  },
  {
    number: "05",
    title: "Assembling",
    description:
      "**Assembling** is the stage where all individual parts—including welded walls, flanges, frames, and fittings—are brought together and fitted into place. Technicians align and attach each component to build the complete, final structure of the transformer tank before it undergoes testing and finishing.",
    image: "/images/manufacturing/assembling.png",
    images: ["/images/manufacturing/assembling.png", "/images/manufacturing/assembling1.png"]
  },
  {
    number: "06",
    title: "Grinding",
    description:
      "**Grinding** is the finishing stage where workers use power tools to smooth down rough weld seams, sharp edges, and metal burrs on the assembled tank. This cleans up the steel surface so it is completely smooth and safe to handle, while preparing the metal for painting and protective coating.",
    image: "/images/manufacturing/grinding.png",
  },
  {
    number: "07",
    title: "Drilling",
    description:
      "**Drilling** is the machining step where industrial drill presses create precise holes in metal plates, flanges, and frames. These accurate holes are essential for inserting bolts, securing accessories, and connecting external components to the transformer tank.",
    image: "/images/manufacturing/drilling.png",
  },
  {
    number: "08",
    title: "Finishing",
    description:
      "This finishing process involves meticulous surface grinding and weld cleaning on the transformer tank frame. By smoothing out weld seams, removing spatter, and preparing the metal surface, it ensures high structural integrity, prevents corrosion, and guarantees a clean, leak-proof seal before final coating.",
    image: "/images/manufacturing/finishing.png",
  },
];

interface ProcessCardProps {
  process: (typeof processes)[number];
}

function ProcessCard({ process }: ProcessCardProps) {
  const images =
    process.images && process.images.length > 0
      ? process.images
      : [process.image];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <article
      data-process-card
      className="group relative overflow-hidden border border-[#dde2e6] bg-[#172a3a]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Image Stack */}
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`${process.title} manufacturing process at WBRS Industries`}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Default Gradient */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#101c2c]/90 via-[#101c2c]/20 to-transparent" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 z-[1] bg-[#101c2c]/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Number */}
        <div className="absolute left-5 top-5 z-10">
          <span className="font-heading text-xs font-medium tracking-[0.16em] text-white/70">
            {process.number}
          </span>
        </div>

        {/* Technical Corner */}
        <div
          aria-hidden="true"
          className="absolute right-5 top-5 z-10 size-10 border-r border-t border-white/30 transition-all duration-500 group-hover:size-14 group-hover:border-[#f05a18]"
        />

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-5 right-5 z-10 flex items-center gap-1.5 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-1 transition-all duration-500 ${
                  activeImage === index
                    ? "w-5 bg-[#f05a18]"
                    : "w-1 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Default Title */}
        <div className="absolute inset-x-5 bottom-5 z-10 text-center transition-all duration-500 group-hover:opacity-0 md:text-left">
          <div className="mx-auto mb-3 h-px w-8 bg-[#f05a18] md:mx-0" />

          <h3 className="font-heading text-[clamp(1.35rem,2vw,1.7rem)] font-semibold leading-none tracking-[-0.03em] text-white">
            {process.title}
          </h3>
        </div>

        {/* Desktop Hover Content */}
        <div className="absolute inset-x-5 bottom-5 z-20 hidden translate-y-5 text-left opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:block">
          <div className="mb-4 h-px w-12 bg-[#f05a18]" />

          <h3 className="font-heading text-xl font-semibold tracking-[-0.025em] text-white">
            {process.title}
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
            {process.description}
          </p>
        </div>
      </div>

      {/* Mobile Description */}
      <div className="border-t border-white/10 bg-[#101c2c] px-5 py-5 text-center md:hidden">
        <p className="text-sm leading-6 text-white/65">
          {process.description}
        </p>
      </div>
    </article>
  );
}

export function ManufacturingProcess() {
  useEffect(() => {
    const cards = document.querySelectorAll("[data-process-card]");

    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 88%",
            once: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manufacturing-process"
      className="bg-[#f7f8f9] py-24 md:py-32 lg:py-40"
    >
      <Container>
        {/* Section Heading */}
        <div className="grid gap-8 border-b border-[#dde2e6] pb-10 text-center md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:pb-14 md:text-left">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#075a9c]">
              Manufacturing Process
            </p>

            <p className="mt-4 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d]">
              02 / Process
            </p>
          </div>

          <div>
            <h2 className="mx-auto max-w-4xl font-heading text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#17212b] md:mx-0">
              Fabrication across every stage of production.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#5f6b75] md:mx-0 md:text-lg md:leading-8">
              A range of fabrication and finishing processes come together
              inside our facility to produce transformer tanks and related
              components around the required configuration.
            </p>
          </div>
        </div>

        {/* Process Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {processes.map((process) => (
            <ProcessCard key={process.number} process={process} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ManufacturingProcess;