/**
 * Zuordnung: Welcher Screenshot (1–14) zeigt welchen App-Bereich?
 * Die SVGs sind in public/captn-previews/1.svg … 14.svg.
 *
 * Anpassen: Öffne jede SVG im Browser und trage die passende Nummer ein.
 */
export const SCREENS = {
  /** Start/Dashboard (Tagesübersicht, nächste Session, Quick Actions) */
  dashboard: 1,
  /** Training (Pläne, Kalender, Workout) */
  training: 2,
  /** Ernährung / Food Scan / Mahlzeiten */
  nutrition: 3,
  /** KI-Chat / Coach */
  chat: 4,
  /** Profil / Onboarding / Einstellungen */
  profile: 5,
  /** Weiterer Screen (z.B. Statistiken) */
  stats: 6,
  /** How it Works – Schritt 1: Profil erstellen */
  step1: 7,
  /** How it Works – Schritt 2: Tracking starten */
  step2: 8,
  /** How it Works – Schritt 3: Coach nutzen */
  step3: 9,
  /** How it Works – Schritt 4: Ergebnisse sehen */
  step4: 10,
} as const;

/** Galerie: weitere App-Screens für die Preview-Sektion */
export const GALLERY_SCREENS = [11, 12, 13, 14];

export function previewPath(num: number): string {
  return `/captn-previews/${num}.svg`;
}
