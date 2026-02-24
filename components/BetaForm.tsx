"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

/* Live counter of remaining spots – purely cosmetic urgency */
function SpotsCounter() {
  const [spots, setSpots] = useState(47);
  useEffect(() => {
    const iv = setInterval(() => {
      setSpots((s) => {
        if (s <= 12) return s;
        return Math.random() > 0.7 ? s - 1 : s;
      });
    }, 8000);
    return () => clearInterval(iv);
  }, []);
  return (
    <motion.div
      className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 shadow-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
      </span>
      Noch {spots} Tester-Plätze verfügbar
    </motion.div>
  );
}

/* Social proof badge */
function SocialProof() {
  return (
    <motion.div
      className="mt-8 flex items-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      {/* Avatar stack */}
      <div className="flex -space-x-2">
        {["ML", "SK", "TM", "JR"].map((initials, i) => (
          <div
            key={initials}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--background)] text-[10px] font-bold text-white shadow-sm"
            style={{
              background: `linear-gradient(135deg, var(--accent) 0%, #5856d6 100%)`,
              zIndex: 4 - i,
            }}
          >
            {initials}
          </div>
        ))}
      </div>
      <p className="text-sm text-[var(--muted)]">
        <span className="font-bold text-[var(--foreground)]">500+</span> haben sich bereits angemeldet
      </p>
    </motion.div>
  );
}

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
        setErrorMessage(data.message || "Versand fehlgeschlagen. Bitte später erneut versuchen.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setEmail("");
      setWhy("");
      setExperience("");
    } catch {
      setErrorMessage("Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.");
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <motion.div
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
            style={{ background: "var(--success)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <svg width="36" height="36" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M5 14l6 6 12-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          <h2
            id="beta-heading"
            className="text-4xl font-bold tracking-tight text-[var(--foreground)]"
          >
            Bewerbung abgeschickt! 🎉
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Vielen Dank! Wir melden uns bei dir, sobald die Beta startet.
          </p>
        </motion.div>
      </section>
    );
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3.5 text-[var(--foreground)] placeholder:text-[var(--muted)]/60 transition-all focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-lg focus:shadow-[var(--accent)]/5 disabled:opacity-50";

  return (
    <section
      id="beta"
      className="bg-[var(--section-alt)] px-6 py-20 sm:px-8 sm:py-28 relative overflow-hidden"
      aria-labelledby="beta-heading"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent)]/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 md:items-start">
        {/* Left: Context */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SpotsCounter />

          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-[var(--accent)]">
            Feedback-Programm
          </p>

          {/* App Icon */}
          <motion.div
            className="mt-5 mb-2"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/logo/captndatalogo-iOS-Default-1024x1024@1x.png"
              alt="Capt'n App Icon"
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl shadow-lg shadow-black/10 dark:shadow-black/30"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <h2
            id="beta-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            Teste neue Features zuerst
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
            Capt&apos;n ist jetzt im App Store – aber es gibt immer neue Features zu testen.
            Werde Teil unseres Feedback-Programms und teste die neuesten Funktionen
            bevor alle anderen.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Neue Features zuerst testen",
              "Direkter Feedback-Kanal zum Team",
              "Kostenlose Nutzung über TestFlight",
              "Einfluss auf neue Features",
            ].map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 text-[var(--foreground)] font-medium"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <span
                  className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white shadow-md"
                  style={{ background: "var(--accent)" }}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </motion.li>
            ))}
          </ul>

          <SocialProof />
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="premium-card p-8 relative overflow-hidden">
            {/* Subtle shimmer line at top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="beta-email" className="block text-sm font-semibold text-[var(--foreground)]">
                  E-Mail-Adresse <span className="text-red-500" aria-hidden="true">*</span>
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
                <label htmlFor="beta-why" className="block text-sm font-semibold text-[var(--foreground)]">
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
                <label htmlFor="beta-experience" className="block text-sm font-semibold text-[var(--foreground)]">
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
                  <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-medium hover:underline underline-offset-2">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und akzeptiere die Verarbeitung meiner Angaben.{" "}
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
              </div>

              <AnimatePresence>
                {errorMessage && (
                  <motion.p
                    role="alert"
                    className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-900/20 dark:text-red-400"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="pulse-glow w-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[#5856d6] py-4 text-base font-bold text-white shadow-xl shadow-[var(--accent)]/30 transition-all hover:shadow-2xl hover:shadow-[var(--accent)]/40 disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/>
                    </svg>
                    Wird gesendet …
                  </span>
                ) : (
                  "Jetzt als Tester bewerben →"
                )}
              </motion.button>
            </form>
          </div>
          <p className="mt-4 text-center text-sm text-[var(--muted)]">
            Weitere Infos:{" "}
            <a href="/datenschutz" className="text-[var(--accent)] font-medium hover:underline underline-offset-2">
              Datenschutzerklärung
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
