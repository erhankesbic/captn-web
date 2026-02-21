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

        <div className="mt-16 grid gap-8 md:grid-cols-3 sm:mt-24">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.name}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className={`premium-card relative flex flex-col p-8 ${
                plan.highlighted
                  ? "ring-2 ring-[var(--accent)] shadow-2xl shadow-[var(--accent)]/20 scale-105 z-10"
                  : "border border-[var(--border)]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[#5856d6] px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[var(--accent)]/30">
                    Beliebtester Plan
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-[var(--foreground)]">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-[var(--muted)]">
                  {plan.description}
                </p>
              </div>

              <div className="mt-8 mb-8 pb-8 border-b border-[var(--border)]/50">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
                    {plan.priceMonthly}
                  </span>
                  <span className="text-base font-medium text-[var(--muted)]">/Monat</span>
                </div>
                {plan.priceYearly ? (
                  <p className="mt-3 flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
                    <span>{plan.priceYearly}/Jahr</span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      {plan.savings}
                    </span>
                  </p>
                ) : (
                  <p className="mt-3 text-sm font-medium text-[var(--muted)]">Dauerhaft kostenlos</p>
                )}
              </div>

              <ul className="flex-1 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-base font-medium text-[var(--foreground)]">
                    <span
                      className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white shadow-sm"
                      style={{ background: "var(--success)" }}
                      aria-hidden="true"
                    >
                      <svg width="10" height="10" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#beta"
                className={`mt-10 block w-full rounded-full py-4 text-center text-base font-bold transition-all hover:scale-105 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-[var(--accent)] to-[#5856d6] text-white shadow-xl shadow-[var(--accent)]/30 hover:shadow-2xl hover:shadow-[var(--accent)]/40"
                    : "bg-[var(--foreground)]/5 text-[var(--foreground)] hover:bg-[var(--foreground)]/10"
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
