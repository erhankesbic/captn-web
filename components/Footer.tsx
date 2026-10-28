import Link from "next/link";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/site";
import { BrandMark } from "./ui";

const LEGAL = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz (Website)" },
  { href: "/app-datenschutz", label: "Datenschutz (App)" },
  { href: "/app-nutzungsbedingungen", label: "Nutzungsbedingungen (App)" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-[var(--bg-deep)] px-[var(--gutter)] pb-10 pt-16 md:px-8">
      <div className="wrap grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Capt'n – zur Startseite">
            <BrandMark size={40} />
            <span className="display text-2xl">Capt&apos;n</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-3)]">
            KI-Personal-Trainer für Training und Ernährung – auf iPhone und Apple Watch.
          </p>
        </div>

        <div>
          <h2 className="kicker">App</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link className="text-[var(--text-2)] hover:text-white" href="/#funktionen">Funktionen</Link></li>
            <li><Link className="text-[var(--text-2)] hover:text-white" href="/#preise">Preise</Link></li>
            <li><Link className="text-[var(--text-2)] hover:text-white" href="/#faq">Häufige Fragen</Link></li>
            <li>
              <a className="text-[var(--text-2)] hover:text-white" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                Im App Store
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="kicker">Kontakt & Rechtliches</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a className="text-[var(--text-2)] hover:text-white" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </li>
            {LEGAL.map((l) => (
              <li key={l.href}>
                <Link className="text-[var(--text-2)] hover:text-white" href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap mt-14 flex flex-col gap-2 border-t border-[var(--hairline)] pt-6 text-xs text-[var(--text-3)] md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Erhan Kesbic · Capt&apos;n</p>
        <p>Apple, Apple Watch und App Store sind Marken der Apple Inc.</p>
      </div>
    </footer>
  );
}
