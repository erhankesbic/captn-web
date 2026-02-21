"use client";

import { motion } from "framer-motion";

const vorteile = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "from-blue-500 to-indigo-600",
    title: "Kein Planungsstress mehr",
    text: "KI erstellt deinen Trainings- und Ernährungsplan – angepasst an deine Ziele und deinen Alltag. Du bleibst dran, ohne stundenlang zu planen.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M7 8h3m-3 3h3M14 8h3m-3 3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    title: "Alles in einer App",
    text: "Training, Mahlzeiten-Tracking, Food Scan und KI-Coach an einem Ort. Kein Hin und Her zwischen mehreren Apps.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
    title: "Passt sich dir an",
    text: "Dynamische Kalorienziele, personalisierte Tipps und Pläne, die mit deinem Fortschritt mitwachsen. Echter Coach, keine starren Templates.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Vorteile() {
  return (
    <section
      id="vorteile"
      className="bg-[var(--section-alt)] px-6 py-16 sm:px-8 sm:py-24"
      aria-labelledby="vorteile-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Warum Captn?
          </p>
          <h2
            id="vorteile-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl"
          >
            Vorteile auf einen Blick
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
          {vorteile.map((v, i) => (
            <motion.article
              key={v.title}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="premium-card group relative overflow-hidden p-8"
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${v.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}></div>
              
              {/* Icon */}
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${v.color} text-white shadow-lg shadow-${v.color.split('-')[1]}/30 ring-1 ring-white/20`}
              >
                {v.icon}
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                {v.title}
              </h3>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                {v.text}
              </p>

              {/* Subtle gradient background on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at top left, rgba(0,113,227,0.04) 0%, transparent 70%)`,
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
