import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung für Capt'n.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <LegalPage>
      <h1>Impressum</h1>
      <p>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>

      <h2>Anbieter</h2>
      <p>
        Erhan Kesbic
        <br />
        Seckbacher Landstraße 74
        <br />
        60389 Frankfurt am Main
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>Erhan Kesbic, Anschrift wie oben.</p>
    </LegalPage>
  );
}
