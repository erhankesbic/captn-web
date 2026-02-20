export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
          Dein KI-Personal-Trainer & Ernährungsberater
        </h1>
        <p className="mt-6 text-lg text-[var(--muted)] sm:text-xl">
          Training + Ernährung in einer App – alles intelligent verbunden.
          Trainingspläne, die sich an deine Ziele anpassen. Einfach Essen
          fotografieren – Makros automatisch erfasst.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#beta"
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:opacity-90 sm:w-auto"
          >
            Als Beta-Tester bewerben
          </a>
          <a
            href="#features"
            className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] px-8 py-4 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)] sm:w-auto"
          >
            Mehr erfahren
          </a>
        </div>
        <p className="mt-6 text-sm text-[var(--muted)]">
          Nur für iOS · Beta-Phase · getcaptn.de
        </p>
      </div>
    </section>
  );
}
