"use client";

import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-mesh bg-mesh-animated px-6 py-24 sm:px-8 sm:py-32"
      aria-labelledby="download-heading"
    >
      {/* Decorative gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--accent)]/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
            Jetzt verfügbar
          </p>
          <h2
            id="download-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
          >
            Jetzt im App Store
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[var(--muted)] leading-relaxed">
            Capt&apos;n ist da – lade dir die App jetzt kostenlos herunter und
            starte mit deinem persönlichen KI-Fitness-Coach.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* App Store badge */}
          <motion.a
            href="https://apps.apple.com/app/captn"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[var(--accent)] to-[#5856d6] opacity-30 blur transition duration-500 group-hover:opacity-60" />
            <div className="relative flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-8 py-5 shadow-xl backdrop-blur-md">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[var(--foreground)]"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                  Laden im
                </p>
                <p className="text-xl font-bold text-[var(--foreground)] -mt-0.5">
                  App Store
                </p>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { icon: "🔒", text: "DSGVO-konform" },
            { icon: "🍎", text: "Native iOS App" },
            { icon: "🇩🇪", text: "Made in Germany" },
            { icon: "🤖", text: "KI-gestützt" },
          ].map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--muted)] backdrop-blur-md"
            >
              <span aria-hidden="true">{badge.icon}</span>
              {badge.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
