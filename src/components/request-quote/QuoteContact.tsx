"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/layout/Container";

export function QuoteContact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(
        "[data-quote-contact]",
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
            start: "top 80%",
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
      className="bg-white py-24 md:py-32 lg:py-36"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
          <div
            data-quote-contact
            className="text-center lg:text-left"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#075a9c]">
              Prefer Direct Contact?
            </p>

            <p className="mt-4 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d]">
              04 / Contact
            </p>

            <h2 className="mx-auto mt-5 max-w-xl font-heading text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#17212b] lg:mx-0">
              Talk to our team directly.
            </h2>

            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-[#5f6b75] lg:mx-0">
              If you would rather discuss your requirement first, you can
              reach us directly.
            </p>
          </div>

          <div
            data-quote-contact
            className="grid border border-[#dde2e6] sm:grid-cols-3"
          >
            <ContactItem
              icon={<Phone className="size-4" />}
              label="Phone"
              value="+91 8955182334"
              href="tel:+918955182334"
            />

            <ContactItem
              icon={<Mail className="size-4" />}
              label="Email"
              value="weldbrosindia@gmail.com"
              href="mailto:weldbrosindia@gmail.com"
            />

            <ContactItem
              icon={<MapPin className="size-4" />}
              label="Location"
              value="Jaipur, Rajasthan"
              href="https://maps.app.goo.gl/oj8MaSQFeUWpt1jK6"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group border-b border-[#dde2e6] p-6 text-center transition-colors duration-300 hover:bg-[#f7f8f9] sm:border-b-0 sm:border-r sm:text-left sm:last:border-r-0"
    >
      <span className="mx-auto flex size-10 items-center justify-center rounded-md bg-[#eef1f3] text-[#075a9c] sm:mx-0">
        {icon}
      </span>

      <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d]">
        {label}
      </p>

      <p className="mt-2 break-words font-heading text-sm font-semibold text-[#17212b]">
        {value}
      </p>

      <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#075a9c]">
        Contact
        <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export default QuoteContact;