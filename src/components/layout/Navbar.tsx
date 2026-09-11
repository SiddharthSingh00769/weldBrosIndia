"use client";

import { navigation } from "@/data/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const darkNavbarRoutes = [
  "/products",
  "/manufacturing",
  "/about",
  "/request-quote",
];

export function Navbar() {
  const pathname = usePathname();

  const isDarkNavbar = darkNavbarRoutes.some(
    (route) =>
      pathname === route || pathname.startsWith(`${route}/`),
  );

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center px-5 sm:px-8 lg:h-24 lg:px-10 xl:px-12">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Weldbros India home"
          className="shrink-0"
        >
          <Image
            src="/images/brand/logo.svg"
            alt="Weldbros India"
            width={180}
            height={48}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="ml-auto hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "relative py-2 text-sm font-medium",
                "transition-colors duration-300",
                isDarkNavbar
                  ? "text-white/80 hover:text-white"
                  : "text-[#1b2429]/80 hover:text-[#245a78]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}

          {/* Request Quote */}
          <Link
            href="/request-quote"
            className={[
              "group inline-flex h-11 items-center justify-center gap-2",
              "rounded-md px-5 text-sm font-medium",
              "transition-all duration-300",
              isDarkNavbar
                ? "bg-white text-[#1b2429] hover:bg-[#eef0f0]"
                : "bg-[#245a78] text-white hover:bg-[#1b2429]",
            ].join(" ")}
          >
            Request a Quote

            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="ml-auto lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  className={[
                    "inline-flex size-10 items-center justify-center",
                    "rounded-md border backdrop-blur-md",
                    "transition-all duration-300",
                    isDarkNavbar
                      ? "border-white/25 bg-black/10 text-white hover:bg-white/10"
                      : "border-[#cbd0d1] bg-white/20 text-[#1b2429] hover:bg-black/5",
                  ].join(" ")}
                />
              }
            >
              <Menu className="size-5" />
              <span className="sr-only">
                Open navigation menu
              </span>
            </SheetTrigger>

            {/* Mobile Menu */}
            <SheetContent
              side="right"
              className="overflow-y-auto"
            >
              {/* Mobile Logo */}
              <div className="px-6 pb-5 pt-6 sm:px-7">
                <Link
                  href="/"
                  aria-label="Weldbros India home"
                  className="inline-flex"
                >
                  <Image
                    src="/images/brand/logo.svg"
                    alt="Weldbros India"
                    width={180}
                    height={48}
                    className="h-14 w-auto"
                  />
                </Link>
              </div>

              {/* Mobile Links */}
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col border-t border-border"
              >
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex min-h-14 items-center border-b border-border px-6 text-[15px] font-medium text-foreground transition-colors duration-200 hover:bg-muted hover:text-primary sm:px-7"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="px-6 pt-8 sm:px-7">
                <Link
                  href="/request-quote"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
                >
                  Request a Quote

                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}