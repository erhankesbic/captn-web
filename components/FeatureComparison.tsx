"use client";

import { motion } from "framer-motion";

const rows = [
  { feature: "Food Image Analysen/Tag", free: "—", basic: "3", premium: "5" },
  { feature: "AI Chat Anfragen/Tag", free: "10", basic: "30", premium: "60" },
  { feature: "KI-Trainingsplan (Wochen)", free: "2", basic: "6", premium: "8" },
  { feature: "Manuelle Trainingspläne (Wochen)", free: "8", basic: "8", premium: "8" },
  { feature: "Fortschrittsanalyse (KI)", free: false, basic: false, premium: true },
  { feature: "Trainings-Chat", free: true, basic: true, premium: true },
  { feature: "Ernährungs-Chat", free: true, basic: true, premium: true },
  { feature: "Apple Health Sync", free: true, basic: true, premium: true },
  { feature: "Mahlzeiten-Tracking", free: true, basic: true, premium: true },
];

const plans = ["Free", "Basic", "Premium"];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full text-white" style={{ background: "var(--success)" }} aria-label="Inklusive">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
          <path d="M1.5 4.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    );
  }
  if (value === false) {
    return <span className="text-[var(--muted)]" aria-label="Nicht enthalten">—</span>;
  }
  return <span className="font-medium text-[var(--foreground)]">{value}</span>;
}

export default function FeatureComparison() {
  return (
    <motion.section
      id="vergleich"
      className="bg-[var(--section)] px-6 py-20 sm:px-8 sm:py-28"
      aria-labelledby="vergleich-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Vergleich
          </p>
          <h2
            id="vergleich-heading"
            className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            Plan-Vergleich
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-[var(--muted)]">
            Alle Features auf einen Blick – was ist in welchem Plan enthalten?
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
          <table className="w-full min-w-[480px] text-sm" role="table">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th
                  scope="col"
                  className="px-5 py-4 text-left font-semibold text-[var(--foreground)]"
                >
                  Feature
                </th>
                {plans.map((p, i) => (
                  <th
                    key={p}
                    scope="col"
                    className={`px-5 py-4 text-center font-semibold ${
                      i === 1 ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                    }`}
                  >
                    {p}
                    {i === 1 && (
                      <span className="ml-1.5 rounded-full bg-[var(--accent-light)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--accent)]">
                        ★
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-[var(--border)] last:border-0 even:bg-[var(--section-alt)]/40"
                >
                  <td className="px-5 py-3.5 text-[var(--foreground)]">{row.feature}</td>
                  <td className="px-5 py-3.5 text-center text-[var(--muted)]">
                    <Cell value={row.free} />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Cell value={row.basic} />
                  </td>
                  <td className="px-5 py-3.5 text-center text-[var(--muted)]">
                    <Cell value={row.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  );
}
