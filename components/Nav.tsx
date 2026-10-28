"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { APP_STORE_URL } from "@/lib/site";
import { AppleLogo, BrandMark } from "./ui";

const LINKS = [
  { href: "/#funktionen", label: "Funktionen" },
  { href: "/#watch", label: "Apple Watch" },
  { href: "/#preise", label: "Preise" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open
          ? "border-b border-[var(--hairline)] bg-[#08090e]"
          : solid
            ? "border-b border-[var(--hairline)] bg-[#08090e]/85 backdrop-blur-xl"
            : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Hauptnavigation" className="wrap flex h-16 items-center justify-between px-[var(--gutter)] md:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Capt'n – zur Startseite" onClick={() => setOpen(false)}>
          <BrandMark size={32} />
          <span className="display text-[19px]">Capt&apos;n</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold text-[var(--text-2)] transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !min-h-10 !px-4 !text-sm"
          >
            <AppleLogo size={15} />
            Laden
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-2)] hover:bg-white/5 md:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3 6.5h14M3 13.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-[var(--hairline)] px-[var(--gutter)] pb-5 md:hidden">
        <ul className="flex flex-col pt-2">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="display flex min-h-12 items-center border-b border-[var(--hairline)] text-xl"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
