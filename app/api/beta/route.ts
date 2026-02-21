import { NextResponse } from "next/server";
import { getResendApiKey, sendBetaApplicationEmail } from "@/lib/email";

function isValidEmail(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  if (trimmed.length > 320) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(trimmed);
}

export async function POST(request: Request) {
  if (!getResendApiKey()) {
    console.error(
      "Resend API key is not set (expected one of: RESEND_API_KEY, RESEND_APIKEY, RESEND_KEY)"
    );
    return NextResponse.json(
      { message: "E-Mail-Versand ist derzeit nicht konfiguriert." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? (body as { email: unknown }).email
      : undefined;
  const why =
    typeof body === "object" && body !== null && "why" in body
      ? (body as { why: unknown }).why
      : "";
  const experience =
    typeof body === "object" && body !== null && "experience" in body
      ? (body as { experience: unknown }).experience
      : "";

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Bitte gib eine gültige E-Mail-Adresse ein." },
      { status: 400 }
    );
  }

  const payload = {
    email: (email as string).trim(),
    why: typeof why === "string" ? why.trim() : "",
    experience: typeof experience === "string" ? experience.trim() : "",
  };

  try {
    await sendBetaApplicationEmail(payload);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Beta email send failed:", err);
    return NextResponse.json(
      {
        message:
          "Versand fehlgeschlagen. Bitte später erneut versuchen oder uns direkt unter support@getcaptn.com kontaktieren.",
      },
      { status: 500 }
    );
  }
}
