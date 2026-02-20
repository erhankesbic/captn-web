const features = [
  {
    title: "KI-Training",
    description:
      "KI-generierte Trainingspläne, die zu deinem Profil passen. Live-Workout-Tracking, Übungsbibliothek und wöchentliche Statistiken. Apple Health verbunden.",
    icon: "💪",
  },
  {
    title: "Ernährung & Food Scan",
    description:
      "Einfach Essen fotografieren – die KI erkennt Mahlzeiten und erfasst Makros. Mahlzeiten-Tracking, dynamische Kalorienziele und Rezept-Integration.",
    icon: "🥗",
  },
  {
    title: "KI-Coach & Chat",
    description:
      "Stelle Fragen zu Workouts, Technik, Diät und Rezepten. Tägliche personalisierte Tipps. Premium: Fortschrittsanalyse deiner Historie.",
    icon: "💬",
  },
  {
    title: "Dashboard",
    description:
      "Tagesübersicht auf einen Blick: nächstes Workout, Kalorien-Saldo, Quick Actions für Food Scan und Coach. Apple Health Daten integriert.",
    icon: "📊",
  },
  {
    title: "Profil & Onboarding",
    description:
      "Umfassende Profilerstellung: Ziele, Equipment, Ernährungsgewohnheiten, Lifestyle. So wird dein Coach wirklich persönlich.",
    icon: "👤",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="border-t border-[var(--border)] bg-[var(--card)] px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="features-heading"
          className="text-center text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
        >
          Alles in einer App
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--muted)]">
          Dein persönlicher KI-Coach für Training & Ernährung – intelligent
          verbunden.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <li
              key={i}
              className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>
                {feature.icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[var(--muted)]">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
