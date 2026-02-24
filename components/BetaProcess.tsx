"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: "Bewirb dich hier",
    description:
      "Füll das Formular unten aus. Wir prüfen deine Bewerbung und schicken dir zeitnah eine Einladung per E-Mail.",
  },
  {
    step: "2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    title: "TestFlight laden",
    description:
      "Du bekommst einen Link, der die kostenlose Apple-App TestFlight \u00f6ffnet. Falls du sie noch nicht hast, installiere sie vorher aus dem App Store.",
  },
  {
    step: "3",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: "Einladung annehmen",
    description:
      "Klicke auf den Link in der E-Mail \u2192 TestFlight \u00f6ffnet sich \u2192 tippe auf Annehmen und dann Installieren. Fertig \u2013 Capt\u2019n ist auf deinem iPhone.",
  },
  {
    step: "4",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
    ),
    title: "Testen & Feedback geben",
    description:
      "Nutze die App im Alltag. Feedback kannst du direkt in TestFlight hinterlassen – mit Screenshots und Text. Jede Rückmeldung zählt!",
  },
];

export default function BetaProcess() {
  return (
    <section
      id="beta-process"
      className="bg-[var(--section)] px-6 py-20 sm:px-8 sm:py-28 relative overflow-hidden"
      aria-labelledby="beta-process-heading"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
            So läuft das Feedback-Programm
          </p>
          <h2
            id="beta-process-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
          >
            In 4 Schritten zum Tester
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[var(--muted)] leading-relaxed">
            Das Feedback-Programm läuft über Apples <strong className="text-[var(--foreground)]">TestFlight</strong> – sicher, einfach und kostenlos. Du brauchst nur ein iPhone.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="mt-16 sm:mt-20 grid gap-6 sm:gap-8 md:grid-cols-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              className="group relative premium-card p-8 flex gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Step number + icon */}
              <div className="flex-shrink-0">
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[#5856d6] text-white shadow-lg shadow-[var(--accent)]/25"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {s.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                    Schritt {s.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[var(--muted)]">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TestFlight info box */}
        <motion.div
          className="mt-12 sm:mt-16 premium-card p-8 sm:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            {/* TestFlight icon */}
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0D96F6]/10 dark:bg-[#0D96F6]/20">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" rx="8" fill="#0D96F6"/>
                  <path d="M18 8l2.5 6h6.5l-5 4 2 6.5-6-4.5-6 4.5 2-6.5-5-4h6.5z" fill="white" opacity="0.9"/>
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-[var(--foreground)]">
                Was ist TestFlight?
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[var(--muted)]">
                TestFlight ist Apples offizielles Programm für Beta-Tests. Es ist <strong className="text-[var(--foreground)]">kostenlos</strong>, sicher und direkt von Apple. Du installierst die App über einen Einladungslink – kein Jailbreak, keine Sicherheitsrisiken. Deine Daten bleiben geschützt, genau wie bei einer App aus dem App Store.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Kostenlos",
                  "Von Apple verifiziert",
                  "Kein Risiko",
                  "Automatische Updates",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--accent)]"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA to scroll down to form */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#beta"
            className="pulse-glow group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-8 py-4 text-base font-semibold text-[var(--background)] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[var(--foreground)]/20"
          >
            Jetzt für das Feedback-Programm bewerben
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-0.5">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
