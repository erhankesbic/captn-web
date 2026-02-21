"use client";

import { motion } from "framer-motion";

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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[var(--section)] px-6 py-20 sm:px-8 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
            Stimmen
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
          >
            Was Beta-Tester sagen
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xl text-[var(--muted)] leading-relaxed">
            Bald teilen unsere ersten Tester ihre Erfahrungen. Sei dabei und
            schreib die erste Erfolgsgeschichte.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {placeholders.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="premium-card p-8"
              aria-hidden="true"
            >
              {/* Stars */}
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="16"
                    height="16"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                  </svg>
                ))}
              </div>
              <p className="mt-6 text-base italic leading-relaxed text-[var(--muted)]">
                &ldquo;{p.text}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-md"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent) 0%, #5856d6 100%)",
                  }}
                >
                  {p.initials}
                </div>
                <div>
                  <p className="text-base font-bold text-[var(--foreground)]">
                    {p.name}
                  </p>
                  <p className="text-sm font-medium text-[var(--muted)]">{p.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[var(--muted)]">
          * Beispielhafte Aussagen – echte Testimonials folgen nach dem
          Beta-Start
        </p>
      </div>
    </section>
  );
}
