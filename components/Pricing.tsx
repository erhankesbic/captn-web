const plans = [
  {
    name: "Free",
    priceMonthly: "0 €",
    priceYearly: null,
    savings: null,
    description: "Einstieg ohne Kosten",
    features: [
      "10 AI-Chat-Anfragen/Tag",
      "KI-Trainingsplan bis 2 Wochen",
      "Manuelle Pläne bis 8 Wochen",
      "Mahlzeiten-Tracking",
      "Apple Health Sync",
    ],
    cta: "Kostenlos starten",
    highlighted: false,
  },
  {
    name: "Basic",
    priceMonthly: "4,99 €",
    priceYearly: "44,99 €",
    savings: "40 % sparen",
    description: "Mehr Analysen & längere Pläne",
    features: [
      "3 Food-Scans/Tag",
      "30 AI-Chat-Anfragen/Tag",
      "KI-Trainingsplan bis 6 Wochen",
      "Manuelle Pläne bis 8 Wochen",
      "Mahlzeiten-Tracking",
      "Apple Health Sync",
    ],
    cta: "Basic wählen",
    highlighted: true,
  },
  {
    name: "Premium",
    priceMonthly: "7,99 €",
    priceYearly: "69,99 €",
    savings: "27 % sparen",
    description: "Maximum an KI & Analyse",
    features: [
      "5 Food-Scans/Tag",
      "60 AI-Chat-Anfragen/Tag",
      "KI-Trainingsplan bis 8 Wochen",
      "Manuelle Pläne bis 8 Wochen",
      "Fortschrittsanalyse (KI)",
      "Mahlzeiten-Tracking",
      "Apple Health Sync",
    ],
    cta: "Premium wählen",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-[var(--border)] bg-[var(--card)] px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="pricing-heading"
          className="text-center text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
        >
          Preise
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--muted)]">
          Fairplay-Freemium: Starte kostenlos, upgrade wenn du mehr willst.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-[var(--accent)] bg-[var(--background)] shadow-lg"
                  : "border-[var(--border)] bg-[var(--background)]"
              }`}
            >
              {plan.highlighted && (
                <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-white">
                  Beliebt
                </span>
              )}
              <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {plan.description}
              </p>
              <div className="mt-6">
                <span className="text-2xl font-bold text-[var(--foreground)]">
                  {plan.priceMonthly}
                </span>
                <span className="text-[var(--muted)]">/Monat</span>
                {plan.priceYearly && (
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {plan.priceYearly}/Jahr · {plan.savings}
                  </p>
                )}
              </div>
              <ul className="mt-6 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-green-600 dark:text-green-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#beta"
                className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-[var(--accent)] text-white"
                    : "border border-[var(--border)] text-[var(--foreground)]"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
