import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutVision } from "@/components/about/AboutVision";
import { AboutLocation } from "@/components/about/AboutLocation";
import { FinalCTA } from "@/components/sections/FinalCta";

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