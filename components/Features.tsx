"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SCREENS, previewPath } from "@/content/screens";

const features = [
  {
    id: "training" as const,
    tag: "Training",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    color: "from-blue-500/20 to-indigo-600/20",
    title: "Personalisierte Trainingspläne",
    subtitle: "Genau auf dich abgestimmt",
    description:
      "KI-generierte Pläne für Home & Gym, die sich deinem Alltag und Fortschritt anpassen. Live-Workout-Tracking, Übungsbibliothek und wöchentliche Stats.",
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
    color: "from-emerald-500/20 to-teal-600/20",
    title: "Ernährung & Food Scan",
    subtitle: "Tracke intuitiv",
    description:
      "Einfach Essen fotografieren – die KI erkennt Mahlzeiten und erfasst Makros automatisch. Mahlzeiten-Tracking, dynamische Kalorienziele und Rezepte.",
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
    color: "from-violet-500/20 to-purple-600/20",
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
    color: "from-orange-500/20 to-amber-600/20",
    title: "Dein täglicher Überblick",
    subtitle: "Alles auf einen Blick",
    description:
      "Tagesübersicht: nächstes Workout, Kalorien-Saldo, Quick Actions für Food Scan und Coach. Apple Health Daten direkt integriert.",
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
    color: "from-pink-500/20 to-rose-600/20",
    title: "Profil & Onboarding",
    subtitle: "Dein Coach lernt dich kennen",
    description:
      "Ziele, Equipment, Ernährungsgewohnheiten, Lifestyle – umfassende Profilerstellung, damit dein Plan wirklich zu dir passt.",
    bullets: [
      "Ziele & Fitnesslevel festlegen",
      "Equipment & Gym angeben",
      "Ernährungsgewohnheiten",
      "Lifestyle & Tagesroutine",
    ],
  },
];

/* Feature row with parallax image on scroll */
function FeatureRow({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const isOdd = index % 2 === 1;

  return (
    <motion.div
      ref={rowRef}
      className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
    >
      {/* Screenshot */}
      <div className={`flex justify-center relative ${isOdd ? "md:order-2" : ""}`}>
        {/* Decorative background glow */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr ${feature.color} blur-3xl rounded-full -z-10 opacity-60`}
        />

        <motion.div
          className="phone-card relative group"
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tag inside image area */}
          <div className="absolute left-4 top-4 z-10">
            <motion.span
              className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md border border-white/20 shadow-sm ${feature.tagColor}`}
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {feature.tag}
            </motion.span>
          </div>
          <img
            src={previewPath(SCREENS[feature.id])}
            alt={`Captn App – ${feature.title}`}
            width={300}
            height={533}
            className="block h-auto w-[260px] rounded-2xl object-top sm:w-[300px] transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center text-center md:text-left ${
          isOdd ? "md:order-1" : ""
        }`}
      >
        <motion.p
          className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]"
          initial={{ opacity: 0, x: isOdd ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {feature.subtitle}
        </motion.p>
        <motion.h3
          className="mt-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl"
          initial={{ opacity: 0, x: isOdd ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {feature.title}
        </motion.h3>
        <motion.p
          className="mt-5 text-lg leading-relaxed text-[var(--muted)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          {feature.description}
        </motion.p>
        <ul className="mt-8 space-y-4">
          {feature.bullets.map((b, bi) => (
            <motion.li
              key={b}
              className="flex items-center gap-4 text-base font-medium text-[var(--foreground)] md:justify-start justify-center"
              initial={{ opacity: 0, x: isOdd ? 16 : -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + bi * 0.08 }}
            >
              <span
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white shadow-md shadow-[var(--accent)]/30"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              >
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5.5l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {b}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[var(--section)] px-6 py-20 sm:px-8 sm:py-28 relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
            Features
          </p>
          <h2
            id="features-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
          >
            Alles, was du brauchst
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[var(--muted)] leading-relaxed">
            Dein All-in-One-Tracker für Training und Ernährung – mit KI-Coach.
          </p>
        </motion.div>

        <div className="mt-24 space-y-32 sm:mt-32 sm:space-y-40">
          {features.map((feature, i) => (
            <FeatureRow key={feature.id} feature={feature} index={i} />
          ))}
        </div>

        {/* Mid-page CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://apps.apple.com/app/captn"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-glow group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-8 py-4 text-base font-semibold text-[var(--background)] transition-all hover:scale-105 hover:shadow-xl"
          >
            Jetzt im App Store
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
