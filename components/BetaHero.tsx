"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BetaHero() {
  return (
    <section className="relative overflow-hidden bg-mesh bg-mesh-animated px-6 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-24">
      {/* Floating particles */}
      {[
        { size: 6, x: 15, y: 30, dur: 7, del: 0, col: "var(--accent)" },
        { size: 10, x: 72, y: 45, dur: 5, del: 1.2, col: "#5856d6" },
        { size: 5, x: 40, y: 75, dur: 8, del: 2.5, col: "var(--accent)" },
        { size: 8, x: 85, y: 55, dur: 6, del: 0.8, col: "#5856d6" },
      ].map((p, i) => (
        <div
          key={i}
          className="floating-particle"
          aria-hidden="true"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.col,
            opacity: 0.4,
            ["--duration" as string]: `${p.dur}s`,
            ["--delay" as string]: `${p.del}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent)] backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
          </span>
          Feedback-Programm · TestFlight · iOS
        </motion.div>

        {/* App Icon */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-[1.5rem] bg-gradient-to-r from-[var(--accent)] to-[#5856d6] opacity-30 blur transition duration-500 group-hover:opacity-60" />
            <Image
              src="/logo/captndatalogo-iOS-Default-1024x1024@1x.png"
              alt="Captn App Icon"
              width={88}
              height={88}
              className="relative h-[88px] w-[88px] rounded-[1.25rem] shadow-2xl shadow-black/20 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              priority
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-gradient">Hilf uns, Capt&apos;n zu verbessern</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg leading-relaxed text-[var(--muted)] sm:text-xl max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Capt&apos;n ist jetzt im App Store – aber wir wollen noch besser werden.
          Gib uns dein Feedback und gestalte die Zukunft deines KI-Fitness-Coaches
          aktiv mit. Kostenlos via Apple TestFlight.
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="#beta-process"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent)]/80"
          >
            So läuft das Feedback-Programm
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="animate-bounce"
            >
              <path
                d="M8 3v10M4 9l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--section))",
        }}
      />
    </section>
  );
}
