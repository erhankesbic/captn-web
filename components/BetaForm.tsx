"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function BetaForm() {
  const [email, setEmail] = useState("");
  const [why, setWhy] = useState("");
  const [experience, setExperience] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage("Bitte gib deine E-Mail-Adresse ein.");
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
        className="border-t border-[var(--border)] bg-[var(--card)] px-4 py-16 sm:px-6 sm:py-20"
        aria-labelledby="beta-heading"
      >
        <div className="mx-auto max-w-xl text-center">
          <h2
            id="beta-heading"
            className="text-3xl font-bold text-[var(--foreground)]"
          >
            Bewerbung abgeschickt
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Vielen Dank! Wir melden uns bei dir.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="beta"
      className="border-t border-[var(--border)] bg-[var(--card)] px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="beta-heading"
    >
      <div className="mx-auto max-w-xl">
        <h2
          id="beta-heading"
          className="text-center text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
        >
          Als Beta-Tester bewerben
        </h2>
        <p className="mt-4 text-center text-[var(--muted)]">
          Noch nicht im App Store – werde Teil der Beta und gib uns Feedback.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
          noValidate
        >
          <div>
            <label
              htmlFor="beta-email"
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              E-Mail-Adresse <span className="text-red-500">*</span>
            </label>
            <input
              id="beta-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.de"
              className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
              disabled={status === "loading"}
              autoComplete="email"
            />
          </div>
          <div>
            <label
              htmlFor="beta-why"
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              Warum möchtest du Captn testen?
            </label>
            <textarea
              id="beta-why"
              value={why}
              onChange={(e) => setWhy(e.target.value)}
              placeholder="Kurz erzählen …"
              rows={3}
              className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
              disabled={status === "loading"}
            />
          </div>
          <div>
            <label
              htmlFor="beta-experience"
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              Welche Erfahrung hast du im Bereich Fitness & Ernährung?
            </label>
            <textarea
              id="beta-experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Anfänger, Fortgeschritten, …"
              rows={3}
              className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
              disabled={status === "loading"}
            />
          </div>
          {errorMessage && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-[var(--accent)] py-4 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "loading" ? "Wird gesendet …" : "Jetzt bewerben"}
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-[var(--muted)]">
          Deine Angaben nutzen wir nur zur Kontaktaufnahme im Rahmen der
          Beta-Bewerbung. Keine Weitergabe an Dritte. Weitere Infos findest du
          in unserer Datenschutzerklärung (sobald verfügbar).
        </p>
      </div>
    </section>
  );
}
