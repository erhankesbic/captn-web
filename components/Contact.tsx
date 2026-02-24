import Image from "next/image";
import Link from "next/link";

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
              Dein KI-Personal-Trainer & Ernährungsberater. Jetzt im App Store.
            </p>
            {/* App Store badge */}
            <a href="https://apps.apple.com/app/captn" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all hover:bg-white/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <p className="text-[10px] font-medium text-white/50 uppercase tracking-wider">Laden im</p>
                <p className="text-sm font-bold text-white -mt-0.5">App Store</p>
              </div>
            </a>
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
                { href: "/#features", label: "Features" },
                { href: "/#pricing", label: "Preise" },
                { href: "https://apps.apple.com/app/captn", label: "App laden" },
                { href: "/#faq", label: "FAQ" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
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
