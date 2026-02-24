"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const placeholders = [
  {
    initials: "ML",
    name: "Max L.",
    text: "Endlich eine App, die sich wirklich an meinen Alltag anpasst. Der KI-Coach ist beeindruckend.",
    role: "Fitness-Enthusiast",
  },
  {
    initials: "SK",
    name: "Sarah K.",
    text: "Der Food Scan spart mir täglich Zeit. Einfach fotografieren und die Makros sind erfasst.",
    role: "Ernährungs-bewusst",
  },
  {
    initials: "TM",
    name: "Tom M.",
    text: "Ich habe viele Apps getestet – Capt'n ist die erste, bei der Training und Ernährung wirklich verbunden sind.",
    role: "Hobby-Athlet",
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const idx = ((page % placeholders.length) + placeholders.length) % placeholders.length;

  const paginate = useCallback(
    (newDir: number) => setPage(([p]) => [p + newDir, newDir]),
    []
  );

  // Auto-advance every 5s
  useEffect(() => {
    const iv = setInterval(() => paginate(1), 5000);
    return () => clearInterval(iv);
  }, [paginate]);

  const p = placeholders[idx];

  return (
    <section
      id="testimonials"
      className="bg-[var(--section)] px-6 py-20 sm:px-8 sm:py-28 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
            Stimmen
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
          >
            Was unsere Nutzer sagen
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl text-[var(--muted)] leading-relaxed">
            Echte Stimmen von unserer Community – werde Teil der
            Erfolgsgeschichte.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="mt-16 relative">
          {/* Navigation arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--card)] border border-[var(--border)] shadow-lg hover:scale-110 transition-transform text-[var(--foreground)]"
            aria-label="Vorheriges Testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--card)] border border-[var(--border)] shadow-lg hover:scale-110 transition-transform text-[var(--foreground)]"
            aria-label="Nächstes Testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="premium-card p-10 sm:p-14 text-center"
                aria-hidden="true"
              >
                {/* Quote icon */}
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)]/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--accent)]">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, j) => (
                    <motion.svg
                      key={j}
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      fill="currentColor"
                      aria-hidden="true"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.08 }}
                    >
                      <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                    </motion.svg>
                  ))}
                </div>

                <p className="mt-8 text-xl sm:text-2xl italic leading-relaxed text-[var(--foreground)] font-medium">
                  &ldquo;{p.text}&rdquo;
                </p>

                <div className="mt-10 flex items-center justify-center gap-4">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg"
                    style={{ background: "linear-gradient(135deg, var(--accent) 0%, #5856d6 100%)" }}
                  >
                    {p.initials}
                  </div>
                  <div className="text-left">
                    <p className="text-base font-bold text-[var(--foreground)]">{p.name}</p>
                    <p className="text-sm font-medium text-[var(--muted)]">{p.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {placeholders.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > idx ? 1 : -1])}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === idx
                    ? "w-8 bg-[var(--accent)]"
                    : "w-2.5 bg-[var(--border)] hover:bg-[var(--muted)]"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-[var(--muted)]">
          * Beispielhafte Aussagen aus der Community
        </p>
      </div>
    </section>
  );
}
