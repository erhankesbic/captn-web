import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Datenschutz (App)",
  description:
    "Datenschutzerklärung der Capt'n-App für iPhone und Apple Watch / Privacy Policy of the Capt'n app.",
  alternates: { canonical: "/app-datenschutz" },
};

export default function AppDatenschutzPage() {
  return (
    <LegalPage>
        {/* ══════════════════════════════════════════════
            DEUTSCH
           ══════════════════════════════════════════════ */}
        <div>
          <div>
            <h1>
              Datenschutzerklärung der Captn App
            </h1>
            <p>
              Zuletzt aktualisiert: 16. Februar 2026
            </p>
          </div>

          <section>
            <h2>1. Verantwortlicher</h2>
            <p>
              Erhan Kesbic
              <br />
              Seckbacher Landstraße 74
              <br />
              60389 Frankfurt am Main, Deutschland
              <br />
              E-Mail:{" "}
              <a
                href="mailto:support@getcaptn.de"
              >
                support@getcaptn.de
              </a>
            </p>
            <p>
              Wir nehmen den Schutz deiner persönlichen Daten sehr ernst und
              halten uns an die geltenden Datenschutzgesetze, insbesondere die
              DSGVO.
            </p>
          </section>

          <section>
            <h2>
              2. Welche Daten wir erheben
            </h2>
            <ul>
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
            <h2>
              3. Zweck der Datenverarbeitung
            </h2>
            <ul>
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
            <h2>4. KI-Verarbeitung</h2>
            <p>
              Wir nutzen KI-Dienste (OpenAI) zur Erstellung von Trainings-
              und Ernährungsplänen sowie zur Analyse von Essensfotos. Dabei
              werden anonymisierte Daten verarbeitet. Deine Fotos werden nur
              zur Analyse genutzt und nicht dauerhaft bei Drittanbietern
              gespeichert.
            </p>
          </section>

          <section>
            <h2>5. Datenspeicherung</h2>
            <p>
              Deine Daten werden auf Servern von Convex (USA) gespeichert.
              Die Übertragung erfolgt verschlüsselt (TLS).
              Authentifizierungs-Token werden sicher in der iOS Keychain
              gespeichert.
            </p>
          </section>

          <section>
            <h2>
              6. Deine Rechte (DSGVO)
            </h2>
            <p>Du hast das Recht auf:</p>
            <ul>
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
            <p>
              Du kannst dein Konto und alle zugehörigen Daten jederzeit in
              der App unter Profil &gt; Account löschen entfernen.
            </p>
          </section>

          <section>
            <h2>7. Apple Health</h2>
            <p>
              Die Verbindung zu Apple Health ist vollständig optional. Wir
              lesen nur die Datentypen, denen du explizit zugestimmt hast.
              Apple Health Daten werden nicht an Dritte weitergegeben und
              nicht für Werbezwecke verwendet.
            </p>
          </section>

          <section>
            <h2>8. Kontakt</h2>
            <p>
              Bei Fragen zum Datenschutz erreichst du uns unter:{" "}
              <a
                href="mailto:support@getcaptn.de"
              >
                support@getcaptn.de
              </a>
            </p>
          </section>
        </div>

        {/* ── Trennlinie ── */}
        <hr />

        {/* ══════════════════════════════════════════════
            ENGLISH
           ══════════════════════════════════════════════ */}
        <div id="en">
          <div>
            <h1>
              Privacy Policy – Captn App
            </h1>
            <p>
              Last updated: February 16, 2026
            </p>
          </div>

          <section>
            <h2>1. Data Controller</h2>
            <p>
              Erhan Kesbic
              <br />
              Seckbacher Landstraße 74
              <br />
              60389 Frankfurt am Main, Germany
              <br />
              Email:{" "}
              <a
                href="mailto:support@getcaptn.de"
              >
                support@getcaptn.de
              </a>
            </p>
            <p>
              We take the protection of your personal data very seriously and
              comply with applicable data protection laws, in particular the
              GDPR.
            </p>
          </section>

          <section>
            <h2>2. Data We Collect</h2>
            <ul>
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
            <h2>
              3. Purpose of Data Processing
            </h2>
            <ul>
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
            <h2>4. AI Processing</h2>
            <p>
              We use AI services (OpenAI) to create training and nutrition
              plans and to analyze food photos. Anonymized data is processed
              for this purpose. Your photos are used solely for analysis and
              are not permanently stored by third-party providers.
            </p>
          </section>

          <section>
            <h2>5. Data Storage</h2>
            <p>
              Your data is stored on servers operated by Convex (USA). All
              transfers are encrypted (TLS). Authentication tokens are stored
              securely in the iOS Keychain.
            </p>
          </section>

          <section>
            <h2>
              6. Your Rights (GDPR)
            </h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Rectification of inaccurate data</li>
              <li>
                Erasure of your data (&ldquo;right to be forgotten&rdquo;)
              </li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Object to processing</li>
            </ul>
            <p>
              You can delete your account and all associated data at any time
              in the app under Profile &gt; Delete Account.
            </p>
          </section>

          <section>
            <h2>7. Apple Health</h2>
            <p>
              The connection to Apple Health is entirely optional. We only
              read the data types you have explicitly consented to. Apple
              Health data is not shared with third parties and is not used for
              advertising purposes.
            </p>
          </section>

          <section>
            <h2>8. Contact</h2>
            <p>
              For privacy-related questions, please contact us at:{" "}
              <a
                href="mailto:support@getcaptn.de"
              >
                support@getcaptn.de
              </a>
            </p>
          </section>
        </div>

        <hr />
        <p>
          <a href="/app-nutzungsbedingungen">Nutzungsbedingungen der App / Terms of Use →</a>
        </p>
      </LegalPage>
  );
}
