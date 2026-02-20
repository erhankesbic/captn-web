"use client";

export default function Nav() {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "So funktioniert's" },
    { href: "#pricing", label: "Preise" },
    { href: "#vergleich", label: "Vergleich" },
    { href: "#beta", label: "Beta-Tester" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 glass border-b border-[var(--border)]"
      aria-label="Hauptnavigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-[var(--foreground)]"
        >
          Captn
        </a>
        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#beta"
          className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Jetzt bewerben
        </a>
      </div>
    </nav>
  );
}
