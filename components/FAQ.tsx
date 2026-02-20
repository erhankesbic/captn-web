"use client";

import { useState } from "react";

const items = [
  {
    q: "Was ist Captn?",
    a: "Captn ist eine iOS-App, die KI als Personal Trainer und Ernährungsberater nutzt. Du bekommst personalisierte Trainingspläne, kannst Mahlzeiten per Foto analysieren lassen und einem KI-Coach Fragen zu Fitness und Ernährung stellen. Alles in einer App, auf Deutsch.",
  },
  {
    q: "Für welche Geräte ist Captn verfügbar?",
    a: "Aktuell nur für iPhone und iPad (iOS). Die App ist in der Beta-Phase und noch nicht im App Store – du kannst dich über diese Seite als Beta-Tester bewerben.",
  },
  {
    q: "Was kostet Captn?",
    a: "Es gibt eine kostenlose Stufe (Free) und zwei Bezahlstufen: Basic (4,99 €/Monat oder 44,99 €/Jahr) und Premium (7,99 €/Monat oder 69,99 €/Jahr). Mit dem Jahresabo sparst du deutlich. Details findest du in der Preistabelle oben.",
  },
  {
    q: "Wie läuft die Beta ab?",
    a: "Du bewirbst dich über das Formular. Wir melden uns per E-Mail und geben dir Zugang zur Beta. Dein Feedback hilft uns, Captn vor dem App-Store-Start zu verbessern.",
  },
  {
    q: "Werden meine Daten sicher behandelt?",
    a: "Wir nehmen Datenschutz ernst und sind auf DSGVO-Konformität ausgerichtet. Daten werden serverlos (Convex) verarbeitet. Apple Health-Daten bleiben in deiner Kontrolle. Eine ausführliche Datenschutzerklärung wird bereitgestellt.",
  },
  {
    q: "Brauche ich einen Browser für die App?",
    a: "Nein. Captn ist eine native iOS-App mit Anmeldung in der App – keine Browser-Weiterleitung nötig.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="text-center text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
        >
          Häufige Fragen
        </h2>
        <p className="mt-4 text-center text-[var(--muted)]">
          Kurze Antworten auf die wichtigsten Fragen.
        </p>
        <ul className="mt-12 space-y-2">
          {items.map((item, i) => (
            <li
              key={i}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium text-[var(--foreground)]"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                {item.q}
                <span
                  className={`ml-2 text-[var(--muted)] transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`overflow-hidden border-t border-[var(--border)] ${
                  openIndex === i ? "block" : "hidden"
                }`}
              >
                <p className="px-4 py-3 text-sm text-[var(--muted)]">
                  {item.a}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
