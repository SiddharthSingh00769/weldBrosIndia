export interface Product {
  slug: string;
  number: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
  tags: string[];
}

export const products: Product[] = [
  {
    slug: "transformer-tanks",
    number: "01",
    name: "Transformer Tanks",
    shortDescription:
      "Fabricated transformer tanks engineered around application requirements and customer specifications.",
    description:
      "Transformer tanks manufactured for power and industrial applications, with fabrication based on customer drawings, specifications and project requirements.",
    image: "/images/products/transformer-tank.jpg",
    category: "Transformer Components",
    featured: true,
    tags: ["500 kVA–5 MVA", "Custom Fabrication", "Drawing Based"],
  },

  {
    slug: "oltc-transformer-tanks",
    number: "02",
    name: "OLTC Transformer Tanks",
    shortDescription:
      "Specialized transformer tank fabrication for OLTC transformer applications.",
    description:
      "Application-specific tank fabrication for transformers incorporating on-load tap changer requirements.",
    image: "/images/products/oltc-transformer-tank.jpg",
    category: "Transformer Components",
    featured: true,
    tags: ["OLTC", "Custom Fabrication", "Engineering"],
  },

  {
    slug: "transformer-components",
    number: "03",
    name: "Transformer Components",
    shortDescription:
      "Fabricated components supporting transformer assembly and application requirements.",
    description:
      "Customer-specific fabricated components manufactured according to project drawings and technical requirements.",
    image: "/images/products/transformer-components.jpg",
    category: "Transformer Components",
    tags: ["Fabrication", "Custom", "Engineering"],
  },
];