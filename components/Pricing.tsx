"use client";

import { motion } from "framer-motion";

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
    accentColor: "text-[var(--muted)]",
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
    accentColor: "text-[var(--accent)]",
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
    accentColor: "text-[var(--muted)]",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[var(--section-alt)] px-6 py-20 sm:px-8 sm:py-28"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Preise
          </p>
          <h2
            id="pricing-heading"
            className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            Fair & transparent
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-[var(--muted)]">
            Fairplay-Freemium: Starte kostenlos, upgrade wenn du mehr willst.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 sm:mt-16">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.name}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className={`relative flex flex-col rounded-2xl p-7 ${
                plan.highlighted
                  ? "border-2 border-[var(--accent)] bg-[var(--card)] shadow-xl shadow-[var(--accent)]/10"
                  : "border border-[var(--border)] bg-[var(--card)]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[var(--accent)] px-4 py-1 text-xs font-semibold text-white shadow">
                    Beliebtester Plan
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {plan.description}
                </p>
              </div>

              <div className="mt-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
                    {plan.priceMonthly}
                  </span>
                  <span className="text-sm text-[var(--muted)]">/Monat</span>
                </div>
                {plan.priceYearly ? (
                  <p className="mt-1.5 flex items-center gap-2 text-sm text-[var(--muted)]">
                    <span>{plan.priceYearly}/Jahr</span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      {plan.savings}
                    </span>
                  </p>
                ) : (
                  <p className="mt-1.5 text-sm text-[var(--muted)]">Dauerhaft kostenlos</p>
                )}
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--foreground)]">
                    <span
                      className="flex h-4.5 w-4.5 flex-shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: "var(--success)", width: "18px", height: "18px" }}
                      aria-hidden="true"
                    >
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#beta"
                className={`mt-8 block w-full rounded-full py-3.5 text-center text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? "bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/25 hover:bg-[var(--accent-hover)]"
                    : "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--foreground)]/5"
                }`}
              >
                {plan.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
