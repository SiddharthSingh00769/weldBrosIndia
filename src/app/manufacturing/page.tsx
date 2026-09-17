import { ManufacturingHero } from "@/components/manufacturing/ManufacturingHero";
import { ManufacturingProcess } from "@/components/manufacturing/ManufacturingProcess";
import { ManufacturingFacility } from "@/components/manufacturing/ManufacturingFacility";
import { FinalCTA } from "@/components/sections/FinalCta";

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