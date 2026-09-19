import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Server-side validation
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the form fields and try again.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    // Make sure Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message:
            "We could not submit your message right now. Please try again later.",
        },
        { status: 500 },
      );
    }

    const { name, email, phone, subject, message } = result.data;

    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "WBRS Industries <onboarding@resend.dev>",

      to:
        process.env.CONTACT_EMAIL ||
        "weldbrosindia@gmail.com",

      replyTo: email,

      subject: `Contact Enquiry: ${subject}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #17212b;
            max-width: 700px;
            margin: 0 auto;
          "
        >
          <h2 style="margin: 0 0 24px;">
            New Contact Enquiry
          </h2>

          <p>
            A new contact enquiry has been submitted through the
            WBRS Industries website.
          </p>

          <hr />

          <table
            style="
              border-collapse: collapse;
              width: 100%;
            "
          >
            <tr>
              <td
                style="
                  padding: 10px 0;
                  font-weight: 600;
                  width: 160px;
                  vertical-align: top;
                "
              >
                Name
              </td>
              <td style="padding: 10px 0;">
                ${escapeHtml(name)}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 10px 0;
                  font-weight: 600;
                  vertical-align: top;
                "
              >
                Email
              </td>
              <td style="padding: 10px 0;">
                ${escapeHtml(email)}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 10px 0;
                  font-weight: 600;
                  vertical-align: top;
                "
              >
                Contact Number
              </td>
              <td style="padding: 10px 0;">
                ${escapeHtml(phone)}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 10px 0;
                  font-weight: 600;
                  vertical-align: top;
                "
              >
                Subject
              </td>
              <td style="padding: 10px 0;">
                ${escapeHtml(subject)}
              </td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p
              style="
                font-weight: 600;
                margin: 0 0 8px;
              "
            >
              Message
            </p>

            <div
              style="
                padding: 16px;
                background: #f7f8f9;
                border: 1px solid #dde2e6;
                white-space: pre-wrap;
              "
            >
              ${escapeHtml(message)}
            </div>
          </div>

          <hr style="margin-top: 32px;" />

          <p
            style="
              margin-top: 16px;
              color: #7b858d;
              font-size: 12px;
            "
          >
            This enquiry was submitted through the WBRS Industries website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend contact error:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            "We could not submit your message right now. Please try again or contact us directly.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We could not submit your message right now. Please try again or contact us directly.",
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