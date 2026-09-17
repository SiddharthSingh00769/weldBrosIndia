import { QuoteHero } from "@/components/request-quote/QuoteHero";
import { QuoteForm } from "@/components/request-quote/QuoteForm";
import { QuoteProcess } from "@/components/request-quote/QuoteProcess";
import { QuoteContact } from "@/components/request-quote/QuoteContact";

export default function RequestQuotePage() {
  return (
    <main>
      <QuoteHero />
      <QuoteForm />
      <QuoteProcess />
      <QuoteContact />
    </main>
  );
}