import Link from "next/link";

export const metadata = {
  title: "Impressum – Captn",
  description: "Impressum und Anbieterkennzeichnung für Captn.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-12 sm:px-6">
      <article className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          Impressum
        </h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Angaben gemäß § 5 TMG / Anbieterkennzeichnung
        </p>

        <section className="mt-8 space-y-6 text-[var(--foreground)]">
          <div>
            <h2 className="text-lg font-semibold">Verantwortlich für die Website</h2>
            <p className="mt-2 text-[var(--muted)]">
              Erhan Kesbic
              <br />
              Seckbacher Landstr. 74
              <br />
              60389 Frankfurt am Main
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Kontakt</h2>
            <p className="mt-2 text-[var(--muted)]">
              E-Mail:{" "}
              <a
                href="mailto:support@getcaptn.com"
                className="text-[var(--accent)] underline"
              >
                support@getcaptn.com
              </a>
            </p>
          </div>
        </section>

        <p className="mt-10">
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
