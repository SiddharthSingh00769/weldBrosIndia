import type { Metadata } from "next";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutVision } from "@/components/about/AboutVision";
import { AboutLocation } from "@/components/about/AboutLocation";
import { FinalCTA } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "About WBRS Industries",
  description:
    "Learn about WBRS Industries, a transformer tank and fabricated component manufacturer based in Jaipur, Rajasthan, India, established in 2021.",
  alternates: {
    canonical: "/about",
  },    
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutVision />
      <AboutLocation />
      <FinalCTA />
    </main>
  );
}