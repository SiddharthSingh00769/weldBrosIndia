"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  FileText,
  Loader2,
  Upload,
  X,
} from "lucide-react";

import {
  quoteSchema,
  type QuoteFormValues,
} from "@/lib/validations/quote";

import { Container } from "@/components/layout/Container";

const products = [
  "Power Transformer Tanks",
  "OLTC Transformer Tanks",
  "Transformer Tanks Without Line",
  "Dry Transformer Tanks",
  "OLTC Tanks",
  "HT Boxes",
  "Meter Boxes",
  "Custom / Other Requirement",
];

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export function QuoteForm() {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      product: "",
    },
  });

  useEffect(() => {
    if (!submitted) {
      return;
    }

    const successElement = document.getElementById("quote-success");

    if (!successElement) {
      return;
    }

    requestAnimationFrame(() => {
      successElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }, [submitted]);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = event.target.files?.[0];

    setFileError("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setFileError("File size must be 10 MB or less.");
      setFile(null);
      event.target.value = "";
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
      setFileError(
        "Please upload a PDF, image, Word document, or Excel file.",
      );
      setFile(null);
      event.target.value = "";
      return;
    }

    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    setFileError("");

    const input = document.getElementById(
      "quote-document",
    ) as HTMLInputElement | null;

    if (input) {
      input.value = "";
    }
  };

  const onSubmit = async (values: QuoteFormValues) => {
    setSubmitError("");

    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    if (file) {
      formData.append("document", file);
    }

    try {
      const response = await fetch("/api/request-quote", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Something went wrong. Please try again.",
        );
      }

      reset();
      setFile(null);
      setFileError("");
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section
      id="quote-form"
      className="bg-[#f7f8f9] py-24 md:py-32 lg:py-40"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 xl:gap-28">
          {/* Intro */}
          <div className="text-center lg:sticky lg:top-28 lg:self-start lg:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#075a9c]">
              Your Requirement
            </p>

            <p className="mt-4 font-heading text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d]">
              02 / Specification
            </p>

            <h2 className="mx-auto mt-5 max-w-xl font-heading text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#17212b] lg:mx-0">
              Give us the details.
            </h2>

            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-[#5f6b75] lg:mx-0">
              The more information you provide, the better we can understand
              your requirement and prepare an appropriate response.
            </p>

            <div className="mt-8 hidden border-t border-[#dde2e6] pt-6 lg:block">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b858d]">
                Recommended
              </p>

              <p className="mt-3 text-sm leading-6 text-[#5f6b75]">
                If you have a drawing, specification sheet or technical
                document, upload it with your enquiry.
              </p>
            </div>
          </div>

          {/* Form / Success State */}
          <div className="relative">
            {/* Original form stays in the document flow so its height
                never disappears when the success state is shown. */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`border border-[#dde2e6] bg-white p-5 sm:p-7 md:p-9 lg:p-10 transition-opacity duration-300 ${
                submitted ? "invisible" : "visible"
              }`}
              aria-hidden={submitted}
            >
              {/* Contact Information */}
              <div>
                <div className="flex items-end justify-between gap-4 border-b border-[#dde2e6] pb-5">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#075a9c]">
                      Contact
                    </p>

                    <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.025em] text-[#17212b]">
                      Contact Information
                    </h3>
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.14em] text-[#7b858d]">
                    Required *
                  </span>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <FormField
                    label="Name"
                    required
                    error={errors.name?.message}
                  >
                    <input
                      {...register("name")}
                      placeholder="Your name"
                      className={inputClass(Boolean(errors.name))}
                    />
                  </FormField>

                  <FormField
                    label="Company"
                    required
                    error={errors.company?.message}
                  >
                    <input
                      {...register("company")}
                      placeholder="Company name"
                      className={inputClass(Boolean(errors.company))}
                    />
                  </FormField>

                  <FormField
                    label="Email"
                    required
                    error={errors.email?.message}
                  >
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@company.com"
                      className={inputClass(Boolean(errors.email))}
                    />
                  </FormField>

                  <FormField
                    label="Phone"
                    required
                    error={errors.phone?.message}
                  >
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+91"
                      className={inputClass(Boolean(errors.phone))}
                    />
                  </FormField>
                </div>
              </div>

              {/* Requirement */}
              <div className="mt-12">
                <div className="border-b border-[#dde2e6] pb-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#075a9c]">
                    Requirement
                  </p>

                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.025em] text-[#17212b]">
                    Product & Application
                  </h3>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <FormField
                    label="Product / Component"
                    required
                    error={errors.product?.message}
                    className="md:col-span-2"
                  >
                    <select
                      {...register("product")}
                      className={inputClass(
                        Boolean(errors.product),
                        true,
                      )}
                    >
                      <option value="">
                        Select a product or requirement
                      </option>

                      {products.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField
                    label="Quantity"
                    error={errors.quantity?.message}
                  >
                    <input
                      {...register("quantity")}
                      placeholder="e.g. 10 units"
                      className={inputClass(Boolean(errors.quantity))}
                    />
                  </FormField>

                  <FormField
                    label="Capacity / Rating"
                    error={errors.capacity?.message}
                  >
                    <input
                      {...register("capacity")}
                      placeholder="e.g. 2500 kVA"
                      className={inputClass(Boolean(errors.capacity))}
                    />
                  </FormField>

                  <FormField
                    label="Application"
                    error={errors.application?.message}
                  >
                    <input
                      {...register("application")}
                      placeholder="Transformer / Power / Industrial"
                      className={inputClass(Boolean(errors.application))}
                    />
                  </FormField>

                  <FormField
                    label="Delivery Location"
                    error={errors.deliveryLocation?.message}
                  >
                    <input
                      {...register("deliveryLocation")}
                      placeholder="City / State / Country"
                      className={inputClass(
                        Boolean(errors.deliveryLocation),
                      )}
                    />
                  </FormField>
                </div>
              </div>

              {/* Technical Details */}
              <div className="mt-12">
                <div className="border-b border-[#dde2e6] pb-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#075a9c]">
                    Technical
                  </p>

                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.025em] text-[#17212b]">
                    Technical Requirements
                  </h3>
                </div>

                <div className="mt-6 space-y-5">
                  <FormField
                    label="Dimensions / Configuration"
                    error={errors.dimensions?.message}
                  >
                    <textarea
                      {...register("dimensions")}
                      rows={4}
                      placeholder="Provide dimensions, configuration, material requirements or other relevant technical information."
                      className={textareaClass(
                        Boolean(errors.dimensions),
                      )}
                    />
                  </FormField>

                  <FormField
                    label="Additional Requirements"
                    error={errors.requirements?.message}
                  >
                    <textarea
                      {...register("requirements")}
                      rows={4}
                      placeholder="Any standards, accessories, finishing requirements or other specifications."
                      className={textareaClass(
                        Boolean(errors.requirements),
                      )}
                    />
                  </FormField>

                  <FormField
                    label="Message / Notes"
                    error={errors.message?.message}
                  >
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us anything else we should know about your requirement."
                      className={textareaClass(
                        Boolean(errors.message),
                      )}
                    />
                  </FormField>
                </div>
              </div>

              {/* Upload */}
              <div className="mt-12">
                <div className="border-b border-[#dde2e6] pb-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#075a9c]">
                    Documents
                  </p>

                  <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.025em] text-[#17212b]">
                    Drawing or Specification
                  </h3>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="quote-document"
                    className="group flex cursor-pointer flex-col items-center justify-center border border-dashed border-[#c8d0d6] bg-[#f7f8f9] px-6 py-10 text-center transition-colors duration-300 hover:border-[#075a9c] hover:bg-[#eef1f3]"
                  >
                    <span className="flex size-11 items-center justify-center rounded-md bg-white">
                      <Upload className="size-5 text-[#075a9c]" />
                    </span>

                    <span className="mt-4 font-heading text-sm font-semibold text-[#17212b]">
                      Upload a document
                    </span>

                    <span className="mt-2 text-xs leading-5 text-[#7b858d]">
                      PDF, images, Word or Excel · Maximum 10 MB
                    </span>

                    <input
                      id="quote-document"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx,.xls,.xlsx"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>

                  {file && (
                    <div className="mt-3 flex items-center justify-between gap-4 border border-[#dde2e6] bg-white px-4 py-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <FileText className="size-4 shrink-0 text-[#075a9c]" />

                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-[#17212b]">
                            {file.name}
                          </p>

                          <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-[#7b858d]">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={removeFile}
                        className="flex size-8 shrink-0 items-center justify-center rounded-md text-[#7b858d] transition-colors hover:bg-[#eef1f3] hover:text-[#17212b]"
                        aria-label="Remove uploaded file"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  )}

                  {fileError && (
                    <p className="mt-2 text-xs text-[#b42318]">
                      {fileError}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="mt-10 border-t border-[#dde2e6] pt-7">
                {submitError && (
                  <div className="mb-5 border border-[#f1c7c3] bg-[#fff5f4] px-4 py-3 text-sm text-[#b42318]">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-md bg-[#f05a18] px-6 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#d94a12] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-56"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </button>

                <p className="mt-4 max-w-xl text-[10px] leading-5 text-[#7b858d]">
                  By submitting this form, you are providing your contact
                  information to WBRS Industries so we can respond to your
                  enquiry.
                </p>
              </div>
            </form>

            {/* Success message */}
            {submitted && (
              <div
                id="quote-success"
                className="absolute inset-0 z-10 flex items-center justify-center border border-[#dde2e6] bg-white px-6 py-16 text-center md:px-12 md:py-20"
              >
                <div className="mx-auto w-full max-w-3xl">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#eef1f3]">
                    <CheckCircle2 className="size-7 text-[#075a9c]" />
                  </div>

                  <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-[#075a9c]">
                    Request Received
                  </p>

                  <h2 className="mt-4 font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-[#17212b]">
                    Thank you for your enquiry.
                  </h2>

                  <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#5f6b75] md:text-lg md:leading-8">
                    Your requirement has been submitted to our team. We will
                    review the information provided and get back to you
                    regarding your enquiry.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[#075a9c] px-6 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#064d85]"
                  >
                    Submit Another Requirement
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
  required,
  error,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-[#5f6b75]">
        {label}
        {required && <span className="ml-1 text-[#f05a18]">*</span>}
      </label>

      {children}

      {error && (
        <p className="mt-2 text-xs text-[#b42318]">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError = false, select = false) {
  return [
    "h-12 w-full rounded-md border bg-white px-4 text-sm text-[#17212b]",
    "outline-none transition-colors duration-200",
    "placeholder:text-[#9aa3aa]",
    "focus:border-[#075a9c] focus:ring-2 focus:ring-[#075a9c]/10",
    select ? "cursor-pointer" : "",
    hasError
      ? "border-[#b42318]"
      : "border-[#dde2e6] hover:border-[#c3cbd1]",
  ].join(" ");
}

function textareaClass(hasError = false) {
  return [
    "w-full resize-y rounded-md border bg-white px-4 py-3 text-sm leading-6 text-[#17212b]",
    "outline-none transition-colors duration-200",
    "placeholder:text-[#9aa3aa]",
    "focus:border-[#075a9c] focus:ring-2 focus:ring-[#075a9c]/10",
    hasError
      ? "border-[#b42318]"
      : "border-[#dde2e6] hover:border-[#c3cbd1]",
  ].join(" ");
}

export default QuoteForm;