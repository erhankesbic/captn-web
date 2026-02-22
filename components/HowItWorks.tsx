"use client";

import { motion } from "framer-motion";
import { SCREENS, previewPath } from "@/content/screens";

const steps = [
  {
    step: "01",
    title: "Profil erstellen",
    description:
      "Ziele, Fitnesslevel, Equipment und Gewohnheiten angeben – dein Coach wird darauf abgestimmt.",
    screenId: "step1" as const,
    color: "from-blue-500 to-indigo-600",
    shadowColor: "shadow-blue-500/30",
  },
  {
    step: "02",
    title: "Tracking starten",
    description:
      "Trainingspläne nutzen oder selbst erstellen. Mahlzeiten scannen oder eintragen. Alles an einem Ort.",
    screenId: "step2" as const,
    color: "from-violet-500 to-purple-600",
    shadowColor: "shadow-violet-500/30",
  },
  {
    step: "03",
    title: "Coach nutzen",
    description:
      "Fragen zu Technik, Ernährung oder Planung stellen. Tägliche Tipps und bei Premium eine Fortschrittsanalyse.",
    screenId: "step3" as const,
    color: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-500/30",
  },
  {
    step: "04",
    title: "Ergebnisse sehen",
    description:
      "Dashboard, wöchentliche Stats und Apple Health Sync. Jede Mahlzeit und jedes Workout analysiert und optimiert.",
    screenId: "step4" as const,
    color: "from-orange-500 to-amber-600",
    shadowColor: "shadow-orange-500/30",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[var(--section-alt)] px-6 py-20 sm:px-8 sm:py-28"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
            So funktioniert's
          </p>
          <h2
            id="how-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
          >
            In 4 Schritten zum Ziel
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[var(--muted)] leading-relaxed">
            Fang da an, wo du stehst – und bleib am Ball.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-12 sm:mt-32 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Background connecting line for desktop */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent -z-10"></div>

          {steps.map((s, i) => (
            <motion.article
              key={s.step}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group flex flex-col relative"
            >
              {/* Step number + connector */}
              <div className="mb-8 flex items-center justify-center lg:justify-start gap-4">
                <div
                  className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-xl font-bold text-white shadow-xl ${s.shadowColor} ring-4 ring-[var(--background)] z-10 transition-transform duration-300 group-hover:scale-110`}
                >
                  {s.step}
                </div>
              </div>

              {/* Screenshot */}
              <div className="phone-card overflow-hidden premium-card p-2 bg-white/50 backdrop-blur-sm">
                <img
                  src={previewPath(SCREENS[s.screenId])}
                  alt={`Schritt ${s.step}: ${s.title}`}
                  width={220}
                  height={391}
                  className="block h-auto w-full object-top rounded-xl transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="mt-8 flex flex-col text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[var(--foreground)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
                  {s.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mid-page CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#beta"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-8 py-4 text-base font-semibold text-[var(--background)] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[var(--foreground)]/20"
          >
            Jetzt als Beta-Tester bewerben
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
