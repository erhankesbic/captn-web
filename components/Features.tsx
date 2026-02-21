"use client";

import { motion } from "framer-motion";
import { SCREENS, previewPath } from "@/content/screens";

const features = [
  {
    id: "training" as const,
    tag: "Training",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    title: "Personalisierte Trainingspläne",
    subtitle: "Genau auf dich abgestimmt",
    description:
      "KI-generierte Pläne für Home & Gym, die sich deinem Alltag und Fortschritt anpassen. Live-Workout-Tracking, Übungsbibliothek und wöchentliche Stats. Nahtlos mit Apple Health verbunden.",
    bullets: [
      "Pläne für Home & Gym",
      "Live-Workout-Tracking",
      "Wöchentliche Fortschritts-Stats",
      "Apple Health Integration",
    ],
  },
  {
    id: "nutrition" as const,
    tag: "Ernährung",
    tagColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    title: "Ernährung & Food Scan",
    subtitle: "Tracke intuitiv",
    description:
      "Einfach Essen fotografieren – die KI erkennt Mahlzeiten und erfasst Makros automatisch. Mahlzeiten-Tracking, dynamische Kalorienziele und Rezepte. Alles in der App.",
    bullets: [
      "Foto-basierter Food Scan",
      "Automatische Makro-Erfassung",
      "Dynamische Kalorienziele",
      "Mahlzeit-Datenbank & Rezepte",
    ],
  },
  {
    id: "chat" as const,
    tag: "KI-Coach",
    tagColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
    title: "KI-Coach & Chat",
    subtitle: "Antworten auf deine Fragen",
    description:
      "Stelle Fragen zu Workouts, Technik, Diät und Rezepten. Tägliche personalisierte Tipps. Mit Premium: Fortschrittsanalyse deiner gesamten Historie.",
    bullets: [
      "Fragen zu Workout & Technik",
      "Ernährungs- & Rezeptberatung",
      "Tägliche personalisierte Tipps",
      "Premium: Fortschrittsanalyse",
    ],
  },
  {
    id: "dashboard" as const,
    tag: "Dashboard",
    tagColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    title: "Dein täglicher Überblick",
    subtitle: "Alles auf einen Blick",
    description:
      "Tagesübersicht: nächstes Workout, Kalorien-Saldo, Quick Actions für Food Scan und Coach. Apple Health Daten direkt integriert – damit du immer weißt, wo du stehst.",
    bullets: [
      "Tages-Übersicht auf einen Blick",
      "Nächstes Workout & Quick Actions",
      "Kalorien- und Makro-Saldo",
      "Apple Health Datensync",
    ],
  },
  {
    id: "profile" as const,
    tag: "Onboarding",
    tagColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
    title: "Profil & Onboarding",
    subtitle: "Dein Coach lernt dich kennen",
    description:
      "Ziele, Equipment, Ernährungsgewohnheiten, Lifestyle – umfassende Profilerstellung, damit dein Plan wirklich zu dir passt. Einmal einrichten, dauerhaft profitieren.",
    bullets: [
      "Ziele & Fitnesslevel festlegen",
      "Equipment & Gym angeben",
      "Ernährungsgewohnheiten",
      "Lifestyle & Tagesroutine",
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[var(--section)] px-6 py-20 sm:px-8 sm:py-28"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Features
          </p>
          <h2
            id="features-heading"
            className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            Alles, was du brauchst
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-[var(--muted)]">
            Dein All-in-One-Tracker für Training und Ernährung – mit KI-Coach.
          </p>
        </motion.div>

        <div className="mt-20 space-y-20 sm:mt-28 sm:space-y-28">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Screenshot */}
              <div
                className={`flex justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="phone-card relative">
                  {/* Tag inside image area */}
                  <div className="absolute left-4 top-4 z-10">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${feature.tagColor}`}>
                      {feature.tag}
                    </span>
                  </div>
                  <img
                    src={previewPath(SCREENS[feature.id])}
                    alt={`Captn App – ${feature.title}`}
                    width={300}
                    height={533}
                    className="block h-auto w-[260px] rounded-2xl object-top sm:w-[300px]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`flex flex-col justify-center text-center md:text-left ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
                  {feature.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {feature.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-sm text-[var(--foreground)] md:justify-start justify-center"
                    >
                      <span
                        className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white"
                        style={{ background: "var(--accent)" }}
                        aria-hidden="true"
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
