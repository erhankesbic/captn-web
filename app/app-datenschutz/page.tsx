import Link from "next/link";

export const metadata = {
  title: "App Datenschutz & Nutzungsbedingungen – Captn",
  description:
    "Datenschutzerklärung und Nutzungsbedingungen der Captn iOS-App.",
};

export default function AppDatenschutzPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-12 sm:px-6">
      <article className="mx-auto max-w-2xl space-y-16 text-[var(--foreground)]">
        {/* ── Datenschutzerklärung ── */}
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold">
              Datenschutzerklärung der Captn App
            </h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Zuletzt aktualisiert: 16. Februar 2026
            </p>
          </div>

          <section>
            <h2 className="text-lg font-semibold">1. Verantwortlicher</h2>
            <p className="mt-2 text-[var(--muted)]">
              Erhan Kesbic
              <br />
              E-Mail:{" "}
              <a
                href="mailto:support@getcaptn.de"
                className="text-[var(--accent)] underline"
              >
                support@getcaptn.de
              </a>
            </p>
            <p className="mt-4 text-[var(--muted)]">
              Wir nehmen den Schutz deiner persönlichen Daten sehr ernst und
              halten uns an die geltenden Datenschutzgesetze, insbesondere die
              DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              2. Welche Daten wir erheben
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-2 text-[var(--muted)]">
              <li>Kontodaten: E-Mail-Adresse, Name (optional)</li>
              <li>
                Gesundheits- &amp; Fitnessdaten: Körpergröße, Gewicht,
                Körperfettanteil, Fitnesslevel, Ziele, Schmerzregionen,
                Allergien, Ernährungspräferenzen
              </li>
              <li>
                Nutzungsdaten: Trainingspläne, Ernährungspläne,
                Mahlzeiten-Tracking, Workout-Logs
              </li>
              <li>
                Fotos: Nur wenn du die Essens-Scan-Funktion nutzt
                (Bildanalyse)
              </li>
              <li>
                Apple Health Daten: Nur mit deiner ausdrücklichen Zustimmung
                (Schritte, aktive Kalorien, Gewicht)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              3. Zweck der Datenverarbeitung
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-2 text-[var(--muted)]">
              <li>
                Bereitstellung personalisierter Trainings- und
                Ernährungspläne mittels KI
              </li>
              <li>
                Analyse deiner Mahlzeiten-Fotos (KI-basierte
                Nährwertanalyse)
              </li>
              <li>Fortschrittsverfolgung und -analyse</li>
              <li>Verwaltung deines Abonnements</li>
              <li>Verbesserung der App und unserer Dienste</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">4. KI-Verarbeitung</h2>
            <p className="mt-2 text-[var(--muted)]">
              Wir nutzen KI-Dienste (OpenAI) zur Erstellung von Trainings-
              und Ernährungsplänen sowie zur Analyse von Essensfotos. Dabei
              werden anonymisierte Daten verarbeitet. Deine Fotos werden nur
              zur Analyse genutzt und nicht dauerhaft bei Drittanbietern
              gespeichert.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">5. Datenspeicherung</h2>
            <p className="mt-2 text-[var(--muted)]">
              Deine Daten werden auf Servern von Convex (USA) gespeichert.
              Die Übertragung erfolgt verschlüsselt (TLS).
              Authentifizierungs-Token werden sicher in der iOS Keychain
              gespeichert.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              6. Deine Rechte (DSGVO)
            </h2>
            <p className="mt-2 text-[var(--muted)]">Du hast das Recht auf:</p>
            <ul className="mt-2 list-inside list-disc space-y-2 text-[var(--muted)]">
              <li>Auskunft über deine gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>
                Löschung deiner Daten (&bdquo;Recht auf Vergessen-werden&ldquo;)
              </li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen die Verarbeitung</li>
            </ul>
            <p className="mt-4 text-[var(--muted)]">
              Du kannst dein Konto und alle zugehörigen Daten jederzeit in
              der App unter Profil &gt; Account löschen entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">7. Apple Health</h2>
            <p className="mt-2 text-[var(--muted)]">
              Die Verbindung zu Apple Health ist vollständig optional. Wir
              lesen nur die Datentypen, denen du explizit zugestimmt hast.
              Apple Health Daten werden nicht an Dritte weitergegeben und
              nicht für Werbezwecke verwendet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">8. Kontakt</h2>
            <p className="mt-2 text-[var(--muted)]">
              Bei Fragen zum Datenschutz erreichst du uns unter:{" "}
              <a
                href="mailto:support@getcaptn.de"
                className="text-[var(--accent)] underline"
              >
                support@getcaptn.de
              </a>
            </p>
          </section>
        </div>

        {/* ── Trennlinie ── */}
        <hr className="border-white/10" />

        {/* ── Nutzungsbedingungen ── */}
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Nutzungsbedingungen</h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Zuletzt aktualisiert: 16. Februar 2026
            </p>
          </div>

          <section>
            <h2 className="text-lg font-semibold">1. Geltungsbereich</h2>
            <p className="mt-2 text-[var(--muted)]">
              Diese Nutzungsbedingungen gelten für die Nutzung der Captn App,
              bereitgestellt von Erhan Kesbic. Mit der Nutzung der App
              akzeptierst du diese Bedingungen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              2. Leistungsbeschreibung
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Captn ist eine KI-gestützte Fitness- und Ernährungs-App, die
              personalisierte Trainings- und Ernährungspläne erstellt,
              Mahlzeiten per Foto analysiert und den Fortschritt verfolgt.
            </p>
            <p className="mt-4 text-[var(--muted)]">
              Die App ersetzt keine ärztliche Beratung. Konsultiere vor
              Beginn eines Trainingsprogramms deinen Arzt, insbesondere bei
              gesundheitlichen Einschränkungen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              3. Abonnements &amp; In-App-Käufe
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-2 text-[var(--muted)]">
              <li>
                Die App bietet kostenlose und kostenpflichtige Funktionen
              </li>
              <li>
                Abonnements werden über den Apple App Store abgewickelt
              </li>
              <li>
                Die Verlängerung erfolgt automatisch, sofern nicht 24 Stunden
                vor Ablauf gekündigt
              </li>
              <li>
                Du kannst dein Abo in den iOS-Einstellungen verwalten
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              4. KI-generierte Inhalte
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Trainings- und Ernährungspläne sowie Nährwertanalysen werden von
              KI erstellt. Diese Inhalte dienen als Orientierung und können
              Ungenauigkeiten enthalten. Wir übernehmen keine Haftung für
              KI-generierte Empfehlungen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">5. Account &amp; Daten</h2>
            <ul className="mt-2 list-inside list-disc space-y-2 text-[var(--muted)]">
              <li>
                Du bist für die Sicherheit deines Accounts verantwortlich
              </li>
              <li>Du kannst dein Konto jederzeit löschen</li>
              <li>
                Bei Löschung werden alle deine Daten unwiderruflich entfernt
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              6. Haftungsausschluss
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Die App wird &bdquo;wie sie ist&ldquo; bereitgestellt. Wir garantieren keine
              ununterbrochene Verfügbarkeit. Die Nutzung der Trainings- und
              Ernährungsempfehlungen erfolgt auf eigene Verantwortung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">7. Kontakt</h2>
            <p className="mt-2 text-[var(--muted)]">
              Erhan Kesbic
              <br />
              E-Mail:{" "}
              <a
                href="mailto:support@getcaptn.de"
                className="text-[var(--accent)] underline"
              >
                support@getcaptn.de
              </a>
            </p>
          </section>
        </div>

        <p className="pt-4">
          <Link
            href="/"
            className="text-[var(--accent)] underline underline-offset-4"
          >
            ← Zurück zur Startseite
          </Link>
        </p>
      </article>
    </div>
  );
}
