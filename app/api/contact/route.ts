import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "Areeb Malik Portfolio <onboarding@resend.dev>",

      to: ["areeb777358@gmail.com"],

      replyTo: email,

      subject: `🚀 New Project Inquiry — ${name}`,

      html: `
        <div style="
          font-family: Inter, Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
          padding: 32px;
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          color: #111827;
        ">

          <h2 style="
            margin: 0;
            padding-bottom: 16px;
            border-bottom: 2px solid #6366f1;
            font-size: 24px;
            font-weight: 700;
          ">
            🚀 New Portfolio Inquiry
          </h2>

          <div style="margin-top: 24px; line-height: 1.8;">

            <p style="margin: 0 0 12px;">
              <strong>Name:</strong><br />
              ${name}
            </p>

            <p style="margin: 0 0 12px;">
              <strong>Email:</strong><br />
              <a 
                href="mailto:${email}" 
                style="color: #6366f1; text-decoration: none;"
              >
                ${email}
              </a>
            </p>

          </div>

          <div style="
            margin-top: 24px;
            padding: 20px;
            background-color: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
          ">

            <p style="
              margin-top: 0;
              margin-bottom: 12px;
              font-weight: 600;
              color: #111827;
            ">
              Message
            </p>

            <p style="
              margin: 0;
              white-space: pre-wrap;
              color: #374151;
              line-height: 1.7;
            ">
              ${message.replace(/\n/g, "<br>")}
            </p>

          </div>

          <hr style="
            margin-top: 32px;
            border: none;
            border-top: 1px solid #e5e7eb;
          " />

          <p style="
            margin-top: 20px;
            font-size: 12px;
            color: #6b7280;
            text-align: center;
          ">
            Sent from areebmalik.com contact form
          </p>

        </div>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)

      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data,
    })
  } catch (error) {
    console.error("Contact form internal error:", error)

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}