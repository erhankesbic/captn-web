"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "captn-cookie-consent";

type Consent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultConsent: Consent = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function loadConsent(): Consent {
  if (typeof window === "undefined") return defaultConsent;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultConsent;
    const parsed = JSON.parse(raw) as Consent;
    return {
      necessary: true,
      analytics: parsed.analytics ?? false,
      marketing: parsed.marketing ?? false,
    };
  } catch {
    return defaultConsent;
  }
}

function saveConsent(consent: Consent) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // ignore
  }
}

export default function CookieEinstellungenPage() {
  const [settings, setSettings] = useState<Consent>(defaultConsent);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSettings(loadConsent());
  }, []);

  function handleSave() {
    saveConsent(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          Cookie-Einstellungen
        </h1>
        <p className="mt-2 text-[var(--muted)]">
          Hier kannst du deine Einwilligung anpassen. Details in der{" "}
          <Link href="/datenschutz" className="text-[var(--accent)] underline">
            Datenschutzerklärung
          </Link>
          .
        </p>

        <ul className="mt-8 space-y-6">
          <li className="flex items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
            <div>
              <span className="font-medium text-[var(--foreground)]">
                Notwendige
              </span>
              <p className="text-sm text-[var(--muted)]">
                Für den Betrieb der Seite, immer aktiv.
              </p>
            </div>
            <input
              type="checkbox"
              checked={true}
              disabled
              className="h-4 w-4 rounded border-[var(--border)]"
              aria-label="Notwendige Cookies (immer aktiv)"
            />
          </li>
          <li className="flex items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
            <div>
              <span className="font-medium text-[var(--foreground)]">
                Statistik
              </span>
              <p className="text-sm text-[var(--muted)]">
                Hilft uns, die Nutzung zu verstehen (z. B. wenn wir Analytics
                einsetzen).
              </p>
            </div>
            <input
              type="checkbox"
              checked={settings.analytics}
              onChange={(e) =>
                setSettings((s) => ({ ...s, analytics: e.target.checked }))
              }
              className="h-4 w-4 rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]"
              aria-label="Statistik-Cookies erlauben"
            />
          </li>
          <li className="flex items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
            <div>
              <span className="font-medium text-[var(--foreground)]">
                Marketing
              </span>
              <p className="text-sm text-[var(--muted)]">
                Für personalisierte Anzeigen (falls genutzt).
              </p>
            </div>
            <input
              type="checkbox"
              checked={settings.marketing}
              onChange={(e) =>
                setSettings((s) => ({ ...s, marketing: e.target.checked }))
              }
              className="h-4 w-4 rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]"
              aria-label="Marketing-Cookies erlauben"
            />
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            {saved ? "Gespeichert ✓" : "Auswahl speichern"}
          </button>
          <Link
            href="/"
            className="text-sm text-[var(--accent)] underline"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
