/**
 * Zuordnung: Welcher SVG-Screen zeigt welchen App-Bereich?
 * Die SVGs liegen in public/captn-previews/ mit ihren beschreibenden Dateinamen.
 */
export const SCREENS = {
  /** Start/Dashboard – Tagesübersicht, Quick Actions */
  dashboard: "dashboard.svg",
  /** Training – KI-generierter Fitnessplan */
  training: "ki_fitnessplan.svg",
  /** Ernährung – Food Scan Ergebnis mit KI-Analyse */
  nutrition: "ki_food_scan_durchgeführt_essen_wurde_analysiert.svg",
  /** KI-Coach – Workout Fokus per Chat ändern */
  chat: "ki_fitness_coach_workout_fokus_aendern.svg",
  /** Profil / Onboarding – Ziele auswählen */
  profile: "onboarding_ziele_auswaehlen.svg",
  /** Fortschritt & Statistiken – KI Analyse */
  stats: "ki_fortschritt_analyse.svg",
  /** How it Works – Schritt 1: Profil erstellen (Fitnesslevel auswählen) */
  step1: "onboarding_fitnesslevelauswaehlen.svg",
  /** How it Works – Schritt 2: Tracking starten (Food Scan aktiv) */
  step2: "ki_food_scan.svg",
  /** How it Works – Schritt 3: Coach nutzen (KI-Chat: Was darf ich heute essen?) */
  step3: "ki_ernaehrungs_chat_kann_ich_mir_heute_erlauben_das_noch_zuessen.svg",
  /** How it Works – Schritt 4: Ergebnisse sehen (KI Fortschritt-Analyse) */
  step4: "ki_fortschritt_analyse.svg",
} as const;

/** Galerie: diverse App-Screens für die Preview-Sektion */
export const GALLERY_SCREENS = [
  "dashboard.svg",
  "workoutplan.svg",
  "ernaehrungs_tab_mit_heutigen_mahlzeite_kalorien_makros.svg",
  "ki_kalorienrechner.svg",
  "workout_abgeschlossen_zusammenfassung.svg",
  "user_profil_view.svg",
];

export function previewPath(filename: string): string {
  return `/captn-previews/${encodeURIComponent(filename)}`;
}
