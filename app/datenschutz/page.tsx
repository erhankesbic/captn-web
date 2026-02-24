import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung – Captn",
  description: "Datenschutzerklärung der Captn-Website.",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-12 sm:px-6">
      <article className="mx-auto max-w-2xl space-y-8 text-[var(--foreground)]">
        <div>
          <h1 className="text-2xl font-bold">Datenschutzerklärung</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Stand: Februar 2025
          </p>
        </div>

        <section>
          <h2 className="text-lg font-semibold">1. Verantwortlicher</h2>
          <p className="mt-2 text-[var(--muted)]">
            Erhan Kesbic, Seckbacher Landstr. 74, 60389 Frankfurt am Main.
            E-Mail: support@getcaptn.com (siehe Impressum).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">2. Cookies und Einwilligung</h2>
          <p className="mt-2 text-[var(--muted)]">
            Beim ersten Besuch erscheint ein Cookie-Hinweis. Du kannst wählen:
            alle Cookies akzeptieren, nur notwendige, oder in den Einstellungen
            einzelne Kategorien an- oder abwählen. Deine Wahl speichern wir
            lokal im Browser (localStorage), damit der Hinweis nicht erneut
            erscheint. Notwendige Cookies/Cookies, die für den Betrieb der
            Seite unerlässlich sind, setzen wir ohne Einwilligung. Alle weiteren
            (z. B. Statistik) nur mit deiner Einwilligung.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">3. Daten auf dieser Website</h2>
          <p className="mt-2 text-[var(--muted)]">
            Bei Kontaktformularen (z. B. Beta-Anmeldung) erheben wir: E-Mail-Adresse sowie
            die freiwilligen Angaben „Warum möchtest du Captn testen?“ und
            „Erfahrung Fitness & Ernährung“. Zweck: Kontaktaufnahme im Rahmen der
            Anmeldung. Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1
            lit. a DSGVO) durch Aktivierung der Checkbox und Absenden des
            Formulars.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">4. Empfänger und Dienste</h2>
          <p className="mt-2 text-[var(--muted)]">
            Die Formulardaten werden per E-Mail an support@getcaptn.com
            übermittelt. Dafür setzen wir den E-Mail-Dienst Resend ein (Anbieter:
            Resend Inc.). Resend kann Daten in den USA verarbeiten; je nach
            Konfiguration sind Standardvertragsklauseln bzw. EU-Server möglich.
            Hosting der Website: Vercel (Vercel Inc.). Weitere Infos findest du
            in den Datenschutzangaben von Resend und Vercel.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">5. Speicherdauer</h2>
          <p className="mt-2 text-[var(--muted)]">
            Die in der E-Mail an uns übermittelten Daten speichern wir, bis die
            Beta-Bewerbung abgeschlossen ist oder du uns zur Löschung aufforderst
            (sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">6. Deine Rechte</h2>
          <p className="mt-2 text-[var(--muted)]">
            Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
            der Verarbeitung und Datenübertragbarkeit sowie auf Widerspruch. Die
            Einwilligung kannst du jederzeit widerrufen. Beschwerden kannst du
            bei einer Datenschutz-Aufsichtsbehörde einreichen.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">7. Kontakt</h2>
          <p className="mt-2 text-[var(--muted)]">
            Für Datenschutzanfragen:{" "}
            <a
              href="mailto:support@getcaptn.com"
              className="text-[var(--accent)] underline"
            >
              support@getcaptn.com
            </a>
          </p>
        </section>

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
