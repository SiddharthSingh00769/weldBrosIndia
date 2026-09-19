import type { Metadata } from "next";

import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { FinalCTA } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Contact WBRS Industries",
  description:
    "Contact WBRS Industries in Jaipur, Rajasthan, India for transformer tank manufacturing, fabricated components, product enquiries, and business discussions.",
  alternates: {
    canonical: "/contact",
  },   
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <FinalCTA />
    </main>
  );
}