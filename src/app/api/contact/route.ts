// export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    // 1. Save to DB
    await prisma.contactMessage.create({
      data: { email, message },
    });

    // 2. Send email notification
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["st.shreyansh@gmail.com"], // ← put YOUR email here
      subject: "New Portfolio Contact",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
