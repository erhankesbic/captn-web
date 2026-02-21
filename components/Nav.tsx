"use client";

import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#vorteile", label: "Vorteile" },
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "So funktioniert's" },
    { href: "#pricing", label: "Preise" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 glass border-b border-[var(--border)]/40"
      aria-label="Hauptnavigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-8">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-[var(--foreground)]"
          aria-label="Capt'n – Startseite"
        >
          <img
            src="/logo/captn-logo-fin.svg"
            alt=""
            className="h-9 w-auto"
            aria-hidden="true"
          />
          <span>Capt&apos;n</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-6 lg:flex" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#beta"
            className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[var(--accent-hover)] hover:-translate-y-0.5"
          >
            Jetzt bewerben
          </a>

          {/* Hamburger – mobile only */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted)] transition-colors hover:bg-[var(--foreground)]/8 hover:text-[var(--foreground)] lg:hidden"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[var(--border)]/40 px-6 pb-4 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-[var(--foreground)]/5 hover:text-[var(--foreground)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#beta"
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent-light)]"
              >
                Als Beta-Tester bewerben →
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
