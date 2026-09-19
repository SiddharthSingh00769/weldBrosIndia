import type { Metadata } from "next";

import { ManufacturingHero } from "@/components/manufacturing/ManufacturingHero";
import { ManufacturingProcess } from "@/components/manufacturing/ManufacturingProcess";
import { ManufacturingFacility } from "@/components/manufacturing/ManufacturingFacility";
import { FinalCTA } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Transformer Tank Manufacturing",
  description:
    "Learn about WBRS Industries' transformer tank manufacturing process, fabrication capabilities, and manufacturing facility in Jaipur, Rajasthan, India.",
  alternates: {
    canonical: "/manufacturing",
  },
};

export default function ManufacturingPage() {
  return (
    <main>
      <ManufacturingHero />
      <ManufacturingProcess />
      <ManufacturingFacility />
      <FinalCTA />
    </main>
  );
}