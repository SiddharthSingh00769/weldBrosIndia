import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

import { Container } from "./Container";

const navigation = [
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Applications", href: "/applications" },
  { label: "Quality", href: "/quality" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#101c2c] text-white">
      <Container>
        {/* Main footer */}
        <div className="grid gap-14 border-b border-white/10 py-16 md:py-20 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-20 lg:py-24">
          {/* Brand */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
            <Link
              href="/"
              aria-label="WBRS Industries home"
              className="inline-flex items-center"
            >
              <Image
                src="/images/brand/lastLogo.png"
                alt="WBRS Industries"
                width={725}
                height={479}
                className="h-16 w-auto"
              />
            </Link>

            <p className="mx-auto mt-7 max-w-sm text-sm leading-7 text-white/55 md:text-base lg:mx-0">
              Transformer tank manufacturing and fabricated components
              developed around application requirements, customer drawings
              and precision fabrication.
            </p>

            <Link
              href="/request-quote"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-white"
            >
              <span className="border-b border-white/30 pb-1 transition-colors group-hover:border-[#f05a18]">
                Request a Quote
              </span>

              <span className="flex size-9 items-center justify-center rounded-md border border-white/15 transition-all duration-300 group-hover:border-[#f05a18] group-hover:bg-[#f05a18]">
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
              Navigation
            </p>

            <nav className="mt-6 grid grid-cols-2 justify-items-center gap-x-4 gap-y-4 lg:justify-items-start lg:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white lg:justify-start"
                >
                  <span className="h-px w-0 bg-[#f05a18] transition-all duration-300 group-hover:w-3" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
              Contact
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#7b858d]" />

                <p className="text-sm leading-6 text-white/60">
                  Jaipur,
                  <br />
                  Rajasthan, India
                </p>
              </div>

              <a
                href="mailto:weldbrosindia@gmail.com"
                className="group flex items-center justify-center gap-3 text-sm text-white/60 transition-colors hover:text-white lg:justify-start"
              >
                <Mail className="size-4 shrink-0 text-[#7b858d]" />
                <span>weldbrosindia@gmail.com</span>
              </a>

              <a
                href="tel:+918955182334"
                className="group flex items-center justify-center gap-3 text-sm text-white/60 transition-colors hover:text-white lg:justify-start"
              >
                <Phone className="size-4 shrink-0 text-[#7b858d]" />
                <span>+91 8955182334</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="border-b border-white/10 py-12 md:py-16">
          <div className="mb-6 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
                Location
              </p>

              <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.02em] text-white">
                Jaipur, Rajasthan
              </h3>
            </div>

            <a
              href="https://maps.app.goo.gl/oj8MaSQFeUWpt1jK6"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-white"
            >
              Open in Google Maps
              <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-md border border-white/10 bg-[#172a3a]">
            <iframe
              src="https://www.google.com/maps?q=27.0054367,75.7908437&z=15&output=embed"
              title="WBRS Industries location in Jaipur, Rajasthan"
              className="h-[280px] w-full border-0 md:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Technical strip */}
        <div className="relative overflow-hidden border-b border-white/10 py-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="font-heading text-xs font-medium uppercase tracking-[0.18em] text-white/30">
              Transformer Components / Fabrication / Engineering
            </p>

            <p className="font-heading text-xs tracking-[0.14em] text-white/30">
              WB / 01
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-4 py-7 text-center text-[11px] text-white/30 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} WBRS Industries. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white/60"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white/60"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}