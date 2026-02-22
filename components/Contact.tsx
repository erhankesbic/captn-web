import Image from "next/image";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-[#111111] px-6 py-20 sm:px-8 border-t border-white/5"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo/captndatalogo-iOS-Default-1024x1024@1x.png"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl shadow-lg shadow-black/50"
                aria-hidden={true}
              />
              <span className="text-2xl font-bold text-white tracking-tight">Capt&apos;n</span>
            </div>
            <p className="mt-6 text-base leading-relaxed text-white/60 max-w-xs">
              Dein KI-Personal-Trainer & Ernährungsberater. Alles in einer iOS-App.
            </p>
            <p className="mt-4 text-sm font-medium text-white/40">
              getcaptn.de · getcaptn.com
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white/40">
              App
            </h3>
            <ul className="space-y-4 text-base font-medium">
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
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white/40">
              Kontakt
            </h3>
            <a
              href="mailto:support@getcaptn.com"
              className="text-base font-medium text-white/60 transition-colors hover:text-white hover:underline underline-offset-4"
            >
              support@getcaptn.com
            </a>

            <h3 className="mb-6 mt-12 text-sm font-bold uppercase tracking-widest text-white/40">
              Rechtliches
            </h3>
            <nav aria-label="Rechtliche Links">
              <ul className="space-y-4 text-base font-medium">
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

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-white/40">
          <p>© {new Date().getFullYear()} Capt&apos;n. Alle Rechte vorbehalten.</p>
          <p>Made with <span className="text-red-500">♥</span> in DACH</p>
        </div>
      </div>
    </footer>
  );
}
