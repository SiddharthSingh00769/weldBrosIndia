import { Container } from "@/components/layout/Container";

const steps = [
  {
    number: "01",
    title: "Drawing Review",
    text: "Understand dimensions, interfaces and project requirements.",
  },
  {
    number: "02",
    title: "Fabrication",
    text: "Translate the approved requirement into controlled fabrication.",
  },
  {
    number: "03",
    title: "Inspection",
    text: "Verify the finished component against the defined requirement.",
  },
];

export function CustomFabrication() {
  return (
    <section className="bg-[#eef0f0] py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid gap-12 text-center lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:text-left">
          {/* Intro */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#245a78]">
              Custom Fabrication
            </p>

            <h2 className="mx-auto mt-5 max-w-xl font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[#172026] lg:mx-0">
              Your drawing.
              <br />
              Our fabrication.
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-[#647078] lg:mx-0">
              When the requirement is specific, the manufacturing process needs
              to be equally specific.
            </p>
          </div>

          {/* Steps */}
          <div className="border-t border-[#cfd5d6] text-left">
            {steps.map((step) => (
              <div
                key={step.number}
                data-product-fabrication-step
                className="grid gap-4 border-b border-[#cfd5d6] py-7 sm:grid-cols-[70px_1fr]"
              >
                <span className="font-heading text-xs font-semibold text-[#8f9190]">
                  {step.number}
                </span>

                <div>
                  <h3 className="font-heading text-xl font-semibold tracking-[-0.025em] text-[#172026]">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#647078]">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}