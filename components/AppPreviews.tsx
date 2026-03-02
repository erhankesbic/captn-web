"use client";

import { motion } from "framer-motion";
import { GALLERY_SCREENS, previewPath } from "@/content/screens";

const labels: Record<string, string> = {
  "dashboard.svg": "Dashboard",
  "workoutplan.svg": "Workoutplan",
  "ernaehrungs_tab_mit_heutigen_mahlzeite_kalorien_makros.svg": "Ernährung & Makros",
  "ki_kalorienrechner.svg": "KI Kalorienrechner",
  "workout_abgeschlossen_zusammenfassung.svg": "Workout abgeschlossen",
  "user_profil_view.svg": "Mein Profil",
};

/* Duplicate the items so the marquee loops seamlessly */
const marqueeItems = [...GALLERY_SCREENS, ...GALLERY_SCREENS];

export default function AppPreviews() {
  return (
    <section
      id="app-previews"
      className="bg-[var(--section)] px-6 py-20 sm:px-8 sm:py-28 overflow-hidden"
      aria-labelledby="app-previews-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
            App Vorschau
          </p>
          <h2
            id="app-previews-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
          >
            So sieht Capt&apos;n aus
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[var(--muted)] leading-relaxed">
            Entdecke die App – Training, Ernährung und KI-Coach in einem.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Gallery */}
      <motion.div
        className="mt-20 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[var(--section)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[var(--section)] to-transparent z-10 pointer-events-none" />

        <div className="marquee-container">
          <div className="marquee-track" style={{ gap: "2rem" }}>
            {marqueeItems.map((file, i) => (
              <div
                key={`${file}-${i}`}
                className="flex-shrink-0 flex flex-col items-center group"
              >
                <div className="phone-card premium-card p-2 bg-white/50 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-6 group-hover:shadow-2xl group-hover:shadow-[var(--accent)]/20 group-hover:scale-[1.03]">
                  <img
                    src={previewPath(file)}
                    alt={labels[file] ?? "App Screen"}
                    width={240}
                    height={427}
                    className="block h-auto w-[200px] rounded-xl object-top sm:w-[260px] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                {labels[file] && (
                  <p className="mt-6 text-base font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                    {labels[file]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interaction hint */}
        <motion.p
          className="mt-8 text-center text-sm text-[var(--muted)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          Hover zum Pausieren der Galerie
        </motion.p>
      </motion.div>
    </section>
  );
}
