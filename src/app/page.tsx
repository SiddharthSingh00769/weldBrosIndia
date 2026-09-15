import { CapabilityStrip } from "@/components/sections/CapabilityStrip";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { FinalCTA } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { ManufacturingGlimpse } from "@/components/sections/ManufacturingGlimpse";
import { QualityGlimpse } from "@/components/sections/QualityGlimpse";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyIntro />
      <CapabilityStrip />
      <ManufacturingGlimpse />
      <WhyUs />
      <QualityGlimpse />
      <FinalCTA />
    </main>
  );
}