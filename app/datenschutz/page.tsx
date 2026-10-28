import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz (Website)",
  description: "Datenschutzerklärung für die Website getcaptn.de.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <LegalPage>
      <h1>Datenschutzerklärung für diese Website</h1>
      <p>Stand: Oktober 2026</p>
      <p>
        Diese Erklärung gilt für die Website getcaptn.de (und getcaptn.com). Für die iPhone- und Apple-Watch-App gilt die{" "}
        <Link href="/app-datenschutz">Datenschutzerklärung der App</Link>.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Erhan Kesbic, Seckbacher Landstraße 74, 60389 Frankfurt am Main, E-Mail:{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>

      <h2>2. Keine Cookies, kein Tracking</h2>
      <p>
        Diese Website setzt keine Cookies, verwendet keine Analyse- oder Werbedienste und bindet keine Inhalte von
        Drittanbietern ein. Schriften und Bilder werden von unserem eigenen Server ausgeliefert. Ein Cookie-Hinweis ist
        deshalb nicht nötig.
      </p>

      <h2>3. Hosting und Server-Protokolle</h2>
      <p>
        Die Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf
        verarbeitet Vercel technisch notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene Seite, Referrer und
        Browserkennung, um die Seite auszuliefern und vor Missbrauch zu schützen. Rechtsgrundlage ist unser berechtigtes
        Interesse an einem sicheren und stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Für Übermittlungen in die USA
        stützt sich Vercel auf das EU-US Data Privacy Framework und Standardvertragsklauseln.
      </p>

      <h2>4. Kontakt per E-Mail</h2>
      <p>
        Wenn du uns schreibst, verarbeiten wir deine E-Mail-Adresse und den Inhalt deiner Nachricht, um dein Anliegen zu
        beantworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Wir löschen die Nachricht, sobald sie erledigt ist und keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>5. Links zum App Store</h2>
      <p>
        Links zum App Store führen auf Seiten von Apple. Erst wenn du einem solchen Link folgst, gelten dort die
        Datenschutzbestimmungen von Apple.
      </p>

      <h2>6. Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
        Widerspruch. Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel beim
        Hessischen Beauftragten für Datenschutz und Informationsfreiheit.
      </p>
    </LegalPage>
  );
}
