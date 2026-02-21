"use client";

import { motion } from "framer-motion";
import { SCREENS, previewPath } from "@/content/screens";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[var(--section)] px-6 pt-16 pb-0 sm:px-8 sm:pt-24"
    >
      {/* Subtle background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,113,227,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-end gap-12 md:grid-cols-2 md:gap-8">
        {/* Left: Text */}
        <motion.div
          className="pb-16 text-center md:text-left md:pb-24"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="badge-accent mb-5 inline-block">
            Beta · Nur iOS · DACH
          </span>

          {/* App Icon */}
          <div className="mb-6 flex justify-center md:justify-start">
            <img
              src="/logo/captndatalogo-iOS-Default-1024x1024@1x.png"
              alt="Capt'n App Icon"
              width={80}
              height={80}
              className="h-20 w-20 rounded-[1.25rem] shadow-lg shadow-black/10 dark:shadow-black/30"
              loading="eager"
              decoding="async"
            />
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-[3.25rem] lg:text-6xl">
            Dein KI-Personal&shy;trainer &amp; Ernährungs&shy;berater
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            Training und Ernährung intelligent verbunden – mit einem Plan, der
            sich dir anpasst. Alles in einer App.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#beta"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[var(--accent)]/25 transition-all hover:bg-[var(--accent-hover)] hover:shadow-xl hover:shadow-[var(--accent)]/30 hover:-translate-y-0.5"
            >
              Als Beta-Tester bewerben
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-7 py-3.5 text-base font-medium text-[var(--foreground)] transition-all hover:bg-[var(--foreground)]/5 hover:-translate-y-0.5"
            >
              Features entdecken
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--muted)] md:justify-start">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              Kostenlos starten
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              Apple Health Sync
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              KI-Coach inklusive
            </span>
          </div>
        </motion.div>

        {/* Right: App mockup */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative">
            {/* Glow behind phone */}
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-90 rounded-[3rem] opacity-40 blur-3xl"
              style={{
                background: "linear-gradient(145deg, #0071e3 0%, #5856d6 100%)",
              }}
            />
            <div className="device-frame relative">
              <div className="device-frame-inner">
                <img
                  src={previewPath(SCREENS.dashboard)}
                  alt="Captn App – Dashboard"
                  width={300}
                  height={533}
                  className="block h-auto w-[260px] object-top sm:w-[300px]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--section))",
        }}
      />
    </section>
  );
}
