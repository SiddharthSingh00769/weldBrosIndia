import { NextResponse } from "next/server";
import { Resend } from "resend";

import { quoteSchema } from "@/lib/validations/quote";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const rawValues = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      product: String(formData.get("product") || ""),
      quantity: String(formData.get("quantity") || ""),
      capacity: String(formData.get("capacity") || ""),
      application: String(formData.get("application") || ""),
      deliveryLocation: String(
        formData.get("deliveryLocation") || "",
      ),
      dimensions: String(formData.get("dimensions") || ""),
      requirements: String(
        formData.get("requirements") || "",
      ),
      message: String(formData.get("message") || ""),
    };

    // Server-side validation
    const result = quoteSchema.safeParse(rawValues);

    if (!result.success) {
      return NextResponse.json(
        {
          message:
            "Please check the information you provided and try again.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const values = result.data;

    const document = formData.get("document");

    const attachments =
      document instanceof File && document.size > 0
        ? [
            {
              filename: document.name,
              content: Buffer.from(await document.arrayBuffer()),
            },
          ]
        : undefined;

    await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "WBRS Industries <onboarding@resend.dev>",

      to:
        process.env.QUOTE_EMAIL ||
        "weldbrosindia@gmail.com",

      replyTo: values.email,

      subject: `New Quote Request — ${values.company} — ${values.product}`,

      attachments,

      html: `
        <div style="font-family: Arial, sans-serif; color: #17212b; max-width: 700px;">
          <h2 style="margin-bottom: 24px;">
            New Quote Request
          </h2>

          <h3>Contact Information</h3>

          <p>
            <strong>Name:</strong>
            ${escapeHtml(values.name)}
          </p>

          <p>
            <strong>Company:</strong>
            ${escapeHtml(values.company)}
          </p>

          <p>
            <strong>Email:</strong>
            ${escapeHtml(values.email)}
          </p>

          <p>
            <strong>Phone:</strong>
            ${escapeHtml(values.phone)}
          </p>

          <h3 style="margin-top: 28px;">
            Requirement
          </h3>

          <p>
            <strong>Product:</strong>
            ${escapeHtml(values.product)}
          </p>

          <p>
            <strong>Quantity:</strong>
            ${escapeHtml(values.quantity || "Not specified")}
          </p>

          <p>
            <strong>Capacity / Rating:</strong>
            ${escapeHtml(values.capacity || "Not specified")}
          </p>

          <p>
            <strong>Application:</strong>
            ${escapeHtml(values.application || "Not specified")}
          </p>

          <p>
            <strong>Delivery Location:</strong>
            ${escapeHtml(
              values.deliveryLocation || "Not specified",
            )}
          </p>

          <h3 style="margin-top: 28px;">
            Technical Information
          </h3>

          <p>
            <strong>Dimensions / Configuration:</strong><br />
            ${formatMultiline(
              values.dimensions || "Not specified",
            )}
          </p>

          <p>
            <strong>Additional Requirements:</strong><br />
            ${formatMultiline(
              values.requirements || "Not specified",
            )}
          </p>

          <p>
            <strong>Message / Notes:</strong><br />
            ${formatMultiline(
              values.message || "Not specified",
            )}
          </p>

          ${
            document instanceof File && document.size > 0
              ? `
                <p>
                  <strong>Attachment:</strong>
                  ${escapeHtml(document.name)}
                </p>
              `
              : ""
          }

          <hr
            style="
              margin-top: 32px;
              border: 0;
              border-top: 1px solid #dde2e6;
            "
          />

          <p style="font-size: 12px; color: #7b858d;">
            Submitted through the WBRS Industries website.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully.",
    });
  } catch (error) {
    console.error("Quote request error:", error);

    return NextResponse.json(
      {
        message:
          "We could not submit your request right now. Please try again or contact us directly.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatMultiline(value: string) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}