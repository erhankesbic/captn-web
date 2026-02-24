"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const vorteile = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "from-blue-500 to-indigo-600",
    shadowColor: "shadow-blue-500/30",
    title: "Kein Planungsstress mehr",
    text: "KI erstellt deinen Trainings- und Ernährungsplan – angepasst an deine Ziele und deinen Alltag. Du bleibst dran, ohne stundenlang zu planen.",
    stat: "80%",
    statLabel: "weniger Planungszeit",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M7 8h3m-3 3h3M14 8h3m-3 3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    shadowColor: "shadow-violet-500/30",
    title: "Alles in einer App",
    text: "Training, Mahlzeiten-Tracking, Food Scan und KI-Coach an einem Ort. Kein Hin und Her zwischen mehreren Apps.",
    stat: "1",
    statLabel: "App statt 4",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-500/30",
    title: "Passt sich dir an",
    text: "Dynamische Kalorienziele, personalisierte Tipps und Pläne, die mit deinem Fortschritt mitwachsen. Echter Coach, keine starren Templates.",
    stat: "24/7",
    statLabel: "Verfügbar",
  },
];

function GlowCard({
  children,
  className = "",
  index,
}: {
  children: React.ReactNode;
  className?: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
    /* subtle 3D tilt */
    const centerX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const centerY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    cardRef.current.style.transform = `perspective(800px) rotateY(${centerX * 4}deg) rotateX(${-centerY * 4}deg) translateY(-4px) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)";
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`glow-card group relative overflow-hidden p-8 ${className}`}
      style={{ transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Vorteile() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="vorteile"
      className="bg-[var(--section-alt)] px-6 py-20 sm:px-8 sm:py-28 relative overflow-hidden"
      aria-labelledby="vorteile-heading"
    >
      {/* Background decorative gradient */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-[var(--accent)]/5 to-purple-500/5 blur-3xl pointer-events-none"
      />

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]"
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Warum Captn?
          </motion.p>
          <h2
            id="vorteile-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            Vorteile auf einen Blick
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[var(--muted)] leading-relaxed">
            Drei gute Gründe, mit Captn zu starten.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
          {vorteile.map((v, i) => (
            <GlowCard key={v.title} index={i}>
              {/* Subtle background glow on hover */}
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${v.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />

              {/* Icon */}
              <div className={`relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${v.color} text-white shadow-lg ${v.shadowColor} ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {v.icon}
              </div>

              {/* Stat badge */}
              <div className="relative z-10 mb-4">
                <span className="text-3xl font-extrabold text-[var(--foreground)] counter-glow">
                  {v.stat}
                </span>
                <span className="ml-2 text-sm font-medium text-[var(--muted)]">
                  {v.statLabel}
                </span>
              </div>

              <h3 className="relative z-10 text-xl font-semibold text-[var(--foreground)]">
                {v.title}
              </h3>
              <p className="relative z-10 mt-4 text-[var(--muted)] leading-relaxed">
                {v.text}
              </p>
            </GlowCard>
          ))}
        </div>

        {/* Mid-page CTA */}
        <motion.div
          className="mt-16 text-center"
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
            Mehr erfahren
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
