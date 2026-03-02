import Link from "next/link";

export const metadata = {
  title: "App Nutzungsbedingungen – Captn",
  description:
    "Nutzungsbedingungen der Captn iOS-App / Terms of Use of the Captn iOS App.",
};

export default function AppNutzungsbedingungenPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-12 sm:px-6">
      <article className="mx-auto max-w-2xl space-y-16 text-[var(--foreground)]">
        {/* ══════════════════════════════════════════════
            DEUTSCH
           ══════════════════════════════════════════════ */}
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold">
              Nutzungsbedingungen der Captn App
            </h1>
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
              Die App wird &bdquo;wie sie ist&ldquo; bereitgestellt. Wir
              garantieren keine ununterbrochene Verfügbarkeit. Die Nutzung
              der Trainings- und Ernährungsempfehlungen erfolgt auf eigene
              Verantwortung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              7. Geistiges Eigentum
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Alle Inhalte, Designs und Funktionen der App sind urheberrechtlich
              geschützt. Eine Vervielfältigung, Verbreitung oder Veränderung
              ohne ausdrückliche Genehmigung ist untersagt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              8. Änderungen der Nutzungsbedingungen
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Wir behalten uns das Recht vor, diese Nutzungsbedingungen
              jederzeit zu ändern. Wesentliche Änderungen werden in der App
              oder per E-Mail mitgeteilt. Die fortgesetzte Nutzung der App
              nach einer Änderung gilt als Zustimmung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              9. Anwendbares Recht
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Es gilt deutsches Recht. Gerichtsstand ist Frankfurt am Main,
              soweit gesetzlich zulässig.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">10. Kontakt</h2>
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

        {/* ── Trennlinie ── */}
        <hr className="border-white/10" />

        {/* ══════════════════════════════════════════════
            ENGLISH
           ══════════════════════════════════════════════ */}
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold">
              Terms of Use – Captn App
            </h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Last updated: February 16, 2026
            </p>
          </div>

          <section>
            <h2 className="text-lg font-semibold">1. Scope</h2>
            <p className="mt-2 text-[var(--muted)]">
              These Terms of Use apply to the use of the Captn App, provided
              by Erhan Kesbic. By using the app, you accept these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              2. Description of Services
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Captn is an AI-powered fitness and nutrition app that creates
              personalized training and nutrition plans, analyzes meals via
              photo, and tracks your progress.
            </p>
            <p className="mt-4 text-[var(--muted)]">
              The app does not replace medical advice. Consult your doctor
              before starting any training program, especially if you have
              health conditions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              3. Subscriptions &amp; In-App Purchases
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-2 text-[var(--muted)]">
              <li>
                The app offers both free and paid features
              </li>
              <li>
                Subscriptions are processed through the Apple App Store
              </li>
              <li>
                Subscriptions renew automatically unless cancelled at least
                24 hours before the end of the current period
              </li>
              <li>
                You can manage your subscription in your iOS Settings
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              4. AI-Generated Content
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              Training plans, nutrition plans, and nutritional analyses are
              generated by AI. This content serves as guidance and may
              contain inaccuracies. We accept no liability for AI-generated
              recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">5. Account &amp; Data</h2>
            <ul className="mt-2 list-inside list-disc space-y-2 text-[var(--muted)]">
              <li>
                You are responsible for the security of your account
              </li>
              <li>You can delete your account at any time</li>
              <li>
                Upon deletion, all your data will be permanently removed
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              6. Disclaimer
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              The app is provided &ldquo;as is.&rdquo; We do not guarantee
              uninterrupted availability. The use of training and nutrition
              recommendations is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              7. Intellectual Property
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              All content, designs, and features of the app are protected by
              copyright. Reproduction, distribution, or modification without
              express permission is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              8. Changes to these Terms
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              We reserve the right to modify these Terms of Use at any time.
              Material changes will be communicated within the app or via
              email. Continued use of the app after a change constitutes
              acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              9. Governing Law
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              German law applies. The place of jurisdiction is Frankfurt am
              Main, to the extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">10. Contact</h2>
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
          </section>
        </div>

        {/* ── Links ── */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/app-datenschutz"
            className="text-[var(--accent)] underline underline-offset-4"
          >
            App Datenschutz / Privacy Policy →
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
