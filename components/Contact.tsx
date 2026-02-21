export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-[#1d1d1f] px-6 py-16 sm:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/logo/captndatalogo-iOS-Default-1024x1024@1x.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-xl"
                aria-hidden="true"
              />
              <span className="text-lg font-bold text-white">Capt&apos;n</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Dein KI-Personal-Trainer & Ernährungsberater. Alles in einer iOS-App.
            </p>
            <p className="mt-3 text-xs text-white/40">
              getcaptn.de · getcaptn.com
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              App
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "#features", label: "Features" },
                { href: "#pricing", label: "Preise" },
                { href: "#beta", label: "Beta bewerben" },
                { href: "#faq", label: "FAQ" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              Kontakt
            </h3>
            <a
              href="mailto:support@getcaptn.com"
              className="text-sm text-white/60 transition-colors hover:text-white underline underline-offset-2"
            >
              support@getcaptn.com
            </a>

            <h3 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-widest text-white/50">
              Rechtliches
            </h3>
            <nav aria-label="Rechtliche Links">
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/impressum", label: "Impressum" },
                  { href: "/datenschutz", label: "Datenschutz" },
                  { href: "/cookie-einstellungen", label: "Cookie-Einstellungen" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Capt&apos;n. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
