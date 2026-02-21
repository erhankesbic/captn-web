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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-6 pointer-events-none">
      <nav
        className="pointer-events-auto w-full max-w-5xl rounded-full glass border border-[var(--border)]/40 shadow-lg shadow-black/5 transition-all duration-300"
        aria-label="Hauptnavigation"
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-6">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-[var(--foreground)] transition-transform hover:scale-105"
            aria-label="Capt'n – Startseite"
          >
            <img
              src="/logo/captn-logo-fin.svg"
              alt=""
              className="h-8 w-auto"
              aria-hidden="true"
            />
            <span className="hidden sm:inline-block">Capt&apos;n</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden gap-8 lg:flex" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[var(--muted)] transition-all hover:text-[var(--foreground)] hover:drop-shadow-md"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#beta"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-2 text-sm font-semibold text-[var(--background)] transition-all hover:scale-105 hover:shadow-lg hover:shadow-[var(--foreground)]/20"
            >
              Jetzt bewerben
            </a>

            {/* Hamburger – mobile only */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:bg-[var(--foreground)]/8 hover:text-[var(--foreground)] lg:hidden"
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
          <div className="border-t border-[var(--border)]/40 px-4 pb-4 pt-2 lg:hidden">
            <ul className="flex flex-col gap-1" role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-[var(--foreground)]/5 hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#beta"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-xl bg-[var(--foreground)] px-4 py-3 text-center text-sm font-semibold text-[var(--background)] transition-all hover:bg-[var(--foreground)]/90"
                >
                  Jetzt bewerben
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
