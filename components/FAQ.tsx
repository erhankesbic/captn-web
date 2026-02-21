"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    q: "Was ist Capt'n?",
    a: "Capt'n ist eine iOS-App, die KI als Personal Trainer und Ernährungsberater nutzt. Du bekommst personalisierte Trainingspläne, kannst Mahlzeiten per Foto analysieren lassen und einem KI-Coach Fragen zu Fitness und Ernährung stellen. Alles in einer App, auf Deutsch.",
  },
  {
    q: "Für welche Geräte ist Capt'n verfügbar?",
    a: "Aktuell nur für iPhone und iPad (iOS). Die App ist in der Beta-Phase und noch nicht im App Store – du kannst dich über diese Seite als Beta-Tester bewerben.",
  },
  {
    q: "Was kostet Capt'n?",
    a: "Es gibt eine kostenlose Stufe (Free) und zwei Bezahlstufen: Basic (4,99 €/Monat oder 44,99 €/Jahr) und Premium (7,99 €/Monat oder 69,99 €/Jahr). Mit dem Jahresabo sparst du deutlich. Details findest du in der Preistabelle oben.",
  },
  {
    q: "Wie läuft die Beta ab?",
    a: "Du bewirbst dich über das Formular. Wir melden uns per E-Mail und geben dir Zugang zur Beta. Dein Feedback hilft uns, Capt'n vor dem App-Store-Start zu verbessern.",
  },
  {
    q: "Werden meine Daten sicher behandelt?",
    a: "Wir nehmen Datenschutz ernst und sind auf DSGVO-Konformität ausgerichtet. Daten werden serverlos (Convex) verarbeitet. Apple Health-Daten bleiben in deiner Kontrolle. Eine ausführliche Datenschutzerklärung wird bereitgestellt.",
  },
  {
    q: "Brauche ich einen Browser für die App?",
    a: "Nein. Capt'n ist eine native iOS-App mit Anmeldung direkt in der App – keine Browser-Weiterleitung nötig.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section
      id="faq"
      className="bg-[var(--section-alt)] px-6 py-20 sm:px-8 sm:py-28"
      aria-labelledby="faq-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
          >
            Häufige Fragen
          </h2>
          <p className="mt-6 text-xl text-[var(--muted)] leading-relaxed">
            Du hast Fragen? Wir haben Antworten.
          </p>
        </div>

        <ul className="mt-16 space-y-4" role="list">
          {items.map((item, i) => (
            <li
              key={i}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)]/5"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span>{item.q}</span>
                <span
                  className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-300 ${
                    openIndex === i ? "rotate-45 border-[var(--accent)] bg-[var(--accent)] text-white" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-base leading-relaxed text-[var(--muted)]">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
