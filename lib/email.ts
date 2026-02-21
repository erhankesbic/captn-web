import { Resend } from "resend";

const FROM =
  process.env.RESEND_FROM || "Capt'n Beta <onboarding@resend.dev>";
const TO = "support@getcaptn.com";

export type BetaPayload = {
  email: string;
  why: string;
  experience: string;
};

export async function sendBetaApplicationEmail(payload: BetaPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  const resend = new Resend(apiKey);

  const { email, why, experience } = payload;
  const subject = `Neue Beta-Bewerbung: ${email}`;
  const text = [
    `E-Mail: ${email}`,
    "",
    "Warum Capt'n testen?",
    why || "(nicht ausgefüllt)",
    "",
    "Erfahrung Fitness & Ernährung:",
    experience || "(nicht ausgefüllt)",
  ].join("\n");

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: TO,
    subject,
    text,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
