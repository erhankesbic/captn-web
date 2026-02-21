import { Resend } from "resend";

const FROM =
  process.env.RESEND_FROM || "Capt'n Beta <noreply@getcaptn.de>";
const TO = process.env.RESEND_TO || "support@getcaptn.de";

function firstNonEmptyEnv(keys: string[]) {
  for (const key of keys) {
    const value = process.env[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
    }
  }
  return undefined;
}

export function getResendApiKey() {
  return firstNonEmptyEnv([
    "RESEND_API_KEY",
    "RESEND_APIKEY",
    "RESEND_KEY",
    "RESEND",
    "resend",
  ]);
}

export type BetaPayload = {
  email: string;
  why: string;
  experience: string;
};

export async function sendBetaApplicationEmail(payload: BetaPayload) {
  const apiKey = getResendApiKey();
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
