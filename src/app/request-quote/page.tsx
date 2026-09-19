import type { Metadata } from "next";

import { QuoteHero } from "@/components/request-quote/QuoteHero";
import { QuoteForm } from "@/components/request-quote/QuoteForm";
import { QuoteProcess } from "@/components/request-quote/QuoteProcess";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quotation from WBRS Industries for transformer tanks and fabricated components. Share your product requirements, specifications, drawings, and project details.",
  alternates: {
    canonical: "/request-quote",
  },    
};

export default function RequestQuotePage() {
  return (
    <main>
      <QuoteHero />
      <QuoteForm />
      <QuoteProcess />
    </main>
  );
}