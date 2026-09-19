import { CapabilityStrip } from "@/components/sections/CapabilityStrip";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { FinalCTA } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { ManufacturingGlimpse } from "@/components/sections/ManufacturingGlimpse";
import { WhyUs } from "@/components/sections/WhyUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://weldbrosindia.com"),

  title: {
    default: "WBRS Industries | Transformer Tanks & Power Solutions",
    template: "%s | WBRS Industries",
  },

  description:
    "WBRS Industries manufactures transformer tanks and fabricated components for power and industrial applications.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: "https://weldbrosindia.com",
    siteName: "WBRS Industries",
    title: "WBRS Industries | Transformer Tanks & Power Solutions",
    description:
      "WBRS Industries manufactures transformer tanks and fabricated components for power and industrial applications.",
    locale: "en_IN",
    images: [
      {
        url: "/images/products/powerTransformer.png",
        width: 1200,
        height: 630,
        alt: "WBRS Industries | Transformer Tanks & Power Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WBRS Industries | Transformer Tanks & Power Solutions",
    description:
      "WBRS Industries manufactures transformer tanks and fabricated components for power and industrial applications.",
    images: ["/images/products/powerTransformer.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyIntro />
      <CapabilityStrip />
      <ManufacturingGlimpse />
      <WhyUs />
      <FinalCTA />
    </main>
  );
}