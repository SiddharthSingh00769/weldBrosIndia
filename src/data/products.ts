export interface Product {
  id: number,
  number: string;
  name: string;
  image: string;
  images?: string[];
  range: string;
  shortDescription: string;
  comingSoon?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    number: "01",
    name: "Power Transformer Tanks",
    range: "1000 kVA–5000 kVA",
    image: "/images/products/powerTransformer.png",
    shortDescription:
      "This steel container is a protective outer shell, known as a Power Transformer Tank, built to hold the core parts of a large electrical transformer. It keeps the sensitive electrical equipment inside safe from weather, dirt, and damage while holding special cooling oil that prevents the system from overheating. By keeping everything securely sealed and cooled, it ensures high-voltage electricity moves safely and reliably to homes and businesses.",
  },
  {
    id: 2,
    number: "02",
    name: "OLTC Transformer Tanks",
    range: "1000 kVA–5000 kVA",
    image: "/images/products/oltc.png",
    shortDescription:
      "An OLTC Transformer Tank (rated for 1000 kVA to 5000 kVA) is a specialized steel enclosure built for transformers that feature an On-Load Tap Changer (OLTC). Unlike standard tanks, it includes extra compartments and mounting structures to safely house the tap-changer mechanism, which adjusts voltage levels automatically while the transformer is actively running. By keeping the sensitive internal components and cooling oil securely sealed, it protects the system from weather damage and ensures a smooth, stable electricity supply without needing to turn off the power.",
  },
  {
    id: 3,
    number: "03",
    name: "Transformer Tanks Without Line",
    range: "10 kVA–500 kVA",
    image: "/images/products/transformerWithoutLine.png",
    shortDescription:
      "A Transformer Tank Without Line (rated for lower capacities from 10 kVA to 500 kVA) is a compact steel enclosure designed for smaller distribution transformers. It features side cooling radiators and a top conservator tank to handle heat and oil expansion, but lacks built-in high-voltage cable boxes or bus duct extensions (lines). By safely sealing the internal electrical parts and oil in a streamlined frame, it protects the equipment from weather and dirt while keeping power flowing steadily to local grids.",
  },
  {
    id: 4,
    number: "04",
    name: "Dry Transformer Tanks",
    range: "10 kVA–2000 kVA",
    image: "/images/products/DT1.png",
    images: ["/images/products/DT1.png", "/images/products/DT2.png", "/images/products/DT3.png", "/images/products/DT4.png", "/images/products/DT5.png"],
    shortDescription:
      "A Dry Transformer Tank (rated for 10 kVA to 2000 kVA) is a protective metal cabinet designed for air-cooled transformers that do not use liquid oil. Instead of holding oil, it relies on built-in air vents and mesh screens to let fresh air flow through and cool the electrical parts inside. Because it eliminates oil-related fire risks, it is commonly used indoors in commercial buildings and factories to safely enclose equipment while protecting people from electrical hazards.",
  },
  {
    id: 5,
    number: "05",
    name: "Small Transformer Tanks",
    range: "10 kVA-100 kVA",
    image: "/images/products/smallTransformer.png",
    shortDescription: "This is a small transformer tank designed to house and protect the active components of a transformer while providing a sealed enclosure for transformer oil and facilitating heat dissipation during operation. It is suitable for distribution and small-capacity power transformers used in electrical power distribution and industrial applications. The tank can be customized in terms of capacity/range, dimensions, radiator configuration, and other specifications as per the client’s requirements.",
  },
  {
    id: 6,
    number: "06",
    name: "LT Boxes",
    range: "10 kVA–350 kVA",
    image: "/images/products/ltBox.png",
    shortDescription:
      "An LT Box (Low Tension Box, rated for 10 kVA to 350 kVA) is a protective metal cover for a transformer's low-voltage wiring. It safely seals off the electrical connections so people cannot accidentally touch live wires, while also keeping out rain and dirt.",
  },
  {
    id: 7,
    number: "07",
    name: "HT Boxes",
    range: "10 kVA–350 kVA",
    image: "/images/products/htBox.png",
    shortDescription:
      "An HT Box (High Tension Box, rated for 10 kVA to 350 kVA) is a protective metal cover for a transformer's high-voltage connections. It safely seals off the dangerous, high-power wires coming into the transformer to prevent electrical accidents, while protecting the terminals from weather and dirt.",
  },
  {
    id: 8,
    number: "08",
    name: "Meter Boxes",
    range: "10 kVA–350 kVA",
    image: "/images/products/meterBox.png",
    shortDescription:
      "A Meter Box (rated for 10 kVA to 350 kVA) is a protective metal cabinet housing the electrical meters and monitoring devices for a transformer. It safely encloses meters and internal wiring to shield them from rain, dust, and tampering, while providing clear viewing windows for technicians to take power readings safely.",
  },
  {
    id: 9,
    number: "09",
    name: "Radiator",
    range: "Specifications to be announced",
    image: "/images/products/radiator.png",
    shortDescription: "Coming soon.",
    comingSoon: true,
  },
];