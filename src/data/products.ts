export interface Product {
  id: number;
  number: string;
  name: string;
  range: string;
  shortDescription: string;
  image: string;
  images?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    number: "01",
    name: "Power Transformer Tanks",
    range: "1000 kVA–5000 kVA",
    image: "/images/products/powerTransformer.png",
    shortDescription:
      "Transformer tanks manufactured for power transformer applications across the 1000 kVA to 5000 kVA range.",
  },
  {
    id: 2,
    number: "02",
    name: "OLTC Transformer Tanks",
    range: "1000 kVA–5000 kVA",
    image: "/images/products/oltc.png",
    shortDescription:
      "Transformer tanks designed for OLTC transformer applications in the 1000 kVA to 5000 kVA range.",
  },
  {
    id: 3,
    number: "03",
    name: "Transformer Tanks Without Line",
    range: "10 kVA–500 kVA",
    image: "/images/products/transformerWithoutLine.png",
    shortDescription:
      "Transformer tanks for applications from 10 kVA to 500 kVA without line configuration.",
  },
  {
    id: 4,
    number: "04",
    name: "Dry Transformer Tanks",
    range: "10 kVA–2000 kVA",
    image: "/images/products/DT1.png",
    images: ["/images/products/DT1.png", "/images/products/DT2.png", "/images/products/DT3.png", "/images/products/DT4.png", "/images/products/DT5.png"],
    shortDescription:
      "Fabricated tanks for dry transformer applications covering the 10 kVA to 2000 kVA range.",
  },
  {
    id: 5,
    number: "05",
    name: "LT Boxes",
    range: "10 kVA–350 kVA",
    image: "/images/products/oltc-tank.jpg",
    shortDescription:
      "LT boxes manufactured for transformer applications from 10 kVA to 350 kVA.",
  },
  {
    id: 6,
    number: "06",
    name: "HT Boxes",
    range: "10 kVA–350 kVA",
    image: "/images/products/htBox.png",
    shortDescription:
      "HT boxes manufactured for transformer applications from 10 kVA to 350 kVA.",
  },
  {
    id: 7,
    number: "07",
    name: "Meter Boxes",
    range: "10 kVA–350 kVA",
    image: "/images/products/meterBox.png",
    shortDescription:
      "Meter boxes manufactured for transformer applications from 10 kVA to 350 kVA.",
  },
];