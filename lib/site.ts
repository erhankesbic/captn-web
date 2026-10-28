/**
 * Eine Quelle für alles, was auf mehreren Seiten steht.
 * Preise und Limits müssen zur App passen:
 *  - Preise: App Store Connect (Gruppe „Abos“, Deutschland), Stand Oktober 2026
 *  - Limits: Captn/Views/Subscription/SubscriptionFeatureMatrix.swift (In-App-Paywall)
 */
export const APP_STORE_URL =
  "https://apps.apple.com/de/app/captn-ki-fitness-ern%C3%A4hrung/id6759269133";

export const SUPPORT_EMAIL = "support@getcaptn.de";

export const SITE_URL = "https://getcaptn.de";

export type Billing = "monthly" | "yearly";

export type Plan = {
  name: string;
  tagline: string;
  /** Preis je Abrechnungszeitraum; null = kostenlos */
  price: Record<Billing, string> | null;
  /** Nur Jahresabo: umgerechnet je Monat und Ersparnis wie in der App (abgerundet) */
  perMonth?: string;
  savings?: string;
  /** Kostenlose Testphase am Jahresabo (Einführungsangebot in App Store Connect) */
  yearlyTrial?: string;
  highlights: string[];
  recommended?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Free",
    tagline: "Zum Reinkommen",
    price: null,
    highlights: [
      "10 KI-Anfragen pro Tag",
      "KI-Pläne bis 2 Wochen",
      "Workout-Modus mit Pausen-Timer",
      "Ernährung per Text, Barcode oder manuell",
      "Apple Health & Apple Watch",
    ],
  },
  {
    name: "Basic",
    tagline: "Mehr KI für jeden Tag",
    price: { monthly: "4,99 €", yearly: "44,99 €" },
    perMonth: "3,75 €",
    savings: "−24 %",
    yearlyTrial: "1 Woche gratis",
    highlights: [
      "30 KI-Anfragen pro Tag",
      "3 Bildanalysen pro Tag",
      "KI-Pläne bis 6 Wochen",
      "Training optimieren mit KI",
      "Anpassungen nach jedem Workout",
    ],
  },
  {
    name: "Premium",
    tagline: "Das volle Programm",
    price: { monthly: "7,99 €", yearly: "69,99 €" },
    perMonth: "5,83 €",
    savings: "−27 %",
    yearlyTrial: "1 Woche gratis",
    recommended: true,
    highlights: [
      "60 KI-Anfragen pro Tag",
      "5 Bildanalysen pro Tag",
      "KI-Pläne bis 8 Wochen",
      "Training optimieren mit KI",
      "KI-Fortschrittsanalyse",
    ],
  },
];

type Cell = string | boolean;

/** Spiegel von SubscriptionFeatureCatalog.rows in der App */
export const FEATURE_MATRIX: { label: string; free: Cell; basic: Cell; premium: Cell }[] = [
  { label: "KI-Chat", free: "10/Tag", basic: "30/Tag", premium: "60/Tag" },
  { label: "KI-Pläne", free: "2 Wo.", basic: "6 Wo.", premium: "8 Wo." },
  { label: "Bildanalysen", free: false, basic: "3/Tag", premium: "5/Tag" },
  { label: "Training optimieren", free: false, basic: true, premium: true },
  { label: "Post-Workout-Anpassung", free: false, basic: true, premium: true },
  { label: "Verpasste Sessions nachholen", free: false, basic: true, premium: true },
  { label: "KI-Übungsalternativen", free: false, basic: true, premium: true },
  { label: "Trainingsbereitschaft", free: false, basic: true, premium: true },
  { label: "Workouts verschieben", free: false, basic: "3 Tage", premium: "7 Tage" },
  { label: "Fortschrittsanalyse", free: false, basic: false, premium: true },
];
