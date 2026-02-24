"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SCREENS, previewPath } from "@/content/screens";

const steps = [
  {
    step: "01",
    title: "Profil erstellen",
    description: "Ziele, Fitnesslevel, Equipment und Gewohnheiten angeben – dein Coach wird darauf abgestimmt.",
    screenId: "step1" as const,
    color: "from-blue-500 to-indigo-600",
    shadowColor: "shadow-blue-500/30",
  },
  {
    step: "02",
    title: "Tracking starten",
    description: "Trainingspläne nutzen oder selbst erstellen. Mahlzeiten scannen oder eintragen. Alles an einem Ort.",
    screenId: "step2" as const,
    color: "from-violet-500 to-purple-600",
    shadowColor: "shadow-violet-500/30",
  },
  {
    step: "03",
    title: "Coach nutzen",
    description: "Fragen zu Technik, Ernährung oder Planung stellen. Tägliche Tipps und bei Premium eine Fortschrittsanalyse.",
    screenId: "step3" as const,
    color: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-500/30",
  },
  {
    step: "04",
    title: "Ergebnisse sehen",
    description: "Dashboard, wöchentliche Stats und Apple Health Sync. Jede Mahlzeit und jedes Workout analysiert und optimiert.",
    screenId: "step4" as const,
    color: "from-orange-500 to-amber-600",
    shadowColor: "shadow-orange-500/30",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const progressWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="bg-[var(--section-alt)] px-6 py-20 sm:px-8 sm:py-28 relative overflow-hidden"
      aria-labelledby="how-heading"
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
            So funktioniert&apos;s
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

        {/* Animated progress bar for desktop */}
        <div className="hidden lg:block mt-20 mb-8 relative">
          <div className="h-1 w-full rounded-full bg-[var(--border)]/50 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[#5856d6]"
              style={{ width: progressWidth }}
            />
          </div>
          {/* Step dots on progress bar */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-[6%]">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                className={`h-4 w-4 rounded-full bg-gradient-to-br ${s.color} shadow-lg ${s.shadowColor} ring-4 ring-[var(--background)]`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 300 }}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-12 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.article
              key={s.step}
              className="group flex flex-col relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Step number */}
              <div className="mb-8 flex items-center justify-center lg:justify-start gap-4">
                <motion.div
                  className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} text-xl font-bold text-white shadow-xl ${s.shadowColor} ring-4 ring-[var(--background)] z-10`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {s.step}
                </motion.div>
              </div>

              {/* Screenshot with parallax-like hover */}
              <div className="phone-card overflow-hidden premium-card p-2 bg-white/50 backdrop-blur-sm">
                <motion.img
                  src={previewPath(SCREENS[s.screenId])}
                  alt={`Schritt ${s.step}: ${s.title}`}
                  width={220}
                  height={391}
                  className="block h-auto w-full object-top rounded-xl"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Text */}
              <div className="mt-8 flex flex-col text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
                  {s.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://apps.apple.com/app/captn"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-glow group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-8 py-4 text-base font-semibold text-[var(--background)] transition-all hover:scale-105 hover:shadow-xl hover:shadow-[var(--foreground)]/20"
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
