"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SCREENS, previewPath } from "@/content/screens";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-mesh px-6 pt-20 pb-12 sm:px-8 sm:pt-32 sm:pb-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 md:gap-12">
        {/* Left: Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--accent)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            </span>
            Beta · Nur iOS · DACH
          </motion.div>

          {/* App Icon */}
          <div className="mb-8 flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-[1.5rem] bg-gradient-to-r from-[var(--accent)] to-[#5856d6] opacity-30 blur transition duration-500 group-hover:opacity-60"></div>
              <Image
                src="/logo/captndatalogo-iOS-Default-1024x1024@1x.png"
                alt="Capt'n App Icon"
                width={88}
                height={88}
                className="relative h-[88px] w-[88px] rounded-[1.25rem] shadow-2xl shadow-black/20 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-[4rem] lg:text-[4.5rem]">
            <span className="text-gradient">Dein KI-Personal&shy;trainer &amp;</span><br />
            <span className="text-gradient-accent">Ernährungs&shy;berater</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] sm:text-xl max-w-xl mx-auto md:mx-0">
            Training und Ernährung intelligent verbunden – mit einem Plan, der
            sich dir anpasst. Alles in einer App.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#beta"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[var(--foreground)] px-8 py-4 text-base font-semibold text-[var(--background)] transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[var(--foreground)]/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[#5856d6] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="relative z-10">Als Beta-Tester bewerben</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/50 px-8 py-4 text-base font-medium text-[var(--foreground)] backdrop-blur-md transition-all hover:bg-[var(--foreground)]/5 hover:scale-105"
            >
              Features entdecken
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[var(--muted)] md:justify-start">
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[var(--success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Kostenlos starten
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[var(--success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Apple Health Sync
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[var(--success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              KI-Coach inklusive
            </span>
          </div>
        </motion.div>

        {/* Right: App mockup */}
        <motion.div
          className="flex justify-center md:justify-end relative"
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: "1000px" }}
        >
          <motion.div 
            className="relative z-10"
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            {/* Glow behind phone */}
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-110 rounded-[3rem] opacity-50 blur-3xl"
              style={{
                background: "linear-gradient(145deg, var(--accent) 0%, #5856d6 100%)",
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
          </motion.div>
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
