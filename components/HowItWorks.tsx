const steps = [
  {
    step: 1,
    title: "Profil erstellen",
    description:
      "Ziele, Fitnesslevel, Equipment und Ernährungsgewohnheiten angeben – dein Coach wird darauf abgestimmt.",
  },
  {
    step: 2,
    title: "Tracking starten",
    description:
      "Trainingspläne nutzen oder selbst erstellen. Mahlzeiten scannen oder eintragen. Alles an einem Ort.",
  },
  {
    step: 3,
    title: "Coach nutzen",
    description:
      "Fragen zu Technik, Ernährung oder Planung stellen. Tägliche Tipps und bei Premium eine Fortschrittsanalyse.",
  },
  {
    step: 4,
    title: "Ergebnisse sehen",
    description:
      "Dashboard, wöchentliche Stats und Apple Health Sync. Jede Mahlzeit und jedes Workout analysiert und optimiert.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="how-heading"
          className="text-center text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
        >
          So funktioniert Captn
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--muted)]">
          Von der Anmeldung bis zu deinen Fortschritten – in wenigen Schritten.
        </p>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white"
                aria-hidden
              >
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
