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
      deliveryLocation: String(formData.get("deliveryLocation") || ""),
      dimensions: String(formData.get("dimensions") || ""),
      requirements: String(formData.get("requirements") || ""),
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

    // Server-side file validation
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

    if (document instanceof File && document.size > 0) {
      if (document.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            message: "The uploaded file must be 10 MB or smaller.",
          },
          { status: 400 },
        );
      }

      if (!ALLOWED_FILE_TYPES.includes(document.type)) {
        return NextResponse.json(
          {
            message: "This file type is not supported.",
          },
          { status: 400 },
        );
      }
    }

    const attachments =
      document instanceof File && document.size > 0
        ? [
            {
              filename: document.name,
              content: Buffer.from(await document.arrayBuffer()),
            },
          ]
        : undefined;

    const { error } = await resend.emails.send({
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
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #17212B;">
          <h2 style="color: #101C2C;">
            New Quote Request
          </h2>

          <p>
            A new quote request has been submitted through the WBRS Industries website.
          </p>

          <hr />

          <h3>Contact Details</h3>

          <p>
            <strong>Name:</strong> ${escapeHtml(values.name)}<br />
            <strong>Company:</strong> ${escapeHtml(values.company)}<br />
            <strong>Email:</strong> ${escapeHtml(values.email)}<br />
            <strong>Phone:</strong> ${escapeHtml(values.phone)}
          </p>

          <h3>Requirement</h3>

          <p>
            <strong>Product:</strong> ${escapeHtml(values.product)}<br />
            <strong>Quantity:</strong> ${escapeHtml(values.quantity)}<br />
            <strong>Capacity:</strong> ${escapeHtml(values.capacity)}<br />
            <strong>Application:</strong> ${escapeHtml(values.application)}
          </p>

          <h3>Project Details</h3>

          <p>
            <strong>Delivery Location:</strong><br />
            ${formatMultiline(values.deliveryLocation)}
          </p>

          <p>
            <strong>Dimensions:</strong><br />
            ${formatMultiline(values.dimensions)}
          </p>

          <p>
            <strong>Requirements:</strong><br />
            ${formatMultiline(values.requirements)}
          </p>

          <p>
            <strong>Additional Message:</strong><br />
            ${formatMultiline(values.message)}
          </p>

          ${
            document instanceof File && document.size > 0
              ? `
                <hr />

                <p>
                  <strong>Attachment:</strong>
                  ${escapeHtml(document.name)}
                </p>
              `
              : ""
          }

          <hr />

          <p style="font-size: 12px; color: #5F6B75;">
            This enquiry was submitted through weldbrosindia.com.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend quote error:", error);

      return NextResponse.json(
        {
          message:
            "We could not submit your request right now. Please try again or contact us directly.",
        },
        { status: 500 },
      );
    }

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

function escapeHtml(value: string | undefined) {
  return (value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatMultiline(value: string | undefined) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}