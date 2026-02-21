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
  },
  {
    step: "02",
    title: "Tracking starten",
    description:
      "Trainingspläne nutzen oder selbst erstellen. Mahlzeiten scannen oder eintragen. Alles an einem Ort.",
    screenId: "step2" as const,
    color: "from-violet-500 to-purple-600",
  },
  {
    step: "03",
    title: "Coach nutzen",
    description:
      "Fragen zu Technik, Ernährung oder Planung stellen. Tägliche Tipps und bei Premium eine Fortschrittsanalyse.",
    screenId: "step3" as const,
    color: "from-emerald-500 to-teal-600",
  },
  {
    step: "04",
    title: "Ergebnisse sehen",
    description:
      "Dashboard, wöchentliche Stats und Apple Health Sync. Jede Mahlzeit und jedes Workout analysiert und optimiert.",
    screenId: "step4" as const,
    color: "from-orange-500 to-amber-600",
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
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            So funktioniert's
          </p>
          <h2
            id="how-heading"
            className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            In 4 Schritten zum Ziel
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-[var(--muted)]">
            Fang da an, wo du stehst – und bleib am Ball.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.article
              key={s.step}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group flex flex-col"
            >
              {/* Step number + connector */}
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-sm font-bold text-white shadow-md`}
                >
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden h-px flex-1 lg:block"
                    style={{
                      background: "linear-gradient(to right, var(--border), transparent)",
                    }}
                  />
                )}
              </div>

              {/* Screenshot */}
              <div className="phone-card overflow-hidden">
                <img
                  src={previewPath(SCREENS[s.screenId])}
                  alt={`Schritt ${s.step}: ${s.title}`}
                  width={220}
                  height={391}
                  className="block h-auto w-full object-top"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="mt-5 flex flex-col">
                <h3 className="text-base font-semibold text-[var(--foreground)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {s.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
