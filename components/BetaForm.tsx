"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function BetaForm() {
  const [email, setEmail] = useState("");
  const [why, setWhy] = useState("");
  const [experience, setExperience] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage("Bitte gib deine E-Mail-Adresse ein.");
      setStatus("error");
      return;
    }
    if (!consent) {
      setErrorMessage("Bitte akzeptiere die Datenschutzerklärung.");
      setStatus("error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage("Bitte gib eine gültige E-Mail-Adresse ein.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          why: why.trim(),
          experience: experience.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMessage(
          data.message || "Versand fehlgeschlagen. Bitte später erneut versuchen."
        );
        setStatus("error");
        return;
      }
      setStatus("success");
      setEmail("");
      setWhy("");
      setExperience("");
    } catch {
      setErrorMessage(
        "Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section
        id="beta"
        className="bg-[var(--section-alt)] px-6 py-20 sm:px-8 sm:py-28"
        aria-labelledby="beta-heading"
      >
        <motion.div
          className="mx-auto max-w-xl text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: "var(--success)" }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M5 14l6 6 12-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2
            id="beta-heading"
            className="text-3xl font-semibold tracking-tight text-[var(--foreground)]"
          >
            Bewerbung abgeschickt!
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Vielen Dank! Wir melden uns bei dir, sobald die Beta startet.
          </p>
        </motion.div>
      </section>
    );
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 disabled:opacity-50";

  return (
    <section
      id="beta"
      className="bg-[var(--section-alt)] px-6 py-20 sm:px-8 sm:py-28"
      aria-labelledby="beta-heading"
    >
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 md:items-start">
        {/* Left: Context */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Beta-Programm
          </p>

          {/* App Icon */}
          <div className="mt-5 mb-2">
            <img
              src="/logo/captndatalogo-iOS-Default-1024x1024@1x.png"
              alt="Capt'n App Icon"
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl shadow-lg shadow-black/10 dark:shadow-black/30"
              loading="lazy"
              decoding="async"
            />
          </div>

          <h2
            id="beta-heading"
            className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            Sei als Erster dabei
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
            Noch nicht im App Store – werde Beta-Tester und gib uns Feedback.
            Du bekommst frühzeitigen Zugang und hilfst, Capt&apos;n vor dem Launch zu formen.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Frühzeitiger App-Zugang",
              "Direkter Feedback-Kanal zum Team",
              "Kostenlose Nutzung während der Beta",
              "Einfluss auf neue Features",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[var(--foreground)]">
                <span
                  className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white"
                  style={{ background: "var(--accent)" }}
                  aria-hidden="true"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="premium-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="beta-email"
                  className="block text-sm font-semibold text-[var(--foreground)]"
                >
                  E-Mail-Adresse{" "}
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="beta-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="deine@email.de"
                  className={inputClass}
                  disabled={status === "loading"}
                  autoComplete="email"
                />
              </div>

              <div>
                <label
                  htmlFor="beta-why"
                  className="block text-sm font-semibold text-[var(--foreground)]"
                >
                  Warum möchtest du Capt&apos;n testen?{" "}
                  <span className="text-[var(--muted)] font-normal">(optional)</span>
                </label>
                <textarea
                  id="beta-why"
                  value={why}
                  onChange={(e) => setWhy(e.target.value)}
                  placeholder="Kurz erzählen …"
                  rows={3}
                  className={inputClass}
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label
                  htmlFor="beta-experience"
                  className="block text-sm font-semibold text-[var(--foreground)]"
                >
                  Fitness & Ernährungs-Erfahrung{" "}
                  <span className="text-[var(--muted)] font-normal">(optional)</span>
                </label>
                <textarea
                  id="beta-experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Anfänger, Fortgeschritten, …"
                  rows={3}
                  className={inputClass}
                  disabled={status === "loading"}
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="beta-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  disabled={status === "loading"}
                  className="mt-1 h-4 w-4 flex-shrink-0 rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]"
                />
                <label htmlFor="beta-consent" className="text-sm text-[var(--muted)] leading-relaxed">
                  Ich habe die{" "}
                  <a
                    href="/datenschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] font-medium hover:underline underline-offset-2"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und akzeptiere die Verarbeitung meiner Angaben.{" "}
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
              </div>

              {errorMessage && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-900/20 dark:text-red-400"
                >
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[#5856d6] py-4 text-base font-bold text-white shadow-xl shadow-[var(--accent)]/30 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-[var(--accent)]/40 disabled:opacity-60 disabled:scale-100"
              >
                {status === "loading" ? "Wird gesendet …" : "Jetzt als Beta-Tester bewerben"}
              </button>
            </form>
          </div>
          <p className="mt-4 text-center text-sm text-[var(--muted)]">
            Weitere Infos:{" "}
            <a
              href="/datenschutz"
              className="text-[var(--accent)] font-medium hover:underline underline-offset-2"
            >
              Datenschutzerklärung
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
