"use client";

import { useState } from "react";
import { APP_STORE_URL, FEATURE_MATRIX, PLANS, type Billing } from "@/lib/site";
import { Check } from "./ui";

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div role="radiogroup" aria-label="Abrechnung" className="stage inline-flex gap-1 !rounded-full p-1">
          {(
            [
              ["monthly", "Monatlich"],
              ["yearly", "Jährlich"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={billing === value}
              onClick={() => setBilling(value)}
              className={`min-h-11 rounded-full px-5 text-sm font-bold transition-colors ${
                billing === value ? "bg-[var(--accent)] text-[var(--accent-ink)]" : "text-[var(--text-2)] hover:text-white"
              }`}
            >
              {label}
              {value === "yearly" && (
                <span className={billing === value ? "ml-1.5" : "ml-1.5 text-[var(--accent)]"}>· bis −27 %</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3 md:items-stretch">
        {PLANS.map((plan) => {
          const yearly = billing === "yearly";
          return (
            <article
              key={plan.name}
              className={`relative flex flex-col p-7 ${
                plan.recommended
                  ? "rounded-[var(--radius-card)] border border-[var(--accent)]/60 bg-[linear-gradient(180deg,rgba(40,232,196,0.10),rgba(40,232,196,0.02))] shadow-[0_30px_80px_-40px_rgba(40,232,196,0.6)]"
                  : "stage"
              }`}
            >
              <div className="flex items-center gap-2">
                <h3 className="display text-2xl" style={{ color: plan.recommended ? "var(--accent)" : undefined }}>
                  {plan.name}
                </h3>
                {plan.recommended && (
                  <span className="rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-[var(--accent-ink)]">
                    Empfohlen
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-[var(--text-3)]">{plan.tagline}</p>

              <div className="mt-6 min-h-[92px] border-b border-[var(--hairline)] pb-6">
                {plan.price ? (
                  <>
                    <p className="flex items-baseline gap-1.5">
                      <span className="num text-[44px] leading-none">{plan.price[billing]}</span>
                      <span className="text-sm font-semibold text-[var(--text-3)]">{yearly ? "/Jahr" : "/Monat"}</span>
                    </p>
                    <p className="mt-2.5 flex flex-wrap items-center gap-2 text-sm text-[var(--text-2)]">
                      {yearly ? (
                        <>
                          <span>≈ {plan.perMonth}/Monat</span>
                          <span className="rounded-full bg-[var(--nutrition)]/15 px-2 py-0.5 text-xs font-bold text-[var(--nutrition)]">
                            {plan.savings}
                          </span>
                          {plan.yearlyTrial && (
                            <span className="rounded-full bg-white/8 px-2 py-0.5 text-xs font-bold text-white">
                              {plan.yearlyTrial}
                            </span>
                          )}
                        </>
                      ) : (
                        <span>jederzeit kündbar</span>
                      )}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="num text-[44px] leading-none">0 €</p>
                    <p className="mt-2.5 text-sm text-[var(--text-2)]">für immer kostenlos</p>
                  </>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3.5">
                {plan.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-[15px] text-[var(--text)]">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent)]">
                      <Check size={12} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn mt-8 w-full ${plan.recommended ? "btn-primary" : "btn-ghost"}`}
              >
                {plan.price ? (yearly && plan.yearlyTrial ? "Gratiswoche starten" : `${plan.name} wählen`) : "Kostenlos laden"}
              </a>
            </article>
          );
        })}
      </div>

      <details className="faq stage mt-8 overflow-hidden">
        <summary className="flex min-h-14 items-center justify-between gap-4 px-6 font-bold">
          Alle Funktionen im Vergleich
          <span className="plus text-2xl font-light text-[var(--accent)]" aria-hidden="true">
            +
          </span>
        </summary>
        <div className="overflow-x-auto border-t border-[var(--hairline)]">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-[var(--text-3)]">
                <th scope="col" className="px-6 py-3 font-bold">Funktion</th>
                <th scope="col" className="px-3 py-3 text-center font-bold">Free</th>
                <th scope="col" className="px-3 py-3 text-center font-bold">Basic</th>
                <th scope="col" className="px-3 py-3 text-center font-bold text-[var(--accent)]">Premium</th>
              </tr>
            </thead>
            <tbody>
              {FEATURE_MATRIX.map((row) => (
                <tr key={row.label} className="border-t border-[var(--hairline)]">
                  <th scope="row" className="px-6 py-3.5 text-left font-medium text-[var(--text)]">
                    {row.label}
                  </th>
                  {[row.free, row.basic, row.premium].map((v, i) => (
                    <td key={i} className="px-3 py-3.5 text-center">
                      {v === true ? (
                        <span className="inline-flex text-[var(--accent)]" aria-label="enthalten">
                          <Check />
                        </span>
                      ) : v === false ? (
                        <span className="text-[var(--text-3)]" aria-label="nicht enthalten">—</span>
                      ) : (
                        <span className="num">{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-[var(--text-3)]">
        Preise für Deutschland inkl. MwSt.; in anderen Ländern gilt der Preis im App Store. Abos verlängern sich
        automatisch und lassen sich jederzeit in den Einstellungen deiner Apple-ID kündigen. Die Gratiswoche gibt es
        beim Jahresabo für Neukunden.
      </p>
    </>
  );
}
