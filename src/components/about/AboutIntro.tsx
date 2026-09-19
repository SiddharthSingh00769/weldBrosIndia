"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Quote } from "lucide-react";

import { Container } from "@/components/layout/Container";

const stats = [
  {
    target: 2021,
    label: "Established",
    suffix: "",
    format: "year",
  },
  {
    target: 300,
    label: "Projects Completed",
    suffix: "+",
    format: "number",
  },
  {
    target: 5,
    label: "Manufacturing Range",
    prefix: "500 kVA–",
    suffix: " MVA",
    format: "number",
  },
  {
    target: 2,
    label: "Manufacturing Locations",
    suffix: "",
    format: "number",
  },
];

const testimonials = [
  {
    id: "client-01",
    image: "/images/about/sudarshan.png",
    quote:
      "The small transformer tanks, power transformers, and On-Load Tap Changers (OLTC) deliver exceptional build quality, robust thermal efficiency, and precise voltage regulation, ensuring seamless operation, maximum durability, and long-term reliability under heavy electrical loads.",
    company: "Sudarshan Transformers",
  },
  {
    id: "client-02",
    image: "/images/about/united.png",
    quote:
      "The On-Load Tap Changer (OLTC) offers exceptional precision and seamless voltage regulation, delivering reliable switching performance, minimal downtime, and long-term durability under demanding operating conditions.",
    company: "United Transformers",
  },
  {
    id: "client-03",
    image: "/images/about/hd.webp",
    quote:
      "Engineered to high standards, the combination of small transformer tanks, power transformers, and On-Load Tap Changers (OLTC) provides outstanding structural integrity, top-tier energy transmission, and effortless voltage control, resulting in superior grid performance and extended service life.",
    company: "HD Transformers",
  },
];

export function AboutIntro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Section Fade-Up Animation */
      const items = sectionRef.current?.querySelectorAll(
        "[data-intro-fade]",
      );

      if (items?.length) {
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
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              once: true,
            },
          },
        );
      }

      /* Animated Statistics */
      const statNumbers =
        sectionRef.current?.querySelectorAll<HTMLElement>(
          "[data-stat-number]",
        );

      if (!statNumbers?.length) return;

      statNumbers.forEach((element) => {
        const target = Number(element.dataset.target);
        const format = element.dataset.format;

        if (!Number.isFinite(target)) return;

        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            const value = Math.round(counter.value);

            if (format === "year") {
              // Years should never use thousands separators.
              element.textContent = String(value);
            } else {
              element.textContent = value.toLocaleString();
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-intro"
      className="overflow-hidden bg-[#f7f8f9] py-24 md:py-32 lg:py-40"
    >
      <Container>
        {/* Company Story */}
        <div className="grid gap-10 border-b border-[#dde2e6] pb-16 md:gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:pb-20">
          <div data-intro-fade className="text-center lg:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#075a9c]">
              Our Story
            </p>

            <p className="mt-4 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d]">
              02 / Company
            </p>
          </div>

          <div data-intro-fade className="text-center lg:text-left">
            <h2 className="mx-auto max-w-4xl font-heading text-[clamp(2.3rem,4.5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#17212b] lg:mx-0">
              Experience that shapes every requirement.
            </h2>

            <div className="mt-7 max-w-3xl space-y-5 text-base leading-7 text-[#5f6b75] md:text-lg md:leading-8">
              <p>
                WBRS Industries is a transformer tank and fabricated component
                manufacturing company based in Jaipur, Rajasthan.
              </p>

              <p>
                Established{" "}
                <strong className="font-semibold text-[#17212b]">
                  2021
                </strong>
                , the company has developed its manufacturing focus around
                transformer tanks and related fabricated components for
                customer-specific requirements.
              </p>

              <p>
                Our approach is centered on understanding the required
                configuration and producing fabricated solutions around the
                applicable drawings, dimensions and specifications.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid border-b border-[#dde2e6] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              data-intro-fade
              className={`px-5 py-8 text-center sm:px-6 lg:py-10 ${
                index > 0
                  ? "border-t border-[#dde2e6] sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <p className="font-heading text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-none tracking-[-0.04em] text-[#17212b]">
                {stat.prefix}

                <span
                  data-stat-number
                  data-target={stat.target}
                  data-format={stat.format}
                >
                  0
                </span>

                {stat.suffix}
              </p>

              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="pt-20 md:pt-28 lg:pt-32">
          <div data-intro-fade className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#075a9c]">
              Client Experiences
            </p>

            <h2 className="mt-4 font-heading text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1] tracking-[-0.04em] text-[#17212b]">
              Trusted through the work.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5f6b75]">
              Hear directly from the organizations we work with.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                data-intro-fade
                className="group overflow-hidden border border-[#dde2e6] bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#eef1f3]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.company}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101c2c]/60 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <p className="text-xs font-medium text-white">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <Quote className="size-5 text-[#f05a18]" />

                  <blockquote className="mt-5 text-base leading-7 text-[#5f6b75]">
                    “{testimonial.quote}”
                  </blockquote>

                  <div className="mt-6 border-t border-[#dde2e6] pt-5">
                    <p className="font-heading text-sm font-semibold text-[#17212b]">
                      {testimonial.company}
                    </p>

                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#7b858d]">
                      Client
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutIntro;