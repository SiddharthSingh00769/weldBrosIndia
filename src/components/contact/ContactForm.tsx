"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import gsap from "gsap";

import { Container } from "@/components/layout/Container";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(
        "[data-contact-fade]",
      );

      if (!items?.length) return;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /*
   * After successful submission, scroll to the actual success
   * content rather than the full-height success overlay.
   *
   * This prevents the mobile page from jumping upward.
   */
  useEffect(() => {
    if (!submitted) {
      return;
    }

    const timer = window.setTimeout(() => {
      const successContent = document.getElementById(
        "contact-success-content",
      );

      if (!successContent) {
        return;
      }

      const rect = successContent.getBoundingClientRect();
      const isMobile = window.innerWidth < 1024;

      /*
       * Leave room for the fixed/sticky navbar.
       * Mobile needs a slightly smaller offset.
       */
      const topOffset = isMobile ? 88 : 110;

      const targetTop = window.scrollY + rect.top - topOffset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, [submitted]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setFormError("");
    setErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);

    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const result = contactSchema.safeParse(rawData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData;

        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }

      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send your message.",
        );
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleSendAnother = () => {
    setSubmitted(false);
    setErrors({});
    setFormError("");

    /*
     * Move the user back to the form area after choosing
     * to send another message.
     */
    window.setTimeout(() => {
      const formElement = document.getElementById("contact-form");

      if (!formElement) {
        return;
      }

      const rect = formElement.getBoundingClientRect();

      window.scrollTo({
        top: window.scrollY + rect.top - 88,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <section
      ref={sectionRef}
      id="contact-form"
      className="overflow-hidden bg-[#f7f8f9] py-24 md:py-32 lg:py-40"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 xl:gap-28">
          {/* Contact Information */}
          <div
            data-contact-fade
            className="text-center lg:text-left"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#075a9c]">
              Get In Touch
            </p>

            <p className="mt-4 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d]">
              02 / Communication
            </p>

            <h2 className="mx-auto mt-5 max-w-xl font-heading text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#17212b] lg:mx-0">
              Let&apos;s start a conversation.
            </h2>

            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-[#5f6b75] lg:mx-0">
              Send us a message and our team will get back to you. For
              detailed transformer tank requirements, use our Request a Quote
              page.
            </p>

            <div className="mt-10 space-y-6 text-left">
              <ContactDetail
                icon={<Phone className="size-4" />}
                label="Phone"
                value="+91 8955182334"
                href="tel:+918955182334"
              />

              <ContactDetail
                icon={<Mail className="size-4" />}
                label="Email"
                value="weldbrosindia@gmail.com"
                href="mailto:weldbrosindia@gmail.com"
              />

              <ContactDetail
                icon={<MapPin className="size-4" />}
                label="Location"
                value="Jaipur, Rajasthan, India"
                href="https://maps.app.goo.gl/oj8MaSQFeUWpt1jK6"
              />
            </div>
          </div>

          {/* Form / Success */}
          <div
            data-contact-fade
            className="relative border border-[#dde2e6] bg-white p-6 sm:p-8 md:p-10 lg:p-12"
          >
            {/* Keep the form in the layout at all times.
                This prevents the page from collapsing after submission. */}
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-hidden={submitted}
              className={`space-y-6 transition-opacity duration-300 ${
                submitted ? "invisible" : "visible"
              }`}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  error={errors.name}
                />

                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  error={errors.email}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  label="Contact Number"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  error={errors.phone}
                />

                <FormField
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  error={errors.subject}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#5f6b75]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Tell us what you would like to discuss..."
                  className={`mt-3 w-full resize-none border bg-[#f7f8f9] px-4 py-3 text-sm leading-6 text-[#17212b] outline-none transition-colors placeholder:text-[#9aa3aa] focus:ring-1 ${
                    errors.message
                      ? "border-[#b42318] focus:border-[#b42318] focus:ring-[#b42318]"
                      : "border-[#dde2e6] focus:border-[#075a9c] focus:ring-[#075a9c]"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 text-xs text-[#b42318]">
                    {errors.message}
                  </p>
                )}
              </div>

              {formError && (
                <div
                  role="alert"
                  className="border border-[#b42318]/20 bg-[#b42318]/5 px-4 py-3 text-sm text-[#b42318]"
                >
                  {formError}
                </div>
              )}

              <div className="flex flex-col gap-4 border-t border-[#dde2e6] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-[#7b858d]">
                  For detailed product or transformer tank requirements,
                  please use Request a Quote.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#f05a18] px-6 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#d94a12] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}

                  {!isSubmitting && (
                    <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>
              </div>
            </form>

            {/* Success overlay */}
            {submitted && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white px-6 py-10 text-center sm:px-8 md:px-10 lg:px-12">
                <div
                  id="contact-success-content"
                  className="w-full max-w-md"
                >
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#eef1f3]">
                    <CheckCircle2 className="size-6 text-[#075a9c]" />
                  </span>

                  <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#075a9c]">
                    Message Sent
                  </p>

                  <h3 className="mt-4 font-heading text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-[1] tracking-[-0.04em] text-[#17212b]">
                    Thank you for contacting us.
                  </h3>

                  <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#5f6b75]">
                    Your message has been received. Our team will get back
                    to you as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={handleSendAnother}
                    className="mt-7 inline-flex h-11 items-center justify-center rounded-md bg-[#075a9c] px-5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#064d85]"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#5f6b75]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`mt-3 h-12 w-full border bg-[#f7f8f9] px-4 text-sm text-[#17212b] outline-none transition-colors placeholder:text-[#9aa3aa] focus:ring-1 ${
          error
            ? "border-[#b42318] focus:border-[#b42318] focus:ring-[#b42318]"
            : "border-[#dde2e6] focus:border-[#075a9c] focus:ring-[#075a9c]"
        }`}
      />

      {error && (
        <p className="mt-2 text-xs text-[#b42318]">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      className="group flex items-center gap-4"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#eef1f3] text-[#075a9c] transition-colors duration-300 group-hover:bg-[#075a9c] group-hover:text-white">
        {icon}
      </span>

      <span className="min-w-0">
        <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d]">
          {label}
        </span>

        <span className="mt-1 block break-words font-heading text-sm font-semibold text-[#17212b]">
          {value}
        </span>
      </span>

      <ArrowUpRight className="ml-auto size-4 shrink-0 text-[#7b858d] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f05a18]" />
    </Link>
  );
}

export default ContactForm;