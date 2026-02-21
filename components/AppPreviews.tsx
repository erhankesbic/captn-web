"use client";

import { motion } from "framer-motion";
import { GALLERY_SCREENS, previewPath } from "@/content/screens";

const labels: Record<number, string> = {
  11: "Stats & Analyse",
  12: "Workout-Tracking",
  13: "Mahlzeiten",
  14: "Coach-Chat",
};

export default function AppPreviews() {
  return (
    <section
      id="app-previews"
      className="bg-[var(--section)] px-6 py-20 sm:px-8 sm:py-28"
      aria-labelledby="app-previews-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
            App Vorschau
          </p>
          <h2
            id="app-previews-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
          >
            So sieht Captn aus
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[var(--muted)] leading-relaxed">
            Entdecke die App – Training, Ernährung und KI-Coach in einem.
          </p>
        </motion.div>

        {/* Scroll gallery */}
        <motion.div
          className="mt-20 -mx-6 sm:-mx-8 relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Fade edges for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[var(--section)] to-transparent z-10 pointer-events-none"></div>
          <div className="hidden md:block absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[var(--section)] to-transparent z-10 pointer-events-none"></div>

          <div className="flex snap-gallery no-scrollbar overflow-x-auto gap-8 px-6 pb-12 sm:gap-12 sm:px-8 pt-8">
            {GALLERY_SCREENS.map((num) => (
              <div
                key={num}
                className="flex-shrink-0 flex flex-col items-center group"
                style={{ scrollSnapAlign: "center" }}
              >
                <div className="phone-card premium-card p-2 bg-white/50 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl group-hover:shadow-[var(--accent)]/20">
                  <img
                    src={previewPath(num)}
                    alt={labels[num] ?? `App Screen ${num}`}
                    width={240}
                    height={427}
                    className="block h-auto w-[220px] rounded-xl object-top sm:w-[280px] transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                {labels[num] && (
                  <p className="mt-6 text-base font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                    {labels[num]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll hint on mobile */}
        <p className="mt-4 text-center text-xs text-[var(--muted)] sm:hidden">
          ← Swipen für mehr →
        </p>
      </div>
    </section>
  );
}
