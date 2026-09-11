import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "./Container";
import Image from "next/image";

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
    <footer className="bg-[#172026] text-[#f7f7f5]">
      <Container>
        {/* Main footer */}
        <div className="grid gap-14 border-b border-white/10 py-16 md:py-20 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-20 lg:py-24">
          {/* Brand */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
            <Link href="/" className="inline-flex items-center">
                <Image
                    src="/images/brand/logo.svg"
                    alt="WeldBros India"
                    width={180}
                    height={48}
                    className="h-12 w-auto"
                />
            </Link>

            <p className="mx-auto mt-7 max-w-sm text-sm leading-7 text-[#9ca7aa] md:text-base lg:mx-0">
              Transformer tank manufacturing and fabricated components
              developed around application requirements, customer drawings
              and precision fabrication.
            </p>

            <Link
              href="/request-quote"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-white"
            >
              <span className="border-b border-white/40 pb-1 transition-colors group-hover:border-white">
                Request a Quote
              </span>

              <span className="flex size-9 items-center justify-center border border-white/15 transition-all duration-300 group-hover:border-[#8eb8ca] group-hover:bg-[#8eb8ca] group-hover:text-[#172026]">
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6f7c81]">
              Navigation
            </p>

            <nav className="mt-6 grid grid-cols-2 justify-items-center gap-x-4 gap-y-4 lg:justify-items-start lg:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-center gap-2 text-sm text-[#b4bdc0] transition-colors duration-300 hover:text-white lg:justify-start"
                >
                  <span className="h-px w-0 bg-[#8eb8ca] transition-all duration-300 group-hover:w-3" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6f7c81]">
              Contact
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#78909a]" />

                <p className="text-sm leading-6 text-[#b4bdc0]">
                  Jaipur,
                  <br />
                  Rajasthan, India
                </p>
              </div>

              <a
                href="mailto:info@yourcompany.com"
                className="group flex items-center justify-center gap-3 text-sm text-[#b4bdc0] transition-colors hover:text-white lg:justify-start"
              >
                <Mail className="size-4 shrink-0 text-[#78909a]" />
                <span>weldbrosindia@gmail.com</span>
              </a>

              <a
                href="tel:+910000000000"
                className="group flex items-center justify-center gap-3 text-sm text-[#b4bdc0] transition-colors hover:text-white lg:justify-start"
              >
                <Phone className="size-4 shrink-0 text-[#78909a]" />
                <span>+91 8955182334</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="border-b border-white/10 py-12 md:py-16">
        <div className="mb-6 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6f7c81]">
                Location
            </p>

            <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.02em] text-[#f7f7f5]">
                Jaipur, Rajasthan
            </h3>
            </div>

            <a
            href="https://maps.app.goo.gl/oj8MaSQFeUWpt1jK6"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#9ca7aa] transition-colors hover:text-white"
            >
            Open in Google Maps
            <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
        </div>

        <div className="relative overflow-hidden border border-white/10 bg-[#2c373e]">
            <iframe
            src="https://www.google.com/maps?q=27.0054367,75.7908437&z=15&output=embed"
            title="WeldBros India location in Jaipur, Rajasthan"
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
            <p className="font-heading text-xs font-medium uppercase tracking-[0.18em] text-[#69767b]">
              Transformer Components / Fabrication / Engineering
            </p>

            <p className="font-heading text-xs tracking-[0.14em] text-[#69767b]">
              WB / 01
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-4 py-7 text-center text-[11px] text-[#69767b] sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} WeldBros India. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#b4bdc0]"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#b4bdc0]"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}