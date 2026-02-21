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
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            App Vorschau
          </p>
          <h2
            id="app-previews-heading"
            className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            So sieht Captn aus
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-[var(--muted)]">
            Entdecke die App – Training, Ernährung und KI-Coach in einem.
          </p>
        </motion.div>

        {/* Scroll gallery */}
        <motion.div
          className="mt-14 -mx-6 sm:-mx-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex snap-gallery no-scrollbar overflow-x-auto gap-4 px-6 pb-6 sm:gap-6 sm:px-8">
            {GALLERY_SCREENS.map((num) => (
              <div
                key={num}
                className="flex-shrink-0 flex flex-col items-center"
                style={{ scrollSnapAlign: "center" }}
              >
                <div className="phone-card">
                  <img
                    src={previewPath(num)}
                    alt={labels[num] ?? `App Screen ${num}`}
                    width={240}
                    height={427}
                    className="block h-auto w-[200px] object-top sm:w-[240px]"
                    loading="lazy"
                  />
                </div>
                {labels[num] && (
                  <p className="mt-3 text-sm font-medium text-[var(--muted)]">
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
