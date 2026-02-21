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

function loadConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    return {
      necessary: true,
      analytics: parsed.analytics ?? false,
      marketing: parsed.marketing ?? false,
    };
  } catch {
    return null;
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

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<Consent>(defaultConsent);

  useEffect(() => {
    const stored = loadConsent();
    setVisible(stored === null);
    if (stored) setSettings(stored);
  }, []);

  function acceptAll() {
    const consent: Consent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(consent);
    setSettings(consent);
    setVisible(false);
    setShowSettings(false);
  }

  function acceptNecessaryOnly() {
    saveConsent(defaultConsent);
    setSettings(defaultConsent);
    setVisible(false);
    setShowSettings(false);
  }

  function saveSettings() {
    saveConsent(settings);
    setVisible(false);
    setShowSettings(false);
  }

  if (!visible && !showSettings) return null;

  return (
    <>
      {/* Overlay when settings open */}
      {showSettings && (
        <div
          className="fixed inset-0 z-[100] bg-black/40"
          aria-hidden
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Settings modal */}
      {showSettings && (
        <div
          className="fixed bottom-4 left-4 right-4 z-[101] max-h-[80vh] overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl sm:left-1/2 sm:right-auto sm:w-full sm:max-w-md sm:-translate-x-1/2"
          role="dialog"
          aria-labelledby="cookie-settings-title"
          aria-modal="true"
        >
          <h2
            id="cookie-settings-title"
            className="text-lg font-semibold text-[var(--foreground)]"
          >
            Cookie-Einstellungen
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Wähle, welche Cookies wir nutzen dürfen. Details in der{" "}
            <Link href="/datenschutz" className="text-[var(--accent)] underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center justify-between gap-4">
              <div>
                <span className="font-medium text-[var(--foreground)]">
                  Notwendige
                </span>
                <p className="text-xs text-[var(--muted)]">
                  Für Betrieb der Seite, immer aktiv.
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
            <li className="flex items-center justify-between gap-4">
              <div>
                <span className="font-medium text-[var(--foreground)]">
                  Statistik
                </span>
                <p className="text-xs text-[var(--muted)]">
                  Hilft uns, die Nutzung zu verstehen (z. B. wenn wir Analytics
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
            <li className="flex items-center justify-between gap-4">
              <div>
                <span className="font-medium text-[var(--foreground)]">
                  Marketing
                </span>
                <p className="text-xs text-[var(--muted)]">
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
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={saveSettings}
              className="flex-1 rounded-full bg-[var(--accent)] py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              Auswahl speichern
            </button>
            <button
              type="button"
              onClick={() => setShowSettings(false)}
              className="rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)]"
            >
              Abbrechen
            </button>
          </div>
        </div>
      )}

      {/* Main banner */}
      {visible && !showSettings && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[100] border-t border-[var(--border)] bg-[var(--card)] p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:p-6"
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
        >
          <div className="mx-auto max-w-4xl">
            <h2
              id="cookie-banner-title"
              className="text-base font-semibold text-[var(--foreground)]"
            >
              Cookies & Datenschutz
            </h2>
            <p id="cookie-banner-desc" className="mt-1 text-sm text-[var(--muted)]">
              Wir nutzen Cookies nur nach deiner Einwilligung. Notwendige Cookies
              sind für die Funktion der Seite erforderlich. Mehr in unserer{" "}
              <Link
                href="/datenschutz"
                className="text-[var(--accent)] underline"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
              >
                Alle akzeptieren
              </button>
              <button
                type="button"
                onClick={acceptNecessaryOnly}
                className="rounded-full border border-[var(--border)] bg-[var(--background)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--border)]"
              >
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="rounded-full border border-[var(--border)] bg-[var(--background)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--border)]"
              >
                Einstellungen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
