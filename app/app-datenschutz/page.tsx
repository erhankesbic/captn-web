import Link from "next/link";

export const metadata = {
  title: "App Datenschutz – Captn",
  description:
    "Datenschutzerklärung der Captn iOS-App / Privacy Policy of the Captn iOS App.",
};

export default function AppDatenschutzPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-12 sm:px-6">
      <article className="mx-auto max-w-2xl space-y-16 text-[var(--foreground)]">
        {/* ══════════════════════════════════════════════
            DEUTSCH
           ══════════════════════════════════════════════ */}
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
                Löschung deiner Daten (&bdquo;Recht auf
                Vergessen-werden&ldquo;)
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

        {/* ══════════════════════════════════════════════
            ENGLISH
           ══════════════════════════════════════════════ */}
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold">
              Privacy Policy – Captn App
            </h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Last updated: February 16, 2026
            </p>
          </div>

          <section>
            <h2 className="text-lg font-semibold">1. Data Controller</h2>
            <p className="mt-2 text-[var(--muted)]">
              Erhan Kesbic
              <br />
              Email:{" "}
              <a
                href="mailto:support@getcaptn.de"
                className="text-[var(--accent)] underline"
              >
                support@getcaptn.de
              </a>
            </p>
            <p className="mt-4 text-[var(--muted)]">
              We take the protection of your personal data very seriously and
              comply with applicable data protection laws, in particular the
              GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">2. Data We Collect</h2>
            <ul className="mt-2 list-inside list-disc space-y-2 text-[var(--muted)]">
              <li>Account data: email address, name (optional)</li>
              <li>
                Health &amp; fitness data: height, weight, body fat
                percentage, fitness level, goals, pain areas, allergies,
                dietary preferences
              </li>
              <li>
                Usage data: training plans, nutrition plans, meal tracking,
                workout logs
              </li>
              <li>
                Photos: only when you use the food scan feature (image
                analysis)
              </li>
              <li>
                Apple Health data: only with your explicit consent (steps,
                active calories, weight)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              3. Purpose of Data Processing
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-2 text-[var(--muted)]">
              <li>
                Providing personalized training and nutrition plans using AI
              </li>
              <li>
                Analyzing your meal photos (AI-based nutritional analysis)
              </li>
              <li>Progress tracking and analysis</li>
              <li>Managing your subscription</li>
              <li>Improving the app and our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">4. AI Processing</h2>
            <p className="mt-2 text-[var(--muted)]">
              We use AI services (OpenAI) to create training and nutrition
              plans and to analyze food photos. Anonymized data is processed
              for this purpose. Your photos are used solely for analysis and
              are not permanently stored by third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">5. Data Storage</h2>
            <p className="mt-2 text-[var(--muted)]">
              Your data is stored on servers operated by Convex (USA). All
              transfers are encrypted (TLS). Authentication tokens are stored
              securely in the iOS Keychain.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              6. Your Rights (GDPR)
            </h2>
            <p className="mt-2 text-[var(--muted)]">You have the right to:</p>
            <ul className="mt-2 list-inside list-disc space-y-2 text-[var(--muted)]">
              <li>Access the personal data we hold about you</li>
              <li>Rectification of inaccurate data</li>
              <li>
                Erasure of your data (&ldquo;right to be forgotten&rdquo;)
              </li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Object to processing</li>
            </ul>
            <p className="mt-4 text-[var(--muted)]">
              You can delete your account and all associated data at any time
              in the app under Profile &gt; Delete Account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">7. Apple Health</h2>
            <p className="mt-2 text-[var(--muted)]">
              The connection to Apple Health is entirely optional. We only
              read the data types you have explicitly consented to. Apple
              Health data is not shared with third parties and is not used for
              advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">8. Contact</h2>
            <p className="mt-2 text-[var(--muted)]">
              For privacy-related questions, please contact us at:{" "}
              <a
                href="mailto:support@getcaptn.de"
                className="text-[var(--accent)] underline"
              >
                support@getcaptn.de
              </a>
            </p>
          </section>
        </div>

        {/* ── Links ── */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/app-nutzungsbedingungen"
            className="text-[var(--accent)] underline underline-offset-4"
          >
            App Nutzungsbedingungen / Terms of Use →
          </Link>
          <Link
            href="/"
            className="text-[var(--accent)] underline underline-offset-4"
          >
            ← Zurück zur Startseite / Back to Home
          </Link>
        </div>
      </article>
    </div>
  );
}
