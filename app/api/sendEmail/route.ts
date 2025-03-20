import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        const recipient = process.env.EMAIL_TO; // Use a secure server-side env variable

        if (!recipient) {
            throw new Error("Recipient email is not defined in environment variables.");
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465, // Use SSL only for port 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: recipient, // FIXED: Use a valid recipient
            subject: `New message from ${name}`,
            text: message,
            html: `<p>${message}</p><p>From: <a href="mailto:${email}">${email}</a></p>`,
        });

        return NextResponse.json({ message: "Email sent successfully", info }, { status: 200 });
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send email", error: error.message }, { status: 500 });
    }
}
